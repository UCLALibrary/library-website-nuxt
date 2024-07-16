import{u as ne,k as ke,l as ge,m as ie,r as p,a as te,p as v,V as _,W as Ne,L as Se,e as t,f as E,s as e,q as a,t as l,v as d,x as r,X as pe,A as fe,C as U,Y as z,Z as R,G as o,F as N,M as L,$ as ae,a0 as w,a1 as le,a2 as de,U as he,a3 as ye}from"./D87QO4dW.js";import{u as Y}from"./BWVOSsg_.js";import{_ as k}from"./I9wROFQL.js";import{r as P}from"./Dim8bG2a.js";import{d as Fe}from"./BIzRNX9S.js";import{d as Te}from"./C75vzz_1.js";import{d as be}from"./CI7m89ct.js";import"./CL8yYu5A.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./BEx1Bxtt.js";import"./DeFtLck0.js";import"./CvV-bfGY.js";var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EventDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"event"},name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"event_event_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typehandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"publicUrl"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publicUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"requiresRegistration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalRegistrationOpened"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalRegistrationClosed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalPhysicalSeats"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalPhysicalSeatsTaken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalOnlineSeats"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalOnlineSeatsTaken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalWaitlist"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"onlineProvider"},name:{kind:"Name",value:"libcalEventOnlineProvider"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"onlineJoinURL"},name:{kind:"Name",value:"onlineEventUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventTags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventTags_Tag"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"presenter"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"moreInformation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventOwner"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedSeries"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventSeries"},name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"workshopOrEventSeries_workshopOrEventSeries_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"publicUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"illustration"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"DefaultFpbWithCardsAndHighlight"},directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"pastEvents"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:"< now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"upcomingEvents"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime ASC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:">= now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"exhibition"},name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"exhibition",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibition_exhibition_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocationsAndPrograms"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"exhibitsAndEvents"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"associatedStaffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffMemberJobTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameFirst"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameLast"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bookAConsultation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffDepartment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"staffPortrait"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"acknowledgements"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"acknowledgements_richTextWithSectionTitle_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displaySectionTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"acknowledgements"},arguments:[],directives:[]}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExhibitionsAndCollectionsFpb"},directives:[]}]}}]}}]}}],loc:{start:0,end:9437}};S.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/DefaultFpbWithCardsAndHighlight.gql"
#import "../gql/fragments/collections/ExhibitionsAndCollectionsFpb.gql"
query EventDetail($slug: [String!]) {
    event: entry(section: "event", slug: $slug) {
        ... on event_event_Entry {
            id
            uri
            typehandle
            sectionHandle
            title: eventTitle
            eventLocation: location {
                title
                to: publicUrl
            }
            image: heroImage {
                ... on heroImage_heroImage_BlockType {
                    image {
                        ...Image
                    }
                }
            }
            to: uri
            slug
            libcalId
            publicUrl
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
            eventType {
                ... on eventType_Category {
                    id
                    title
                }
            }
            eventDescription
            associatedLocations {
                ... on location_location_Entry {
                    id
                    to: uri
                    title
                    summary
                }
            }
            requiresRegistration
            libcalRegistrationOpened
            libcalRegistrationClosed
            libcalPhysicalSeats
            libcalPhysicalSeatsTaken
            libcalOnlineSeats
            libcalOnlineSeatsTaken
            libcalWaitlist
            onlineProvider: libcalEventOnlineProvider
            onlineJoinURL: onlineEventUrl
            eventTags {
                ... on eventTags_Tag {
                    id
                    title
                }
            }
            presenter
            moreInformation
            eventOwner
        }
    }
    associatedSeries: entries(
        section: "workshopOrEventSeries"
        relatedToEntries: { section: "event", slug: $slug }
    ) {
        title
        sectionHandle
        workshopOrEventSeriesType
        text: summary
        image: heroImage {
            ... on heroImage_heroImage_BlockType {
                image {
                    ...Image
                }
            }
        }
        to: uri
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
        ongoing
    }
    eventSeries: entry(section: "workshopOrEventSeries", slug: $slug) {
        id

        ... on workshopOrEventSeries_workshopOrEventSeries_Entry {
            id
            workshopOrEventSeriesType
            sectionHandle
            typeHandle
            uri
            slug
            title
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
            ongoing
            eventLocation: location {
                title
                to: publicUrl
            }
            associatedLocations {
                ... on location_location_Entry {
                    id
                    to: uri
                    title
                    summary
                }
            }
            image: heroImage {
                ... on heroImage_heroImage_BlockType {
                    image {
                        ...Image
                    }
                }
            }
            associatedTopics {
                id
                title
                text: summary
                uri
                externalResourceUrl
                illustration
            }
            ...DefaultFpbWithCardsAndHighlight
        }
    }

    pastEvents: entries(
        section: "event"
        orderBy: "startDateWithTime DESC"
        startDateWithTime: "< now"
        relatedToEntries: { section: "workshopOrEventSeries", slug: $slug }
    ) {
        title: eventTitle
        uri
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
        image: heroImage {
            ... on heroImage_heroImage_BlockType {
                image {
                    ...Image
                }
            }
        }
        category: eventType {
            ... on eventType_Category {
                id
                title
            }
        }
    }

    upcomingEvents: entries(
        section: "event"
        orderBy: "startDateWithTime ASC"
        startDateWithTime: ">= now"
        relatedToEntries: { section: "workshopOrEventSeries", slug: $slug }
    ) {
        title: eventTitle
        uri
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
        image: heroImage {
            ... on heroImage_heroImage_BlockType {
                image {
                    ...Image
                }
            }
        }
        category: eventType {
            ... on eventType_Category {
                id
                title
            }
        }
    }

    exhibition: entry(section: "exhibition", slug: $slug) {
        title
        summary
        sectionHandle
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
        ongoing
        image: heroImage {
            ... on heroImage_heroImage_BlockType {
                image {
                    ...Image
                }
                altText
            }
        }
        ... on exhibition_exhibition_Entry {
            sectionHandle
            typeHandle
            uri
            slug
            associatedLocationsAndPrograms {
                title
                to: uri
            }
            buttonUrl {
                ... on buttonUrl_button_BlockType {
                    buttonText
                    buttonUrl
                }
            }
            exhibitsAndEvents {
                title
                uri
                sectionHandle
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
                image: heroImage {
                    ... on heroImage_heroImage_BlockType {
                        image {
                            ...Image
                        }
                    }
                }
                text: eventDescription
                locations: associatedLocations {
                    ... on location_location_Entry {
                        id
                        to: uri
                        title
                        summary
                    }
                }
                category: eventType {
                    ... on eventType_Category {
                        id
                        title
                    }
                }
            }
            associatedStaffMember {
                email
                phoneNumber
                staffMemberJobTitle
                nameFirst
                nameLast
                uri
                bookAConsultation
                staffDepartment {
                    title
                }
                image: staffPortrait {
                    ...Image
                }
            }
            acknowledgements {
                ... on acknowledgements_richTextWithSectionTitle_BlockType {
                    displaySectionTitle
                    titleGeneral
                    acknowledgements
                }
            }
            ...ExhibitionsAndCollectionsFpb
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var se={};function $(s){return s.filter(function(m){if(m.kind!=="FragmentDefinition")return!0;var u=m.name.value;return se[u]?!1:(se[u]=!0,!0)})}S.definitions=S.definitions.concat($(Fe.definitions));S.definitions=S.definitions.concat($(Te.definitions));S.definitions=S.definitions.concat($(be.definitions));function V(s,m){if(s.kind==="FragmentSpread")m.add(s.name.value);else if(s.kind==="VariableDefinition"){var u=s.type;u.kind==="NamedType"&&m.add(u.name.value)}s.selectionSet&&s.selectionSet.selections.forEach(function(c){V(c,m)}),s.variableDefinitions&&s.variableDefinitions.forEach(function(c){V(c,m)}),s.definitions&&s.definitions.forEach(function(c){V(c,m)})}var B={};(function(){S.definitions.forEach(function(m){if(m.name){var u=new Set;V(m,u),B[m.name.value]=u}})})();function me(s,m){for(var u=0;u<s.definitions.length;u++){var c=s.definitions[u];if(c.name&&c.name.value==m)return c}}function _e(s,m){var u={kind:s.kind,definitions:[me(s,m)]};s.hasOwnProperty("loc")&&(u.loc=s.loc);var c=B[m]||new Set,F=new Set,f=new Set;for(c.forEach(function(g){f.add(g)});f.size>0;){var h=f;f=new Set,h.forEach(function(g){if(!F.has(g)){F.add(g);var n=B[g]||new Set;n.forEach(function(y){f.add(y)})}})}return F.forEach(function(g){var n=me(s,g);n&&u.definitions.push(n)}),u}_e(S,"EventDetail");const De={id:"main",class:"page page-event-detail"},Ae={key:0},xe={key:1},Ie={key:2},Me={__name:"[slug]",async setup(s){let m,u;const c=pe(),{$graphql:F}=ne(),f=ke(),{data:h,error:g}=([m,u]=ge(async()=>fe(`events-listing-detail-${f.params.slug}`,async()=>await F.default.request(S,{slug:f.params.slug}))),m=await m,u(),m);if(g.value)throw ie({...g.value,statusMessage:"Page not found."+g.value,fatal:!0});if(!h.value.event&&!h.value.eventSeries&&!h.value.exhibition)throw ie({statusCode:404,message:"Page not found",fatal:!0});const n=p(h.value);te(h,(i,I)=>{console.log("In watch preview enabled, newVal, oldVal",i,I),n.value=i}),p([]);const y=p({}),re=p(""),H=p(n.value&&n.value.event?n.value.event.libcalId:""),T=p(!!(n.value&&n.value.event&&Number(n.value.event.libcalPhysicalSeats)>0&&Number(n.value.event.libcalPhysicalSeats)>=Number(n.value.event.libcalPhysicalSeats)-Number(n.value.event.libcalPhysicalSeatsTaken))),b=p(!!(n.value&&n.value.event&&Number(n.value.event.libcalOnlineSeats)>0&&Number(n.value.event.libcalOnlineSeats)>=Number(n.value.event.libcalOnlineSeats)-Number(n.value.event.libcalOnlineSeatsTaken))),q=p(n.value&&n.value.event&&n.value.event.libcalWaitlist),M=p(c.public.libcalProxy);console.log("eventId variable:",H.value),console.log("formData variable:",y.value),console.log("formId variable:",re.value),console.log("eventId variable:",H.value),console.log("inPersonEvent variable:",T.value),console.log("onlineEvent variable:",b.value),console.log("libcalWaitlist variable:",q.value),console.log("libcalEndpointProxy variable:",M.value),console.log("in-person event",T.value),console.log("online event",b.value);const oe=v(()=>H.value);_("eventId",oe),Ne("eventId"),_("registrationType",v(()=>T.value&&!b.value?"in-person":!T.value&&b.value?"online":T.value&&b.value?"both":"")),_("libcalWaitlist",v(()=>q.value)),_("libcalEndpoint",M.value),n.value&&(n.value.event&&Y({title:n.value?n.value.event.title:"... loading",meta:[{hid:"description",name:"description",content:P(n.value.event.eventDescription)}]}),n.value.eventSeries&&Y({title:n.value?n.value.eventSeries.title:"... loading",meta:[{hid:"description",name:"description",content:P(n.value.eventSeries.summary)}]}),n.value.exhibition&&Y({title:n.value?n.value.exhibition.title:"... loading",meta:[{hid:"description",name:"description",content:P(n.value.exhibition.summary)}]}));const J=v(()=>D.value?"Register":n.value.event&&n.value.event.onlineJoinURL?"More Details":null),G=v(()=>D.value?null:n.value.event.onlineJoinURL),D=v(()=>!!(n.value.event&&n.value.event.requiresRegistration==="1"&&n.value.event.libcalRegistrationOpened==="1"&&!n.value.event.libcalRegistrationClosed)),Q=v(()=>n.value.event.eventType.length&&n.value.event.eventType[0].title?n.value.event.eventType[0].title:""),C=v(()=>n.value.associatedSeries.map(i=>({...i,to:`/${i.to}`,image:k(i,"image[0].image[0]",null),category:i.workshopOrEventSeriesType==="visit/events-exhibitions"?"Event Series":"Workshop Series"}))),W=v(()=>n.value.upcomingEvents.map(i=>({...i,to:`/${i.uri}`,image:k(i,"image[0].image[0]",null),startDate:k(i,"startDateWithTime",null),endDate:k(i,"endDateWithTime",null),category:i.category.length?i.category[0].title:null,locations:i.associatedLocations&&i.associatedLocations.length>0?i.associatedLocations:i.eventLocation}))),A=v(()=>n.value.pastEvents.map(i=>({...i,to:`/${i.uri}`,image:k(i,"image[0].image[0]",null),startDate:k(i,"startDateWithTime",null),endDate:k(i,"endDateWithTime",null),category:i.category.length?i.category[0].title:null,locations:i.associatedLocations[0]!=null?i.associatedLocations:i.eventLocation}))),X=v(()=>n.value.eventSeries.associatedTopics?n.value.eventSeries.associatedTopics.map(i=>({...i,to:i.externalResourceUrl?i.externalResourceUrl:`/${i.uri}`})):[]),Z=v(()=>n.value.exhibition.buttonUrl.length?n.value.exhibition.buttonUrl[0].buttonText:""),K=v(()=>n.value.exhibition.buttonUrl.length?n.value.exhibition.buttonUrl[0].buttonUrl:""),x=v(()=>n.value.exhibition.exhibitsAndEvents.map(i=>({...i,to:`/${i.uri}`,image:k(i,"image[0].image[0]",null),category:k(i,"category[0].title",""),startDate:k(i,"startDateWithTime",null),endDate:k(i,"startDateWithTime",null)}))),O=v(()=>n.value.exhibition.associatedStaffMember.map(i=>({...i,to:`/about/staff/${i.to}`,image:k(i,"image[0]",null),staffName:`${i.nameFirst} ${i.nameLast}`}))),ue=v(()=>n.value.exhibition.acknowledgements[0].displaySectionTitle==="true"?n.value.exhibition.acknowledgements[0].titleGeneral:""),j=v(()=>n.value.eventSeries.associatedLocations.map(i=>({...i,to:`/${i.to}`}))),ee=v(()=>n.value.exhibition.associatedLocationsAndPrograms.map(i=>({...i,to:`/${i.to}`}))),ve=v(()=>y.value);_("blockFormData",ve);const{$scrapeApi:ce}=ne();return te(y,(i,I)=>{console.log("formdata is updated",i,I)}),Se(async()=>{if(n.value.event&&n.value.event.requiresRegistration==="1"&&n.value.event.onlineProvider!=="external"){console.log("getting formid");const i=await ce.scrapeFormId(n.value.event.libcalId);console.log("is this a promise:"+JSON.stringify(i)),y.value=i[0]}}),(i,I)=>(t(),E("main",De,[e(n).event?(t(),E("div",Ae,[a(e(U),{to:"/visit/events-exhibitions",title:e(n).event.title,"parent-title":"Events & Exhibitions"},null,8,["title"]),e(n).event&&(!e(n).event.image||!e(n).event.image[0]||!e(n).event.image[0].image||!e(n).event.image[0].image[0]||e(n).event.image[0].image[0].length==0)?(t(),l(e(z),{key:0,title:e(n).event.title,locations:e(n).event.eventLocation,"start-date":e(n).event.startDateWithTime,"end-date":e(n).event.endDateWithTime,category:e(Q),to:e(G),"button-text":e(J),"register-event":e(D),"section-handle":e(n).event.sectionHandle},null,8,["title","locations","start-date","end-date","category","to","button-text","register-event","section-handle"])):d("",!0),e(n).event.image&&e(n).event.image.length>0&&e(n).event.image[0].image&&e(n).event.image[0].image.length>0&&e(n).event.image[0].image[0]?(t(),l(e(o),{key:1,class:"section-banner"},{default:r(()=>[a(e(R),{media:e(n).event.image[0].image[0],title:e(n).event.title,locations:e(n).event.eventLocation,"start-date":e(n).event.startDateWithTime,"end-date":e(n).event.endDateWithTime,category:e(Q),to:e(G),"align-right":!0,prompt:e(J),"register-event":e(D),"section-handle":e(n).event.sectionHandle},null,8,["media","title","locations","start-date","end-date","category","to","prompt","register-event","section-handle"])]),_:1})):d("",!0),a(e(o),{theme:"divider"},{default:r(()=>[e(n).event.image&&e(n).event.image.length>0&&e(n).event.image[0].image&&e(n).event.image[0].image[0]?(t(),l(e(N),{key:0,color:"visit"})):d("",!0)]),_:1}),e(n).event||e(n).event.eventDescription?(t(),l(e(o),{key:2},{default:r(()=>[e(n).event.presenter?(t(),l(e(L),{key:0,"rich-text-content":e(n).event.presenter,class:"presenter"},null,8,["rich-text-content"])):d("",!0),a(e(L),{"rich-text-content":e(n).event.eventDescription},null,8,["rich-text-content"]),e(n).event.moreInformation?(t(),l(e(ae),{key:1})):d("",!0),e(n).event.moreInformation?(t(),l(e(L),{key:2,"rich-text-content":e(n).event.moreInformation},null,8,["rich-text-content"])):d("",!0)]),_:1})):d("",!0),e(C).length?(t(),l(e(o),{key:3,theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1})):d("",!0),e(C).length?(t(),l(e(o),{key:4,"section-title":"Related Series"},{default:r(()=>[a(e(w),{items:e(C)},null,8,["items"])]),_:1})):d("",!0),a(e(o),{theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1}),a(e(le),{class:"section block-call-to-action","is-global":!0})])):e(n).eventSeries?(t(),E("div",xe,[a(e(U),{to:"/visit/events-exhibitions",title:e(n).eventSeries.title,"parent-title":"Events & Exhibitions"},null,8,["title"]),e(n).eventSeries&&!e(n).eventSeries.image[0]?(t(),l(e(z),{key:0,title:e(n).eventSeries.title,text:e(n).eventSeries.summary,locations:e(j),"start-date":e(n).eventSeries.startDate,"end-date":e(n).eventSeries.endDate,category:"Event Series"},null,8,["title","text","locations","start-date","end-date"])):d("",!0),e(n).eventSeries.image[0]?(t(),l(e(o),{key:1,class:"section-banner"},{default:r(()=>[a(e(R),{media:e(n).eventSeries.image[0].image[0],title:e(n).eventSeries.title,locations:e(j),category:"Event Series",text:e(n).eventSeries.summary,"start-date":e(n).eventSeries.startDate,"end-date":e(n).eventSeries.endDate,"align-right":!0},null,8,["media","title","locations","text","start-date","end-date"])]),_:1})):d("",!0),a(e(o),{theme:"divider"},{default:r(()=>[e(n).eventSeries.image?(t(),l(e(N),{key:0,color:"visit"})):d("",!0)]),_:1}),a(e(de),{class:"content",blocks:e(n).eventSeries.blocks},null,8,["blocks"]),e(n).eventSeries.blocks.length>0?(t(),l(e(o),{key:2,theme:"divider"},{default:r(()=>[a(e(N),{class:"divider-way-finder",color:"visit"})]),_:1})):d("",!0),e(W).length?(t(),l(e(o),{key:3,"section-title":"Upcoming Events in this Series"},{default:r(()=>[e(W)?(t(),l(e(w),{key:0,items:e(W),class:"section section-list"},null,8,["items"])):d("",!0),e(A).length?(t(),l(e(ae),{key:1})):d("",!0)]),_:1})):d("",!0),e(A).length?(t(),l(e(o),{key:4,"section-title":"Past Events in this Series"},{default:r(()=>[e(A)?(t(),l(e(w),{key:0,items:e(A),class:"section section-list"},null,8,["items"])):d("",!0)]),_:1})):d("",!0),e(n).eventSeries.associatedTopics.length>0?(t(),l(e(o),{key:5,theme:"divider"},{default:r(()=>[a(e(N),{class:"divider-way-finder",color:"visit"})]),_:1})):d("",!0),a(e(o),null,{default:r(()=>[e(X).length>0?(t(),l(e(he),{key:0,class:"section-cards",items:e(X),"section-title":"Associated Topics"},null,8,["items"])):d("",!0)]),_:1}),a(e(o),{theme:"divider"},{default:r(()=>[a(e(N),{class:"divider-way-finder",color:"visit"})]),_:1}),a(e(le),{class:"section block-call-to-action","is-global":!0})])):(t(),E("div",Ie,[a(e(U),{to:"/visit/events-exhibitions",title:e(n).exhibition.title,"parent-title":"Events & Exhibitions"},null,8,["title"]),e(n).exhibition&&!e(n).exhibition.image[0]?(t(),l(e(z),{key:0,title:e(n).exhibition.title,text:e(n).exhibition.summary,locations:e(ee),to:e(K),"banner-text":e(Z),"start-date":e(n).exhibition.startDate,"end-date":e(n).exhibition.endDate,category:"Exhibition"},null,8,["title","text","locations","to","banner-text","start-date","end-date"])):d("",!0),e(n).exhibition.image[0]?(t(),l(e(o),{key:1,class:"section-banner"},{default:r(()=>[a(e(R),{media:e(n).exhibition.image[0].image[0],title:e(n).exhibition.title,locations:e(ee),category:"Exhibition",text:e(n).exhibition.summary,"align-right":!0,"start-date":e(n).exhibition.startDate,"end-date":e(n).exhibition.endDate,prompt:e(Z),to:e(K)},null,8,["media","title","locations","text","start-date","end-date","prompt","to"])]),_:1})):d("",!0),a(e(o),{theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1}),a(e(de),{class:"content",blocks:e(n).exhibition.blocks},null,8,["blocks"]),e(n).exhibition.blocks.length>0?(t(),l(e(o),{key:2,theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1})):d("",!0),e(x).length?(t(),l(e(o),{key:3,"section-title":"Associated Events"},{default:r(()=>[e(x).length>0?(t(),l(e(w),{key:0,items:e(x),class:"section section-list"},null,8,["items"])):d("",!0)]),_:1})):d("",!0),e(x).length>0?(t(),l(e(o),{key:4,theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1})):d("",!0),e(O).length>0?(t(),l(e(o),{key:5,"section-title":"Contact a Subject Specialist"},{default:r(()=>[a(e(ye),{items:e(O)},null,8,["items"])]),_:1})):d("",!0),e(O).length>0?(t(),l(e(o),{key:6,theme:"divider"},{default:r(()=>[a(e(N),{color:"visit"})]),_:1})):d("",!0),a(e(o),{"section-title":e(ue)},{default:r(()=>[a(e(L),{"rich-text-content":e(n).exhibition.acknowledgements[0].acknowledgements},null,8,["rich-text-content"])]),_:1},8,["section-title"])]))]))}};export{Me as default};
