/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {Array} timeLineData
 * @returns {Array}
 */


function getListingFilters(searchAggsResponse,filterFields) {
    const filters = []
    for(const field of filterFields){
        let obj = {
            label: field.label,
            slug: field.esFieldName,
            inputType: field.inputType,
            items: searchAggsResponse[field.label].buckets.reduce(
                (accumulator, value) => {
                    return [...accumulator, { name: value.key }]
                },
                []
            ),
        }
        filters.push(obj)
    }
    
    return filters
}

export default getListingFilters
