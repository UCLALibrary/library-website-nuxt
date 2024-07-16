import{_ as ee,u as ie,k as ne,l as ae,m as L,r as H,a as te,p as N,L as le,N as se,e as d,f as O,s as e,q as r,t as m,v as u,x as k,A as re,C as $,Y as q,Z as z,G as v,F,ab as de,a2 as Y,U,a1 as G,a0 as R}from"./D87QO4dW.js";import{u as M}from"./BWVOSsg_.js";import{_ as g}from"./I9wROFQL.js";import{r as Q}from"./Dim8bG2a.js";import{d as oe}from"./BIzRNX9S.js";import{b as me,a as ue,d as ce}from"./Q2Lk47BP.js";import{d as ke,a as ve}from"./CLd6PcwS.js";import{d as ge}from"./CIf3dq7z.js";import{d as pe}from"./C75vzz_1.js";import"./CL8yYu5A.js";var c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DefaultFpbWithNoCta"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"defaultFpbWithNoCta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"defaultFpbWithNoCta_form_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockFormFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:1124}};c.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockFormFragment.gql"

fragment DefaultFpbWithNoCta on ElementInterface {
    blocks: defaultFpbWithNoCta {
        id
        typeHandle
        ... on defaultFpbWithNoCta_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on defaultFpbWithNoCta_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on defaultFpbWithNoCta_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on defaultFpbWithNoCta_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on defaultFpbWithNoCta_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on defaultFpbWithNoCta_form_BlockType {
            ...BlockFormFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var P={};function T(n){return n.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var l=t.name.value;return P[l]?!1:(P[l]=!0,!0)})}c.definitions=c.definitions.concat(T(oe.definitions));c.definitions=c.definitions.concat(T(me.definitions));c.definitions=c.definitions.concat(T(ke.definitions));c.definitions=c.definitions.concat(T(ue.definitions));c.definitions=c.definitions.concat(T(ge.definitions));c.definitions=c.definitions.concat(T(ce.definitions));c.definitions=c.definitions.concat(T(ve.definitions));function D(n,t){if(n.kind==="FragmentSpread")t.add(n.name.value);else if(n.kind==="VariableDefinition"){var l=n.type;l.kind==="NamedType"&&t.add(l.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){D(s,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){D(s,t)}),n.definitions&&n.definitions.forEach(function(s){D(s,t)})}var C={};(function(){c.definitions.forEach(function(t){if(t.name){var l=new Set;D(t,l),C[t.name.value]=l}})})();function Z(n,t){for(var l=0;l<n.definitions.length;l++){var s=n.definitions[l];if(s.name&&s.name.value==t)return s}}function Se(n,t){var l={kind:n.kind,definitions:[Z(n,t)]};n.hasOwnProperty("loc")&&(l.loc=n.loc);var s=C[t]||new Set,S=new Set,p=new Set;for(s.forEach(function(o){p.add(o)});p.size>0;){var f=p;p=new Set,f.forEach(function(o){if(!S.has(o)){S.add(o);var i=C[o]||new Set;i.forEach(function(y){p.add(y)})}})}return S.forEach(function(o){var i=Z(n,o);i&&l.definitions.push(i)}),l}Se(c,"DefaultFpbWithNoCta");var h={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ServiceOrResourceOrWorkshopDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"serviceOrResource"},name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"serviceOrResource",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"serviceOrResource_serviceOrResource_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"serviceOrResourceType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"illustrationsResourcesAndServices"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"serviceOrResourceType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"DefaultFpbWithNoCta"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"workshopSeries"},name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"workshopOrEventSeriesType"},value:{kind:"StringValue",value:"help/services-resources",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"workshopOrEventSeries_workshopOrEventSeries_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"event"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"illustration"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"DefaultFpbWithCardsAndHighlight"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"pastEvents"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime DESC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:"< now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"upcomingEvents"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime ASC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:">= now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"eventType_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedSeries"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]}]}}]}}],loc:{start:0,end:6633}};h.loc.source={body:`#import "../gql/fragments/collections/DefaultFpbWithNoCta.gql"
#import "../gql/fragments/collections/DefaultFpbWithCardsAndHighlight.gql"

query ServiceOrResourceOrWorkshopDetail($slug: [String!]) {
    serviceOrResource: entry(section: "serviceOrResource", slug: $slug) {
        ... on serviceOrResource_serviceOrResource_Entry {
            id
            sectionHandle
            slug
            uri
            serviceOrResourceType # keep this field , used by ES
            buttonUrl {
                ... on buttonUrl_button_BlockType {
                    buttonText
                    buttonUrl
                }
            }
            illustrationsResourcesAndServices
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                    altText
                }
            }
            type: serviceOrResourceType
            title
            text: summary
            locations: associatedLocations {
                id
                to: slug
                title
            }
            associatedTopics {
                id
                text: summary
                title
                slug
                uri
                externalResourceUrl
            }
        }
        ...DefaultFpbWithNoCta
    }
    workshopSeries: entry(
        section: "workshopOrEventSeries"
        workshopOrEventSeriesType: "help/services-resources"
        slug: $slug
    ) {
        ... on workshopOrEventSeries_workshopOrEventSeries_Entry {
            id
            uri
            workshopOrEventSeriesType
            sectionHandle
            typeHandle
            title
            summary
            ongoing
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
        event {
            id
            title
            uri
            sectionHandle
            text: eventDescription
            category: eventType {
                ... on eventType_Category {
                    id
                    title
                }
            }
            image: heroImage {
                ... on heroImage_heroImage_BlockType {
                    image {
                        ...Image
                    }
                }
            }
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
            locations: associatedLocations {
                ... on location_location_Entry {
                    id
                    to: uri
                    title
                    summary
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

    associatedSeries: entries(
        section: "workshopOrEventSeries"
        relatedToEntries: { section: "workshopOrEventSeries", slug: $slug }
    ) {
        title
        sectionHandle
        text: summary
        image: heroImage {
            ... on heroImage_heroImage_BlockType {
                image {
                    ...Image
                }
            }
        }
        to: uri
        ongoing
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
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var J={};function X(n){return n.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var l=t.name.value;return J[l]?!1:(J[l]=!0,!0)})}h.definitions=h.definitions.concat(X(c.definitions));h.definitions=h.definitions.concat(X(pe.definitions));function A(n,t){if(n.kind==="FragmentSpread")t.add(n.name.value);else if(n.kind==="VariableDefinition"){var l=n.type;l.kind==="NamedType"&&t.add(l.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){A(s,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){A(s,t)}),n.definitions&&n.definitions.forEach(function(s){A(s,t)})}var E={};(function(){h.definitions.forEach(function(t){if(t.name){var l=new Set;A(t,l),E[t.name.value]=l}})})();function K(n,t){for(var l=0;l<n.definitions.length;l++){var s=n.definitions[l];if(s.name&&s.name.value==t)return s}}function fe(n,t){var l={kind:n.kind,definitions:[K(n,t)]};n.hasOwnProperty("loc")&&(l.loc=n.loc);var s=E[t]||new Set,S=new Set,p=new Set;for(s.forEach(function(o){p.add(o)});p.size>0;){var f=p;p=new Set,f.forEach(function(o){if(!S.has(o)){S.add(o);var i=E[o]||new Set;i.forEach(function(y){p.add(y)})}})}return S.forEach(function(o){var i=K(n,o);i&&l.definitions.push(i)}),l}fe(h,"ServiceOrResourceOrWorkshopDetail");const Ne={id:"main",class:"page page-service-detail"},he={key:0},ye={key:1},Fe={__name:"[slug]",async setup(n){let t,l;const{$graphql:s,$getHeaders:S}=ie(),p=ne(),{data:f,error:o}=([t,l]=ae(async()=>re(`services-resources-detail-${p.params.slug}`,async()=>await s.default.request(h,{slug:p.params.slug}))),t=await t,l(),t);if(o.value)throw L({...o.value,statusMessage:"Page not found."+o.value,fatal:!0});if(!f.value.serviceOrResource&&!f.value.workshopSeries)throw L({statusCode:404,message:"Page not found",fatal:!0});const i=H(f.value);te(f,(a,V)=>{console.log("In watch preview enabled, newVal, oldVal",a,V),i.value=a});const y=H([]);i.value&&(i.value.serviceOrResource&&M({title:i.value?i.value.serviceOrResource.title:"... loading",meta:[{hid:"description",name:"description",content:Q(i.value.serviceOrResource.text)}]}),i.value.workshopSeries&&M({title:i.value?i.value.workshopSeries.title:"... loading",meta:[{hid:"description",name:"description",content:Q(i.value.workshopSeries.summary)}]}));const b=N(()=>i.value.serviceOrResource.associatedTopics?i.value.serviceOrResource.associatedTopics.map(a=>({...a,to:a.externalResourceUrl?a.externalResourceUrl:`/${a.uri}`})):[]),W=N(()=>i.value.workshopSeries.associatedTopics.map(a=>({...a,to:a.externalResourceUrl?a.externalResourceUrl:`/${a.uri}`}))),x=N(()=>g(i.value.serviceOrResource,"buttonUrl[0].buttonText","")),B=N(()=>g(i.value.serviceOrResource,"buttonUrl[0].buttonUrl",""));N(()=>i.value.workshopSeries.event.map(a=>({...a,to:`/${a.uri}`,image:g(a,"image[0].image[0]",null),startDate:g(a,"startDateWithTime",null),endDate:g(a,"endDateWithTime",null),category:g(a,"category.title","")})));const w=N(()=>i.value.upcomingEvents.map(a=>({...a,to:`/${a.uri}`,image:g(a,"image[0].image[0]",null),startDate:g(a,"startDateWithTime",null),endDate:g(a,"endDateWithTime",null),category:g(a,"category[0].title",""),locations:a.associatedLocations[0]!=null?a.associatedLocations:a.eventLocation}))),_=N(()=>i.value.pastEvents.map(a=>({...a,to:`/${a.uri}`,image:g(a,"image[0].image[0]",null),startDate:g(a,"startDateWithTime",null),endDate:g(a,"endDateWithTime",null),category:g(a,"category[0].title",""),locations:a.associatedLocations[0]!=null?a.associatedLocations:a.eventLocation}))),I=N(()=>i.value.associatedSeries.map(a=>({...a,to:`/${a.to}`,image:g(a,"image[0].image[0]",null),category:"Workshop Series"})));return le(()=>{y.value=S.getHeadersMethod()}),(a,V)=>{const j=se("DividerGeneral");return d(),O("main",Ne,[e(i).serviceOrResource?(d(),O("div",he,[r(e($),{to:"/help/services-resources",title:e(i).serviceOrResource.title,"parent-title":"Services & Resources"},null,8,["title"]),!e(i).serviceOrResource.heroImage||e(i).serviceOrResource.heroImage.length==0||!e(i).serviceOrResource.heroImage[0].image||e(i).serviceOrResource.heroImage[0].image.length==0?(d(),m(e(q),{key:0,class:"banner-text",category:e(i).serviceOrResource.type,title:e(i).serviceOrResource.title,text:e(i).serviceOrResource.text,"button-text":e(x),to:e(B)},null,8,["category","title","text","button-text","to"])):u("",!0),e(i).serviceOrResource.heroImage&&e(i).serviceOrResource.heroImage.length==1&&e(i).serviceOrResource.heroImage[0].image&&e(i).serviceOrResource.heroImage[0].image.length>0?(d(),m(e(v),{key:1,class:"section-banner"},{default:k(()=>[r(e(z),{media:e(i).serviceOrResource.heroImage[0].image[0],category:e(i).serviceOrResource.type,title:e(i).serviceOrResource.title,text:e(i).serviceOrResource.text,prompt:e(x),to:e(B)},null,8,["media","category","title","text","prompt","to"])]),_:1})):u("",!0),r(e(v),{theme:"divider"},{default:k(()=>[r(e(F))]),_:1}),e(y).length>=3?(d(),m(e(de),{key:2,"section-titles":e(y)},null,8,["section-titles"])):u("",!0),r(e(Y),{class:"content",blocks:e(i).serviceOrResource.blocks},null,8,["blocks"]),e(b).length?(d(),m(e(v),{key:3,theme:"divider"},{default:k(()=>[r(e(F),{class:"divider-way-finder",color:"help"})]),_:1})):u("",!0),r(e(v),null,{default:k(()=>[e(b).length?(d(),m(e(U),{key:0,class:"section-cards",items:e(b),"section-title":"Associated Topics","button-text":"All Services and Resources",to:"/help/services-resources"},null,8,["items"])):u("",!0)]),_:1}),r(e(v),{theme:"divider"},{default:k(()=>[r(e(F),{class:"divider-way-finder",color:"help"})]),_:1}),r(e(v),null,{default:k(()=>[r(e(G),{class:"block-call-to-action","is-global":!0})]),_:1})])):(d(),O("div",ye,[r(e($),{to:"/help/services-resources",title:e(i).workshopSeries.title,"parent-title":"Services & Resources"},null,8,["title"]),e(i).workshopSeries&&(e(i).workshopSeries.image.length==0||!e(i).workshopSeries.image[0].image||e(i).workshopSeries.image[0].image.length==0)?(d(),m(e(q),{key:0,title:e(i).workshopSeries.title,text:e(i).workshopSeries.summary,locations:e(i).workshopSeries.associatedLocations,"start-date":e(i).workshopSeries.startDate,"end-date":e(i).workshopSeries.endDate,category:"Workshop Series"},null,8,["title","text","locations","start-date","end-date"])):u("",!0),e(i).workshopSeries.image&&e(i).workshopSeries.image.length==1&&e(i).workshopSeries.image[0].image&&e(i).workshopSeries.image[0].image.length>0?(d(),m(e(v),{key:1,class:"section-banner"},{default:k(()=>[r(e(z),{media:e(i).workshopSeries.image[0].image[0],title:e(i).workshopSeries.title,locations:e(i).workshopSeries.associatedLocations,"start-date":e(i).workshopSeries.startDate,"end-date":e(i).workshopSeries.endDate,category:"Workshop Series",text:e(i).workshopSeries.summary,"align-right":!0},null,8,["media","title","locations","start-date","end-date","text"]),r(e(v),{theme:"divider"},{default:k(()=>[r(e(F),{color:"help"})]),_:1})]),_:1})):u("",!0),e(i).workshopSeries.blocks.length>0?(d(),m(e(Y),{key:2,class:"content",blocks:e(i).workshopSeries.blocks},null,8,["blocks"])):u("",!0),e(i).workshopSeries.blocks.length>0?(d(),m(e(v),{key:3,theme:"divider"},{default:k(()=>[r(e(F),{class:"divider-way-finder",color:"help"})]),_:1})):u("",!0),e(w).length?(d(),m(e(v),{key:4,"section-title":"Upcoming Workshops in this Series"},{default:k(()=>[e(w)?(d(),m(e(R),{key:0,items:e(w),class:"section section-list"},null,8,["items"])):u("",!0),e(_).length?(d(),m(j,{key:1})):u("",!0)]),_:1})):u("",!0),e(_).length?(d(),m(e(v),{key:5,"section-title":"Past Workshops in this Series"},{default:k(()=>[e(_)?(d(),m(e(R),{key:0,items:e(_),class:"section section-list"},null,8,["items"])):u("",!0)]),_:1})):u("",!0),e(i).upcomingEvents.length||e(i).pastEvents.length?(d(),m(e(v),{key:6,theme:"divider"},{default:k(()=>[r(e(F),{class:"divider-way-finder",color:"help"})]),_:1})):u("",!0),e(I).length?(d(),m(e(v),{key:7,"section-title":"Related Series"},{default:k(()=>[r(e(R),{items:e(I)},null,8,["items"])]),_:1})):u("",!0),e(I).length?(d(),m(e(v),{key:8,theme:"divider"},{default:k(()=>[r(e(F),{class:"divider-way-finder",color:"help"})]),_:1})):u("",!0),r(e(v),null,{default:k(()=>[e(W).length>0?(d(),m(e(U),{key:0,class:"section-cards",items:e(W),"section-title":"Associated Topics"},null,8,["items"])):u("",!0)]),_:1}),r(e(v),null,{default:k(()=>[r(e(G),{class:"block-call-to-action","is-global":!0})]),_:1})]))])}}},Ee=ee(Fe,[["__scopeId","data-v-c2cc7b42"]]);export{Ee as default};
