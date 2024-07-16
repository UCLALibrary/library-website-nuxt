import{_ as q,k as R,u as V,l as P,m as M,r as O,a as G,p as g,e as f,f as H,q as m,s as e,t as p,v as N,x as y,A as J,C as Q,Y as U,Z as Y,G as S,F as C,a2 as z,a3 as Z}from"./D87QO4dW.js";import{u as K}from"./BWVOSsg_.js";import{_}from"./I9wROFQL.js";import{r as W}from"./Dim8bG2a.js";import{d as X}from"./BIzRNX9S.js";import{d as j}from"./BEHunIJq.js";import{f as ee}from"./cwXK75ha.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ArticleNewsDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"contributors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_staffMember_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_externalContributor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"contributor"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedStaffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"staffMember_staffMember_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"phone"},name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"jobTitle"},name:{kind:"Name",value:"staffMemberJobTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameFirst"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameLast"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"consultation"},name:{kind:"Name",value:"bookAConsultation"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"departments"},name:{kind:"Name",value:"staffDepartment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"level",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"staffAssociatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"staffPortrait"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}}]}}]}}],loc:{start:0,end:2351}};d.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/AllFpb.gql"

query ArticleNewsDetail($slug: [String!]) {
    entry(section: "article", slug: $slug) {
        ... on article_article_Entry {
            postDate
            id
            slug
            uri
            sectionHandle
            title
            text: summary
            externalResourceUrl
            dateCreated
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                }
            }
            category: articleCategories {
                id
                title
                uri
            }
            contributors {
                ... on contributors_staffMember_BlockType {
                    byline
                    staffMember {
                        title
                        to: slug
                    }
                }
                ... on contributors_externalContributor_BlockType {
                byline
                title: contributor
                }
            }
            locations: associatedLocations {
                id
                title
                to: uri
                ... on location_location_Entry {
                    id
                    email
                }
            }
            department {
                id
                title
                uri
            }
            associatedStaffMember {
                ... on staffMember_staffMember_Entry {
                    id
                    email
                    phone: phoneNumber
                    jobTitle: staffMemberJobTitle
                    nameFirst
                    nameLast
                    to: slug
                    consultation: bookAConsultation
                    departments: staffDepartment(orderBy: "level") {
                        id
                        title
                    }
                    locations: staffAssociatedLocations {
                        id
                        title
                        to: slug
                    }
                    image: staffPortrait {
                        ...Image
                    }
                }
            }
            ...AllFpb
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var T={};function D(n){return n.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var a=t.name.value;return T[a]?!1:(T[a]=!0,!0)})}d.definitions=d.definitions.concat(D(X.definitions));d.definitions=d.definitions.concat(D(j.definitions));function F(n,t){if(n.kind==="FragmentSpread")t.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){F(s,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){F(s,t)}),n.definitions&&n.definitions.forEach(function(s){F(s,t)})}var h={};(function(){d.definitions.forEach(function(t){if(t.name){var a=new Set;F(t,a),h[t.name.value]=a}})})();function A(n,t){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==t)return s}}function ie(n,t){var a={kind:n.kind,definitions:[A(n,t)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=h[t]||new Set,c=new Set,r=new Set;for(s.forEach(function(i){r.add(i)});r.size>0;){var k=r;r=new Set,k.forEach(function(i){if(!c.has(i)){c.add(i);var o=h[i]||new Set;o.forEach(function(v){r.add(v)})}})}return c.forEach(function(i){var o=A(n,i);o&&a.definitions.push(o)}),a}ie(d,"ArticleNewsDetail");const ne={id:"main",class:"page page-news-detail"},te={__name:"[slug]",async setup(n){let t,a;const s=R(),{$graphql:c}=V(),{data:r,error:k}=([t,a]=P(async()=>J(`news/${s.params.slug}`,async()=>await c.default.request(d,{slug:s.params.slug}))),t=await t,a(),t);if(k.value)throw M({...k.value,statusMessage:"Page not found."+k.value,fatal:!0});if(!r.value.entry)throw console.log("In news Slug page no data"),M({statusCode:404,statusMessage:"Page Not Found",fatal:!0});r.value.entry.slug;const i=O(_(r.value,"entry",{}));G(r,(l,b)=>{console.log("In watch preview enabled, newVal, oldVal",l,b),i.value=_(l,"entry",{})}),K({title:i.value?i.value.title:"... loading",meta:[{hid:"description",name:"description",content:W(i.text)}]});const o=g(()=>(i.value.contributors||[]).reduce((I,u)=>{const E=u.staffMember&&u.staffMember.length>0,$=!!u.title;if(E||$){const B=u.title||u.staffMember[0].title,L=`${u.byline||""} ${B}`;I.push(L)}return I},[]));g(()=>ee(new Date(i.postDate),"MMMM d, Y"));const v=g(()=>i.value.associatedStaffMember.map(l=>({...l,to:`/about/staff/${l.to}`,image:_(l,"image[0]",null),staffName:`${l.nameFirst} ${l.nameLast}`}))),w=g(()=>i.value.category[0]?i.value.category[0].title:""),x=g(()=>i.value.locations.map(l=>({...l,to:`/${l.to}`})));return(l,b)=>(f(),H("main",ne,[m(e(Q),{to:"/about/news",title:e(i).title,"parent-title":"All Library News"},null,8,["title"]),!e(i).heroImage||e(i).heroImage.length==0?(f(),p(e(U),{key:0,class:"banner-text",category:e(w),title:e(i).title,text:e(i).text,byline:e(o),locations:e(x),"date-created":e(i).postDate},null,8,["category","title","text","byline","locations","date-created"])):N("",!0),e(i)&&e(i).heroImage&&e(i).heroImage.length==1?(f(),p(e(S),{key:1,class:"section-banner"},{default:y(()=>[m(e(Y),{media:e(i).heroImage[0].image[0],to:e(i).to,category:e(w),title:e(i).title,text:e(i).text,byline:e(o),locations:e(x),"date-created":e(i).postDate,"align-right":!0},null,8,["media","to","category","title","text","byline","locations","date-created"])]),_:1})):N("",!0),m(e(S),{theme:"divider"},{default:y(()=>[m(e(C),{class:"divider",color:"about"})]),_:1}),m(e(z),{class:"flexible-content",blocks:e(i).blocks},null,8,["blocks"]),e(v).length>0?(f(),p(e(S),{key:2,theme:"divider"},{default:y(()=>[m(e(C),{class:"divider",color:"about"})]),_:1})):N("",!0),e(v).length>0?(f(),p(e(S),{key:3,class:"associated-staff-member","section-title":"Associated Staff Member"},{default:y(()=>[m(e(Z),{items:e(v)},null,8,["items"])]),_:1})):N("",!0)]))}},ye=q(te,[["__scopeId","data-v-af8325c7"]]);export{ye as default};
