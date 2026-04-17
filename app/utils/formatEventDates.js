/**
 * Take two date strings, and return them in human readable date formats for Events
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns {String}
 */

import format from 'date-fns/format'

function formatDates(startDate = '', endDate = '') {
  const start = format(new Date(startDate), 'MMMM d Y')
  // console.log(start)
  const end = format(new Date(endDate), 'MMMM d Y')

  // "February 11 2020 – May 31 2021"
  let output = `${start} - ${end}`

  if (start === end) {
    // Thursday, January 28
    output = format(new Date(startDate), 'eeee MMMM, d')
  }

  if (!endDate) {
    // February 11 2020
    output = start
  }

  return output
}

export default formatDates
