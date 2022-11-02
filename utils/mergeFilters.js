function mergeFilters(data) {
    console.log("component filters data: " + Object.values(data))
    if (Object.values(data).length == 0) return []
    let objArray = []
    for (const key in data) {
       
        if (Array.isArray(data[key]) && data[key].length == 0 && data[key][0]) {
            let obj = {}
            obj["esFieldName"] = key
            obj["value"] = data[key][0]
            objArray.push(obj)
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
