import{_ as T,u as $,k as C,l as q,m as _,r as B,a as E,p as A,e as f,f as D,s as i,t as b,v as N,x as h,q as v,A as H,Y as M,Z as V,G as F,F as O,a2 as G}from"./D87QO4dW.js";import{u as L}from"./BWVOSsg_.js";import{_ as x}from"./I9wROFQL.js";import{r as P}from"./Dim8bG2a.js";import{d as Q}from"./BEHunIJq.js";import{d as z}from"./BIzRNX9S.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ImpactReportStory"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"impactReportStory",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportStory_impactReportStory_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contributors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_staffMember_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_externalContributor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"contributor"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}}]}}]}}],loc:{start:0,end:1296}};o.loc.source={body:`#import "../gql/fragments/collections/AllFpb.gql"
#import "../gql/fragments/Image.gql"

query ImpactReportStory($slug: [String!]) {
    entry(section: "impactReportStory", slug: $slug) {
        ... on impactReportStory_impactReportStory_Entry {
            id
            sectionHandle
            slug
            uri
            title
            text: summary
            uri
            contributors {
                ... on contributors_staffMember_BlockType {
                    typeHandle
                    byline
                    staffMember {
                        title
                        uri
                        id
                    }
                }
                ... on contributors_externalContributor_BlockType {
                    id
                    byline
                    typeHandle
                    title: contributor
                }
            }
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    image {
                        ...Image
                    }
                }
            }
            ...AllFpb
        }
    }
}

# query ImpactReportStory {
#  entry(section: "impactReportStory", uri: "impact/2022/test-main-story") {
# and uri: "impact/2021/ucla-library-reimagined") {
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var I={};function R(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var a=n.name.value;return I[a]?!1:(I[a]=!0,!0)})}o.definitions=o.definitions.concat(R(Q.definitions));o.definitions=o.definitions.concat(R(z.definitions));function k(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var a=e.type;a.kind==="NamedType"&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(r){k(r,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(r){k(r,n)}),e.definitions&&e.definitions.forEach(function(r){k(r,n)})}var g={};(function(){o.definitions.forEach(function(n){if(n.name){var a=new Set;k(n,a),g[n.name.value]=a}})})();function w(e,n){for(var a=0;a<e.definitions.length;a++){var r=e.definitions[a];if(r.name&&r.name.value==n)return r}}function Y(e,n){var a={kind:e.kind,definitions:[w(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=g[n]||new Set,m=new Set,d=new Set;for(r.forEach(function(l){d.add(l)});d.size>0;){var u=d;d=new Set,u.forEach(function(l){if(!m.has(l)){m.add(l);var t=g[l]||new Set;t.forEach(function(p){d.add(p)})}})}return m.forEach(function(l){var t=w(e,l);t&&a.definitions.push(t)}),a}Y(o,"ImpactReportStory");const Z={id:"main",class:"page page-impact-report"},J={__name:"[slug]",async setup(e){var y,S;let n,a;const{$graphql:r}=$(),m=C(),d={slug:m.params.slug},{data:u,error:l}=([n,a]=q(async()=>H(`impact-report-story-${m.params.slug}`,async()=>await r.default.request(o,d))),n=await n,a(),n);if(l.value)throw _({...l.value,statusMessage:"Page not found."+l.value,fatal:!0});if(!u.value.entry)throw _({statusCode:404,statusMessage:"Page Not Found",fatal:!0});u.value.entry.slug;const t=B(x(u.value,"entry",{}));E(u,(c,s)=>{console.log("In watch preview enabled, newVal, oldVal",c,s),t.value=x(c,"entry",{})}),L({title:t?(y=t.value)==null?void 0:y.title:"... loading",meta:[{hid:"description",name:"description",content:P((S=t.value)==null?void 0:S.text)}]});const p=A(()=>t.value.contributors.map(s=>s.typeHandle==="externalContributor"?`${`${s.byline} ${s.title}`}`:s.typeHandle==="staffMember"?`${`${s.byline} ${s.staffMember[0].title}`}`:[]));return(c,s)=>(f(),D("main",Z,[i(t)&&(!i(t).heroImage||i(t).heroImage.length===0)?(f(),b(i(M),{key:0,class:"banner-text",title:i(t).title,text:i(t).text,byline:i(p)},null,8,["title","text","byline"])):N("",!0),i(t)&&i(t).heroImage&&i(t).heroImage.length===1?(f(),b(i(F),{key:1,class:"section-banner"},{default:h(()=>[v(i(V),{title:i(t).title,text:i(t).text,"align-right":!0,media:i(t).heroImage[0].image[0],byline:i(p)},null,8,["title","text","media","byline"])]),_:1})):N("",!0),v(i(F),{theme:"divider"},{default:h(()=>[v(i(O),{class:"divider",color:"about"})]),_:1}),v(i(G),{class:"content",blocks:i(t).blocks},null,8,["blocks"])]))}},de=T(J,[["__scopeId","data-v-470c9381"]]);export{de as default};
