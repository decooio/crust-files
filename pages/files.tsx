import React, {useCallback, useContext, useRef, useState} from "react";
import {useContextWrapLoginUser, useFiles} from "../lib/wallet/hooks";
import {Pagination, Segment, Table, Transition} from "semantic-ui-react";
import {useAuthGateway} from "../lib/useAuth";
import {useTranslation} from "react-i18next";
import {DirFile, FileInfo, SaveFile} from "../lib/wallet/types";
import SideLayout from "../components/SideLayout";
import FileSaver from 'file-saver';
import UploadModal from "../components/UploadModal";
import Btn from "../components/Btn"
import {AppContext} from "../lib/AppContext";
import User from "../components/User";
import {useAutoToggle} from "../lib/hooks/useAutoToggle";
import {usePage} from "../lib/hooks/usePage";
import FileItem from "../components/FileItem";
import styled from "styled-components";

type FunInputFile = (e: React.ChangeEvent<HTMLInputElement>) => void


function Files(p: { className?: string }) {
  const user = useContextWrapLoginUser()
  const {t} = useTranslation();
  const {alert} = useContext(AppContext)
  const [showUpMode, setShowUpMode] = useState(false);
  const wFiles = useFiles();
  const localFiles = usePage(wFiles.files, 5)
  const [file, setFile] = useState<FileInfo | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const _clickUploadFile = useCallback((dir = false) => {
    if (!inputRef.current) return;
    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line
    inputRef.current.webkitdirectory = dir;
    // eslint-disable-next-line
    inputRef.current.multiple = dir;
    inputRef.current.click();
  }, [inputRef]);
  const onClickUpFile = useCallback(() => _clickUploadFile(false), [_clickUploadFile]);
  const onClickUpFolder = useCallback(() => _clickUploadFile(true), [_clickUploadFile]);
  const _onInputFile = useCallback<FunInputFile>((e) => {
    const files = e.target.files;

    if (!files) return;

    if (files.length > 2000) {
      alert.alert({
        title: t('Upload'),
        msg: t('Please do not upload more than 2000 files'),
        type: 'error'
      })
      return;
    }

    if (files.length === 0) {
      alert.alert({
        title: t('Upload'),
        msg: t('Please select non-empty folder'),
        type: 'error'
      })
      return;
    }

    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line
    const isDirectory = e.target.webkitdirectory;

    if (!isDirectory) {
      setFile({file: files[0]});
      setShowUpMode(true);
    } else if (files.length >= 1) {
      // eslint-disable-next-line
      // @ts-ignore eslint-disable-next-line
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const dirFiles: DirFile[] = [];

      for (let index = 0; index < files.length; index++) {
        // console.info('f:', files[index]);
        dirFiles.push(files[index] as DirFile);
      }

      console.info(dirFiles);

      const [dir] = dirFiles[0].webkitRelativePath.split('/');

      setFile({files: dirFiles, dir});
      setShowUpMode(true);
    }

    e.target.value = '';
  }, [setFile, setShowUpMode, alert, t]);

  const importInputRef = useRef<HTMLInputElement>(null);
  const _clickImport = useCallback(() => {
    if (!importInputRef.current) return;
    importInputRef.current.click();
  }, [importInputRef]);
  const _onInputImportFile = useCallback<FunInputFile>((e) => {
    try {
      const fileReader = new FileReader();
      const files = e.target.files;

      if (!files) return;
      fileReader.readAsText(files[0], 'UTF-8');

      if (!(/(.json)$/i.test(e.target.value))) {
        return alert.alert({msg: t('File error'), type: 'error'});
      }

      fileReader.onload = (e) => {
        const _list = JSON.parse(e.target?.result as string) as SaveFile[];

        if (!Array.isArray(_list)) {
          return alert.alert({msg: t('File content error'), type: 'error'});
        }

        const fitter: SaveFile[] = [];
        const mapImport: { [key: string]: boolean } = {};

        for (const item of _list) {
          if (item.Hash && item.Name && item.UpEndpoint && item.PinEndpoint) {
            fitter.push(item);
            mapImport[item.Hash] = true;
          }
        }

        const filterOld = wFiles.files.filter((item) => !mapImport[item.Hash]);

        wFiles.setFiles([...fitter, ...filterOld]);
        alert.alert({msg: t('Import Success'), type: "success"})
      };
    } catch (e) {
      alert.alert({msg: t('File content error'), type: "error"})
    }
  }, [wFiles, alert, t]);

  const _onClose = useCallback(() => {
    setShowUpMode(false);
  }, []);

  const _onSuccess = useCallback((res: SaveFile) => {
    setShowUpMode(false);
    const filterFiles = wFiles.files.filter((f) => f.Hash !== res.Hash);

    wFiles.setFiles([res, ...filterFiles]);
  }, [wFiles]);

  const _export = useCallback(() => {
    const blob = new Blob([JSON.stringify(wFiles.files)], {type: 'application/json; charset=utf-8'});

    FileSaver.saveAs(blob, 'files.json');
  }, [wFiles]);

  // const visibleFile = useAutoToggle(3000)
  // const visibleFolder = useAutoToggle(2800)

  return <SideLayout path={'/files'}>
    <Segment basic className={p.className}>
      <User/>

      <Segment basic textAlign={'center'} className={"font1 uploadPanel"}>
        <input
          onChange={_onInputFile}
          ref={inputRef}
          style={{display: 'none'}}
          type={'file'}
        />
        <input
          onChange={_onInputImportFile}
          ref={importInputRef}
          style={{display: 'none'}}
          type={'file'}
        />
        <span>{'Upload'}</span>
        <Transition animation={'jiggle'} duration={800} visible={true}>
          <span className={"btn file"} onClick={onClickUpFile}>File</span>
        </Transition>
        <span>{'or'}</span>
        <Transition animation={'jiggle'} duration={800} visible={true}>
          <span className={"btn folder"} onClick={onClickUpFolder}>Folder</span>
        </Transition>
        <span>{'to IPFS.'}</span>
        {
          showUpMode && <UploadModal
            file={file}
            user={user}
            onClose={_onClose}
            onSuccess={_onSuccess}
          />
        }
      </Segment>
      <span className={'font1 filesTitle'}>Upload History</span>
      <Table basic={'very'} singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>File Name</Table.HeaderCell>
            <Table.HeaderCell textAlign={"center"}>File CID</Table.HeaderCell>
            <Table.HeaderCell textAlign={"center"}>File Size</Table.HeaderCell>
            <Table.HeaderCell textAlign={"center"}>Status</Table.HeaderCell>
            <Table.HeaderCell textAlign={"center"}>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {localFiles.pageList.map((f, index) => <FileItem file={f} key={`files_${index}`}/>)}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Btn onClick={_clickImport}>Import</Btn>
              <Btn onClick={_export}>Export</Btn>
            </Table.HeaderCell>
            {
              localFiles.totalPage > 1 && <Table.HeaderCell colSpan='3' textAlign={"right"}>
                <Pagination
                  totalPages={localFiles.totalPage} activePage={localFiles.page}
                  onPageChange={(_, {activePage}) => localFiles.setPage(activePage as number)}
                />
              </Table.HeaderCell>
            }
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  </SideLayout>
}

export default React.memo(styled(Files)`
  padding: unset !important;

  .table {
    padding: 1rem 2rem;
    thead{
      font-size: 1.3rem;
    }
  }
  
  
  .uploadPanel {
    font-size: 5rem !important;
    line-height: 17.14rem;
    white-space: nowrap;
    padding: 2rem 1rem;
    .btn {
      display: inline-block;
      width: 18.57rem;
      height: 17.14rem;
      text-align: center;
      margin: 0 10px;
      border-radius: 50px;
      cursor: pointer;
      //transition: all ease-in-out 2s;
    }

    .file {
      background: rgba(255, 141, 0, 0.1);

      &:hover {
        background: rgba(255, 141, 0, 0.2);
      }
    }

    .folder {
      background: rgba(86, 203, 143, 0.1);

      &:hover {
        background: rgba(86, 203, 143, 0.2);
      }
    }
  }

  .filesTitle {
    font-size: 2.8rem;
    margin-left: 2rem;
    line-height: 60px;
  }
`)