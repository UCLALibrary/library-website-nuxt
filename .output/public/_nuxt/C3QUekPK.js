import{_ as M,u as V,k as O,l as H,m as $,r as E,a as P,p as f,L as G,e as o,f as W,q as v,s as e,t as u,v as c,x as p,A as z,C as J,Y as Q,Z as K,G as N,F as _,ab as Y,a2 as Z,ag as X,af as j,a3 as ee}from"./D87QO4dW.js";import{u as ne}from"./BWVOSsg_.js";import{_ as r}from"./I9wROFQL.js";import{f as ie}from"./DJY1H8k3.js";import{r as te}from"./Dim8bG2a.js";import{d as ae}from"./BIzRNX9S.js";import{d as le}from"./CI7m89ct.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./BEx1Bxtt.js";import"./CL8yYu5A.js";import"./CLd6PcwS.js";import"./DeFtLck0.js";import"./Q2Lk47BP.js";import"./CvV-bfGY.js";var g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"collection",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"physicalDigital"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectAreas"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"collectionFormats"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"languageOfOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"periodDateRange"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"richTextSimplified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"endowment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"endowment_endowments_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"donors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"associatedStaffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"jobTitle"},name:{kind:"Name",value:"staffMemberJobTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameFirst"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameLast"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeName"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"alternativeName_alternativeName_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"languageAltName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"phone"},name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"consultation"},name:{kind:"Name",value:"bookAConsultation"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"departments"},name:{kind:"Name",value:"staffDepartment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"level",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"staffAssociatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"staffPortrait"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"resourceServiceWorkshop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExhibitionsAndCollectionsFpb"},directives:[]}]}}]}}],loc:{start:0,end:2194}};g.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/ExhibitionsAndCollectionsFpb.gql"

query CollectionDetail($slug: [String!]) {
  entry(section: "collection", slug: $slug) {
    postDate
    id
    physicalDigital
    uri
    slug
    typeHandle
    sectionHandle
    heroImage {
      ... on heroImage_heroImage_BlockType {
        id
        image {
          ...Image
        }
        altText
      }
    }
    title
    text: summary
    subjectAreas {
      title
    }
    collectionFormats {
      title
    }
    languageOfOrigin
    periodDateRange
    richTextSimplified
    buttonUrl {
      ... on buttonUrl_button_BlockType {
        buttonText
        buttonUrl
      }
    }
    endowment {
      ... on endowment_endowments_Entry {
        id
        title
        description: summary
        to: uri
        donors {
          firstName
          lastName
        }
      }
      image: heroImage {
        ... on heroImage_heroImage_BlockType {
          id
          image {
            ...Image
          }
          altText
          uri
          title
        }
      }
    }
    associatedStaffMember {
      email
      jobTitle: staffMemberJobTitle
      nameFirst
      nameLast
      alternativeName {
                ... on alternativeName_alternativeName_BlockType {
                    fullName
                    languageAltName
                }
            }
      to: uri
      phone: phoneNumber
      consultation: bookAConsultation
      departments: staffDepartment(orderBy: "level") {
                id
                title
            }
      locations: staffAssociatedLocations {
                id
                title
                uri
            }
      image: staffPortrait {
          ...Image
      }
    }
    resourceServiceWorkshop {
      id
      title
      text: summary
      to: uri
      externalResourceUrl
    }
    ...ExhibitionsAndCollectionsFpb
  }
}

# fragment Image on AssetInterface {
#   id
#   src: url(transform: "fullscreen")
#   height(transform: "fullscreen")
#   width(transform: "fullscreen")
#   srcset(sizes: ["375", "960", "1280", "1920", "2560"])
#   alt: title
#   focalPoint
# }
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var U={};function R(i){return i.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var s=a.name.value;return U[s]?!1:(U[s]=!0,!0)})}g.definitions=g.definitions.concat(R(ae.definitions));g.definitions=g.definitions.concat(R(le.definitions));function w(i,a){if(i.kind==="FragmentSpread")a.add(i.name.value);else if(i.kind==="VariableDefinition"){var s=i.type;s.kind==="NamedType"&&a.add(s.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(d){w(d,a)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(d){w(d,a)}),i.definitions&&i.definitions.forEach(function(d){w(d,a)})}var A={};(function(){g.definitions.forEach(function(a){if(a.name){var s=new Set;w(a,s),A[a.name.value]=s}})})();function B(i,a){for(var s=0;s<i.definitions.length;s++){var d=i.definitions[s];if(d.name&&d.name.value==a)return d}}function se(i,a){var s={kind:i.kind,definitions:[B(i,a)]};i.hasOwnProperty("loc")&&(s.loc=i.loc);var d=A[a]||new Set,h=new Set,S=new Set;for(d.forEach(function(m){S.add(m)});S.size>0;){var b=S;S=new Set,b.forEach(function(m){if(!h.has(m)){h.add(m);var k=A[m]||new Set;k.forEach(function(n){S.add(n)})}})}return h.forEach(function(m){var k=B(i,m);k&&s.definitions.push(k)}),s}se(g,"CollectionDetail");const re={id:"main",class:"page page-collection-detail"},de={__name:"[slug]",async setup(i){let a,s;const{$graphql:d,$getHeaders:h,$elasticsearchplugin:S}=V(),b=O(),{data:m,error:k}=([a,s]=H(async()=>z(`collection-detail-${b.params.slug}`,async()=>await d.default.request(g,{slug:b.params.slug}))),a=await a,s(),a);if(k.value)throw $({...k.value,statusMessage:"Page not found."+k.value,fatal:!0});if(!m.value.entry)throw $({statusCode:404,message:"Page not found",fatal:!0});m.value.entry.slug;const n=E(r(m.value,"entry",{})),T=E([]);P(m,(t,l)=>{console.log("In watch preview enabled, newVal, oldVal",t,l),n.value=r(t,"entry",{})}),ne({title:n.value?n.value.title:"... loading",meta:[{hid:"description",name:"description",content:te(n.value.text)}]});const q=f(()=>n.value.physicalDigital.length===1?n.value.physicalDigital[0]:`${n.value.physicalDigital[0]} & ${n.value.physicalDigital[1]}`),D=f(()=>r(n.value,"buttonUrl[0].buttonText","")),C=f(()=>r(n.value,"buttonUrl[0].buttonUrl",""));f(()=>r(n.value,"subjectAreas",""));const I=f(()=>n.value.resourceServiceWorkshop.map(l=>({...l,to:l.externalResourceUrl?l.externalResourceUrl:`/${l.to}`,title:r(l,"title",""),text:r(l,"text","")}))),x=f(()=>n.value.endowment?n.value.endowment.map((t,l)=>({to:`/${t.to}`,image:r(t,"image[0].image[0]",null),title:r(t,"title",""),description:r(t,"description",""),category:t.donors.length>0?L(t):""})):""),y=f(()=>n.value.associatedStaffMember.map(t=>({...t,to:`/${t.to}`,image:r(t,"image[0]",null),staffName:`${t.nameFirst} ${t.nameLast}`,language:r(t,"alternativeName[0].languageAltName",null),alternativeFullName:r(t,"alternativeName[0].fullName",null),locations:r(t,"locations",[]).map(l=>({...l,uri:ie(l.uri)}))})));function L(t){const l=[];return t.donors.map(F=>F.firstName===null?l.push(`${F.lastName}`):l.push(`${F.firstName} ${F.lastName}`)),l.length===1?`Donor: ${l[0]}`:`Donors: ${[l.slice(0,-1).join(", "),l.slice(-1)[0]].join(l.length<2?"":" and ")}`}return G(()=>{T.value=h.getHeadersMethod()}),(t,l)=>(o(),W("main",re,[v(e(J),{to:"/collections/explore",title:e(n).title,"parent-title":"Explore Collections"},null,8,["title"]),!e(n).heroImage||e(n).heroImage.length==0?(o(),u(e(Q),{key:0,title:e(n).title,text:e(n).text,"subject-areas":e(n).subjectAreas,email:"AskUs@library.ucla.edu","button-text":e(D),to:e(C)},null,8,["title","text","subject-areas","button-text","to"])):c("",!0),e(n).heroImage&&e(n).heroImage.length==1?(o(),u(e(N),{key:1,class:"section-banner"},{default:p(()=>[v(e(K),{media:e(n).heroImage[0].image[0],title:e(n).title,text:e(n).text,category:e(q),"subject-areas":e(n).subjectAreas,email:"AskUs@library.ucla.edu",prompt:e(D),to:e(C),"align-right":!1},null,8,["media","title","text","category","subject-areas","prompt","to"])]),_:1})):c("",!0),v(e(N),{theme:"divider"},{default:p(()=>[v(e(_),{class:"divider-way-finder",color:"default"})]),_:1}),e(T).length>=3?(o(),u(e(Y),{key:2,"section-titles":e(T)},null,8,["section-titles"])):c("",!0),e(n).richTextSimplified?(o(),u(e(N),{key:3,"section-title":"Using the Collection","section-summary":e(n).richTextSimplified},{default:p(()=>[e(n).blocks.length>0?(o(),u(e(_),{key:0,class:"divider-way-finder",color:"default"})):c("",!0)]),_:1},8,["section-summary"])):c("",!0),v(e(Z),{class:"flexible-content",blocks:e(n).blocks},null,8,["blocks"]),e(I).length>0||e(x).length>0||e(y).length>0?(o(),u(e(N),{key:4,theme:"divider"},{default:p(()=>[v(e(_),{class:"divider-way-finder",color:"default"})]),_:1})):c("",!0),e(I).length?(o(),u(e(N),{key:5,"section-title":"Services & Resources"},{default:p(()=>[v(e(X),{items:e(I),class:"section-header"},null,8,["items"]),e(x).length>0||e(y).length>0?(o(),u(e(_),{key:0,class:"divider-way-finder",color:"default"})):c("",!0)]),_:1})):c("",!0),e(x).length?(o(),u(e(N),{key:6,"section-title":"Collection Endowments"},{default:p(()=>[v(e(j),{items:e(x),class:"block-staff-article-item"},null,8,["items"]),e(y).length>0?(o(),u(e(_),{key:0,class:"divider-way-finder",color:"default"})):c("",!0)]),_:1})):c("",!0),e(y).length>0?(o(),u(e(N),{key:7,"section-title":"Contact a Subject Specialist"},{default:p(()=>[v(e(ee),{items:e(y)},null,8,["items"])]),_:1})):c("",!0)]))}},be=M(de,[["__scopeId","data-v-a887befc"]]);export{be as default};
