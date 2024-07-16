import{_ as $,u as H,k as P,l as z,m as T,r as h,a as Q,p as f,L as Y,e as v,f as K,q as s,s as e,x as c,t as p,v as S,A as J,Y as W,F as x,G as g,ab as X,U as Z,ad as j,ae as ee,al as A,ak as te,a2 as ne,am as D}from"./D87QO4dW.js";import{u as ie}from"./BWVOSsg_.js";import{_ as u}from"./I9wROFQL.js";import{f as ae}from"./cwXK75ha.js";import{r as le}from"./Dim8bG2a.js";import{d as re}from"./BEHunIJq.js";import"./BIzRNX9S.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingCollections",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingCollections_listingCollections_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredResourcesSection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"featuredResourcesSection_featuredResources_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredResources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"iconName"},name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredCollectionsSection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"featuredCollectionsSection_featuredCollections_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredCollections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"titleLink"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"button"},name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"physicalDigital"},arguments:[],directives:[]}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToCategories"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"StringValue",value:"collections",block:!1}}]}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postDate"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"entryCount"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToCategories"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"StringValue",value:"collections",block:!1}}]}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[]}]}}],loc:{start:0,end:2470}};y.loc.source={body:`#import "../gql/fragments/collections/AllFpb.gql"

query CollectionsList {
    entry(section: "listingCollections") {
        ... on listingCollections_listingCollections_Entry {
            title
            text: summary
            featuredResourcesSection {
                ... on featuredResourcesSection_featuredResources_BlockType {
                    titleGeneral
                    sectionSummary
                    featuredResources {
                        title
                        text: summary
                        to: uri
                        externalResourceUrl
                        iconName: illustrationsResourcesAndServices
                    }
                }
            }
            featuredCollectionsSection {
                ... on featuredCollectionsSection_featuredCollections_BlockType {
                    titleGeneral
                    sectionSummary
                    featuredCollections {
                        title
                        summary
                        titleLink: uri
                        uri
                        heroImage {
                            ... on heroImage_heroImage_BlockType {
                                id
                                image {
                                    ...Image
                                }
                            }
                        }
                        button: buttonUrl {
                            ... on buttonUrl_button_BlockType {
                                id
                                buttonText
                                buttonUrl
                            }
                        }
                        category: physicalDigital
                    }
                }
            }
            ...AllFpb
        }
    }
    entries(
        section: "article"
        relatedToCategories: [{ title: "collections" }]
        orderBy: "postDate DESC"
        limit: 3
    ) {
        title
        text: summary
        heroImage {
            ... on heroImage_heroImage_BlockType {
                id
                image {
                    ...Image
                }
            }
        }
        articleCategories {
            title
        }
        to: uri
        externalResourceUrl
        postDate
    }
    entryCount(
        section: "article"
        relatedToCategories: [{ title: "collections" }]
        orderBy: "postDate DESC"
        limit: 3
    )
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var B={};function se(i){return i.filter(function(l){if(l.kind!=="FragmentDefinition")return!0;var r=l.name.value;return B[r]?!1:(B[r]=!0,!0)})}y.definitions=y.definitions.concat(se(re.definitions));function b(i,l){if(i.kind==="FragmentSpread")l.add(i.name.value);else if(i.kind==="VariableDefinition"){var r=i.type;r.kind==="NamedType"&&l.add(r.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(o){b(o,l)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(o){b(o,l)}),i.definitions&&i.definitions.forEach(function(o){b(o,l)})}var w={};(function(){y.definitions.forEach(function(l){if(l.name){var r=new Set;b(l,r),w[l.name.value]=r}})})();function E(i,l){for(var r=0;r<i.definitions.length;r++){var o=i.definitions[r];if(o.name&&o.name.value==l)return o}}function oe(i,l){var r={kind:i.kind,definitions:[E(i,l)]};i.hasOwnProperty("loc")&&(r.loc=i.loc);var o=w[l]||new Set,N=new Set,d=new Set;for(o.forEach(function(n){d.add(n)});d.size>0;){var C=d;d=new Set,C.forEach(function(n){if(!N.has(n)){N.add(n);var m=w[n]||new Set;m.forEach(function(_){d.add(_)})}})}return N.forEach(function(n){var m=E(i,n);m&&r.definitions.push(m)}),r}oe(y,"CollectionsList");const de={id:"main",class:"page page-collections"},ue={__name:"index",async setup(i){let l,r;const{$graphql:o,$getHeaders:N}=H();P();const{data:d,error:C}=([l,r]=z(async()=>J("collections-list",async()=>({data:await o.default.request(y,{})}))),l=await l,r(),l);if(C.value)throw T({...C.value,statusMessage:"Page not found."+C.value,fatal:!0});if(!d.value.data.entry&&!d.value.data.entries)throw T({statusCode:404,message:"Page not found",fatal:!0});const n=h(u(d.value.data,"entry",{})),m=h(u(d.value.data,"entries",[])),_=h(u(d.value.data,"entryCount",0));Q(d,(t,a)=>{console.log("In watch preview enabled, newVal, oldVal",t,a),n.value=u(t.data,"entry",{}),m.value=u(t.data,"entries",[]),_.value=u(t.data,"entryCount",0)});const R=h([]);ie({title:n.value?n.value.title:"... loading",meta:[{hid:"description",name:"description",content:le(n.value.text)}]});const F=f(()=>n.value.featuredResourcesSection.map(t=>({...t,featuredResources:t.featuredResources.map(a=>({...a,to:a.externalResourceUrl?a.externalResourceUrl:`/${a.to}`}))}))),L=f(()=>n.value.featuredCollectionsSection[0]?n.value.featuredCollectionsSection[0]:{}),k=f(()=>n.value.featuredCollectionsSection[0].featuredCollections.map(a=>({...a,media:a.heroImage[0].image[0],title:u(a,"title",""),titleLink:`/${a.titleLink}`,description:"",category:a.category?a.category.join(", "):"",to:u(a,"button[0].buttonUrl",""),prompt:u(a,"button[0].buttonText","")}))),U=f(()=>n.value.featuredCollectionsSection[0].featuredCollections.length>1?n.value.featuredCollectionsSection[0].featuredCollections.slice(1).map(t=>({...t,image:u(t,"heroImage[0].image[0]",""),category:t.category.join(", "),to:`/${t.uri}`,text:t.summary})):[]),V=f(()=>m.value?m.value.map(t=>{const a=O(t.articleCategories);return{...t,to:t.externalResourceUrl!=null?u(t,"externalResourceUrl",""):`/${t.to}`,image:u(t,"heroImage[0].image[0]",null),category:a,bylineOne:G(t.postDate)}}):[]),q=f(()=>n.value.locationType!=="affiliateLibrary"?"/about/news?q=&filters=articleCategory.title.keyword:("+encodeURIComponent("Collections")+")":"");function G(t){return ae(new Date(t),"MMMM d, Y")}function O(t){let a="";return t.forEach(I=>{a=a+I.title+", "}),a.slice(0,-2)}return Y(()=>{R.value=N.getHeadersMethod()}),(t,a)=>{const I=D,M=D;return v(),K("main",de,[s(e(W),{class:"banner-text",title:e(n).title,text:e(n).text},null,8,["title","text"]),s(e(g),null,{default:c(()=>[s(e(x),{class:"divider divider-way-finder"})]),_:1}),e(R).length>=3?(v(),p(e(X),{key:0,"section-titles":e(R)},null,8,["section-titles"])):S("",!0),s(e(g),{"section-title":e(F)[0].titleGeneral,"section-summary":e(F)[0].sectionSummary},{default:c(()=>[e(F).length?(v(),p(e(Z),{key:0,items:e(F)[0].featuredResources,"is-horizontal":!1,"button-text":"See More",to:"/collections/access"},null,8,["items"])):S("",!0)]),_:1},8,["section-title","section-summary"]),s(e(g),null,{default:c(()=>[s(e(x),{class:"divider divider-way-finder"})]),_:1}),s(e(g),{"section-title":e(n).featuredCollectionsSection[0].titleGeneral,"section-summary":e(n).featuredCollectionsSection[0].sectionSummary},{default:c(()=>[e(n).featuredCollectionsSection.length>0?(v(),p(e(j),{key:0,class:"banner banner-about",media:e(k)[0].media,title:e(k)[0].title,description:e(k)[0].summary,category:e(k)[0].category,to:e(k)[0].to,prompt:e(k)[0].prompt,"title-link":e(k)[0].titleLink},null,8,["media","title","description","category","to","prompt","title-link"])):S("",!0),e(L).featuredCollections.length>1?(v(),p(e(ee),{key:1,class:"section-teaser-highlight",items:e(U)},null,8,["items"])):S("",!0),s(I,{to:"/collections/explore",class:"button-more"},{default:c(()=>[s(e(A),{text:"Browse Collections"})]),_:1})]),_:1},8,["section-title","section-summary"]),s(e(g),null,{default:c(()=>[s(e(x),{class:"divider divider-way-finder"})]),_:1}),s(e(g),{"section-title":"Collections News"},{default:c(()=>[s(e(te),{class:"section-teaser-card",items:e(V)},null,8,["items"]),e(_)>3?(v(),p(M,{key:0,class:"button-more",to:e(q)},{default:c(()=>[s(e(A),{text:"See All Collections News"})]),_:1},8,["to"])):S("",!0)]),_:1}),s(e(g),null,{default:c(()=>[s(e(x),{class:"divider divider-way-finder"})]),_:1}),e(n).blocks?(v(),p(e(ne),{key:1,class:"flexible-content",blocks:e(n).blocks},null,8,["blocks"])):S("",!0)])}}},be=$(ue,[["__scopeId","data-v-fa9422b1"]]);export{be as default};
