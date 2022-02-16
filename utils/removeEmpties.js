/**
 * Take a array and removes empty objects
 * @param {Array} arr
 * @returns {Array}
 */
function removeEmpties(arr) {
    return arr.filter((value) => {
        console.log("test filter: "+Object.keys(value).length)
        return Object.keys(value).length !== 0
    })
}

export default removeEmpties
