/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {Array} timeLineData
 * @returns {Array}
 */

import _get from 'lodash/get'

function getListingFilters(searchAggsResponse, filterFields) {
  return filterFields.map((field) => {
    return {
      label: field.label,
      esFieldName: field.esFieldName,
      inputType: field.inputType,
      items: field.inputType !== 'single-checkbox'
        ? _get(searchAggsResponse, `${field.label}.buckets`, []).map(
          (value) => {
            return { name: value.key }
          })
        : []
    }
  })
}

export default getListingFilters
