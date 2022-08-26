// alphbeticalData(a, b) {
//     if ( a.last_nom < b.last_nom ){
//         return -1;
//     }
//     if ( a.last_nom > b.last_nom ){
//         return 1;
//     }
//     return 0;
//     }
// }



/**
 * Take a array and removes empty objects
 * @param {Array} arr
 * @returns {Array}
 */
function removeEmpties(arr) {
    return arr.filter((value) => Object.keys(value).length !== 0)
}

export default removeEmpties
