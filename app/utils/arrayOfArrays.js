/**
 * Take an Array and break it into an Arrray of Arrays
 * The param takes an Array of Objects and the  size of arrays you want it broken in to
 * Example return for arrayOfArrays(items, 3) [ [{},{},{}], [{},{},{}],[{},{},{}],...]
 *
 * @param {Array} arr
 * @param {Number} chunkSize
 * @returns {Array}
 */

function arrayOfArrays(arr, chunkSize) {
  const group = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    console.log('Chunk' + i + chunk)
    group.push(chunk)
  }
  return group
}

export default arrayOfArrays
