import{ah as L,k as q,u as B,l as O,m as w,r as x,a as U,p as S,e as N,f as D,q as d,s as e,x as u,t as y,v as b,A as H,C as P,aw as j,G as o,F as _,ax as z,af as G,a1 as J,_ as Q}from"./D87QO4dW.js";import{u as K}from"./BWVOSsg_.js";import{_ as m}from"./I9wROFQL.js";import{r as W}from"./Dim8bG2a.js";import{d as X}from"./BIzRNX9S.js";var k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"StaffDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"staffMember",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"staffMember_staffMember_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"staffPortrait"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameFirst"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameLast"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeName"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"alternativeName_alternativeName_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"languageAltName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"jobTitle"},name:{kind:"Name",value:"staffMemberJobTitle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"departments"},name:{kind:"Name",value:"staffDepartment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"level",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"staffAssociatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pronouns"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"phone"},name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"consultation"},name:{kind:"Name",value:"bookAConsultation"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"topics"},name:{kind:"Name",value:"askMeAbout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"academicDepartments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"biography"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectLibrarian"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"orcid"},name:{kind:"Name",value:"orcidId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publications"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"staffMember",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"authors"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"date"},name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:2026}};k.loc.source={body:`#import "../gql/fragments/Image.gql"

query StaffDetail($slug: [String]!) {
    entry(section: "staffMember", slug: $slug) {
        ... on staffMember_staffMember_Entry {
            id
            sectionHandle
            slug
            uri
            title
            image: staffPortrait {
                ...Image
            }
            to: slug
            nameFirst
            nameLast
            alternativeName {
                ... on alternativeName_alternativeName_BlockType {
                    fullName
                    languageAltName
                }
            }
            jobTitle: staffMemberJobTitle
            departments: staffDepartment(orderBy: "level") {
                id
                title
            }
            locations: staffAssociatedLocations {
                title
                to: uri
                id
            }
            pronouns
            email
            phone: phoneNumber
            consultation: bookAConsultation
            topics: askMeAbout {
                title
                id
            }
            academicDepartments {
                id
                title
            }
            biography
            subjectLibrarian
            orcid: orcidId
            publications
        }
    }
    entries(
        section: "article"
        relatedToEntries: { section: "staffMember", slug: $slug }
    ) {
        ... on article_article_Entry {
            id
            title
            to: uri
            externalResourceUrl
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                    altText
                }
            }

            authors: staffMember {
                id
                slug
                to: uri
                title
            }
            description: summary
            category: typeHandle
            date: dateUpdated
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var E={};function Y(i){return i.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var t=n.name.value;return E[t]?!1:(E[t]=!0,!0)})}k.definitions=k.definitions.concat(Y(X.definitions));function h(i,n){if(i.kind==="FragmentSpread")n.add(i.name.value);else if(i.kind==="VariableDefinition"){var t=i.type;t.kind==="NamedType"&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(l){h(l,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(l){h(l,n)}),i.definitions&&i.definitions.forEach(function(l){h(l,n)})}var I={};(function(){k.definitions.forEach(function(n){if(n.name){var t=new Set;h(n,t),I[n.name.value]=t}})})();function M(i,n){for(var t=0;t<i.definitions.length;t++){var l=i.definitions[t];if(l.name&&l.name.value==n)return l}}function Z(i,n){var t={kind:i.kind,definitions:[M(i,n)]};i.hasOwnProperty("loc")&&(t.loc=i.loc);var l=I[n]||new Set,g=new Set,c=new Set;for(l.forEach(function(r){c.add(r)});c.size>0;){var v=c;c=new Set,v.forEach(function(r){if(!g.has(r)){g.add(r);var a=I[r]||new Set;a.forEach(function(F){c.add(F)})}})}return g.forEach(function(r){var a=M(i,r);a&&t.definitions.push(a)}),t}Z(k,"StaffDetail");const ee={id:"main",class:"page page-staff-detail"},ae={key:1,class:"selected-articles"},ie=L({__name:"[slug]",async setup(i){let n,t;const l=q(),{$graphql:g,$elasticsearchplugin:c}=B(),{data:v,error:r}=([n,t]=O(async()=>H(`staff/${l.params.slug}`,async()=>await g.default.request(k,{slug:l.params.slug}))),n=await n,t(),n);if(r.value)throw w({...r.value,statusMessage:"Page not found."+r.value,fatal:!0});if(!v.value.entry)throw console.log("In staff Slug page no data"),w({statusCode:404,statusMessage:"Page Not Found",fatal:!0});l.params.slug;const a=x(m(v.value,"entry",{})),F=x(m(v.value,"entries",{}));U(v,(s,V)=>{a.value=m(s,"entry",{}),F.value=m(s,"entries",{})}),K({title:a.value?a.value.title:"... loading",meta:[{hid:"description",name:"description",content:W(a.value.text)}]});const C=S(()=>m(a.value,"image[0]",{})),$=S(()=>m(a.value,"alternativeName","")),R=S(()=>m(a.value,"alternativeName[0].languageAltName","")),f=S(()=>F.value.map(s=>({...s,to:s.externalResourceUrl!=null?m(s,"externalResourceUrl",""):`/${s.to}`,image:m(s,"heroImage[0].image[0]",null),staffName:`${s.nameFirst} ${s.nameLast}`})));return(s,V)=>{var A,T;return N(),D("main",ee,[d(e(P),{to:"/about/staff",title:e(a).title,"parent-title":"Staff Directory"},null,8,["title"]),d(e(o),null,{default:u(()=>[d(e(j),{image:e(C),"name-first":e(a).nameFirst,"name-last":e(a).nameLast,"alternative-name":e($),language:e(R),"job-title":e(a).jobTitle,departments:e(a).departments,locations:e(a).locations,pronouns:e(a).pronouns,email:e(a).email,phone:e(a).phone,consultation:e(a).consultation,topics:e(a).topics,"academic-departments":e(a).academicDepartments,biography:e(a).biography},null,8,["image","name-first","name-last","alternative-name","language","job-title","departments","locations","pronouns","email","phone","consultation","topics","academic-departments","biography"])]),_:1}),(A=e(f))!=null&&A.length||e(a).publications||e(a).orcid?(N(),y(e(o),{key:0,class:"selected-articles",theme:"divider"},{default:u(()=>[d(e(_),{class:"divider",color:"about"})]),_:1})):b("",!0),(T=e(f))!=null&&T.length||e(a).publications||e(a).orcid?(N(),D("div",ae,[d(e(o),null,{default:u(()=>[d(e(z),{class:"staff-orcid-publications",orcid:e(a).orcid,publications:e(a).publications},null,8,["orcid","publications"])]),_:1}),d(e(o),{theme:"divider"},{default:u(()=>{var p;return[(p=e(f))!=null&&p.length&&(e(a).publications||e(a).orcid)?(N(),y(e(_),{key:0,class:"divider divider-first",color:"about"})):b("",!0)]}),_:1}),d(e(o),null,{default:u(()=>{var p;return[(p=e(f))!=null&&p.length?(N(),y(e(G),{key:0,class:"staff-article-list-section","section-title":"Articles",items:e(f)},null,8,["items"])):b("",!0)]}),_:1})])):b("",!0),d(e(o),{theme:"divider"},{default:u(()=>[d(e(_),{class:"divider divider-first",color:"about"})]),_:1}),d(e(o),null,{default:u(()=>[d(e(J),{class:"block-call-to-action","is-global":!0})]),_:1})])}}}),re=Q(ie,[["__scopeId","data-v-0e4062c5"]]);export{re as default};
