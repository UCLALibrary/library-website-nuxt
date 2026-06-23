export function removeObjectsWithEmptyValues(arr) {
  return arr.filter(obj =>
    Object.values(obj).some(value => value !== null && value !== undefined && value !== '')
  )
}
