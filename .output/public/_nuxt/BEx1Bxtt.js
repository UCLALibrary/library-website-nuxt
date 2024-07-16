var s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockCallToActionFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"callToAction"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"callToAction_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleCta"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"buttonUrl"},name:{kind:"Name",value:"buttonLink"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:327}};s.loc.source={body:`fragment BlockCallToActionFragment on ElementInterface {
    id
    typeHandle
    callToAction {
        ... on callToAction_callToAction_BlockType {
            id
            titleCta
            summary
            icon
            buttonText
            buttonUrl: buttonLink
            backgroundColor
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var r={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;c(n,i),r[n.name.value]=i}})})();function m(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=r[n]||new Set,d=new Set,o=new Set;for(a.forEach(function(t){o.add(t)});o.size>0;){var u=o;o=new Set,u.forEach(function(t){if(!d.has(t)){d.add(t);var l=r[t]||new Set;l.forEach(function(f){o.add(f)})}})}return d.forEach(function(t){var l=m(e,t);l&&i.definitions.push(l)}),i}k(s,"BlockCallToActionFragment");export{s as d};
