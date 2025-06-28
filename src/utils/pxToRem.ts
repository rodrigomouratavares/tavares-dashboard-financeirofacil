/**
 * Convert Pixels to rem
 * @param pixels - pixels value to be converted
 * @returns the converted rem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
