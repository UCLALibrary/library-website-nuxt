var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"content"},name:{kind:"Name",value:"bannerFeatured"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"bannerFeatured_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"physicalDigital"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"projectCategory"},name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleCategory"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectByline1"},name:{kind:"Name",value:"meapProjectTopic"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectTopics_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",alias:{kind:"Name",value:"articleByline1"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline2"},name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleLocations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectLocations"},name:{kind:"Name",value:"region"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectRegion_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"bannerFeatured_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline2"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentType"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:3021}};v.loc.source={body:`fragment BlockBannerFeaturedFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    content: bannerFeatured {
        ... on bannerFeatured_internalContent_BlockType {
            id
            contentLink {
                contentType: sectionHandle
                title
                to: uri
                summary
                physicalDigital
                workshopOrEventSeriesType
                eventType {
                    title
                }
                eventDescription
                projectCategory: format
                articleCategory: articleCategories {
                    title
                }
                projectByline1: meapProjectTopic {
                    ... on meapProjectTopics_Category {
                        id
                        title
                    }
                }
                startDateWithTime
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                endDateWithTime
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                startDate
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                endDate
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                articleByline1: staffMember {
                    id
                    slug
                    uri
                    url
                    title
                }
                articleByline2: postDate
                articleLocations: associatedLocations {
                    id
                    title
                    to: uri
                }
                projectLocations: region {
                    ... on meapProjectRegion_Category {
                        id
                        title
                    }
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        image {
                            ...Image
                        }
                    }
                }
            }
        }
        ... on bannerFeatured_externalContent_BlockType {
            id
            image {
                ...Image
            }
            title: titleGeneral
            summary
            alignment
            # TODO using internal locations for external content will need component update
            # locations: associatedLocations {
            #       id
            #       title
            #       to: uri
            # }
            byline1
            byline2
            to: buttonUrl
            category
            contentType
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var u={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),u[n.name.value]=i}})})();function f(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function p(e,n){var i={kind:e.kind,definitions:[f(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=u[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var o=d;d=new Set,o.forEach(function(t){if(!m.has(t)){m.add(t);var l=u[t]||new Set;l.forEach(function(c){d.add(c)})}})}return m.forEach(function(t){var l=f(e,t);l&&i.definitions.push(l)}),i}p(v,"BlockBannerFeaturedFragment");var g={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockImpactNumberCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typehandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"impactNumberCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactNumberCards_impactNumberCard_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"impactNumber"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:349}};g.loc.source={body:`fragment BlockImpactNumberCardsFragment on ElementInterface {
    id
    typehandle
    sectionSummary: summary
    sectionTitle: titleGeneral
    impactNumberCards {
        ... on impactNumberCards_impactNumberCard_BlockType {
            id
            title: titleGeneral
            text: description
            impactNumber
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var k={};(function(){g.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),k[n.name.value]=i}})})();function N(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function S(e,n){var i={kind:e.kind,definitions:[N(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=k[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var o=d;d=new Set,o.forEach(function(t){if(!m.has(t)){m.add(t);var l=k[t]||new Set;l.forEach(function(c){d.add(c)})}})}return m.forEach(function(t){var l=N(e,t);l&&i.definitions.push(l)}),i}S(g,"BlockImpactNumberCardsFragment");export{g as a,v as d};
