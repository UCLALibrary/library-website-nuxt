/**
 * Take a array and removes empty objects
 * @param {Array} arr
 * @returns {Array}
 */
function removeEmpties(arr) {
  return arr.filter(value => Object.keys(value).length !== 0)
}

export default removeEmpties
