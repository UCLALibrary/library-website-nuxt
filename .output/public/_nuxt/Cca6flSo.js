import{_ as O,u as P,l as B,m as L,r as E,a as D,p as y,e as u,f as U,q as r,s as e,t as g,x as v,v as x,A as I,C as J,Y as A,F as N,G as k,ac as T,U as j}from"./D87QO4dW.js";import{u as q}from"./BWVOSsg_.js";import{_ as f}from"./I9wROFQL.js";import{f as V}from"./DJY1H8k3.js";import{r as $}from"./Dim8bG2a.js";var _={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"StudentOpportunitiesList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingStudentOpportunities",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingStudentOpportunities_listingStudentOpportunities_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedPrograms"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"jobPostingURL"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"programUrlBehavior"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"allJobs"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"job",block:!1}},{kind:"Argument",name:{kind:"Name",value:"staffOrStudentPosition"},value:{kind:"StringValue",value:"student-opportunities",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate DESC",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"job_job_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"jobType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"jobType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"jobRequisitionNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"jobPostingURL"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payRate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"associatedLocations"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"uri"},name:{kind:"Name",value:"publicUrl"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1204}};_.loc.source={body:`query StudentOpportunitiesList {
  entry(section: "listingStudentOpportunities") {
    ... on listingStudentOpportunities_listingStudentOpportunities_Entry {
      title
      text: summary
      buttonUrl {
        ... on buttonUrl_button_BlockType {
          buttonText
          buttonUrl
        }
      }
      email
      phoneNumber
      associatedPrograms {
        title
        summary
        jobPostingURL: uri
        programUrlBehavior
        buttonUrl {
          ...on buttonUrl_button_BlockType {
            buttonText
            buttonUrl
          }
        
        }
      }
      associatedTopics {
        title
        text: summary
        uri
        externalResourceUrl
        illustrationsResourcesAndServices
      }
    }
  }
  allJobs: entries(section: "job", staffOrStudentPosition: "student-opportunities", orderBy: "postDate DESC") {
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function h(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var s=n.type;s.kind==="NamedType"&&i.add(s.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(o){h(o,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(o){h(o,i)}),n.definitions&&n.definitions.forEach(function(o){h(o,i)})}var R={};(function(){_.definitions.forEach(function(i){if(i.name){var s=new Set;h(i,s),R[i.name.value]=s}})})();function C(n,i){for(var s=0;s<n.definitions.length;s++){var o=n.definitions[s];if(o.name&&o.name.value==i)return o}}function G(n,i){var s={kind:n.kind,definitions:[C(n,i)]};n.hasOwnProperty("loc")&&(s.loc=n.loc);var o=R[i]||new Set,m=new Set,c=new Set;for(o.forEach(function(d){c.add(d)});c.size>0;){var t=c;c=new Set,t.forEach(function(d){if(!m.has(d)){m.add(d);var p=R[d]||new Set;p.forEach(function(b){c.add(b)})}})}return m.forEach(function(d){var p=C(n,d);p&&s.definitions.push(p)}),s}G(_,"StudentOpportunitiesList");const Q={id:"main",class:"page page-student-opportunities"},z={key:1,class:"no-positions"},H={key:1,class:"no-positions"},M={__name:"index",async setup(n){let i,s;const{$graphql:o}=P(),{data:m,error:c}=([i,s]=B(async()=>I("student-opportunities-list",async()=>await o.default.request(_))),i=await i,s(),i);if(c.value)throw L({...c.value,statusMessage:"Page not found."+c.value,fatal:!0});if(!m.value.entry&&!m.value.allJobs)throw L({statusCode:404,message:"Page not found",fatal:!0});const t=E(f(m.value,"entry",{})),d=E(f(m.value,"allJobs",{}));D(m,(a,l)=>{console.log("In watch preview enabled, newVal, oldVal",a,l),t.value=f(a,"entry",{}),d.value=f(a,"allJobs",{})}),q({title:t.value?t.value.title:"... loading",meta:[{hid:"description",name:"description",content:$(t.value.text)}]});const p=y(()=>d.value.filter(l=>l.jobType[0].title==="Student Job").map(l=>({...l,payRate:f(l,"payRate",null),associatedLocations:l.associatedLocations.map(S=>({...S,to:V(S.uri)}))}))),b=y(()=>d.value.filter(l=>l.jobType[0].title==="Student Internship").map(l=>({...l,payRate:f(l,"payRate",null),associatedLocations:l.associatedLocations.map(S=>({...S,to:`${S.uri}`}))}))),w=y(()=>t.value.associatedPrograms.map(a=>({...a,jobPostingURL:a.programUrlBehavior==="externalSite"?a.buttonUrl[0].buttonUrl:`/${a.jobPostingURL}`}))),F=y(()=>t.value.associatedTopics.map(a=>({...a,to:a.externalResourceUrl?a.externalResourceUrl:`/${a.uri}`})));return(a,l)=>(u(),U("main",Q,[r(e(J),{to:"/about",title:e(t).title,"parent-title":"About"},null,8,["title"]),e(t).buttonUrl&&e(t).buttonUrl[0]&&e(t).buttonUrl[0].buttonText?(u(),g(e(A),{key:0,class:"banner-text",title:e(t).title,text:e(t).text,email:e(t).email,phone:e(t).phoneNumber,"button-text":e(t).buttonUrl[0].buttonText,to:e(t).buttonUrl[0].buttonUrl},null,8,["title","text","email","phone","button-text","to"])):(u(),g(e(A),{key:1,class:"banner-text",title:e(t).title,text:e(t).text,email:e(t).email,phone:e(t).phoneNumber},null,8,["title","text","email","phone"])),r(e(k),{theme:"divider"},{default:v(()=>[r(e(N),{class:"divider",color:"about"})]),_:1}),r(e(k),{"section-title":"Student Jobs"},{default:v(()=>[e(p).length>0?(u(),g(e(T),{key:0,items:e(p)},null,8,["items"])):(u(),U("div",z," No positions available at this time "))]),_:1}),r(e(k),{theme:"divider"},{default:v(()=>[r(e(N),{class:"divider",color:"about"})]),_:1}),r(e(k),{"section-title":"Student Internships"},{default:v(()=>[e(b).length>0?(u(),g(e(T),{key:0,items:e(b)},null,8,["items"])):(u(),U("div",H," No positions available at this time "))]),_:1}),r(e(k),{theme:"divider"},{default:v(()=>[r(e(N),{class:"divider",color:"about"})]),_:1}),r(e(k),{"section-title":"Awards, Grants, and Fellowships"},{default:v(()=>[e(w).length>0?(u(),g(e(T),{key:0,items:e(w)},null,8,["items"])):x("",!0)]),_:1}),e(F).length>0?(u(),g(e(k),{key:2,theme:"divider"},{default:v(()=>[r(e(N),{color:"about"})]),_:1})):x("",!0),r(e(k),null,{default:v(()=>[e(F).length>0?(u(),g(e(j),{key:0,items:e(F),"section-title":"Associated Topics"},null,8,["items"])):x("",!0)]),_:1})]))}},ee=O(M,[["__scopeId","data-v-d5f38ca7"]]);export{ee as default};
