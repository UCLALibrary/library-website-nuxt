import{d as F}from"./BIzRNX9S.js";import{d as u}from"./HCErRXQJ.js";import{d as v,a as S}from"./Cw_akS4-.js";import{d as B,a as y}from"./CL8yYu5A.js";import{d as T}from"./DeFtLck0.js";import{d as N}from"./CIf3dq7z.js";import{d as _,a as b,b as h}from"./Q2Lk47BP.js";import{d as C,a as q}from"./CLd6PcwS.js";import{d as I}from"./BEx1Bxtt.js";var e={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AllFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"allFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_associatedTopicCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_bannerFeatured_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_impactNumberCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumberCardsFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:2171}};e.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockAssociatedTopicCardsFragment.gql"
#import "../gql/fragments/BlockBannerFeaturedFragment.gql"
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
#import "../gql/fragments/BlockImpactNumberCardsFragment.gql"

fragment AllFpb on ElementInterface {
    blocks: allFpb {
        id
        typeHandle

        ... on allFpb_associatedTopicCards_BlockType {
            ...BlockAssociatedTopicCardsFragment
        }
        ... on allFpb_bannerFeatured_BlockType {
            ...BlockBannerFeaturedFragment
        }
        ... on allFpb_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
        ... on allFpb_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on allFpb_impactNumbersCarousel_BlockType {
            ...BlockImpactNumbersCarouselFragment
        }
        ... on allFpb_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on allFpb_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on allFpb_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on allFpb_richText_BlockType {
            ...BlockRichTextFragment
        }
        ...on allFpb_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on allFpb_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
        ... on allFpb_form_BlockType {
            ...BlockFormFragment
        }
        ... on allFpb_impactNumberCards_BlockType {
            ...BlockImpactNumberCardsFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var k={};function a(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return k[t]?!1:(k[t]=!0,!0)})}e.definitions=e.definitions.concat(a(F.definitions));e.definitions=e.definitions.concat(a(u.definitions));e.definitions=e.definitions.concat(a(v.definitions));e.definitions=e.definitions.concat(a(B.definitions));e.definitions=e.definitions.concat(a(y.definitions));e.definitions=e.definitions.concat(a(T.definitions));e.definitions=e.definitions.concat(a(N.definitions));e.definitions=e.definitions.concat(a(_.definitions));e.definitions=e.definitions.concat(a(b.definitions));e.definitions=e.definitions.concat(a(C.definitions));e.definitions=e.definitions.concat(a(h.definitions));e.definitions=e.definitions.concat(a(I.definitions));e.definitions=e.definitions.concat(a(q.definitions));e.definitions=e.definitions.concat(a(S.definitions));function c(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(o){c(o,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(o){c(o,i)}),n.definitions&&n.definitions.forEach(function(o){c(o,i)})}var s={};(function(){e.definitions.forEach(function(i){if(i.name){var t=new Set;c(i,t),s[i.name.value]=t}})})();function p(n,i){for(var t=0;t<n.definitions.length;t++){var o=n.definitions[t];if(o.name&&o.name.value==i)return o}}function $(n,i){var t={kind:n.kind,definitions:[p(n,i)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var o=s[i]||new Set,m=new Set,d=new Set;for(o.forEach(function(l){d.add(l)});d.size>0;){var g=d;d=new Set,g.forEach(function(l){if(!m.has(l)){m.add(l);var r=s[l]||new Set;r.forEach(function(f){d.add(f)})}})}return m.forEach(function(l){var r=p(n,l);r&&t.definitions.push(r)}),t}$(e,"AllFpb");export{e as d};
