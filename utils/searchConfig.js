const config = {
    meapProject: {
        searchFields: [
            "title^3",
            "summary^3",
            "meapProjectTopic.title",
            "region.title",
            "projectType",
        ],
        filters: [
            {
                label: "Project Type",
                esFieldName: "projectType.keyword",
                inputType: "checkbox",
            },
            {
                label: "Region",
                esFieldName: "region.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Topic",
                esFieldName: "meapProjectTopic.title.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields: [
            "title",
            "summary",
            "uri",
            "heroImage",
            "meapProjectTopic.title",
            "region.title",
            "projectType",
        ],
        sortField: "title.keyword",
        orderBy: "asc",
    },
    meapArticle: {
        searchFields: ["title^3", "text^3"],
        filters: [
            {
                label: "Category",
                esFieldName: "category.title.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields: ["title", "text", "uri", "heroImage", "date", "category"],
        sortField: "date",
        orderBy: "desc",
    },
}

export default config
