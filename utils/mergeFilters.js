function mergeFilters(data) {
    console.log("component filters data: " + Object.values(data))
    if (Object.values(data).length == 0) return []
    let objArray = []
    for (const key in data) {
       
        if (Array.isArray(data[key]) && data[key].length > 0 ) {
            for(const dataObj of data[key]){
                let obj = {}
                obj["esFieldName"] = key
                obj["value"] = dataObj
                objArray.push(obj)
            }
            
        }else if(!Array.isArray(data[key]) && data[key]) {
            let obj = {}
            obj["esFieldName"] = key
            obj["value"] = data[key]
            objArray.push(obj)
        }
    }
    return objArray
}
export default mergeFilters
