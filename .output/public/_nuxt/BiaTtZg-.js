import{_ as O,u as M,k as G,l as Q,m as w,r as D,a as P,p as V,L,e as v,f as _,q as u,s as l,t as N,v as B,x as y,O as W,P as U,A as z,D as K,ab as J,M as X,G as F,ag as Y,F as q,a2 as Z,a1 as j}from"./D87QO4dW.js";import{u as ee}from"./BWVOSsg_.js";import{_ as E}from"./I9wROFQL.js";import{r as ne}from"./Dim8bG2a.js";import{d as ie}from"./CIf3dq7z.js";import{d as te,a as ae,b as le}from"./Q2Lk47BP.js";import{d as re,a as oe}from"./CLd6PcwS.js";import{d as se}from"./BEx1Bxtt.js";var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DefaultFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"defaultFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpb_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:1175}};o.loc.source={body:`#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockCallToActionFragment.gql"
#import "../gql/fragments/BlockFormFragment.gql"

fragment DefaultFpb on ElementInterface {
    blocks: defaultFpb {
        id
        typeHandle

        ... on defaultFpb_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on defaultFpb_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on defaultFpb_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on defaultFpb_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on defaultFpb_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on defaultFpb_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
        ... on defaultFpb_form_BlockType {
            ...BlockFormFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var $={};function k(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return $[i]?!1:($[i]=!0,!0)})}o.definitions=o.definitions.concat(k(ie.definitions));o.definitions=o.definitions.concat(k(te.definitions));o.definitions=o.definitions.concat(k(ae.definitions));o.definitions=o.definitions.concat(k(re.definitions));o.definitions=o.definitions.concat(k(le.definitions));o.definitions=o.definitions.concat(k(se.definitions));o.definitions=o.definitions.concat(k(oe.definitions));function S(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){S(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){S(t,n)}),e.definitions&&e.definitions.forEach(function(t){S(t,n)})}var b={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;S(n,i),b[n.name.value]=i}})})();function R(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function de(e,n){var i={kind:e.kind,definitions:[R(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=b[n]||new Set,m=new Set,s=new Set;for(t.forEach(function(r){s.add(r)});s.size>0;){var c=s;s=new Set,c.forEach(function(r){if(!m.has(r)){m.add(r);var a=b[r]||new Set;a.forEach(function(f){s.add(f)})}})}return m.forEach(function(r){var a=R(e,r);a&&i.definitions.push(a)}),i}de(o,"DefaultFpb");var g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"HelpTopicDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"helpTopic",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"richText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"helpTopicBlocks"},name:{kind:"Name",value:"helpTopicBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedEntries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"DefaultFpb"},directives:[]}]}}]}}],loc:{start:0,end:558}};g.loc.source={body:`#import "../gql/fragments/collections/DefaultFpb.gql"

query HelpTopicDetail($slug: [String!]) {
    entry(section: "helpTopic", slug: $slug) {
        id
        title
        text: summary
        richText
        sectionHandle
        slug
        uri
        helpTopicBlocks: helpTopicBlock {
            id
            sectionTitle
            sectionSummary
            associatedEntries {
                uri
                externalResourceUrl
                title
                text: summary
            }
        }
        ...DefaultFpb
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var C={};function ce(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return C[i]?!1:(C[i]=!0,!0)})}g.definitions=g.definitions.concat(ce(o.definitions));function T(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){T(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){T(t,n)}),e.definitions&&e.definitions.forEach(function(t){T(t,n)})}var x={};(function(){g.definitions.forEach(function(n){if(n.name){var i=new Set;T(n,i),x[n.name.value]=i}})})();function A(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ue(e,n){var i={kind:e.kind,definitions:[A(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=x[n]||new Set,m=new Set,s=new Set;for(t.forEach(function(r){s.add(r)});s.size>0;){var c=s;s=new Set,c.forEach(function(r){if(!m.has(r)){m.add(r);var a=x[r]||new Set;a.forEach(function(f){s.add(f)})}})}return m.forEach(function(r){var a=A(e,r);a&&i.definitions.push(a)}),i}ue(g,"HelpTopicDetail");const me={id:"main",class:"page page-help-topic"},fe={__name:"[slug]",async setup(e){let n,i;const{$graphql:t,$getHeaders:m}=M(),s=G(),{data:c,error:r}=([n,i]=Q(async()=>z(`help-topic-detail-${s.params.slug}`,async()=>{const d=await t.default.request(g,{slug:s.params.slug});return console.log("preview useasycdata $graphql called again",d.entry.title),d})),n=await n,i(),n);if(r.value)throw w({...r.value,statusMessage:"Page not found."+r.value,fatal:!0});if(!c.value.entry)throw w({statusCode:404,message:"Page not found",fatal:!0});s.params.slug!==void 0&&c.value.entry.slug,c.value.entry&&(c.value.entry.serviceOrResourceType="help topic");const a=D(E(c.value,"entry",{}));P(c,(d,p)=>{console.log("In watch preview enabled, newVal, oldVal",d,p),d&&d.entry&&(d.entry.serviceOrResourceType="help topic"),a.value=E(d,"entry",{})});const f=D([]);ee({title:a.value?a.value.title:"... loading",meta:[{hid:"description",name:"description",content:ne(a.value.text)}]});const H=V(()=>(console.log("page Help topic computed called when preview=true",a.value.title),a.value.helpTopicBlocks.map(d=>({...d,parsedAssociatedEntries:d.associatedEntries.map(p=>({...p,to:p.externalResourceUrl?p.externalResourceUrl:`/${p.uri}`}))}))));return L(()=>{f.value=m.getHeadersMethod()}),(d,p)=>(v(),_("main",me,[u(l(K),{title:l(a).title,text:l(a).text},null,8,["title","text"]),l(f).length>=3?(v(),N(l(J),{key:0,"section-titles":l(f)},null,8,["section-titles"])):B("",!0),l(a).richText?(v(),N(l(F),{key:1},{default:y(()=>[u(l(X),{"rich-text-content":l(a).richText},null,8,["rich-text-content"])]),_:1})):B("",!0),(v(!0),_(W,null,U(l(H),(h,I)=>(v(),_("div",{key:`HelpTopicBlocksKey-${h}-${I}`},[u(l(F),{"section-title":h.sectionTitle,"section-summary":h.sectionSummary},{default:y(()=>[u(l(Y),{items:h.parsedAssociatedEntries},null,8,["items"])]),_:2},1032,["section-title","section-summary"]),u(l(F),{theme:"divider"},{default:y(()=>[u(l(q),{class:"divider-way-finder",color:"help"})]),_:1})]))),128)),u(l(Z),{class:"content",blocks:l(a).blocks},null,8,["blocks"]),l(a).blocks.length>0?(v(),N(l(F),{key:2,theme:"divider"},{default:y(()=>[u(l(q),{class:"divider-way-finder",color:"help"})]),_:1})):B("",!0),u(l(F),null,{default:y(()=>[u(l(j),{class:"block-call-to-action","is-global":!0})]),_:1})]))}},Te=O(fe,[["__scopeId","data-v-3e987c7d"]]);export{Te as default};
