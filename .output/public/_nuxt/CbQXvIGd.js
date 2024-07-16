import{u as Se,l as ye,m as J,k as Ne,r as S,a as X,p as y,L as Fe,N as De,e as b,f as C,q as o,s as e,x as k,y as T,z as _,A as Te,B as _e,D as Ee,E as Ae,F as V,G as h,t as Z,ad as xe,v as j,ae as we,a0 as ee,ak as He,H as I,I as O,h as v,M as Le,a1 as qe}from"./D87QO4dW.js";import{u as be}from"./BWVOSsg_.js";import{_ as d}from"./I9wROFQL.js";import{d as se}from"./BIzRNX9S.js";import{c as F}from"./DSQ4ZnfI.js";import{g as Ie}from"./BIGQZk-7.js";import{q as Ve}from"./BOdCFMn0.js";import{r as Oe}from"./Dim8bG2a.js";import{s as Re}from"./CfbswRTE.js";var H={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ExhibitionsAndEventsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"events"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime ASC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:">= now",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"event_event_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"series"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"exhibitions"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"exhibition",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:1713}};H.loc.source={body:`#import "../gql/fragments/Image.gql"

query ExhibitionsAndEventsList {
  events: entries(
    section: "event"
    orderBy: "startDateWithTime ASC"
    startDateWithTime: ">= now"
  ) {
    ... on event_event_Entry {
      title: eventTitle
      to: uri
      sectionHandle
      eventType {
        title
      }
      startDateWithTime
        @formatDateTime(
          format: "Y-m-d\\\\TH:i:s"
          timezone: "America/Los_Angeles"
        )
      endDateWithTime
        @formatDateTime(
          format: "Y-m-d\\\\TH:i:s"
          timezone: "America/Los_Angeles"
        )
      associatedLocations {
        title
      }
      eventLocation: location {
        title
      }
      image {
        ...Image
      }
    }
  }
  series: entries(section: "workshopOrEventSeries", orderBy: "title") {
    title
    sectionHandle
    startDate
      @formatDateTime(format: "Y-m-d\\\\TH:i:s", timezone: "America/Los_Angeles")
    endDate
      @formatDateTime(format: "Y-m-d\\\\TH:i:s", timezone: "America/Los_Angeles")
    ongoing
    text: summary
    to: uri
    category: workshopOrEventSeriesType
    heroImage {
      ... on heroImage_heroImage_BlockType {
        id
        image {
          ...Image
        }
      }
    }
  }
  exhibitions: entries(section: "exhibition", orderBy: "title") {
    title
    typeHandle
    sectionHandle
    startDate
      @formatDateTime(format: "Y-m-d\\\\TH:i:s", timezone: "America/Los_Angeles")
    endDate
      @formatDateTime(format: "Y-m-d\\\\TH:i:s", timezone: "America/Los_Angeles")
    ongoing
    text: summary
    to: uri
    heroImage {
      ... on heroImage_heroImage_BlockType {
        id
        image {
          ...Image
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ne={};function ze(t){return t.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var s=a.name.value;return ne[s]?!1:(ne[s]=!0,!0)})}H.definitions=H.definitions.concat(ze(se.definitions));function R(t,a){if(t.kind==="FragmentSpread")a.add(t.name.value);else if(t.kind==="VariableDefinition"){var s=t.type;s.kind==="NamedType"&&a.add(s.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(r){R(r,a)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(r){R(r,a)}),t.definitions&&t.definitions.forEach(function(r){R(r,a)})}var P={};(function(){H.definitions.forEach(function(a){if(a.name){var s=new Set;R(a,s),P[a.name.value]=s}})})();function ie(t,a){for(var s=0;s<t.definitions.length;s++){var r=t.definitions[s];if(r.name&&r.name.value==a)return r}}function We(t,a){var s={kind:t.kind,definitions:[ie(t,a)]};t.hasOwnProperty("loc")&&(s.loc=t.loc);var r=P[a]||new Set,g=new Set,m=new Set;for(r.forEach(function(l){m.add(l)});m.size>0;){var E=m;m=new Set,E.forEach(function(l){if(!g.has(l)){g.add(l);var u=P[l]||new Set;u.forEach(function(A){m.add(A)})}})}return g.forEach(function(l){var u=ie(t,l);u&&s.definitions.push(u)}),s}We(H,"ExhibitionsAndEventsList");var L={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ExhibitionsAndEventsListSingle"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingEventsExhibitions",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingEventsExhibitions_listingEventsExhibitions_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredEvents"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocationsAndPrograms"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredEventSeriesAndExhibitions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1797}};L.loc.source={body:`#import "../gql/fragments/Image.gql"

query ExhibitionsAndEventsListSingle {
  entry(section: "listingEventsExhibitions") {
    ... on listingEventsExhibitions_listingEventsExhibitions_Entry {
      title
      text: summary
      featuredEvents {
        category
        title
        eventTitle
        summary
        sectionHandle
        to: uri
        eventType {
          title
        }
        eventDescription
        ongoing
        startDate
          @formatDateTime(
            format: "Y-m-d\\\\TH:i:s"
            timezone: "America/Los_Angeles"
          )
        endDate
          @formatDateTime(
            format: "Y-m-d\\\\TH:i:s"
            timezone: "America/Los_Angeles"
          )
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
        workshopOrEventSeriesType
        typeHandle
        eventLocation: location {
          title
        }
        associatedLocations {
          title
        }
        associatedLocationsAndPrograms {
          title
          to: uri
        }
        heroImage {
          ... on heroImage_heroImage_BlockType {
            id
            image {
              ...Image
            }
          }
        }
      }
      featuredEventSeriesAndExhibitions {
        title
        typeHandle
        uri
        startDate
        endDate
        ongoing
        text: summary
        to: uri
        heroImage {
          ... on heroImage_heroImage_BlockType {
            image {
              ...Image
            }
          }
        }
        workshopOrEventSeriesType
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var te={};function Be(t){return t.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var s=a.name.value;return te[s]?!1:(te[s]=!0,!0)})}L.definitions=L.definitions.concat(Be(se.definitions));function z(t,a){if(t.kind==="FragmentSpread")a.add(t.name.value);else if(t.kind==="VariableDefinition"){var s=t.type;s.kind==="NamedType"&&a.add(s.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(r){z(r,a)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(r){z(r,a)}),t.definitions&&t.definitions.forEach(function(r){z(r,a)})}var G={};(function(){L.definitions.forEach(function(a){if(a.name){var s=new Set;z(a,s),G[a.name.value]=s}})})();function ae(t,a){for(var s=0;s<t.definitions.length;s++){var r=t.definitions[s];if(r.name&&r.name.value==a)return r}}function Ye(t,a){var s={kind:t.kind,definitions:[ae(t,a)]};t.hasOwnProperty("loc")&&(s.loc=t.loc);var r=G[a]||new Set,g=new Set,m=new Set;for(r.forEach(function(l){m.add(l)});m.size>0;){var E=m;m=new Set,E.forEach(function(l){if(!g.has(l)){g.add(l);var u=G[l]||new Set;u.forEach(function(A){m.add(A)})}})}return g.forEach(function(l){var u=ae(t,l);u&&s.definitions.push(u)}),s}Ye(L,"ExhibitionsAndEventsListSingle");const $e={id:"main",class:"page page-events-exhibits"},Ce={key:0,class:"about-results"},Pe={key:1,class:"about-results"},Ge={class:"error-text"},Me=v("p",null,[I(" We can’t find the term you are looking for on this page, but we're here to help. "),v("br"),I(" Try searching the whole site from "),v("a",{href:"https://library.ucla.edu"},"UCLA Library Home"),I(", or try one of the these regularly visited links: ")],-1),Qe=v("ul",null,[v("li",null,[v("a",{href:"https://www.library.ucla.edu/research-teaching-support/research-help"},"Research Help")]),v("li",null,[v("a",{href:"/help/services-resources/ask-us"},"Ask Us")]),v("li",null,[v("a",{href:"https://www.library.ucla.edu/use/access-privileges/disability-resources"},"Accessibility Resources")])],-1),an={__name:"index",async setup(t){var U,K;let a,s;const{$graphql:r,$dataApi:g}=Se(),{data:m,error:E}=([a,s]=ye(async()=>Te("events-list",async()=>{const n=await r.default.request(H),i=await r.default.request(L);return{data:n,single:i}})),a=await a,s(),a);if(console.log("Events and exhibition data: ",m.value,"error: ",E.value),E.value)throw J({statusCode:404,statusMessage:"Page not found.",fatal:!0});if(!((U=m.value)!=null&&U.data)&&!((K=m.value)!=null&&K.single))throw J({statusCode:404,statusMessage:"Page Not Found"});const l=Ne(),u=S(d(m.value.single,"entry",{})),A=S(d(m.value.data,"events",[])),le=S(d(m.value.data,"series",[])),re=S(d(m.value.data,"exhibitions",[]));X(m,(n,i)=>{console.log("In watch preview enabled, newVal, oldVal",n,i),u.value=d(n.single,"entry",{}),A.value=d(n.data,"events",[]),le.value=d(n.data,"series",[]),re.value=d(n.data,"exhibitions",[])}),be({title:u.value?u.value.title:"... loading",meta:[{hid:"description",name:"description",content:Oe(u.value.text)}]});const q=y(()=>u.value.featuredEvents.map(n=>({...n,to:`/${n.to}`,title:n.eventTitle?n.eventTitle:n.title,image:d(n,"heroImage[0].image[0]",null),startDate:n.typeHandle==="event"?n.startDateWithTime:n.startDate,endDate:n.typeHandle==="event"?n.endDateWithTime:n.endDate,prompt:n.typeHandle==="exhibition"?"View exhibition":n.workshopOrEventSeriesType==="visit/events-exhibitions"?"View event series":"View event",text:n.typeHandle==="event"?n.eventDescription:n.summary,locations:n.typeHandle==="exhibition"?n.associatedLocationsAndPrograms:n.associatedLocations[0]!=null?n.associatedLocations:n.eventLocation!=null?n.eventLocation:n.associatedLocationsAndPrograms}))),p=y(()=>q.value[0]),M=y(()=>q.value.slice(1).map(i=>({...i,category:i.typeHandle==="exhibition"?"Exhibition":i.workshopOrEventSeriesType==="visit/events-exhibitions"?"Event Series":i.workshopOrEventSeriesType==="help/services-resources"?"Workshop Series":i.eventType!=null&&i.eventType.length>0?i.eventType[0].title:"Event",title:i.title}))),x=y(()=>[...A.value||[]].map(n=>{const i=n||{};return{...i,to:`/${i.to}`,image:d(i,"image[0]",null),startDate:d(i,"startDateWithTime",null),endDate:d(i,"endDateWithTime",null),category:d(i,"eventType[0].title",null),locations:i.associatedLocations[0]!=null?i.associatedLocations:i.eventLocation}})),W=y(()=>[...u.value.featuredEventSeriesAndExhibitions||[]].sort(Re).map(n=>({...n,category:n.typeHandle==="exhibition"?"Exhibition":n.workshopOrEventSeriesType==="visit/events-exhibitions"?"Event Series":n.workshopOrEventSeriesType==="help/services-resources"?"Workshop Series":n.eventType!=null?n.eventType[0].title:"Event",to:`/${n.to}`,image:d(n,"heroImage[0].image[0]",null)}))),de=y(()=>ce(c.value)),oe=y(()=>`Search ${u.value.title}`),w=y(()=>Y(d(l,"query.filters","")));console.log("route filter values: ",w.value);const c=S([]);S("");const Q=S([]),f=S(!1),B=S({queryText:l.query.q||"",queryFilters:Y(l.query.filters||"")});function Y(n){if(!n)return{};const i={};return n.split(" AND ").forEach($=>{const[D,ge]=$.split(":("),fe=D.trim(),he=ge.replace(")","").split(" OR ").map(pe=>pe.trim());i[fe]=he}),i}const me=y(()=>l.query.q!==void 0&&l.query.q!==""||l.query.filters&&Ve(w.value,F.eventsExhibitionsList.filters)||w.value.past&&w.value.past.length>0&&w.value.past[0]==="yes");X(()=>l.query,(n,i)=>{console.log("ES newVal, oldVal",n,i),B.value.queryText=l.query.q||"",B.value.queryFilters=Y(l.query.filters||""),ue()},{deep:!0,immediate:!0});async function ue(){if(me.value){console.log("Search ES HITS query,",l.query.q);const n=l.query.q||"*",{past:i,...N}=w.value,$=i&&i.length>0&&i[0]==="yes"?[]:[{range:{endDateWithTime:{gte:"now"}}}],D=await g.keywordSearchWithFilters(n,F.eventsExhibitionsList.searchFields,"sectionHandle:event OR sectionHandle:exhibition OR sectionHandle:eventSeries",N,F.eventsExhibitionsList.sortField,F.eventsExhibitionsList.orderBy,F.eventsExhibitionsList.resultFields,F.eventsExhibitionsList.filters,$);D&&D.hits&&D.hits.total.value>0?(console.log("Search ES HITS,",D.hits.hits),c.value=D.hits.hits,f.value=!1):(f.value=!0,c.value=[])}else c.value=[],f.value=!1}function ce(n=[]){return n.map(i=>i._source.sectionHandle==="event"?{...i._source,to:`/${i._source.to}`,image:d(i._source,"image[0].image[0]",null),startDate:d(i._source,"startDateWithTime",null),endDate:d(i._source,"endDateWithTime",null),category:d(i._source,"eventType[0].title",null)}:i._source.sectionHandle==="exhibition"?{...i._source,to:`/${i._source.uri}`,image:d(i._source,"image[0].image[0]",null),startDate:d(i._source,"startDate",null),endDate:d(i._source,"endDate",null),category:d(i._source,"sectionHandle",null)}:i._source.sectionHandle==="eventSeries"?{...i._source,to:`/${i._source.uri}`,image:d(i._source,"image[0].image[0]",null),startDate:d(i._source,"startDate",null),endDate:d(i._source,"endDate",null),category:"Event Series"}:{...i._source,to:`/${i._source.uri}`})}function ve(n){const i=[];if(n.filters)for(const N in n.filters)n.filters[N].length>0&&i.push(`${N}:(${n.filters[N].join(" OR ")})`);_e().push({path:"/visit/events-exhibitions",query:{q:n.text,filters:i.join(" AND ")}})}async function ke(){const n=await g.getAggregations(F.eventsExhibitionsList.filters,"event");Q.value=[...Ie(n,F.eventsExhibitionsList.filters),{esFieldName:"past",inputType:"single-checkbox",label:"Include Past Events"}]}return Fe(async()=>{await ke()}),(n,i)=>{const N=De("DividerGeneral");return b(),C("main",$e,[o(e(Ee),{title:e(u).title,text:e(u).text},null,8,["title","text"]),o(e(Ae),{"search-type":"about",class:"generic-search",filters:e(Q),"search-generic-query":e(B),placeholder:e(oe),onSearchReady:ve},null,8,["filters","search-generic-query","placeholder"]),o(e(h),{theme:"divider"},{default:k(()=>[o(e(V),{class:"search-margin"})]),_:1}),T(o(e(h),{class:"section-no-top-margin"},{default:k(()=>[e(q).length>0&&e(c).length==0&&!e(f)?(b(),Z(e(xe),{key:0,media:e(p).image,title:e(p).title,breadcrumb:"Featured","align-right":!1,"start-date":e(p).startDate,"end-date":e(p).endDate,text:e(p).text,to:e(p).to,prompt:e(p).prompt,locations:e(p).locations,"section-handle":e(p).sectionHandle,class:"banner section-featured-banner"},null,8,["media","title","start-date","end-date","text","to","prompt","locations","section-handle"])):j("",!0),e(M).length?(b(),Z(N,{key:1})):j("",!0),o(e(we),{class:"section",items:e(M)},null,8,["items"])]),_:1},512),[[_,e(q).length>0&&e(c).length==0&&!e(f)]]),T(o(e(h),{theme:"divider"},{default:k(()=>[o(e(V),{color:"visit"})]),_:1},512),[[_,e(q).length>0&&e(x).length&&e(c).length==0&&!e(f)]]),T(o(e(h),{"section-title":"All Upcoming Events"},{default:k(()=>[o(e(ee),{items:e(x)},null,8,["items"])]),_:1},512),[[_,e(x)&&e(x).length>0&&e(c).length==0&&!e(f)]]),T(o(e(h),{theme:"divider"},{default:k(()=>[o(e(V),{color:"visit"})]),_:1},512),[[_,e(x)&&e(x).length>0&&e(c).length==0&&!e(f)]]),T(o(e(h),{"section-title":"Event Series & Exhibitions"},{default:k(()=>[o(e(He),{items:e(W)},null,8,["items"])]),_:1},512),[[_,e(W)&&e(W).length>0&&e(c).length==0&&!e(f)]]),T(o(e(h),{class:"section-no-top-margin"},{default:k(()=>[e(l).query.q?(b(),C("h2",Ce,[I(" Displaying "+O(e(c).length)+" results for ",1),v("strong",null,[v("em",null,"“"+O(e(l).query.q),1)]),I("” ")])):(b(),C("h2",Pe," Displaying "+O(e(c).length)+" results ",1)),o(e(ee),{items:e(de)},null,8,["items"])]),_:1},512),[[_,e(c)&&e(c).length>0]]),T(o(e(h),{class:"section-no-top-margin"},{default:k(()=>[v("div",Ge,[o(e(Le),null,{default:k(()=>[v("h2",null,"Search for “"+O(e(l).query.q)+"” not found.",1),Me,Qe]),_:1})])]),_:1},512),[[_,e(f)]]),o(e(h),null,{default:k(()=>[o(e(V),{color:"visit"})]),_:1}),o(e(h),null,{default:k(()=>[o(e(qe),{class:"section block-call-to-action","is-global":!0})]),_:1})])}}};export{an as default};
