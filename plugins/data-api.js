export default function({$config}, inject) {
    /*
    {"id":"j6tUj4IBzYVXfPB9-JvU","name":"dev-es-key","api_key":"N_f0_5WSSae3QOvm4hlq0g","encoded":"ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="}
    */

    async function keywordSearch(keyword, filters){
        //var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
        if($config.esApiKey === "" || !$config.esURL === "") return
        console.log("keyword:"+keyword)
        console.log("filters:"+filters)
        // var params = {
        //     query: {
        //         query_string: {
        //             query: "*"
        //         }
        //     }
        // }
        
        // const urlParams = new URLSearchParams(params).toString()
        // console.log("paranaters: "+urlParams)
        // `${ES_URL}/apps-dev-library-website/_search?q=*:*` GET request
        const response = await fetch(`${$config.esURL}/apps-craft-test/_search`, {
            headers: {
                'Authorization': `ApiKey ${$config.esApiKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                /* "query": {
                    "match_all": {}
                } */
                "query": {
                    "query_string" : {
                        "query" : keyword
                    }
                }
            })
        })
        const data = await response.json()
        return data
    }
    inject('dataApi', {
        getMapping,
        keywordSearch,
        getAggregations
        
    })


    async function getMapping(){
        if($config.esApiKey === "" || !$config.esURL === "") return
        const response = await fetch(`${$config.esURL}/apps-craft-test/_mapping`, {
            headers: {
                'Authorization': `ApiKey ${$config.esApiKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const data = await response.json()
        return data
    }

    async function getAggregations(fields, sectionHandle){
        console.log("search text: "+fields)
        if(!fields || fields.length == 0 ) return
        const response = await fetch(`${$config.esURL}/apps-craft-test/_search`, {
            headers: {
                'Authorization': `ApiKey ${$config.esApiKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "size": 0,
                "query": {
                    "match": {
                        "sectionHandle":{
                            "query":sectionHandle
                        }
                    }
                },
                "aggs": {
                    ...parseFieldNames(fields)
                }
            })
        })
        const data = await response.json()
        return data.aggregations
    }

    function parseFieldNames(fields){
        let aggsFields = {}
        for (const element of fields) {
            console.log(element)
            aggsFields[element.label] = {
                terms:{
                    field:  element.esFieldName,
                    size: 15
                }
            }
            
        } 
        console.log("aggsFields:"+JSON.stringify(aggsFields))
        return aggsFields
    }
}
