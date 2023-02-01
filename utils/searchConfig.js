const config = {
    serviceOrResources: {
        searchFields: ["title^6", "summary^6", "text^6"],
        resultFields: [
            "title",
            "text",
            "summary",
            "externalResourceUrl",
            "sectionHandle",
            "illustrationsResourcesAndServices",
            "uri",
            "type",
        ],
        sortField: "title.keyword",
        orderBy: "asc",
    },
    staff: {
        searchFields: [
            "nameFirst^6",
            "nameLast^6",
            "jobTitle^5",
            "departments.title^5",
            "email^4",
            "academicDepartments.title^3",
            "topics.title^3",
            "publications^3",
            "biography^2",
            "alternativeName^2",
        ],
        filters: [
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
                inputType: "single-checkbox",
            },
        ],
        resultFields: [
            "nameFirst",
            "nameLast",
            "alternativeName",
            "departments",
            "academicDepartments",
            "locations",
            "jobTitle",
            "email",
            "phone",
            "consultation",
            "uri",
            "image",
        ],
        sortField: "nameLast.keyword",
        orderBy: "asc",
    },
    exploreCollection: {
        searchFields: [
            "title^3",
            "text^3",
            "richTextSimplified^2",
            "subjectAreas.title^1",
        ],
        filters: [
            {
                label: "Physical/Digital",
                esFieldName: "physicalDigital.keyword",
                inputType: "checkbox",
            },
            {
                label: "Subject Area",
                esFieldName: "subjectAreas.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Title",
                esFieldName: "title.keyword",
                inputType: "checkbox",
            },
        ],
        sortField: "title.keyword",
        orderBy: "desc",
    },
    newsIndex: {
        searchFields: ["title^3", "text^3", "contributors*^2"],
        filters: [
            {
                label: "Location",
                esFieldName: "locations.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Category",
                esFieldName: "category.title.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields: [
            "title",
            "text",
            "articleType",
            "uri",
            "heroImage",
            "postDate",
            "category",
            "contributors",
        ],
        sortField: "postDate",
        orderBy: "desc",
    },
    endowmentsList: {
        searchFields: [
            "title^3",
            "text^3",
            "alternativeName*^2",
            "endowmentDescription^2",
            "subjectAreas*",
            "donorNames",
        ],
        filters: [
            {
                label: "Subject Area",
                esFieldName: "subjectAreas.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Donors",
                esFieldName: "donorNames.keyword", // update slug page to combine firstname and lastname before sending it to ES index
                inputType: "checkbox",
            },
        ],
        resultFields: [
            "title",
            "text",
            "alternativeName",
            "uri",
            "heroImage",
            "donorNames",
        ],
        sortField: "title.keyword",
        orderBy: "asc",
    },
    locationsList: {
        searchFields: ["title^3", "text^3"],
        filters: [
            {
                label: "Amenities",
                esFieldName: "amenities.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields: [
            "title",
            "text",
            "campusMapId",
            "uri",
            "heroImage",
            "address",
            "libcalLocationIdForHours",
            "locationType",
        ],
        sortField: "title.keyword",
        orderBy: "asc",
    },
    programsList: {
        searchFields: ["title^3", "text^3"],
        filters: [
            {
                label: "Type",
                esFieldName: "programType.title.keyword",
                inputType: "checkbox",
            },
        ],
        sortField: "title.keyword",
        orderBy: "asc",
    },
    eventsExhibitionsList: {
        searchFields: [
            "title^3",
            "eventDescription^3",
            "summary^3",
            // "startDateWithTime^2",
            // "endDateWithTime^2"
        ],
        filters: [
            {
                label: "Location",
                esFieldName: "location.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Event Type",
                esFieldName: "eventType.title.keyword",
                inputType: "checkbox",
            },
            /*  {
                label: "Date Range",
                esFieldNameArray: ["startDateWithTime","endDateWithTime"],
                inputType: "date",
            } */
        ],
        resultFields: ["*"],
        sortField: "startDateWithTime",
        orderBy: "asc",
    },
}

export default config
