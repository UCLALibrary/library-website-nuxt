import{ah as $,u as H,k as O,l as P,m as E,r as w,a as M,p as N,L,e as o,f as G,q as u,s as e,t as c,v as k,x as p,A as Q,C as z,Y as K,Z as Y,G as S,F as A,ab as Z,as as J,a2 as W,ak as X,al as j,am as ee,_ as te}from"./D87QO4dW.js";import{u as ne}from"./BWVOSsg_.js";import{_ as d}from"./I9wROFQL.js";import{r as ie}from"./Dim8bG2a.js";import{d as ae}from"./BIzRNX9S.js";import{d as le}from"./BEHunIJq.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ProgramDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"program",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"viewStaffDirectory"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"programType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"associatedArticles"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"program",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"dateUpdated desc",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedArticles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"startDate"},name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"endDate"},name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1603}};v.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/AllFpb.gql"

query ProgramDetail($slug: [String!]) {
    entry(section: "program", slug: $slug) {
        id
        sectionHandle
        slug
        uri
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
        buttonUrl {
            ... on buttonUrl_button_BlockType {
                buttonText
                buttonUrl
            }
        }
        email
        phoneNumber
        viewStaffDirectory
        department {
            id
            title
        }
        programType {
            id
            title
        }
        ...AllFpb
    }
    associatedArticles: entries(
        section: "article"
        relatedToEntries: { section: "program", slug: $slug }
        orderBy: "dateUpdated desc"
        limit: 3
    ) {
        ... on article_article_Entry {
            id
            title
            associatedArticles {
                id
                title
            }
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
            description: summary
            category: typeHandle
            startDate: dateCreated
            endDate: dateCreated
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var q={};function V(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return q[a]?!1:(q[a]=!0,!0)})}v.definitions=v.definitions.concat(V(ae.definitions));v.definitions=v.definitions.concat(V(le.definitions));function b(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(r){b(r,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(r){b(r,i)}),n.definitions&&n.definitions.forEach(function(r){b(r,i)})}var T={};(function(){v.definitions.forEach(function(i){if(i.name){var a=new Set;b(i,a),T[i.name.value]=a}})})();function B(n,i){for(var a=0;a<n.definitions.length;a++){var r=n.definitions[a];if(r.name&&r.name.value==i)return r}}function re(n,i){var a={kind:n.kind,definitions:[B(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var r=T[i]||new Set,f=new Set,g=new Set;for(r.forEach(function(s){g.add(s)});g.size>0;){var h=g;g=new Set,h.forEach(function(s){if(!f.has(s)){f.add(s);var m=T[s]||new Set;m.forEach(function(t){g.add(t)})}})}return f.forEach(function(s){var m=B(n,s);m&&a.definitions.push(m)}),a}re(v,"ProgramDetail");const se={id:"main",class:"page page-program-detail"},de=$({__name:"[slug]",async setup(n){let i,a;const{$graphql:r,$getHeaders:f,$elasticsearchplugin:g}=H(),h=O(),{data:s,error:m}=([i,a]=P(async()=>Q(`program-detail-${h.params.slug}`,async()=>await r.default.request(v,{slug:h.params.slug}))),i=await i,a(),i);if(m.value)throw E({...m.value,statusMessage:"Page not found."+m.value,fatal:!0});if(!s.value.entry)throw E({statusCode:404,message:"Page not found",fatal:!0});s.value.entry.slug;const t=w(d(s.value,"entry",{})),F=w(d(s.value,"associatedArticles",{})),x=w([]);M(s,(l,y)=>{console.log("In watch preview enabled, newVal, oldVal",l,y),t.value=d(l.data,"entry",{}),F.value=d(l.data,"associatedArticles",{})}),ne({title:t.value?t.value.title:"... loading",meta:[{hid:"description",name:"description",content:ie(t.value.text)}]});const D=N(()=>d(t.value,"buttonUrl[0].buttonText","")),C=N(()=>d(t.value,"buttonUrl[0].buttonUrl","")),U=N(()=>{var _;const l=t.value.viewStaffDirectory,y=(_=t.value.department[0])!=null&&_.title?t.value.department[0].title:null;return l==="false"?"":y!==null?"/about/staff?q=&filters=departments.title.keyword:("+y.replaceAll(" ","+")+")":"/about/staff?q=&filters=departments.title.keyword:("+t.value.title.replaceAll(" ","+")+")"}),I=N(()=>F.value.map(l=>({...l,to:l.externalResourceUrl!=null?d(l,"externalResourceUrl",""):`/${l.to}`,image:d(l,"heroImage[0].image[0]",{}),category:d(l,"category",""),title:d(l,"title",""),text:d(l,"description",""),startDate:d(l,"startDate","")}))),R=N(()=>t.value.slug==="preservation-conservation-program"?"/about/blogs/listing-preservation-and-conservation-blog":"/about/news");return L(()=>{x.value=f.getHeadersMethod()}),(l,y)=>{const _=ee;return o(),G("main",se,[u(e(z),{to:"/about/programs",title:e(t).title,"parent-title":"Programs"},null,8,["title"]),!e(t).heroImage||e(t).heroImage.length==0?(o(),c(e(K),{key:0,title:e(t).title,text:e(t).text,email:e(t).email,phone:e(t).phoneNumber,"staff-directory-link":e(U),"button-text":e(D),to:e(C)},null,8,["title","text","email","phone","staff-directory-link","button-text","to"])):k("",!0),e(t).heroImage&&e(t).heroImage.length==1?(o(),c(e(S),{key:1,class:"section-banner"},{default:p(()=>[u(e(Y),{media:e(t).heroImage[0].image[0],title:e(t).title,text:e(t).text,email:e(t).email,phone:e(t).phoneNumber,"staff-directory-link":e(U),prompt:e(D),to:e(C),"align-right":!0},null,8,["media","title","text","email","phone","staff-directory-link","prompt","to"])]),_:1})):k("",!0),u(e(S),{theme:"divider"},{default:p(()=>[u(e(A),{class:"divider",color:"about"})]),_:1}),e(x).length>=3?(o(),c(e(Z),{key:2,"section-titles":e(x)},null,8,["section-titles"])):k("",!0),u(e(S),null,{default:p(()=>[e(t).uri=="about/programs/campus-library-instructional-computing-commons-clicc"?(o(),c(e(J),{key:0,lid:"0","is-clicc":!0})):k("",!0),e(t).uri=="about/programs/campus-library-instructional-computing-commons-clicc"?(o(),c(e(A),{key:1,class:"divider",color:"about"})):k("",!0)]),_:1}),u(e(W),{class:"flexible-content",blocks:e(t).blocks},null,8,["blocks"]),u(e(S),{theme:"divider"},{default:p(()=>[e(I).length>0?(o(),c(e(A),{key:0,color:"about",class:"divider-way-finder"})):k("",!0)]),_:1}),e(I).length>0?(o(),c(e(S),{key:3,class:"associated-articles","section-title":"Associated News"},{default:p(()=>[u(e(X),{class:"section-teaser-card",items:e(I)},null,8,["items"]),e(F)?(o(),c(_,{key:0,class:"button-more",to:e(R)},{default:p(()=>[u(e(j),{text:"See More Associated Articles"})]),_:1},8,["to"])):k("",!0)]),_:1})):k("",!0)])}}}),be=te(de,[["__scopeId","data-v-c9f1ea9c"]]);export{be as default};
