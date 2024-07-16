import{d as b}from"./BIzRNX9S.js";import{d as N}from"./HCErRXQJ.js";import{d as C,a as h}from"./Cw_akS4-.js";import{d as T}from"./BEx1Bxtt.js";import{d as B,a as x}from"./CL8yYu5A.js";import{a as _,d as A}from"./CLd6PcwS.js";import{d as E}from"./DeFtLck0.js";import{c as I,d as q,a as G,b as $}from"./Q2Lk47BP.js";import{d as w}from"./CvV-bfGY.js";var c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaGalleryExtraFieldsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"richTextSimplified"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"mediaGallery"},name:{kind:"Name",value:"mediaGalleryExtraFields"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionTitle"},name:{kind:"Name",value:"captionHeading"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionText"},name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sortOrder"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"linkUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"linkText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"credit"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGalleryExtraFields_image_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"imageFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGalleryExtraFields_audio_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"audioFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"audioEmbedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGalleryExtraFields_video_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"videoFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"embedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1023}};c.loc.source={body:`#import "../gql/fragments/MediaAsset.gql"

fragment BlockMediaGalleryExtraFieldsFragment on ElementInterface {
    id
    sectionTitle: titleGeneral
    richTextSimplified
    mediaGallery: mediaGalleryExtraFields {
        dataId: id
        captionTitle: captionHeading
        captionText: caption
        altText
        sortOrder
        linkUrl
        linkText
        credit
        ... on mediaGalleryExtraFields_image_BlockType {
            item: imageFile {
                ...MediaAsset
            }
        }
        ... on mediaGalleryExtraFields_audio_BlockType {
            item: audioFile {
                ...MediaAsset
            }
            embedCode: audioEmbedCode
            coverImage {
                ...MediaAsset
            }
        }
        ... on mediaGalleryExtraFields_video_BlockType {
            item: videoFile {
                ...MediaAsset
            }
            embedCode: embedCode
            coverImage {
                ...MediaAsset
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function M(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return v[n]?!1:(v[n]=!0,!0)})}c.definitions=c.definitions.concat(M(I.definitions));function m(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,i)}),e.definitions&&e.definitions.forEach(function(a){m(a,i)})}var g={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;m(i,n),g[i.name.value]=n}})})();function F(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function R(e,i){var n={kind:e.kind,definitions:[F(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=g[i]||new Set,s=new Set,l=new Set;for(a.forEach(function(d){l.add(d)});l.size>0;){var u=l;l=new Set,u.forEach(function(d){if(!s.has(d)){s.add(d);var r=g[d]||new Set;r.forEach(function(p){l.add(p)})}})}return s.forEach(function(d){var r=F(e,d);r&&n.definitions.push(r)}),n}R(c,"BlockMediaGalleryExtraFieldsFragment");var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExhibitionsAndCollectionsFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"exhibitionsAndCollectionsFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_associatedTopicCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_bannerFeatured_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryExtraFieldsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_gridGalleryCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockGridGalleryCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibitionsAndCollectionsFpb_impactNumberCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumberCardsFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:2714}};t.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockAssociatedTopicCardsFragment.gql"
#import "../gql/fragments/BlockBannerFeaturedFragment.gql"
#import "../gql/fragments/BlockCallToActionFragment.gql"
#import "../gql/fragments/BlockCardWithImageFragment.gql"
#import "../gql/fragments/BlockFormFragment.gql"
#import "../gql/fragments/BlockHighlightFragment.gql"
#import "../gql/fragments/BlockImpactNumbersCarouselFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockMediaGalleryExtraFieldsFragment.gql"
#import "../gql/fragments/BlockGridGalleryCardsFragment.gql"
#import "../gql/fragments/BlockImpactNumberCardsFragment.gql"

fragment ExhibitionsAndCollectionsFpb on ElementInterface {
    blocks: exhibitionsAndCollectionsFpb {
        id
        typeHandle

        ... on exhibitionsAndCollectionsFpb_associatedTopicCards_BlockType {
            ...BlockAssociatedTopicCardsFragment
        }
        ... on exhibitionsAndCollectionsFpb_bannerFeatured_BlockType {
            ...BlockBannerFeaturedFragment
        }
        ... on exhibitionsAndCollectionsFpb_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
        ... on exhibitionsAndCollectionsFpb_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
        ... on exhibitionsAndCollectionsFpb_form_BlockType {
            ...BlockFormFragment
        }
        ... on exhibitionsAndCollectionsFpb_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on exhibitionsAndCollectionsFpb_impactNumbersCarousel_BlockType {
            ...BlockImpactNumbersCarouselFragment
        }

        ... on exhibitionsAndCollectionsFpb_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on exhibitionsAndCollectionsFpb_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on exhibitionsAndCollectionsFpb_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on exhibitionsAndCollectionsFpb_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on exhibitionsAndCollectionsFpb_mediaGallery_BlockType {
            ...BlockMediaGalleryExtraFieldsFragment
        }
        ... on exhibitionsAndCollectionsFpb_gridGalleryCards_BlockType {
            ...BlockGridGalleryCardsFragment
        }
        ... on exhibitionsAndCollectionsFpb_impactNumberCards_BlockType {
            ...BlockImpactNumberCardsFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var S={};function o(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return S[n]?!1:(S[n]=!0,!0)})}t.definitions=t.definitions.concat(o(b.definitions));t.definitions=t.definitions.concat(o(N.definitions));t.definitions=t.definitions.concat(o(C.definitions));t.definitions=t.definitions.concat(o(T.definitions));t.definitions=t.definitions.concat(o(B.definitions));t.definitions=t.definitions.concat(o(_.definitions));t.definitions=t.definitions.concat(o(x.definitions));t.definitions=t.definitions.concat(o(E.definitions));t.definitions=t.definitions.concat(o(q.definitions));t.definitions=t.definitions.concat(o(G.definitions));t.definitions=t.definitions.concat(o(A.definitions));t.definitions=t.definitions.concat(o($.definitions));t.definitions=t.definitions.concat(o(c.definitions));t.definitions=t.definitions.concat(o(w.definitions));t.definitions=t.definitions.concat(o(h.definitions));function k(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){k(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){k(a,i)}),e.definitions&&e.definitions.forEach(function(a){k(a,i)})}var f={};(function(){t.definitions.forEach(function(i){if(i.name){var n=new Set;k(i,n),f[i.name.value]=n}})})();function y(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function D(e,i){var n={kind:e.kind,definitions:[y(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=f[i]||new Set,s=new Set,l=new Set;for(a.forEach(function(d){l.add(d)});l.size>0;){var u=l;l=new Set,u.forEach(function(d){if(!s.has(d)){s.add(d);var r=f[d]||new Set;r.forEach(function(p){l.add(p)})}})}return s.forEach(function(d){var r=y(e,d);r&&n.definitions.push(r)}),n}D(t,"ExhibitionsAndCollectionsFpb");export{t as d};
