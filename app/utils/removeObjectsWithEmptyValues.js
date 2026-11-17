export function removeObjectsWithEmptyValues(arr) {
  return arr.filter(obj =>
    Object.values(obj).every(value => value !== null && value !== undefined && value !== '')
  )
}
