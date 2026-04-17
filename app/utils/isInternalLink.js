/**
 * Take a URI and determine if it is an internal link
 * @param {String} uri
 * @returns {Boolean}
 */

function isInternalLink(uri = '') {
  let output = false

  if (uri == null) {
    return output // don't try string method .includes
  }

  switch (true) {
    case uri.includes('library.ucla.edu') && !uri.includes('mailto:'):
    case String(uri).indexOf('/') === 0:
    case !uri.includes('.'):
      output = true
      break
  }

  return output
}

export default isInternalLink
