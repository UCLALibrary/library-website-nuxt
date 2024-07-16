import{_ as $,u as q,l as z,m as R,r as O,a as Y,p as v,e as F,f as G,q as i,s as e,x as d,A as M,ap as P,F as _,G as c,U as Q,ad as x,aq as w,t as H,ar as K,v as I,ae as J,al as b,ak as X,am as Z}from"./D87QO4dW.js";import{u as j}from"./BWVOSsg_.js";import{_ as a}from"./I9wROFQL.js";import{d as ee}from"./BIzRNX9S.js";var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Homepage"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"homepage",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"homepage_homepage_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"searchLinks"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"searchLinks_searchLinks_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"searchLinkText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"url"},name:{kind:"Name",value:"searchLinkUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"getHelpWith"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"getHelpWith_getHelpWith_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"getHelpWith"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredEvents"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredCollections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"physicalDigital"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredNews"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:3832}};S.loc.source={body:`#import "../gql/fragments/Image.gql"

query Homepage {
    entry(section: "homepage") {
        title
        summary
        ... on homepage_homepage_Entry {
            searchLinks {
                ... on searchLinks_searchLinks_BlockType {
                    text: searchLinkText
                    url: searchLinkUrl
                }
            }
            getHelpWith {
                ... on getHelpWith_getHelpWith_BlockType {
                    titleGeneral
                    sectionSummary
                    getHelpWith {
                        title
                        text: summary
                        uri
                        externalResourceUrl
                        iconName: illustrationsResourcesAndServices
                    }
                }
            }
            featuredEvents {
                id
                sectionHandle
                uri
                workshopOrEventSeriesType
                title
                eventTitle
                startDateWithTime
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                endDateWithTime
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                category: eventType {
                    ... on eventType_Category {
                        id
                        title
                    }
                }
                eventDescription
                summary
                startDate
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                endDate
                    @formatDateTime(
                        format: "Y-m-d\\\\TH:i"
                        timezone: "America/Los_Angeles"
                    )
                associatedLocations {
                    ... on location_location_Entry {
                        id
                        to: uri
                        title
                        summary
                    }
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        id
                        image {
                            ...Image
                        }
                        altText
                    }
                }
            }
            featuredCollections {
                id
                sectionHandle
                title
                text: summary
                uri
                category: physicalDigital
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        id
                        image {
                            ...Image
                        }
                        altText
                    }
                }
                buttonUrl {
                    ... on buttonUrl_button_BlockType {
                        buttonText
                        buttonUrl
                    }
                }
            }
            featuredNews {
                id
                sectionHandle
                title
                text: summary
                to: uri
                externalResourceUrl
                postDate
                articleCategories {
                    title
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        id
                        image {
                            ...Image
                        }
                        altText
                    }
                }
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var V={};function ne(l){return l.filter(function(s){if(s.kind!=="FragmentDefinition")return!0;var r=s.name.value;return V[r]?!1:(V[r]=!0,!0)})}S.definitions=S.definitions.concat(ne(ee.definitions));function T(l,s){if(l.kind==="FragmentSpread")s.add(l.name.value);else if(l.kind==="VariableDefinition"){var r=l.type;r.kind==="NamedType"&&s.add(r.name.value)}l.selectionSet&&l.selectionSet.selections.forEach(function(m){T(m,s)}),l.variableDefinitions&&l.variableDefinitions.forEach(function(m){T(m,s)}),l.definitions&&l.definitions.forEach(function(m){T(m,s)})}var A={};(function(){S.definitions.forEach(function(s){if(s.name){var r=new Set;T(s,r),A[s.name.value]=r}})})();function B(l,s){for(var r=0;r<l.definitions.length;r++){var m=l.definitions[r];if(m.name&&m.name.value==s)return m}}function te(l,s){var r={kind:l.kind,definitions:[B(l,s)]};l.hasOwnProperty("loc")&&(r.loc=l.loc);var m=A[s]||new Set,h=new Set,u=new Set;for(m.forEach(function(k){u.add(k)});u.size>0;){var o=u;u=new Set,o.forEach(function(k){if(!h.has(k)){h.add(k);var f=A[k]||new Set;f.forEach(function(D){u.add(D)})}})}return h.forEach(function(k){var f=B(l,k);f&&r.definitions.push(f)}),r}te(S,"Homepage");const ie={id:"main",class:"page page-home"},ae={__name:"index",async setup(l){var U;let s,r;const{$graphql:m}=q(),{data:h,error:u}=([s,r]=z(async()=>M("home-page",async()=>await m.default.request(S))),s=await s,r(),s);if(u.value)throw R({statusCode:u.value.statusCode,statusMessage:u.value.statusMessage+u.value,fatal:!0});if(!h.value.entry)throw R({statusCode:404,statusMessage:"Page Not Found",fatal:!0});const o=O(a(h.value,"entry",{}));Y(h,(n,t)=>{console.log("In watch preview enabled, newVal, oldVal",n,t),o.value=a(n,"entry",{})});const k=v(()=>o.value.searchLinks.slice(-1)[0]),f=v(()=>[...o.value.searchLinks].slice(0,-1)),D=v(()=>o.value.getHelpWith[0].getHelpWith.map(n=>({...n,to:n.externalResourceUrl?n.externalResourceUrl:`/${n.uri}`}))),g=v(()=>{const n=o.value.featuredEvents[0];return{...n,to:`/${n.uri}`,title:n.sectionHandle==="workshopOrEventSeries"?n.title:n.eventTitle,prompt:n.sectionHandle==="workshopOrEventSeries"?"View series":`View ${n.sectionHandle}`,image:a(n,"heroImage[0].image[0]",null),startDate:n.sectionHandle==="event"?a(n,"startDateWithTime",null):a(n,"startDate",null),endDate:n.sectionHandle==="event"?a(n,"endDateWithTime",null):a(n,"endDate",null),category:a(n,"category[0].title",""),description:n.sectionHandle==="event"?a(n,"eventDescription",""):a(n,"summary",""),locations:n.associatedLocations[0]!=null?n.associatedLocations:n.eventLocation}}),L=v(()=>o.value.featuredEvents.slice(1,3).map(t=>({...t,to:`/${t.uri}`,title:t.sectionHandle==="workshopOrEventSeries"?t.title:t.eventTitle,image:a(t,"heroImage[0].image[0]",null),startDate:t.sectionHandle==="event"?a(t,"startDateWithTime",null):a(t,"startDate",null),endDate:t.sectionHandle==="event"?a(t,"endDateWithTime",null):a(t,"endDate",null),category:"Featured",prompt:t.sectionHandle==="workshopOrEventSeries"?"View series":`View ${t.sectionHandle}`}))),N=v(()=>{const n=o.value.featuredCollections[0];return{...n,to:`/${n.uri}`,image:a(n,"heroImage[0].image[0]",null),category:n.category?n.category.toString():"",description:a(n,"text",""),prompt:`View ${n.sectionHandle}`}}),C=v(()=>o.value.featuredCollections.slice(1).map(t=>({...t,to:`/${t.uri}`,image:a(t,"heroImage[0].image[0]",""),category:t.category?t.category.toString():""})));function E(n){if(!n||n.length===0)return"";let t="";return n.forEach(y=>{t=`${t+y.title}, `}),t.slice(0,-2)}const p=v(()=>{const n=o.value.featuredNews[0];return{...n,to:n.externalResourceUrl!=null?a(n,"externalResourceUrl",""):`/${n.to}`,image:a(n,"heroImage[0].image[0]",null),category:E(n.articleCategories),description:a(n,"text",""),startDate:a(n,"postDate",""),endDate:a(n,"postDate",""),prompt:`View ${n.sectionHandle}`}}),W=v(()=>o.value.featuredNews.slice(1).map(t=>({...t,to:t.externalResourceUrl!=null?a(t,"externalResourceUrl",""):`/${t.to}`,image:a(t,"heroImage[0].image[0]",""),category:E(t.articleCategories),startDate:a(t,"postDate",""),endDate:a(t,"postDate","")})));return j({title:((U=o.value)==null?void 0:U.title)||"... loading",meta:[{hid:"description",name:"description",content:"The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."}]}),(n,t)=>{const y=Z;return F(),G("main",ie,[i(e(P),{"link-items":e(f),"advanced-search-link":e(k)},null,8,["link-items","advanced-search-link"]),i(e(c),{theme:"divider"},{default:d(()=>[i(e(_),{class:"search-margin",color:"help"})]),_:1}),i(e(c),{class:"section-no-top-margin"},{default:d(()=>[i(e(Q),{class:"section",items:e(D),"section-title":e(o).getHelpWith[0].titleGeneral,"section-summary":e(o).getHelpWith[0].sectionSummary,"button-text":"See All Services & Resources",to:"/help/services-resources","is-horizontal":!1},null,8,["items","section-title","section-summary"])]),_:1}),i(e(c),{theme:"divider"},{default:d(()=>[i(e(_),{color:"visit"})]),_:1}),i(e(c),{class:"section-banner"},{default:d(()=>[i(e(x),{media:e(g).image,to:e(g).to,prompt:e(g).prompt,title:e(g).title,"start-date":e(g).startDate,"end-date":e(g).endDate,locations:e(g).associatedLocations,"align-right":!1,category:e(g).category},{default:d(()=>[i(e(w),{text:"Featured Events & Exhibitions"})]),_:1},8,["media","to","prompt","title","start-date","end-date","locations","category"])]),_:1}),i(e(c),{class:"section-dual-masonry"},{default:d(()=>[e(L).length>0?(F(),H(e(K),{key:0,items:e(L),to:"/visit/events-exhibitions",text:"See All Events & Exhibitions"},null,8,["items"])):I("",!0)]),_:1}),i(e(c),{theme:"divider"},{default:d(()=>[i(e(_),{color:"default"})]),_:1}),i(e(c),{class:"section-banner"},{default:d(()=>[i(e(x),{media:e(N).image,to:e(N).to,title:e(N).title,description:e(N).description,category:e(N).category,prompt:e(N).prompt,"align-right":!0},{default:d(()=>[i(e(w),{text:"Featured Collections"})]),_:1},8,["media","to","title","description","category","prompt"])]),_:1}),i(e(c),null,{default:d(()=>[e(C).length>1?(F(),H(e(J),{key:0,items:e(C)},null,8,["items"])):I("",!0),i(y,{to:"/collections/explore",class:"button-more"},{default:d(()=>[i(e(b),{text:"See All Featured Collections"})]),_:1})]),_:1}),i(e(c),{theme:"divider"},{default:d(()=>[i(e(_),{color:"about"})]),_:1}),i(e(c),{class:"section-banner"},{default:d(()=>[i(e(x),{media:e(p).image,to:e(p).to,prompt:e(p).prompt,title:e(p).title,description:e(p).description,category:e(p).category,"start-date":e(p).startDate,"end-date":e(p).endDate,"align-right":!1},{default:d(()=>[i(e(w),{text:"Featured News"})]),_:1},8,["media","to","prompt","title","description","category","start-date","end-date"])]),_:1}),i(e(c),null,{default:d(()=>[e(W).length>1?(F(),H(e(X),{key:0,items:e(W)},null,8,["items"])):I("",!0),i(y,{to:"/about/news",class:"button-more"},{default:d(()=>[i(e(b),{text:"See All News"})]),_:1})]),_:1})])}}},oe=$(ae,[["__scopeId","data-v-99ceaa1e"]]);export{oe as default};
