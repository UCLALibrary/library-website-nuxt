import{c as f}from"./Q2Lk47BP.js";var l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaGalleryFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediaGallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"dataId"},name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionTitle"},name:{kind:"Name",value:"captionHeading"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionText"},name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sortOrder"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_image_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"imageFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_audio_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"audioFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"audioEmbedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_video_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"videoFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"embedCode"},name:{kind:"Name",value:"embedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MediaAsset"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:915}};l.loc.source={body:`#import "../gql/fragments/MediaAsset.gql"

fragment BlockMediaGalleryFragment on ElementInterface {
    dataId: id
    sectionTitle: titleGeneral
    sectionSummary: summary
    mediaGallery {
        dataId: id
        captionTitle: captionHeading
        captionText: caption
        altText
        sortOrder
        ... on mediaGallery_image_BlockType {
            item: imageFile {
                ...MediaAsset
            }
        }
        ... on mediaGallery_audio_BlockType {
            item: audioFile {
                ...MediaAsset
            }
            embedCode: audioEmbedCode
            coverImage {
              ...MediaAsset
            }
        }
        ... on mediaGallery_video_BlockType {
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var c={};function g(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return c[n]?!1:(c[n]=!0,!0)})}l.definitions=l.definitions.concat(g(f.definitions));function s(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,i)}),e.definitions&&e.definitions.forEach(function(a){s(a,i)})}var o={};(function(){l.definitions.forEach(function(i){if(i.name){var n=new Set;s(i,n),o[i.name.value]=n}})})();function u(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function S(e,i){var n={kind:e.kind,definitions:[u(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=o[i]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var k=d;d=new Set,k.forEach(function(t){if(!r.has(t)){r.add(t);var m=o[t]||new Set;m.forEach(function(v){d.add(v)})}})}return r.forEach(function(t){var m=u(e,t);m&&n.definitions.push(m)}),n}S(l,"BlockMediaGalleryFragment");export{l as d};
