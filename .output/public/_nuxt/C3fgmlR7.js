import{_ as A,u as D,k as q,l as R,m as F,r as S,a as T,p as C,L,e as p,f as _,q as u,s as a,t as $,v as O,O as V,P as I,A as G,D as H,ab as M,x as w,ag as W,G as x,F as K,a2 as Q}from"./D87QO4dW.js";import{u as z}from"./BWVOSsg_.js";import{_ as g}from"./I9wROFQL.js";import{r as J}from"./Dim8bG2a.js";import{d as U}from"./Dhr_5Jrk.js";import"./BIzRNX9S.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PoliciesList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingPolicies",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingPolicies_listingPolicies_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"policyBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedEntries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpbWithNoBanner"},directives:[]}]}}]}}]}}],loc:{start:0,end:409}};d.loc.source={body:`#import "../gql/fragments/collections/AllFpbWithNoBanner.gql"

query PoliciesList {
  entry(section: "listingPolicies") {
    ... on listingPolicies_listingPolicies_Entry {
      title
      text: summary
      policyBlock {
        sectionSummary
        sectionTitle
        associatedEntries {
          uri
          title
          text: summary
        }
      }
      ...AllFpbWithNoBanner
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var E={};function X(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return E[t]?!1:(E[t]=!0,!0)})}d.definitions=d.definitions.concat(X(U.definitions));function y(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){y(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){y(n,i)}),e.definitions&&e.definitions.forEach(function(n){y(n,i)})}var N={};(function(){d.definitions.forEach(function(i){if(i.name){var t=new Set;y(i,t),N[i.name.value]=t}})})();function P(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Y(e,i){var t={kind:e.kind,definitions:[P(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=N[i]||new Set,m=new Set,l=new Set;for(n.forEach(function(r){l.add(r)});l.size>0;){var c=l;l=new Set,c.forEach(function(r){if(!m.has(r)){m.add(r);var s=N[r]||new Set;s.forEach(function(v){l.add(v)})}})}return m.forEach(function(r){var s=P(e,r);s&&t.definitions.push(s)}),t}Y(d,"PoliciesList");const Z={id:"main",class:"page page-policies"},j={__name:"index",async setup(e){let i,t;const{$graphql:n,$getHeaders:m}=D(),l=q(),{data:c,error:r}=([i,t]=R(async()=>G("policy-list",async()=>await n.default.request(d,{uri:l.params.uri}))),i=await i,t(),i);if(r.value)throw F({...r.value,statusMessage:"Page not found."+r.value,fatal:!0});if(!c.value.entry)throw F({statusCode:404,message:"Page not found",fatal:!0});const s=S(g(c.value,"entry",{})),v=S(g(c.value,"entry.policyBlock",{}));T(c,(o,f)=>{console.log("In watch preview enabled, newVal, oldVal",o,f),s.value=g(o,"entry",{}),v.value=g(o,"entry.policyBlock",[])});const h=S([]);z({title:s.value?s.value.title:"... loading",meta:[{hid:"description",name:"description",content:J(s.value.text)}]});const b=C(()=>v.value.map(o=>({...o,parsedAssociatedEntries:o.associatedEntries.map(f=>({...f,to:`/${f.uri}`}))})));return L(()=>{h.value=m.getHeadersMethod()}),(o,f)=>(p(),_("main",Z,[u(a(H),{title:a(s).title,text:a(s).text},null,8,["title","text"]),a(h).length>=3?(p(),$(a(M),{key:0,"section-titles":a(h)},null,8,["section-titles"])):O("",!0),(p(!0),_(V,null,I(a(b),(k,B)=>(p(),_("div",{key:`PolicyBlocksKey-${k}-${B}`},[u(a(x),{"section-title":k.sectionTitle,"section-summary":k.sectionSummary},{default:w(()=>[u(a(W),{items:k.parsedAssociatedEntries,button:"View all"},null,8,["items"])]),_:2},1032,["section-title","section-summary"]),u(a(x),{theme:"divider"},{default:w(()=>[u(a(K),{class:"divider"})]),_:1})]))),128)),u(a(Q),{blocks:a(s).blocks},null,8,["blocks"])]))}},me=A(j,[["__scopeId","data-v-e21570d8"]]);export{me as default};
