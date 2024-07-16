import{ah as ie,u as ae,k as re,l as se,m as O,r as _,a as M,p as N,L as le,N as z,e as x,f as D,q as o,s as e,y as b,z as w,x as k,B as oe,A as ue,D as de,E as me,F as L,G as p,ad as ce,t as Q,v as W,ae as ge,af as J,H as U,I as P,h as d,M as ve,a1 as ke}from"./D87QO4dW.js";import{u as pe}from"./BWVOSsg_.js";import{_ as u}from"./I9wROFQL.js";import{g as fe}from"./BIGQZk-7.js";import{c as f}from"./DSQ4ZnfI.js";import{q as he}from"./BOdCFMn0.js";import{p as B}from"./iHpIRGTP.js";import{r as ye}from"./Dim8bG2a.js";import{d as Se}from"./BIzRNX9S.js";var F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ProgramList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingPrograms",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingPrograms_listingPrograms_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingPrograms_listingPrograms_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"featuredPrograms"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"program_program_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"programType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"program",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title ASC",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"program_program_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"programUrlBehavior"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"programType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1913}};F.loc.source={body:`#import "../gql/fragments/Image.gql"

query ProgramList {
    entry(section: "listingPrograms") {
        ... on listingPrograms_listingPrograms_Entry {
            title
            text: summary
            ... on listingPrograms_listingPrograms_Entry {
                featuredPrograms {
                    ... on program_program_Entry {
                        id
                        title
                        summary
                        uri
                        heroImage {
                            ... on heroImage_heroImage_BlockType {
                                id
                                image {
                                    ...Image
                                }
                            }
                        }
                        buttonUrl {
                            ... on buttonUrl_button_BlockType {
                                id
                                buttonText
                                buttonUrl
                            }
                        }
                        programType {
                            title
                        }
                    }
                }
            }
        }
    }
    entries(section: "program", orderBy: "title ASC") {
        ... on program_program_Entry {
            sectionHandle
            title
            text: summary
            uri
            programUrlBehavior
            buttonUrl {
                ... on buttonUrl_button_BlockType {
                    buttonText
                    buttonUrl
                }
            }
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                }
            }
            programType {
                id
                title
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var K={};function _e(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var l=i.name.value;return K[l]?!1:(K[l]=!0,!0)})}F.definitions=F.definitions.concat(_e(Se.definitions));function E(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var l=n.type;l.kind==="NamedType"&&i.add(l.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(m){E(m,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(m){E(m,i)}),n.definitions&&n.definitions.forEach(function(m){E(m,i)})}var R={};(function(){F.definitions.forEach(function(i){if(i.name){var l=new Set;E(i,l),R[i.name.value]=l}})})();function X(n,i){for(var l=0;l<n.definitions.length;l++){var m=n.definitions[l];if(m.name&&m.name.value==i)return m}}function Ne(n,i){var l={kind:n.kind,definitions:[X(n,i)]};n.hasOwnProperty("loc")&&(l.loc=n.loc);var m=R[i]||new Set,S=new Set,a=new Set;for(m.forEach(function(c){a.add(c)});a.size>0;){var h=a;a=new Set,h.forEach(function(c){if(!S.has(c)){S.add(c);var r=R[c]||new Set;r.forEach(function(I){a.add(I)})}})}return S.forEach(function(c){var r=X(n,c);r&&l.definitions.push(r)}),l}Ne(F,"ProgramList");const Fe={id:"main",class:"page page-programs"},qe={key:0,class:"about-results"},Te={key:1,class:"about-results"},xe={class:"error-text"},be=d("p",null,[U(" We can’t find the term you are looking for on this page, but we're here to help. "),d("br"),U(" Try searching the whole site from "),d("a",{href:"https://library.ucla.edu"},"UCLA Library Home"),U(", or try one of the these regularly visited links: ")],-1),we=d("ul",null,[d("li",null,[d("a",{href:"https://www.library.ucla.edu/research-teaching-support/research-help"},"Research Help")]),d("li",null,[d("a",{href:"/help/services-resources/ask-us"},"Ask Us")]),d("li",null,[d("a",{href:"https://www.library.ucla.edu/use/access-privileges/disability-resources"},"Accessibility Resources")])],-1),Re=ie({__name:"index",async setup(n){var $,G;let i,l;const{$graphql:m,$dataApi:S}=ae(),a=re(),{data:h,error:c}=([i,l]=se(async()=>ue("programs-list",async()=>await m.default.request(F,{}))),i=await i,l(),i);if(c.value)throw O({...c.value,statusMessage:"Page not found."+c.value,fatal:!0});if(!h.value.entry&&!h.value.entries)throw O({statusCode:404,message:"Page not found",fatal:!0});const r=_(u(h.value,"entry",{})),I=_(u(h.value,"entries",[]));M(h,(t,v)=>{r.value=u(t,"entry",{}),I.value=u(t,"entries",[])}),pe({title:r.value?r.value.title:"... loading",meta:[{hid:"description",name:"description",content:ye(($=r.value)==null?void 0:$.text)}]});const g=_([]),y=_(!1),V=_([]),A=_({queryText:((G=a.query)==null?void 0:G.q)||"",queryFilters:B(a.query.filters||"")});async function Y(){var t;if(a.query&&a.query.q&&a.query.q!==""||a.query.filters&&he(B(a.query.filters||""),f.programsList.filters)){const v=((t=a.query)==null?void 0:t.q)||"*",s=await S.keywordSearchWithFilters(v,f.programsList.searchFields,"sectionHandle:program",B(a.query.filters||""),f.programsList.sortField,f.programsList.orderBy,f.programsList.resultFields,f.programsList.filters);s&&s.hits&&s.hits.total.value>0?(g.value=s.hits.hits,y.value=!1):(g.value=[],y.value=!0)}else g.value=[],y.value=!1}M(()=>a.query,(t,v)=>{var s;A.value.queryText=((s=a.query)==null?void 0:s.q)||"",A.value.queryFilters=B(a.query.filters||""),Y()},{deep:!0,immediate:!0});const H=N(()=>{var t,v;return(t=r.value)!=null&&t.featuredPrograms?(v=r.value.featuredPrograms)==null?void 0:v.map(s=>({...s,image:u(s,"heroImage[0].image[0]",""),title:u(s,"title",""),text:s.summary,to:`/${s.uri}`,category:u(s,"programType[0].title","")})):[]}),q=N(()=>H.value[0]),T=N(()=>H.value.slice(1).map(t=>({...t,image:u(t,"heroImage[0].image[0]",""),to:`/${t.uri}`,text:t.summary,category:u(t,"programType[0].title","")}))),C=N(()=>I.value.map(t=>(t.programUrlBehavior==="externalSite"&&console.log(t.programUrlBehavior,t),{...t,to:t.programUrlBehavior==="externalSite"?t.buttonUrl&&t.buttonUrl.length>0&&t.buttonUrl[0].buttonUrl?t.buttonUrl[0].buttonUrl:null:`/${t.uri}`,image:u(t,"heroImage[0].image[0]",null),staffName:`${t.fullName}`,category:u(t,"programType[0].title",null),description:u(t,"text",null)}))),Z=N(()=>`Search ${r.value.title}`),j=N(()=>g.value.map(t=>({...t._source,description:t._source.text,to:t._source.programUrlBehavior==="externalSite"?t._source.buttonUrl&&t._source.buttonUrl.length>0&&t._source.buttonUrl[0].buttonUrl?t._source.buttonUrl[0].buttonUrl:null:`/${t._source.uri}`,image:u(t._source,"heroImage[0].image[0]",null),category:u(t._source,"programType[0].title",null)})));function ee(t){const v=[];if(t.filters)for(const s in t.filters)t.filters[s].length>0&&v.push(`${s}:(${t.filters[s].join(" OR ")})`);oe().push({path:"/about/programs",query:{q:t.text,filters:v.join(" AND ")}})}async function te(){const t=await S.getAggregations(f.programsList.filters,"program");V.value=fe(t,f.programsList.filters)}return le(async()=>{await te()}),(t,v)=>{const s=z("NavBreadcrumb"),ne=z("DividerGeneral");return x(),D("main",Fe,[o(s,{to:"/about",title:e(r).title,"parent-title":"About"},null,8,["title"]),o(e(de),{title:e(r).title,text:e(r).text},null,8,["title","text"]),o(e(me),{"search-type":"about",filters:e(V),class:"generic-search","search-generic-query":e(A),placeholder:e(Z),onSearchReady:ee},null,8,["filters","search-generic-query","placeholder"]),b(o(e(p),{theme:"divider"},{default:k(()=>[o(e(L),{class:"search-margin",color:"about"})]),_:1},512),[[w,e(r)&&e(r).featuredPrograms&&e(r).featuredPrograms.length&&e(g).length==0&&!e(y)]]),b(o(e(p),{class:"section-no-top-margin"},{default:k(()=>[o(e(ce),{media:e(q).image,title:e(q).title,category:e(q).category,breadcrumb:"Featured",description:e(q).text,to:e(q).to,"align-right":!0,prompt:"View Program",class:"banner section-featured-banner"},null,8,["media","title","category","description","to"]),e(T)&&e(T).length?(x(),Q(ne,{key:0})):W("",!0),e(T)&&e(T).length?(x(),Q(e(ge),{key:1,class:"section",items:e(T)},null,8,["items"])):W("",!0)]),_:1},512),[[w,e(r)&&e(r).featuredPrograms&&e(r).featuredPrograms.length&&e(g).length==0&&!e(y)]]),o(e(p),{theme:"divider"},{default:k(()=>[o(e(L),{class:"search-margin"})]),_:1}),b(o(e(p),{"section-title":"All Programs & Initiatives"},{default:k(()=>[o(e(J),{items:e(C)},null,8,["items"])]),_:1},512),[[w,e(C)&&e(C).length>0&&e(g).length==0&&!e(y)]]),b(o(e(p),{class:"section-no-top-margin"},{default:k(()=>[e(a).query.q?(x(),D("h2",qe,[U(" Displaying "+P(e(g).length)+" results for ",1),d("strong",null,[d("em",null,"“"+P(e(a).query.q),1)]),U("” ")])):(x(),D("h2",Te," Displaying "+P(e(g).length)+" results ",1)),o(e(J),{items:e(j)},null,8,["items"])]),_:1},512),[[w,e(g)&&e(g).length>0]]),b(o(e(p),{class:"section-no-top-margin"},{default:k(()=>[d("div",xe,[o(e(ve),null,{default:k(()=>[d("h2",null,"Search for “"+P(e(a).query.q)+"” not found.",1),be,we]),_:1})])]),_:1},512),[[w,e(y)]]),o(e(p),{theme:"divider"},{default:k(()=>[o(e(L),{color:"about"})]),_:1}),o(e(p),null,{default:k(()=>[o(e(ke),{class:"block-call-to-action","is-global":!0})]),_:1})])}}});export{Re as default};
