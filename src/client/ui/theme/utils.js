export const hexToRgb = hex => {
  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex)
  }

  if (hex.length === 3) {
    hex = expand(hex)
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

function removeHash (hex) {
  const arr = hex.split('')
  arr.shift()
  return arr.join('')
}

function expand (hex) {
  return hex
    .split('')
    .reduce((accum, value) => accum.concat([value, value]), [])
    .join('')
}

export const opacity = (hex, opacity) => {
  const rgb = hexToRgb(hex)
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`
}
