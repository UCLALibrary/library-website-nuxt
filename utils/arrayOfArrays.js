/**
 * Take an Array and break it into an Arrray of Arrays
 * @param {Array, size-of-inner-Arrays}
 * @returns {Arrray of Arrays}
 */

// Creates a new Array original Array is maintained
function sliceIntoChunks(arr, chunkSize) {
    const group = []
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize)
        group.push(chunk)
    }
    return group
}

export default sliceIntoChunks
