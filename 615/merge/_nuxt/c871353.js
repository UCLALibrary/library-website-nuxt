(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3],{345:function(e,n,t){"use strict";t(26),t(73);n.a=function(e){return e?e.replace(/(<([^>]+)>)/gi,"").replace(/"/gi,""):"The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."}},348:function(e,n,t){var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaGalleryFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediaGallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionTitle"},name:{kind:"Name",value:"captionHeading"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionText"},name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sortOrder"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_image_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"imageFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_audio_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"audioFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"audioEmbedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_video_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"videoFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"embedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:914}};o.loc.source={body:'#import "~/gql/fragments/MediaAsset.gql"\n\nfragment BlockMediaGalleryFragment on ElementInterface {\n    dataId: id\n    sectionTitle: titleGeneral\n    sectionSummary: summary\n    mediaGallery {\n        dataId: id\n        captionTitle: captionHeading\n        captionText: caption\n        altText\n        sortOrder\n        ... on mediaGallery_image_BlockType {\n            item: imageFile {\n                ...MediaAsset\n            }\n        }\n        ... on mediaGallery_audio_BlockType {\n            item: audioFile {\n                ...MediaAsset\n            }\n            embedCode: audioEmbedCode\n            coverImage {\n              ...MediaAsset\n            }\n        }\n        ... on mediaGallery_video_BlockType {\n            item: videoFile {\n                ...MediaAsset\n            }\n            embedCode: embedCode\n            coverImage {\n              ...MediaAsset\n            }\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}o.definitions=o.definitions.concat(t(353).definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!l[n]&&(l[n]=!0,!0)})));var d={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}o.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=o,e.exports.BlockMediaGalleryFragment=function(e,n){var t={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=d[n]||new Set,l=new Set,r=new Set;for(o.forEach((function(e){r.add(e)}));r.size>0;){var m=r;r=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var o=c(e,n);o&&t.definitions.push(o)})),t}(o,"BlockMediaGalleryFragment")},350:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockRichTextFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"richText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]}]}}],loc:{start:0,end:114}};t.loc.source={body:"fragment BlockRichTextFragment on ElementInterface {\n    richText\n    typeHandle\n    sectionTitle: titleGeneral\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var l={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.BlockRichTextFragment=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=l[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"BlockRichTextFragment")},351:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockFormFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"form"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}],loc:{start:0,end:141}};t.loc.source={body:"fragment BlockFormFragment on ElementInterface {\n    id\n    form\n    typeHandle\n    sectionTitle: titleGeneral\n    sectionSummary: summary\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var l={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.BlockFormFragment=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=l[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"BlockFormFragment")},358:function(e,n,t){var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AllFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"allFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_associatedTopicCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_bannerFeatured_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"allFpb_impactNumberCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumberCardsFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:2101}};o.loc.source={body:'#import "~/gql/fragments/Image"\n#import "~/gql/fragments/BlockAssociatedTopicCardsFragment"\n#import "~/gql/fragments/BlockBannerFeaturedFragment"\n#import "~/gql/fragments/BlockCardWithImageFragment"\n#import "~/gql/fragments/BlockHighlightFragment"\n#import "~/gql/fragments/BlockImpactNumbersCarouselFragment"\n#import "~/gql/fragments/BlockMediaGalleryFragment"\n#import "~/gql/fragments/BlockMediaWithTextFragment"\n#import "~/gql/fragments/BlockPullQuoteFragment"\n#import "~/gql/fragments/BlockRichTextFragment"\n#import "~/gql/fragments/BlockSimpleCardsFragment"\n#import "~/gql/fragments/BlockCallToActionFragment"\n#import "~/gql/fragments/BlockFormFragment"\n#import "~/gql/fragments/BlockImpactNumberCardsFragment"\n\nfragment AllFpb on ElementInterface {\n    blocks: allFpb {\n        id\n        typeHandle\n\n        ... on allFpb_associatedTopicCards_BlockType {\n            ...BlockAssociatedTopicCardsFragment\n        }\n        ... on allFpb_bannerFeatured_BlockType {\n            ...BlockBannerFeaturedFragment\n        }\n        ... on allFpb_cardWithImage_BlockType {\n            ...BlockCardWithImageFragment\n        }\n        ... on allFpb_highlight_BlockType {\n            ...BlockHighlightFragment\n        }\n        ... on allFpb_impactNumbersCarousel_BlockType {\n            ...BlockImpactNumbersCarouselFragment\n        }\n        ... on allFpb_mediaGallery_BlockType {\n            ...BlockMediaGalleryFragment\n        }\n        ... on allFpb_mediaWithText_BlockType {\n            ...BlockMediaWithTextFragment\n        }\n        ... on allFpb_pullQuote_BlockType {\n            ...BlockPullQuoteFragment\n        }\n        ... on allFpb_richText_BlockType {\n            ...BlockRichTextFragment\n        }\n        ...on allFpb_simpleCards_BlockType {\n            ...BlockSimpleCardsFragment\n        }\n        ... on allFpb_callToAction_BlockType {\n            ...BlockCallToActionFragment\n        }\n        ... on allFpb_form_BlockType {\n            ...BlockFormFragment\n        }\n        ... on allFpb_impactNumberCards_BlockType {\n            ...BlockImpactNumberCardsFragment\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function r(defs){return defs.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!l[n]&&(l[n]=!0,!0)}))}function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}o.definitions=o.definitions.concat(r(t(346).definitions)),o.definitions=o.definitions.concat(r(t(362).definitions)),o.definitions=o.definitions.concat(r(t(367).definitions)),o.definitions=o.definitions.concat(r(t(360).definitions)),o.definitions=o.definitions.concat(r(t(361).definitions)),o.definitions=o.definitions.concat(r(t(363).definitions)),o.definitions=o.definitions.concat(r(t(348).definitions)),o.definitions=o.definitions.concat(r(t(355).definitions)),o.definitions=o.definitions.concat(r(t(356).definitions)),o.definitions=o.definitions.concat(r(t(350).definitions)),o.definitions=o.definitions.concat(r(t(357).definitions)),o.definitions=o.definitions.concat(r(t(359).definitions)),o.definitions=o.definitions.concat(r(t(351).definitions)),o.definitions=o.definitions.concat(r(t(368).definitions));var c={};function m(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}o.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),c[e.name.value]=n}})),e.exports=o,e.exports.AllFpb=function(e,n){var t={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=c[n]||new Set,l=new Set,r=new Set;for(o.forEach((function(e){r.add(e)}));r.size>0;){var d=r;r=new Set,d.forEach((function(e){l.has(e)||(l.add(e),(c[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var o=m(e,n);o&&t.definitions.push(o)})),t}(o,"AllFpb")},362:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedTopicsFlexiblePageBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"associatedTopicsFlexiblePageBlock_associatedTopics_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:487}};t.loc.source={body:"fragment BlockAssociatedTopicCardsFragment on ElementInterface {\n    id\n    typeHandle\n    sectionTitle: titleGeneral\n    sectionSummary: summary\n    associatedTopicsFlexiblePageBlock {\n        ... on associatedTopicsFlexiblePageBlock_associatedTopics_BlockType {\n            id\n            topics {\n                title\n                typeHandle\n                externalResourceUrl\n                uri\n                text: summary\n                uri\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var l={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.BlockAssociatedTopicCardsFragment=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=l[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"BlockAssociatedTopicCardsFragment")},392:function(e,n,t){var content=t(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("6124542d",content,!0,{sourceMap:!1})},468:function(e,n,t){var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingCollections",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingCollections_listingCollections_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredResourcesSection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"featuredResourcesSection_featuredResources_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredResources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredCollectionsSection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"featuredCollectionsSection_featuredCollections_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredCollections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"titleLink"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"button"},name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"physicalDigital"},arguments:[],directives:[]}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToCategories"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"StringValue",value:"collections",block:!1}}]}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postDate"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"entryCount"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToCategories"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"StringValue",value:"collections",block:!1}}]}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[]}]}}],loc:{start:0,end:2436}};o.loc.source={body:'#import "~/gql/fragments/collections/AllFpb"\nquery CollectionsList {\n    entry(section: "listingCollections") {\n        ... on listingCollections_listingCollections_Entry {\n            title\n            text: summary\n            featuredResourcesSection {\n                ... on featuredResourcesSection_featuredResources_BlockType {\n                    titleGeneral\n                    sectionSummary\n                    featuredResources {\n                        title\n                        text: summary\n                        to: uri\n                        externalResourceUrl\n                        iconName: illustrationsResourcesAndServices\n                    }\n                }\n            }\n            featuredCollectionsSection {\n                ... on featuredCollectionsSection_featuredCollections_BlockType {\n                    titleGeneral\n                    sectionSummary\n                    featuredCollections {\n                        title\n                        summary\n                        titleLink: uri\n                        uri\n                        heroImage {\n                            ... on heroImage_heroImage_BlockType {\n                                id\n                                image {\n                                    ...Image\n                                }\n                            }\n                        }\n                        button: buttonUrl {\n                            ... on buttonUrl_button_BlockType {\n                                id\n                                buttonText\n                                buttonUrl\n                            }\n                        }\n                        category: physicalDigital\n                    }\n                }\n            }\n            ...AllFpb\n        }\n    }\n    entries(\n        section: "article"\n        relatedToCategories: [{ title: "collections" }]\n        orderBy: "postDate DESC"\n        limit: 3\n    ) {\n        title\n        text: summary\n        heroImage {\n            ... on heroImage_heroImage_BlockType {\n                id\n                image {\n                    ...Image\n                }\n            }\n        }\n        articleCategories {\n            title\n        }\n        to: uri\n        postDate\n    }\n    entryCount(\n        section: "article"\n        relatedToCategories: [{ title: "collections" }]\n        orderBy: "postDate DESC"\n        limit: 3\n    )\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}o.definitions=o.definitions.concat(t(358).definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!l[n]&&(l[n]=!0,!0)})));var d={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}o.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=o,e.exports.CollectionsList=function(e,n){var t={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=d[n]||new Set,l=new Set,r=new Set;for(o.forEach((function(e){r.add(e)}));r.size>0;){var m=r;r=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var o=c(e,n);o&&t.definitions.push(o)})),t}(o,"CollectionsList")},469:function(e,n,t){"use strict";t(392)},470:function(e,n,t){var o=t(49)(!1);o.push([e.i,'.page-collections .banner-text[data-v-68495c38]{margin-top:var(--space-m)}.page-collections .button-more[data-v-68495c38]{margin:var(--space-2xl) auto}.page-collections .section-heading[data-v-68495c38]{font-family:"Karbon",Helvetica,Arial,sans-serif;font-size:var(--step-4);font-weight:400;line-height:1.2;color:var(--color-primary-blue-03);margin:var(--space-xl) auto;max-width:928px}.page-collections .section-teaser-highlight[data-v-68495c38]{margin:var(--space-xl) auto}',""]),e.exports=o},600:function(e,n,t){"use strict";t.r(n);t(30),t(27),t(29),t(42),t(43);var o=t(12),l=t(2),r=(t(37),t(90),t(51),t(10),t(28),t(33),t(347)),d=t.n(r),c=t(378),m=t(345),k=t(468),v=t.n(k);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var F={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function n(){var t,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$graphql,n.next=3,t.default.request(v.a);case 3:return data=n.sent,n.abrupt("return",{page:d()(data,"entry",{}),pageArticles:d()(data,"entries",[]),pageArticleCount:d()(data,"entryCount",0)});case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(m.a)(this.page.text)}]}},computed:{parsedResources:function(){return this.page.featuredResourcesSection.map((function(e){return S(S({},e),{},{featuredResources:e.featuredResources.map((function(e){return S(S({},e),{},{to:e.externalResourceUrl?e.externalResourceUrl:"/".concat(e.to)})}))})}))},parsedCollections:function(){return this.page.featuredCollectionsSection[0]?this.page.featuredCollectionsSection[0]:{}},parsedBannerFeatured:function(){return this.page.featuredCollectionsSection[0].featuredCollections.map((function(e){return S(S({},e),{},{image:e.heroImage[0].image[0],title:d()(e,"title",""),titleLink:"/".concat(e.titleLink),description:"",category:e.category?e.category.join(", "):"",to:d()(e,"button[0].buttonUrl",""),prompt:d()(e,"button[0].buttonText","")})}))},parsedSectionHighlight:function(){return this.page.featuredCollectionsSection[0].featuredCollections.length>1?this.page.featuredCollectionsSection[0].featuredCollections.slice(1).map((function(e){return S(S({},e),{},{image:d()(e,"heroImage[0].image[0]",""),category:e.category.join(", "),to:"/".concat(e.uri),text:e.summary})})):[]},parsedArticles:function(){var e=this;return this.pageArticles?this.pageArticles.map((function(n){var t=e.parseArticleCategory(n.articleCategories);return S(S({},n),{},{to:"/".concat(n.to),image:d()(n,"heroImage[0].image[0]",null),category:t,bylineOne:e.parsedDate(n.postDate)})})):[]}},methods:{parsedDate:function(e){return Object(c.a)(new Date(e),"MMMM d, Y")},parseArticleCategory:function(e){var n="";return e.forEach((function(e){n=n+e.title+", "})),n.slice(0,-2)}}},y=(t(469),t(41)),component=Object(y.a)(F,(function(){var e=this,n=e._self._c;return n("main",{staticClass:"page page-collections",attrs:{id:"main"}},[n("banner-text",{staticClass:"banner-text",attrs:{title:e.page.title,text:e.page.text}}),e._v(" "),n("section-wrapper",[n("divider-way-finder",{staticClass:"divider divider-way-finder"})],1),e._v(" "),n("section-wrapper",[e.parsedResources.length?n("section-cards-with-illustrations",{attrs:{items:e.parsedResources[0].featuredResources,"is-horizontal":!1,"section-title":e.parsedResources[0].titleGeneral,"section-summary":e.parsedResources[0].sectionSummary,"button-text":"See More",to:"/collections/access"}}):e._e()],1),e._v(" "),n("section-wrapper",[n("divider-way-finder",{staticClass:"divider divider-way-finder"})],1),e._v(" "),n("section-wrapper",{attrs:{"section-title":e.page.featuredCollectionsSection[0].titleGeneral,"section-summary":e.page.featuredCollectionsSection[0].sectionSummary}},[e.page.featuredCollectionsSection.length>0?n("banner-featured",{staticClass:"banner banner-about",attrs:{image:e.parsedBannerFeatured[0].image,title:e.parsedBannerFeatured[0].title,description:e.parsedBannerFeatured[0].summary,category:e.parsedBannerFeatured[0].category,to:e.parsedBannerFeatured[0].to,prompt:e.parsedBannerFeatured[0].prompt,"title-link":e.parsedBannerFeatured[0].titleLink}}):e._e(),e._v(" "),e.parsedCollections.featuredCollections.length>1?n("section-teaser-highlight",{staticClass:"section-teaser-highlight",attrs:{items:e.parsedSectionHighlight}}):e._e(),e._v(" "),n("nuxt-link",{staticClass:"button-more",attrs:{to:"/collections/explore"}},[n("button-more",{attrs:{text:"Browse Collections"}})],1)],1),e._v(" "),n("section-wrapper",[n("divider-way-finder",{staticClass:"divider divider-way-finder"})],1),e._v(" "),n("section-wrapper",{attrs:{"section-title":"Collections News"}},[n("section-teaser-card",{staticClass:"section-teaser-card",attrs:{items:e.parsedArticles}}),e._v(" "),e.pageArticleCount>3?n("smart-link",{staticClass:"button-more",attrs:{to:"/about/news"}},[n("button-more",{attrs:{text:"See All Collections News"}})],1):e._e()],1),e._v(" "),n("section-wrapper",[n("divider-way-finder",{staticClass:"divider divider-way-finder"})],1),e._v(" "),e.page.blocks?n("flexible-blocks",{staticClass:"flexible-content",attrs:{blocks:e.page.blocks}}):e._e()],1)}),[],!1,null,"68495c38",null);n.default=component.exports}}]);