var c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"impactNumbersCarousel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactNumbersCarousel_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"largeText"},name:{kind:"Name",value:"impactNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"mediumText"},name:{kind:"Name",value:"impactText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"smallDescriptor"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:426}};c.loc.source={body:`fragment BlockImpactNumbersCarouselFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    blocks: impactNumbersCarousel {
        ... on impactNumbersCarousel_impactNumbersCarousel_BlockType {
            id
            largeText: impactNumber
            mediumText: impactText
            smallDescriptor: summary
            image {
                ...Image
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,i)}),e.definitions&&e.definitions.forEach(function(a){m(a,i)})}var d={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;m(i,n),d[i.name.value]=n}})})();function o(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function v(e,i){var n={kind:e.kind,definitions:[o(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=d[i]||new Set,s=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var u=l;l=new Set,u.forEach(function(t){if(!s.has(t)){s.add(t);var r=d[t]||new Set;r.forEach(function(k){l.add(k)})}})}return s.forEach(function(t){var r=o(e,t);r&&n.definitions.push(r)}),n}v(c,"BlockImpactNumbersCarouselFragment");export{c as d};
