var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockGridGalleryCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typehandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gridGalleryCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"externalLink"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_gridGalleryCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typehandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"subtitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gridGalleryCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"externalLink"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:2122}};o.loc.source={body:`fragment BlockGridGalleryCardsFragment on ElementInterface {
        id
        typehandle
        sectionSummary: summary
        sectionTitle: titleGeneral
        gridGalleryCards {
            ... on gridGalleryCards_internalContent_BlockType {
                id
                contentLink {
                    contentType: sectionHandle
                    headlineText: title
                    snippet: summary
                    to: uri
                    heroImage {
                        ... on heroImage_heroImage_BlockType {
                            image {
                                ...Image
                            }
                        }
                    }
                }
                featured
            }
            ... on gridGalleryCards_externalContent_BlockType {
                id
                featured
                headlineText: titleGeneral
                snippet: summary
                image {
                    ...Image
                }
                to: externalLink
            }
        }
     ... on impactReportFpb_gridGalleryCards_BlockType {
        id
        typehandle
        subtitle: titleGeneral
        summary
        gridGalleryCards {
            ... on gridGalleryCards_internalContent_BlockType {
                id
                contentLink {
                    contentType: sectionHandle
                    headlineText: title
                    snippet: summary
                    to: uri
                    heroImage {
                        ... on heroImage_heroImage_BlockType {
                            image {
                                ...Image
                            }
                        }
                    }
                }
                featured
            }
            ... on gridGalleryCards_externalContent_BlockType {
                id
                featured
                headlineText: titleGeneral
                snippet: summary
                image {
                    ...Image
                }
                to: externalLink
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var s={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),s[n.name.value]=i}})})();function k(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[k(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=s[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var c=d;d=new Set,c.forEach(function(t){if(!m.has(t)){m.add(t);var l=s[t]||new Set;l.forEach(function(u){d.add(u)})}})}return m.forEach(function(t){var l=k(e,t);l&&i.definitions.push(l)}),i}v(o,"BlockGridGalleryCardsFragment");export{o as d};
