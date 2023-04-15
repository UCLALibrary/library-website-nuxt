/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {Array} timeLineData
 * @returns {Array}
 */


function getListingFilters(searchAggsResponse,filterFields) {
    //console.log()
    const filters = []
    for(const field of filterFields){
        let obj = {
            label: field.label,
            esFieldName: field.esFieldName,
            inputType: field.inputType,
            items: (searchAggsResponse && searchAggsResponse[field.label] && searchAggsResponse[field.label].buckets.reduce(
                (accumulator, value) => {
                    
                    return [...accumulator, { name: value.key }]
                },
                []
            ))|| []
        }
        console.log("getlisting obj:"+JSON.stringify(obj))
        filters.push(obj)
    }
    
    return filters
}

export default getListingFilters
