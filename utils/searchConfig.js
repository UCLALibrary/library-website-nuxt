const config = {
    serviceOrResources:{
        searchFields:[
            "title^6",
            "summary^6",
            "text^6"
        ],
        filters: [
            { label: "Location", esFieldName: "locations.title.keyword", inputType: "checkbox", },
            {
                label: "Topic",
                esFieldName: "associatedTopics.title.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields:[
            "title",
            "text",   
            "summary",  
            "externalResourceUrl",
            "sectionHandle",
            "illustrationsResourcesAndServices",
            "uri",
            "type",
        ]
    },
    staff:{
        searchFields:[
            "nameFirst^6",
            "nameLast^6",
            "jobTitle^5",
            "departments.title^5",
            "email^4",
            "academicDepartments.title^3",
            "topics.title^3",
            "publications^3",
            "biography^2",
            "alternativeName^2"
        ],
        filters:[
            {
                label: "Location",
                esFieldName: "locations.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Department",
                esFieldName: "departments.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Subject Librarian",
                esFieldName: "subjectLibrarian.keyword",
                inputType: "radio",
            },
        ],
        resultFields:[
            "email",
            "nameFirst",     
            "nameLast",
            "alternativeName",
            "phone",
            "departments", 
            "jobTitle",  
            "consultation",
            "uri",
            "image"
        ],
        sortField: "nameLast.keyword"
    },
    /*  staffFilters: [
        {
            label: "Location",
            esFieldName: "locations.title.keyword",
            inputType: "checkbox",
        },
        {
            label: "Department",
            esFieldName: "departments.title.keyword",
            inputType: "checkbox",
        },
        {
            label: "Subject Librarian",
            esFieldName: "subjectLibrarian",
            inputType: "radio",
        },
    ],
    serviceOrResourceFilters: [
        { label: "Location", esFieldName: "locations.title.keyword", inputType: "checkbox", },
        {
            label: "Topic",
            esFieldName: "associatedTopics.title.keyword",
            inputType: "checkbox",
        },
    ]*/
}
  
export default config
