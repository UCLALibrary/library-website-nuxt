/**
 * Mainly used to convert the Craft CMS "newWindow: 1" field to a "_blank" string
 *
 * @param {String} string A string that is used for the a href attribute
 * @returns {String} Either empty string or a "_blank"
 */

function formatLinkTarget(string = '') {
  let output = ''

  // Craft uses "1" to mean open in new window
  if (string === '1' || string === '_blank') {
    output = '_blank'
  }

  return output
}

export default formatLinkTarget
