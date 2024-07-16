import{u as Q,k as W,l as J,m as D,r as S,a as B,p as q,e as N,f as w,q as c,s as e,t as V,v as K,x as f,y as A,z as T,A as X,B as Y,C as Z,D as j,E as ee,F as L,G as g,U as E,H as p,I as x,h as o,M as ie}from"./D87QO4dW.js";import{u as ne}from"./BWVOSsg_.js";import{_ as I}from"./I9wROFQL.js";import{r as te}from"./Dim8bG2a.js";import{c as C}from"./DSQ4ZnfI.js";var R={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AccessCollectionsListing"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingAccessCollections",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingAccessCollections_listingAccessCollections_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessCollections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"externalResource_externalResource_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"serviceOrResourceType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"serviceOrResourceType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1157}};R.loc.source={body:`query AccessCollectionsListing {
    entry(section: "listingAccessCollections") {
        title
        text: summary
        ... on listingAccessCollections_listingAccessCollections_Entry {
            accessCollections(orderBy: "title") {
                id
                title
                slug
                text: summary
                uri
                sectionHandle
                externalResourceUrl
                iconName: illustrationsResourcesAndServices
                ... on externalResource_externalResource_Entry {
                    id
                }
                category
                typeHandle
                serviceOrResourceType
                workshopOrEventSeriesType
                sectionHandle
            }
            associatedTopics {
                title
                text: summary
                to: uri
                externalResourceUrl
                iconName: illustrationsResourcesAndServices
                category
                typeHandle
                serviceOrResourceType
                workshopOrEventSeriesType
                sectionHandle
            }
        }
    }
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function F(s,a){if(s.kind==="FragmentSpread")a.add(s.name.value);else if(s.kind==="VariableDefinition"){var l=s.type;l.kind==="NamedType"&&a.add(l.name.value)}s.selectionSet&&s.selectionSet.selections.forEach(function(u){F(u,a)}),s.variableDefinitions&&s.variableDefinitions.forEach(function(u){F(u,a)}),s.definitions&&s.definitions.forEach(function(u){F(u,a)})}var H={};(function(){R.definitions.forEach(function(a){if(a.name){var l=new Set;F(a,l),H[a.name.value]=l}})})();function $(s,a){for(var l=0;l<s.definitions.length;l++){var u=s.definitions[l];if(u.name&&u.name.value==a)return u}}function se(s,a){var l={kind:s.kind,definitions:[$(s,a)]};s.hasOwnProperty("loc")&&(l.loc=s.loc);var u=H[a]||new Set,_=new Set,y=new Set;for(u.forEach(function(d){y.add(d)});y.size>0;){var t=y;y=new Set,t.forEach(function(d){if(!_.has(d)){_.add(d);var k=H[d]||new Set;k.forEach(function(r){y.add(r)})}})}return _.forEach(function(d){var k=$(s,d);k&&l.definitions.push(k)}),l}se(R,"AccessCollectionsListing");const ae={id:"main",class:"page page-collections-access"},le={key:0,class:"about-results"},re={key:1,class:"about-results"},ce={class:"error-text"},oe=o("p",null,[p(" We can’t find the term you are looking for on this page, but we're here to help. "),o("br"),p(" Try searching the whole site from "),o("a",{href:"https://library.ucla.edu"},"UCLA Library Home"),p(", or try one of the these regularly visited links: ")],-1),ue=o("ul",null,[o("li",null,[o("a",{href:"https://www.library.ucla.edu/research-teaching-support/research-help"},"Research Help")]),o("li",null,[o("a",{href:"/help/services-resources/ask-us"},"Ask Us")]),o("li",null,[o("a",{href:"https://www.library.ucla.edu/use/access-privileges/disability-resources"},"Accessibility Resources")])],-1),fe={__name:"index",async setup(s){let a,l;const{$graphql:u,$elasticsearchplugin:_,$dataApi:y}=Q(),t=W(),{data:d,error:k}=([a,l]=J(async()=>X("access-collections",async()=>await u.default.request(R))),a=await a,l(),a);if(k.value)throw D({...k.value,statusMessage:"Page not found.",fatal:!0});if(!d.value.entry)throw D({statusCode:404,message:"Page not found",fatal:!0});d.value.entry.accessCollections&&d.value.entry.accessCollections.length>0;const r=S(I(d.value,"entry",{}));B(d,(i,n)=>{console.log("In watch preview enabled",i,n),r.value=I(i,"entry",{})});const h=S(!1),m=S([]),O=S({queryText:t.query.q||"",queryFilters:t.query.filters&&JSON.parse(t.query.filters)||{}});async function z(){if(t!=null&&t.query&&(t!=null&&t.query.q)&&(t==null?void 0:t.query.q)!==""){console.log("searchES",t.query.q);const i=t.query.q||"*",n=await y.keywordSearchWithFilters(i,C.accessCollections.searchFields,"searchType:accessCollection",[],C.accessCollections.sortField,C.accessCollections.orderBy,C.accessCollections.resultFields,[]);n&&n.hits&&n.hits.total.value>0?(console.log("Search ES HITS,",n.hits.hits),m.value=n.hits.hits,h.value=!1):(h.value=!0,m.value=[])}else m.value=[],h.value=!1}B(()=>t==null?void 0:t.query,(i,n)=>{i!==n&&((n==null?void 0:n.q)===""&&(m.value=[]),O.value.queryText=t.query.q||"",z())},{deep:!0,immediate:!0}),ne({title:r.value?r.value.title:"... loading",meta:[{hid:"description",name:"description",content:te(r.value.text)}]});function U(i){return console.log("TypeHandle",i.typeHandle),i.workshopOrEventSeriesType==="help/services-resources"?"workshop":i.serviceOrResourceType?i.serviceOrResourceType:i.typeHandle==="externalResource"||i.typeHandle==="generalContentPage"?"resource":i.typeHandle}const b=q(()=>{var i,n;return(n=(i=r.value)==null?void 0:i.accessCollections)==null?void 0:n.map(v=>({...v,to:v.externalResourceUrl?v.externalResourceUrl:`/${v.uri}`,category:U(v)}))}),P=q(()=>{var i,n;return(n=(i=r.value)==null?void 0:i.associatedTopics)==null?void 0:n.map(v=>({...v,to:v.externalResourceUrl?v.externalResourceUrl:`/${v.to}`}))}),G=q(()=>{var i;return(i=m.value)==null?void 0:i.map(n=>({...n._source,to:n._source.externalResourceUrl?n._source.externalResourceUrl:`/${n._source.uri}`,category:U(n._source)}))});function M(i){Y().push({path:"/collections/access",query:{q:i==null?void 0:i.text,filters:[]}})}return(i,n)=>(N(),w("main",ae,[c(e(Z),{to:"/collections",title:e(r).title,"parent-title":"Collections",class:"secondary-breadcrumb"},null,8,["title"]),e(r).title?(N(),V(e(j),{key:0,title:e(r).title,text:e(r).text,class:"secondary"},null,8,["title","text"])):K("",!0),c(e(ee),{"search-type":"default",class:"generic-search",placeholder:"ACCESS COLLECTIONS","search-generic-query":e(O),onSearchReady:M},null,8,["search-generic-query"]),c(e(g),{theme:"divider"},{default:f(()=>[c(e(L),{class:"search-margin"})]),_:1}),A(c(e(g),null,{default:f(()=>[c(e(E),{class:"section",items:e(b),"is-horizontal":!0},null,8,["items"])]),_:1},512),[[T,e(r)&&e(r).accessCollections&&e(m).length==0&&!e(h)]]),A(c(e(g),null,{default:f(()=>[e(t).query&&e(t).query.q?(N(),w("h2",le,[p(" Displaying "+x(e(m).length)+" results for ",1),o("strong",null,[o("em",null,"“"+x(e(t).query.q),1)]),p("” ")])):(N(),w("h2",re," Displaying "+x(e(m).length)+" results ",1)),c(e(E),{class:"section",items:e(G),"is-horizontal":!0},null,8,["items"])]),_:1},512),[[T,e(m)&&e(m).length>0]]),A(c(e(g),{class:"section-no-top-margin"},{default:f(()=>[o("div",ce,[c(e(ie),null,{default:f(()=>[o("h2",null,"Search for “"+x(e(t).query.q)+"” not found.",1),oe,ue]),_:1})])]),_:1},512),[[T,e(h)]]),c(e(g),null,{default:f(()=>[c(e(L),{class:"divider divider-way-finder"})]),_:1}),c(e(g),null,{default:f(()=>[c(e(E),{class:"section",items:e(P),"section-title":"Associated Topics",to:"/help/services-resources","button-text":"All services & Resources","is-horizontal":!1},null,8,["items"])]),_:1})]))}};export{fe as default};
