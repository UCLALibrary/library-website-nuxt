import{d as p}from"./BIzRNX9S.js";import{d as u,a as F}from"./CL8yYu5A.js";import{d as v}from"./CIf3dq7z.js";import{d as S,a as y,b as B}from"./Q2Lk47BP.js";import{d as C,a as T}from"./CLd6PcwS.js";var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DefaultFpbWithCardsAndHighlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithCardsAndHighlight_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:1575}};i.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockCardWithImageFragment.gql"
#import "../gql/fragments/BlockHighlightFragment.gql"
#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockFormFragment.gql"

fragment DefaultFpbWithCardsAndHighlight on ElementInterface {
    blocks: defaultFpbWithCardsAndHighlight {
        id
        typeHandle

        ... on defaultFpbWithCardsAndHighlight_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
        ... on defaultFpbWithCardsAndHighlight_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on defaultFpbWithCardsAndHighlight_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on defaultFpbWithCardsAndHighlight_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on defaultFpbWithCardsAndHighlight_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on defaultFpbWithCardsAndHighlight_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on defaultFpbWithCardsAndHighlight_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on defaultFpbWithCardsAndHighlight_form_BlockType {
            ...BlockFormFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var g={};function d(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var t=n.name.value;return g[t]?!1:(g[t]=!0,!0)})}i.definitions=i.definitions.concat(d(p.definitions));i.definitions=i.definitions.concat(d(u.definitions));i.definitions=i.definitions.concat(d(F.definitions));i.definitions=i.definitions.concat(d(v.definitions));i.definitions=i.definitions.concat(d(S.definitions));i.definitions=i.definitions.concat(d(y.definitions));i.definitions=i.definitions.concat(d(C.definitions));i.definitions=i.definitions.concat(d(B.definitions));i.definitions=i.definitions.concat(d(T.definitions));function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var s={};(function(){i.definitions.forEach(function(n){if(n.name){var t=new Set;c(n,t),s[n.name.value]=t}})})();function f(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}function _(e,n){var t={kind:e.kind,definitions:[f(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=s[n]||new Set,m=new Set,o=new Set;for(a.forEach(function(l){o.add(l)});o.size>0;){var k=o;o=new Set,k.forEach(function(l){if(!m.has(l)){m.add(l);var r=s[l]||new Set;r.forEach(function(h){o.add(h)})}})}return m.forEach(function(l){var r=f(e,l);r&&t.definitions.push(r)}),t}_(i,"DefaultFpbWithCardsAndHighlight");export{i as d};
