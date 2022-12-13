/**
 * Takes a String and removes HTML tags and double quotes
 * @param {String}
 * @returns {String}
 */

function removeTags(str) {
    let stripHtml = str.replace( /(<([^>]+)>)/ig, '')
    let removeQuotes = stripHtml.replace(/"/ig, '')
    return removeQuotes
}

export default removeTags
