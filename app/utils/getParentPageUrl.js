/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function getParentPageUrl(uri = '') {
  const output = uri.split('/')
  output.pop()

  return output.join('/')
}

export default getParentPageUrl
