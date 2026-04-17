/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function getSectionName(uri = '') {
  let output = 'default'

  if (uri == null) {
    return output // don't try string method .includes
  }

  switch (true) {
    case uri.includes('/help'):
      output = 'help'
      break

    case uri.includes('/about'):
    case uri.includes('/impact'):
      output = 'about'
      break

    case uri.includes('/visit'):
    case uri.includes('/events-exhibits'):
      output = 'visit'
      break
  }

  return output
}

export default getSectionName
