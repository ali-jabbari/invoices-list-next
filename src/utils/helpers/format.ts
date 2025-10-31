export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function formatNumberWithCommas(numberString: string | number) {
  if (!numberString || isNaN(Number(numberString))) return '0'
  const stringValue = String(numberString)
  return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
