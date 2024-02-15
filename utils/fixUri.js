/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {string} uri
 * @returns {string}
 */

function fixUri(uri = '') {
  if (typeof uri === 'string' || uri instanceof String) {
    return uri.replace(/^(?=[^/])/, '/')
      .replace(/^\/locations\//, '/visit/locations/')
  }
  else {
    return ''
  }
}

export default fixUri
