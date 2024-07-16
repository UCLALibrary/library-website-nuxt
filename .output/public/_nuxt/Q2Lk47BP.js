var f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MediaAsset"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AssetInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"src"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"srcset"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sizes"},value:{kind:"ListValue",values:[{kind:"StringValue",value:"375",block:!1},{kind:"StringValue",value:"960",block:!1},{kind:"StringValue",value:"1280",block:!1},{kind:"StringValue",value:"1920",block:!1},{kind:"StringValue",value:"2560",block:!1}]}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"focalPoint"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"mimeType"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"alt"},name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}],loc:{start:0,end:274}};f.loc.source={body:`fragment MediaAsset on AssetInterface {
  dataId: id
  src: url(transform: "fullscreen")
  srcset(sizes: ["375", "960", "1280", "1920", "2560"])
  height(transform: "fullscreen")
  width(transform: "fullscreen")
  title
  focalPoint
  kind
  type: mimeType
  alt: altText
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){o(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){o(a,n)}),e.definitions&&e.definitions.forEach(function(a){o(a,n)})}var g={};(function(){f.definitions.forEach(function(n){if(n.name){var i=new Set;o(n,i),g[n.name.value]=i}})})();function h(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function R(e,n){var i={kind:e.kind,definitions:[h(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=g[n]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var s=d;d=new Set,s.forEach(function(t){if(!r.has(t)){r.add(t);var l=g[t]||new Set;l.forEach(function(m){d.add(m)})}})}return r.forEach(function(t){var l=h(e,t);l&&i.definitions.push(l)}),i}R(f,"MediaAsset");var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaWithTextFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediaWithText"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaWithText_mediaEmbed_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"titleLink"},name:{kind:"Name",value:"titleEmbed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"embedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeMedia"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaWithText_mediaUpload_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleUpload"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"upload"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"typeMedia"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:815}};u.loc.source={body:`#import "../gql/fragments/MediaAsset.gql"

fragment BlockMediaWithTextFragment on ElementInterface {
    dataId : id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    mediaWithText {
        ... on mediaWithText_mediaEmbed_BlockType {
            titleLink: titleEmbed
            description
            coverImage {
                ...MediaAsset
            }
            buttonText
            buttonUrl
            embedCode
            typeMedia
        }
        ... on mediaWithText_mediaUpload_BlockType {
            titleUpload
            description
            buttonText
            buttonUrl
            coverImage {
                ...MediaAsset
            }
            item: upload {
                ...MediaAsset
            }
            typeMedia
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var T={};function x(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return T[i]?!1:(T[i]=!0,!0)})}u.definitions=u.definitions.concat(x(f.definitions));function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var S={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;c(n,i),S[n.name.value]=i}})})();function w(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function D(e,n){var i={kind:e.kind,definitions:[w(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=S[n]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var s=d;d=new Set,s.forEach(function(t){if(!r.has(t)){r.add(t);var l=S[t]||new Set;l.forEach(function(m){d.add(m)})}})}return r.forEach(function(t){var l=w(e,t);l&&i.definitions.push(l)}),i}D(u,"BlockMediaWithTextFragment");var F={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockPullQuoteFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pullQuote"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"pullQuote_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribution"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:198}};F.loc.source={body:`fragment BlockPullQuoteFragment on ElementInterface {
    id
    typeHandle
    pullQuote {
        ... on pullQuote_pullQuote_BlockType {
            text
            attribution
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function v(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){v(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){v(a,n)}),e.definitions&&e.definitions.forEach(function(a){v(a,n)})}var p={};(function(){F.definitions.forEach(function(n){if(n.name){var i=new Set;v(n,i),p[n.name.value]=i}})})();function E(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function I(e,n){var i={kind:e.kind,definitions:[E(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=p[n]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var s=d;d=new Set,s.forEach(function(t){if(!r.has(t)){r.add(t);var l=p[t]||new Set;l.forEach(function(m){d.add(m)})}})}return r.forEach(function(t){var l=E(e,t);l&&i.definitions.push(l)}),i}I(F,"BlockPullQuoteFragment");var y={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockSimpleCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"cards"},name:{kind:"Name",value:"simpleCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"simpleCards_internalServiceOrResource_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"simpleCards_externalServiceOrResource_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalLink"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:655}};y.loc.source={body:`fragment BlockSimpleCardsFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    cards: simpleCards {
        ... on simpleCards_internalServiceOrResource_BlockType {
            id
            typeHandle
            contentLink {
                id
                uri
                slug
                title
                summary
                externalResourceUrl
            }
        }
        ... on simpleCards_externalServiceOrResource_BlockType {
            id
            typeHandle
            title: titleGeneral
            summary
            externalLink
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function k(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){k(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){k(a,n)}),e.definitions&&e.definitions.forEach(function(a){k(a,n)})}var N={};(function(){y.definitions.forEach(function(n){if(n.name){var i=new Set;k(n,i),N[n.name.value]=i}})})();function b(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function C(e,n){var i={kind:e.kind,definitions:[b(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=N[n]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var s=d;d=new Set,s.forEach(function(t){if(!r.has(t)){r.add(t);var l=N[t]||new Set;l.forEach(function(m){d.add(m)})}})}return r.forEach(function(t){var l=b(e,t);l&&i.definitions.push(l)}),i}C(y,"BlockSimpleCardsFragment");export{F as a,y as b,f as c,u as d};
