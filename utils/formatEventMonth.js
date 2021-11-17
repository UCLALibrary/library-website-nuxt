/**
 * Take two date strings, and return them in human readable date formats for Events
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns {String}
 */

import format from "date-fns/format"

function formatMonth(startDate = "") {
    return format(new Date(startDate), "MMM")
}
 
export default formatMonth
 