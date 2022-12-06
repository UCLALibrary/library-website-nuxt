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
        ],
        sortField: "title.keyword"
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
    exploreCollection:{
        searchFields:[
            "title^3",
            "text^3",
            "richTextSimplified^2",
            "subjectAreas.title^1"
        ],
        filters:[
            {
                label: "PhysicalDigital",
                esFieldName: "physicalDigital.keyword",
                inputType: "checkbox",
            },
            {
                label: "Subject Area",
                esFieldName: "subjectAreas.title.keyword",
                inputType: "checkbox",
            }
        ],
        resultFields:[
            "title",
            "text",
            "physicalDigital",
            "uri",
            "heroImage"
        ],
        sortField: "title.keyword"
    },
    newsIndex:{
        searchFields:[
            "title^3",
            "text^3",
            "contributors*^2"
        ],
        filters:[
            {
                label: "Location",
                esFieldName: "locations.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Department",
                esFieldName: "department.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Category",
                esFieldName: "category.title.keyword",
                inputType: "checkbox",
            }
        ],
        resultFields:[
            "title",
            "text",
            "articleType",
            "uri",
            "heroImage",
            "postDate",
            "category",
            "contributors"
        ],
        sortField: "postDate"
    },
    endowments:{
        searchFields:[
            "title^3",
            "text^3",
            "contributors*^2"
        ],
        filters:[
            {
                label: "Subject Area",
                esFieldName: "subjectAreas.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Donors",
                esFieldName: "donors.title.keyword", // update slug page to combine firstname and lastname before sending it to ES index
                inputType: "checkbox",
            }
        ],
        resultFields:[
            "title",
            "text",
            "articleType",
            "uri",
            "heroImage",
            "postDate",
            "category",
            "contributors"
        ],
        sortField: "title.keyword"
    }
    
}
  
export default config
