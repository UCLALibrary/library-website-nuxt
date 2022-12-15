/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {Array} timeLineData
 * @returns {Array}
 */

// This used on impact report page to denormalized craft data structure
function flattenTimeLineStructure(timeLineData=[]) {
    let flattenedValues = []
    for(let item of timeLineData){
        
        for(let subitem of item.gridGalleryCards) {
            let obj = {}
            obj.subtitle = item.subtitle || ""
            obj.sectionSummary = item.summary || ""
            obj.headlineText = subitem.contentLink && subitem.contentLink[0] ? subitem.contentLink[0].headlineText : subitem.headlineText
            obj.snippet = subitem.contentLink && subitem.contentLink[0] ? subitem.contentLink[0].snippet : subitem.snippet
            obj.featured = subitem.featured === "true" ? true : false
            obj.to = subitem.contentLink && subitem.contentLink[0] ? subitem.contentLink[0].to : subitem.to
            obj.image = subitem.contentLink && subitem.contentLink[0] && subitem.contentLink[0].heroImage ? subitem.contentLink[0].heroImage[0].image[0] : subitem.image ? subitem.image[0] : {}
            flattenedValues.push(obj)
        }
        
    }
    return flattenedValues
}

export default flattenTimeLineStructure
