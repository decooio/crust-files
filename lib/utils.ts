import { BN, formatBalance } from '@polkadot/util'

export const shortStr = (name: string, count = 6): string => {
  if (name.length > (count * 2)) {
    return `${name.substring(0, count)}...${name.substring(name.length - count)}`;
  }
  return name;
};


// export const strToHex = (str: string): string => {
//   if (str) {
//     const charCode: string[] = []
//     for (let i = 0; i < str.length; i++) {
//       charCode.push(str.charCodeAt(i).toString(16))
//     }
//     return `0x${charCode.join(':')}`
//   }
//   return str
// }


const createZero = (count: number) => {
  let z = ''
  for (let index = 0; index < count; index++) {
    z = `${z}0`
  }
  return z
}

export const strToBn = (str: string): BN => {
  const [l, r] = str.split('.')
  const right = r.length < 12 ? `${r}${createZero(12 - r.length)}` : r.substring(0, 12)
  return new BN(l).mul(new BN('1000000000000')).add(new BN(right))
}

export const trimZero = (str: string, decimals = 4): string => {
  let t = `${str.trim()}`
  const dotIndex = t.indexOf('.')
  if (dotIndex >= 0 && (t.length - dotIndex - 1) > decimals) {
    t = t.substring(0, dotIndex + decimals + 1)
  }
  while (t !== '0' && t.endsWith('0')) {
    t = t.substring(0, t.length - 1)
  }
  if (t.endsWith('.')) return t.substring(0, t.length - 1)
  return t
}

export const formatCRU = (cru: string | BN): string => {
  if (!cru) return '-'
  const f = formatBalance(cru, { decimals: 12, forceUnit: "Unit", withSi: false })
  return trimZero(f)
}
// window._formatCRU = formatCRU


export const openDocs = (path: string) => {
  window.open(`${window.location.origin}${path}`, '_blank')
}