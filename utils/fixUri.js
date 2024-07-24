/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function fixUri(uri = "") {
    if (typeof uri === 'string' || uri instanceof String) {
        return uri.replace(/^(?=[^/])/, '/')
            .replace(/^\/locations\//, '/visit/locations/')
    } else {
        return ""
    }
}

export default fixUri
