import format from 'date-fns/format'

/**
 * Take two date strings, and return them in human readable time for Events
 *
 * @param {string} startDate
 * @param {string} endDate
 * @returns {string}
 */

function formatTimes(startDate = '', endDate = '') {
  const start = format(new Date(startDate), 'h:mm aaa')
  const end = format(new Date(endDate), 'h:mm aaa')

  // "9:00 am – 1:00 pm"
  let output = `${start} - ${end}`

  if (start === end) {
    // "9:00 am"
    output = format(new Date(startDate), 'h:mm aaa')
  }

  if (!endDate) {
    // 9:00 am
    output = start
  }

  return output
}

export default formatTimes
