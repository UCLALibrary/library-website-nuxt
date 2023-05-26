/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function fixUri(uri = "") {
    return uri.replace(/^(?=[^/])/, '/')
}

export default fixUri
