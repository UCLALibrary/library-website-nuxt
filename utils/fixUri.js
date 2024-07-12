/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {string} uri
 * @returns {string}
 */

function fixUri(uri = '') {
  if (typeof uri === 'string' || uri instanceof String) {
    if (!uri.match(/^(http|https):\/\//)) {
      uri = uri.replace(/^(?=[^/])/, '/')
    }
    uri = uri.replace(/^\/locations\//, '/visit/locations/')
    return uri
  } else {
    return ''
  }
}

export default fixUri
