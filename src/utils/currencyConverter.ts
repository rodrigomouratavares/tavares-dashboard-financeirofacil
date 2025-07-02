/**
 * Convert to BRL currency format
 * @param Value - Number to be converted
 * @returns Converted BRL string
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
