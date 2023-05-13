export function pxToRem(px: number) {
  return `${(1 * px) / 16}rem`
}

export function priceFormatter(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
