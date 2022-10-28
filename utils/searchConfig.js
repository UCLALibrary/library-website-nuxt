const config = {
    staff:{
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
                esFieldName: "subjectLibrarian",
                inputType: "radio",
            },
        ],
        resultFields:[
            "email",
            "nameFirst",     
            "nameLast",
            "phone",
            "departments", 
            "jobTitle",  
            "consultation",
            "to",
            "image"
    
        ]
    },
    staffFilters: [
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
    ]
}
  
export default config
