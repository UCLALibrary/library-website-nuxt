/**
 * Take a array and removes empty objects
 * @param {Array} arr
 * @returns {Array}
 */
export function removeEmpties(arr) {
  return arr.filter(value => Object.keys(value).length !== 0)
}
