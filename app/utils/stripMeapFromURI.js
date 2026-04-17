/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function stripMeapFromURI(uri = '') {
  return uri.replace('meap/', '')
}

export default stripMeapFromURI
