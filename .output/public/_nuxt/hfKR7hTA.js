import{_ as T,u as j,l as D,m as C,r as w,a as U,p as h,e as v,f as F,q as d,s as e,x as f,t as S,v as A,A as q,C as O,Y as V,F as x,G as p,ac as J,U as B}from"./D87QO4dW.js";import{u as P}from"./BWVOSsg_.js";import{_ as k}from"./I9wROFQL.js";import{f as L}from"./DJY1H8k3.js";import{r as I}from"./Dim8bG2a.js";var N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"JobOpportunitiesList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingCareers",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingCareers_listingCareers_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"allJobs"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"job",block:!1}},{kind:"Argument",name:{kind:"Name",value:"staffOrStudentPosition"},value:{kind:"StringValue",value:"careers",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"jobRequisitionNumber DESC",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"job_job_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"jobType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"jobType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"jobRequisitionNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"jobPostingURL"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payRate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"associatedLocations"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"uri"},name:{kind:"Name",value:"publicUrl"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:799}};N.loc.source={body:`query JobOpportunitiesList {
  entry(section: "listingCareers", orderBy: "postDate") {
    ... on listingCareers_listingCareers_Entry {
      title
      text: summary
      email
      phoneNumber
      associatedTopics {
        title
        text: summary
        uri
        externalResourceUrl
        illustrationsResourcesAndServices
      }
    }
  }
  allJobs: entries(section: "job", staffOrStudentPosition: "careers", orderBy: "jobRequisitionNumber DESC") {
    title
    summary
    ... on job_job_Entry {
      jobType {
        ... on jobType_Category {
          title
        }
      }
      jobRequisitionNumber
      jobPostingURL
      payRate
      department {
        title
      }
      associatedLocations: location {
        title
        uri: publicUrl
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function y(i,t){if(i.kind==="FragmentSpread")t.add(i.name.value);else if(i.kind==="VariableDefinition"){var n=i.type;n.kind==="NamedType"&&t.add(n.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(s){y(s,t)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(s){y(s,t)}),i.definitions&&i.definitions.forEach(function(s){y(s,t)})}var R={};(function(){N.definitions.forEach(function(t){if(t.name){var n=new Set;y(t,n),R[t.name.value]=n}})})();function E(i,t){for(var n=0;n<i.definitions.length;n++){var s=i.definitions[n];if(s.name&&s.name.value==t)return s}}function G(i,t){var n={kind:i.kind,definitions:[E(i,t)]};i.hasOwnProperty("loc")&&(n.loc=i.loc);var s=R[t]||new Set,u=new Set,c=new Set;for(s.forEach(function(r){c.add(r)});c.size>0;){var l=c;c=new Set,l.forEach(function(r){if(!u.has(r)){u.add(r);var m=R[r]||new Set;m.forEach(function(b){c.add(b)})}})}return u.forEach(function(r){var m=E(i,r);m&&n.definitions.push(m)}),n}G(N,"JobOpportunitiesList");const Q={id:"main",class:"page page-job-opportunities"},$={key:1,class:"no-positions"},z={key:1,class:"no-positions"},H={__name:"index",async setup(i){let t,n;const{$graphql:s}=j(),{data:u,error:c}=([t,n]=D(async()=>q("job-opportunities-list",async()=>await s.default.request(N))),t=await t,n(),t);if(c.value)throw C({...c.value,statusMessage:"Page not found."+c.value,fatal:!0});if(!u.value.entry&&!u.value.allJobs)throw C({statusCode:404,message:"Page not found",fatal:!0});const l=w(k(u.value,"entry",{})),r=w(k(u.value,"allJobs",{}));U(u,(o,a)=>{console.log("In watch preview enabled, newVal, oldVal",o,a),l.value=k(o,"entry",{}),r.value=k(o,"allJobs",{})}),P({title:l.value?l.value.title:"... loading",meta:[{hid:"description",name:"description",content:I(l.value.text)}]});const m=h(()=>r.value.filter(a=>a.jobType[0].title==="Academic Librarian").map(a=>({...a,text:k(a,"text",""),associatedLocations:a.associatedLocations.map(g=>({...g,to:L(g.uri)}))}))),b=h(()=>r.value.filter(a=>a.jobType[0].title==="Staff").map(a=>({...a,payRate:k(a,"payRate",null),text:k(a,"text",""),associatedLocations:a.associatedLocations.map(g=>({...g,to:L(g.uri)}))}))),_=h(()=>l.value.associatedTopics.map(o=>({...o,to:o.externalResourceUrl?o.externalResourceUrl:`/${o.uri}`})));return(o,a)=>(v(),F("main",Q,[d(e(O),{to:"/about/jobs",title:e(l).title,"parent-title":"Jobs"},null,8,["title"]),d(e(V),{class:"banner-text",title:e(l).title,text:e(l).text,email:e(l).email,phone:e(l).phoneNumber},null,8,["title","text","email","phone"]),d(e(p),{theme:"divider"},{default:f(()=>[d(e(x),{class:"divider",color:"about"})]),_:1}),d(e(p),{"section-title":"Academic Librarian Jobs"},{default:f(()=>[e(m).length>0?(v(),S(e(J),{key:0,items:e(m)},null,8,["items"])):(v(),F("div",$," No positions available at this time "))]),_:1}),d(e(p),{theme:"divider"},{default:f(()=>[d(e(x),{class:"divider",color:"about"})]),_:1}),d(e(p),{"section-title":"Staff Jobs"},{default:f(()=>[e(b).length>0?(v(),S(e(J),{key:0,items:e(b)},null,8,["items"])):(v(),F("div",z," No positions available at this time "))]),_:1}),e(_).length>0?(v(),S(e(p),{key:0,theme:"divider"},{default:f(()=>[d(e(x),{class:"divider",color:"about"})]),_:1})):A("",!0),d(e(p),null,{default:f(()=>[e(_).length>0?(v(),S(e(B),{key:0,items:e(_),"section-title":"Associated Topics"},null,8,["items"])):A("",!0)]),_:1})]))}},Z=T(H,[["__scopeId","data-v-32527263"]]);export{Z as default};
