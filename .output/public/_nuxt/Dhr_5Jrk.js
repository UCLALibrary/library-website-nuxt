import{d as u}from"./BIzRNX9S.js";import{d as F,a as B}from"./CL8yYu5A.js";import{d as v}from"./DeFtLck0.js";import{d as h}from"./CIf3dq7z.js";import{d as N,a as S,b as y}from"./Q2Lk47BP.js";import{d as T,a as _}from"./CLd6PcwS.js";import{d as b}from"./BEx1Bxtt.js";var e={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AllFpbWithNoBanner"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"AllFpbWithNoBanner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AllFpbWithNoBanner_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:1806}};e.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockCardWithImageFragment.gql"
#import "../gql/fragments/BlockHighlightFragment.gql"
#import "../gql/fragments/BlockImpactNumbersCarouselFragment.gql"
#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockCallToActionFragment.gql"
#import "../gql/fragments/BlockFormFragment.gql"

fragment AllFpbWithNoBanner on ElementInterface {
    blocks: AllFpbWithNoBanner {
        id
        typeHandle

        ... on AllFpbWithNoBanner_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
        ... on AllFpbWithNoBanner_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on AllFpbWithNoBanner_impactNumbersCarousel_BlockType {
            ...BlockImpactNumbersCarouselFragment
        }
        ... on AllFpbWithNoBanner_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on AllFpbWithNoBanner_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on AllFpbWithNoBanner_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on AllFpbWithNoBanner_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on AllFpbWithNoBanner_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on AllFpbWithNoBanner_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
        ... on AllFpbWithNoBanner_form_BlockType {
            ...BlockFormFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var k={};function o(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return k[t]?!1:(k[t]=!0,!0)})}e.definitions=e.definitions.concat(o(u.definitions));e.definitions=e.definitions.concat(o(F.definitions));e.definitions=e.definitions.concat(o(B.definitions));e.definitions=e.definitions.concat(o(v.definitions));e.definitions=e.definitions.concat(o(h.definitions));e.definitions=e.definitions.concat(o(N.definitions));e.definitions=e.definitions.concat(o(S.definitions));e.definitions=e.definitions.concat(o(T.definitions));e.definitions=e.definitions.concat(o(y.definitions));e.definitions=e.definitions.concat(o(b.definitions));e.definitions=e.definitions.concat(o(_.definitions));function c(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(a){c(a,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(a){c(a,i)}),n.definitions&&n.definitions.forEach(function(a){c(a,i)})}var s={};(function(){e.definitions.forEach(function(i){if(i.name){var t=new Set;c(i,t),s[i.name.value]=t}})})();function p(n,i){for(var t=0;t<n.definitions.length;t++){var a=n.definitions[t];if(a.name&&a.name.value==i)return a}}function W(n,i){var t={kind:n.kind,definitions:[p(n,i)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var a=s[i]||new Set,m=new Set,r=new Set;for(a.forEach(function(l){r.add(l)});r.size>0;){var g=r;r=new Set,g.forEach(function(l){if(!m.has(l)){m.add(l);var d=s[l]||new Set;d.forEach(function(f){r.add(f)})}})}return m.forEach(function(l){var d=p(n,l);d&&t.definitions.push(d)}),t}W(e,"AllFpbWithNoBanner");export{e as d};
