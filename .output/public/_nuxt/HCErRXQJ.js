var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedTopicsFlexiblePageBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"associatedTopicsFlexiblePageBlock_associatedTopics_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:547}};o.loc.source={body:`fragment BlockAssociatedTopicCardsFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    associatedTopicsFlexiblePageBlock {
        ... on associatedTopicsFlexiblePageBlock_associatedTopics_BlockType {
            id
            topics {
                title
                typeHandle
                externalResourceUrl
                uri
                text: summary
                uri
                iconName: illustrationsResourcesAndServices
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,i)}),e.definitions&&e.definitions.forEach(function(a){l(a,i)})}var r={};(function(){o.definitions.forEach(function(i){if(i.name){var n=new Set;l(i,n),r[i.name.value]=n}})})();function m(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function v(e,i){var n={kind:e.kind,definitions:[m(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=r[i]||new Set,c=new Set,s=new Set;for(a.forEach(function(t){s.add(t)});s.size>0;){var u=s;s=new Set,u.forEach(function(t){if(!c.has(t)){c.add(t);var d=r[t]||new Set;d.forEach(function(k){s.add(k)})}})}return c.forEach(function(t){var d=m(e,t);d&&n.definitions.push(d)}),n}v(o,"BlockAssociatedTopicCardsFragment");export{o as d};
