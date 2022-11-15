export default function ({ $config }, inject) {
    /*
    {"id":"j6tUj4IBzYVXfPB9-JvU","name":"dev-es-key","api_key":"N_f0_5WSSae3QOvm4hlq0g","encoded":"ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="}
    */

    async function siteSearch(keyword="*:*"){
        //var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
        if($config.esReadKey === "" || $config.esURL === "" || $config.esIndex === "") return
        console.log("keyword:"+keyword)
    
        const response = await fetch(`${$config.esURL}/${$config.esIndex}/_search`, {
            headers: {
                'Authorization': `ApiKey ${$config.esReadKey}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                size: "1000",
                "query": {
                    "query_string" : {
                        "query" : keyword,
                        "fields": [
                            "*",
                            "title^4",
                            "summary^3",
                            "text^3",
                            "richText^2"
                        ],
                        "fuzziness":"auto"
                    }
                }
            })
        })
        const data = await response.json()
        return data
    }

    async function keywordSearchWithFilters(
        keyword = "*:*",
        sectionHandle,
        filters,
        sort,
        source = ["*"],
        aggFields = []
    ) {
        //var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)
        console.log("In data api keywordsearchwithfilters")
        // console.log($config.esReadKey)
        // console.log($config.esURL)
        if($config.esReadKey === "" || $config.esURL === "" || $config.esIndex === "") return
        console.log("keyword:"+keyword)
        console.log("filters:"+filters)
        console.log("sort:"+sort)

        let testquery = JSON.stringify({
            _source: [...source],
            query: {
                bool: {
                    must: [
                        {
                            query_string: {
                                query: keyword,
                            },
                        },
                        ...parseSectionHandle(sectionHandle),
                        ...parseFilterQuery(filters),
                    ],
                },
            },
            ...parseSort(sort),
        })
        console.log("this is the query: " + testquery)

        // need to know fields to boost on for listing pages when searching like title etc
    
        const response = await fetch(`${$config.esURL}/${$config.esIndex}/_search`, {
            headers: {
                'Authorization': `ApiKey ${$config.esReadKey}`,
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                size: "1000",
                _source: [...source],
                query: {
                    bool: {
                        must: [
                            {
                                query_string: {
                                    query: keyword,
                                    fuzziness: "auto",
                                },
                            },
                            ...parseSectionHandle(sectionHandle),
                            ...parseFilterQuery(filters),
                        ],
                    },
                },
                ...parseSort(sort),
                aggs: {
                    ...parseFieldNames(aggFields),
                },
            }),
        }
        )
        const data = await response.json()
        return data
    }
    inject("dataApi", {
        getMapping,
        siteSearch,
        keywordSearchWithFilters,
        getAggregations,
    })

    async function getMapping(){
        if($config.esReadKey === "" || $config.esURL === "" || $config.esIndex === "") return
        const response = await fetch(`${$config.esURL}/${$config.esIndex}/_mapping`, {
            headers: {
                'Authorization': `ApiKey ${$config.esReadKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const data = await response.json()
        return data
    }


    async function getAggregations(fields, sectionHandle){
        console.log("search text: "+fields)
        if(!fields || fields.length == 0 ) return
        const response = await fetch(`${$config.esURL}/${$config.esIndex}/_search`, 
            {
                headers: {
                    Authorization: `ApiKey ${$config.esReadKey}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    size: 0,
                    query: {
                        match: {
                            sectionHandle: {
                                query: sectionHandle,
                            },
                        },
                    },
                    aggs: {
                        ...parseFieldNames(fields),
                    },
                }),
            }
        )
        const data = await response.json()
        return data.aggregations
    }

    function parseSort(sortField) {
        if (!sortField || sortField == "") return {}
        let parseQuery = {}
        parseQuery["sort"] = []
        parseQuery["sort"][0] = {}
        parseQuery["sort"][0][sortField] = { order: "asc" }

        return parseQuery
    }
    function parseSectionHandle(sectionHandle) {
        console.log(sectionHandle)
        if (sectionHandle && sectionHandle === "") return []
        console.log("where is the execution")
        let boolQuery = []
        let sectionHandleTermQueryObj = {}
        sectionHandleTermQueryObj["term"] = {}
        sectionHandleTermQueryObj["term"]["sectionHandle.keyword"] = sectionHandle
        boolQuery.push(sectionHandleTermQueryObj)
        console.log("query:" + boolQuery)
        return boolQuery
    }
    function parseFilterQuery(filters) {
        if (!filters || filters.length == 0) return []
        let boolQuery = []
        /*
        [
                {
                    "term": {
                        "locations.title.keyword":"Powell"
                    }
                }
            ]


        */
        for (const key in filters) {
            console.log(key)
            if (Array.isArray(filters[key]) && filters[key].length > 0) {
                let filterObj = { terms: {} }
                filterObj.terms[key] = filters[key]
                boolQuery.push(filterObj)
            }else if(!Array.isArray(filters[key]) && filters[key]!="") {
                let filterObj = { term: {} }
                filterObj.term[key] = filters[key]
                boolQuery.push(filterObj)
            }
        }
        console.log("bool query:"+JSON.stringify(boolQuery))
        return boolQuery
    }

    function parseFieldNames(fields) {
        let aggsFields = {}
        for (const element of fields) {
            console.log(element)
            aggsFields[element.label] = {
                terms: {
                    field: element.esFieldName,
                    size: 15,
                },
            }
        }
        console.log("aggsFields:" + JSON.stringify(aggsFields))
        return aggsFields
    }
}
