/**
 * Take a URI and determine if it is an internal link
 * @param {String} uri
 * @returns {Boolean}
 */

function isRelativeLink(uri = '') {
  let output = false

  switch (true) {
    case String(uri).indexOf('/') === 0:
      output = true
      break
  }

  return output
}

export default isRelativeLink
