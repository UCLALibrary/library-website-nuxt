import{_ as W,u as M,k as z,l as Y,m as w,r as S,a as G,p as f,L as Z,e as s,f as P,q as o,s as e,t as l,v as r,x as v,A as K,C as Q,Y as X,Z as J,G as g,F as y,ab as j,as as ee,$ as V,at as ie,au as ne,ag as ae,al as te,a0 as de,a2 as se,M as le,am as re}from"./D87QO4dW.js";import{u as me}from"./BWVOSsg_.js";import{_ as m}from"./I9wROFQL.js";import{r as ue}from"./Dim8bG2a.js";import{d as oe}from"./BEHunIJq.js";import{d as ce}from"./BIzRNX9S.js";import"./HCErRXQJ.js";import"./Cw_akS4-.js";import"./CL8yYu5A.js";import"./DeFtLck0.js";import"./CIf3dq7z.js";import"./Q2Lk47BP.js";import"./CLd6PcwS.js";import"./BEx1Bxtt.js";var p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LocationDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"location",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"location_location_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typehandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"affiliateLibraryUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"about"},name:{kind:"Name",value:"richTextSimplified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressLine1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressLine2"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressCity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressState"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressZipCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"addressCountry"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"howToGetHere"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amenities"},arguments:[{kind:"Argument",name:{kind:"Name",value:"label"},value:{kind:"BooleanValue",value:!0}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"amenitiesIcons"},name:{kind:"Name",value:"amenities"},arguments:[{kind:"Argument",name:{kind:"Name",value:"label"},value:{kind:"BooleanValue",value:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"space"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reservationRequired"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediatorEmail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reservationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"spaceType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"spaceAmenities"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"resourceServiceWorkshop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"type"},name:{kind:"Name",value:"serviceOrResourceType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"campusMapId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"libcalLocationIdForHours"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedArticles"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"location",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"dateUpdated desc",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"authors"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"startDate"},name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"endDate"},name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedEndowments"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"endowments",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"location",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"endowment_endowments_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedEvents"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime ASC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:">= now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"location",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"event_event_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"eventTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"requiresRegistration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"eventLocation"},name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"isOnline"},name:{kind:"Name",value:"onlineEventUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"moreInformation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventOwner"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"associatedExhibitions"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"exhibition",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"location",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"exhibition_exhibition_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:5581}};p.loc.source={body:`#import "../gql/fragments/collections/AllFpb.gql"
#import "../gql/fragments/Image.gql"

query LocationDetail($slug: [String!]) {
    entry(section: "location", slug: $slug) {
        ... on location_location_Entry {
            id
            typehandle
            sectionHandle
            slug
            uri
            affiliateLibraryUrl
            locationType
            title
            text: summary
            about: richTextSimplified
            heroImage {
                image {
                    ...Image
                }
            }
            email
            phoneNumber
            address {
                id
                addressLine1
                addressLine2
                addressCity
                addressState
                addressZipCode
                addressCountry
            }
            howToGetHere
            amenities(label: true)
            amenitiesIcons: amenities(label: false)
            space {
                title
                text: summary
                reservationRequired
                mediatorEmail
                reservationUrl
                spaceType {
                    id
                    title
                }
                spaceAmenities {
                    id
                    title
                }
                associatedLocations {
                    id
                    to: slug
                    title
                }
            }
            resourceServiceWorkshop {
                id
                text: summary
                title
                slug
                uri
                externalResourceUrl
                type: serviceOrResourceType
            }
            campusMapId
            libcalLocationIdForHours
            staffMember {
                id
                email
                to: uri
            }
            ...AllFpb
        }
    }
    associatedArticles: entries(
        section: "article"
        relatedToEntries: { section: "location", slug: $slug }
        orderBy: "dateUpdated desc"
        limit: 3
    ) {
        ... on article_article_Entry {
            id
            title
            associatedLocations {
                id
                title
            }
            to: slug
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
                title
            }
            description: summary
            category: typeHandle
            startDate: dateUpdated
            endDate: dateUpdated
        }
    }
    associatedEndowments: entries(
        section: "endowments"
        relatedToEntries: { section: "location", slug: $slug }
    ) {
        ... on endowment_endowments_Entry {
            id
            slug
            title
            summary
            dateUpdated
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
    associatedEvents: entries(
        section: "event"
        orderBy: "startDateWithTime ASC"
        startDateWithTime: ">= now"
        relatedToEntries: { section: "location", slug: $slug }
    ) {
        ... on event_event_Entry {
            id
            slug
            title: eventTitle
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
            associatedLocations {
                id
                title
                to: uri
            }
            requiresRegistration
            eventDescription
            #heroImage {
            #   ... on heroImage_heroImage_BlockType {
            #      id
            #     image {
            #        ...Image
            #   }
            #}
            #}
            eventType {
                title
            }
            eventLocation: location {
                title
            }
            isOnline: onlineEventUrl
            moreInformation
            eventOwner
        }
    }
    associatedExhibitions: entries(
        section: "exhibition"
        relatedToEntries: { section: "location", slug: $slug }
    ) {
        ... on exhibition_exhibition_Entry {
            id
            title
            id
            slug
            uri
            title
            summary
            dateUpdated

            ongoing
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                }
            }
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
            associatedLocations {
                id
                title
                to: uri
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var C={};function R(a){return a.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var d=t.name.value;return C[d]?!1:(C[d]=!0,!0)})}p.definitions=p.definitions.concat(R(oe.definitions));p.definitions=p.definitions.concat(R(ce.definitions));function b(a,t){if(a.kind==="FragmentSpread")t.add(a.name.value);else if(a.kind==="VariableDefinition"){var d=a.type;d.kind==="NamedType"&&t.add(d.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(u){b(u,t)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(u){b(u,t)}),a.definitions&&a.definitions.forEach(function(u){b(u,t)})}var x={};(function(){p.definitions.forEach(function(t){if(t.name){var d=new Set;b(t,d),x[t.name.value]=d}})})();function H(a,t){for(var d=0;d<a.definitions.length;d++){var u=a.definitions[d];if(u.name&&u.name.value==t)return u}}function ve(a,t){var d={kind:a.kind,definitions:[H(a,t)]};a.hasOwnProperty("loc")&&(d.loc=a.loc);var u=x[t]||new Set,F=new Set,N=new Set;for(u.forEach(function(c){N.add(c)});N.size>0;){var k=N;N=new Set,k.forEach(function(c){if(!F.has(c)){F.add(c);var i=x[c]||new Set;i.forEach(function(_){N.add(_)})}})}return F.forEach(function(c){var i=H(a,c);i&&d.definitions.push(i)}),d}ve(p,"LocationDetail");const ke={class:"page page-location-detail"},ge={__name:"[slug]",async setup(a){let t,d;const{$graphql:u,$getHeaders:F}=M(),N=z(),{data:k,error:c}=([t,d]=Y(async()=>K(`locations-detail-${N.params.slug}`,async()=>await u.default.request(p,{slug:N.params.slug}))),t=await t,d(),t);if(c.value)throw w({...c.value,statusMessage:"Page not found."+c.value,fatal:!0});if(!k.value.entry)throw w({statusCode:404,statusMessage:"Page Not Found",fatal:!0});k.value.entry.slug;const i=S(m(k.value,"entry",{}));G(k,(n,A)=>{console.log("In watch preview enabled, newVal, oldVal",n,A),i.value=m(n,"entry",{})}),S(m(k.value,"associatedArticles",{}));const _=S(m(k.value,"associatedExhibitions",{}));S(m(k.value,"associatedEndowments",{}));const O=S(m(k.value,"associatedEvents",{})),T=S([]);me({title:i.value?i.value.title:"... loading",meta:[{hid:"description",name:"description",content:ue(i.value.text)}]});const D=f(()=>i.value.locationType!=="affiliateLibrary"&&i.value.title.length>0?"/about/staff?q=&filters=locations.title.keyword:("+i.value.title.replaceAll(" ","+")+")":""),E=f(()=>i.value.address.length&&i.value.address[0].addressLine2?i.value.address[0].addressLine1+`
`+i.value.address[0].addressLine2+`
`+i.value.address[0].addressCity+", "+i.value.address[0].addressState+" "+i.value.address[0].addressZipCode:i.value.address.length?i.value.address[0].addressLine1+`
`+i.value.address[0].addressCity+", "+i.value.address[0].addressState+" "+i.value.address[0].addressZipCode:""),L=f(()=>`https://map.ucla.edu/?id=${i.value.campusMapId}&e=true`),h=f(()=>i.value.space.map(n=>({...n,buttonText:n.reservationRequired==="email"?"Email to Reserve":"Reserve",to:n.reservationRequired==="email"?`mailto:${n.mediatorEmail}`:n.reservationUrl,location:n.associatedLocations?n.associatedLocations[0]:""}))),U=f(()=>i.value.resourceServiceWorkshop.map(n=>({...n,to:n.externalResourceUrl?n.externalResourceUrl:`/${n.uri}`}))),$=f(()=>_.value.map(n=>({...n,to:`/visit/events-exhibitions/${n.slug}`,image:m(n,"heroImage[0].image[0]",{}),text:m(n,"summary",""),startDate:m(n,"startDate",""),endDate:m(n,"endDate",""),category:"Exhibition"}))),q=f(()=>O.value.map(n=>({...n,to:`/visit/events-exhibitions/${n.slug}`,image:m(n,"heroImage[0].image[0]",null),text:m(n,"eventDescription",""),startDate:m(n,"startDateWithTime",""),endDate:m(n,"endDateWithTime",""),category:m(n,"eventType[0].title","")}))),I=f(()=>$.value.concat(q.value));return Z(()=>{T.value=F.getHeadersMethod()}),(n,A)=>{const B=re;return s(),P("main",ke,[o(e(Q),{to:"/visit/locations",title:e(i).title,"parent-title":"Locations"},null,8,["title"]),!e(i).heroImage||e(i).heroImage.length===0?(s(),l(e(X),{key:0,class:"banner-text",title:e(i).title,text:e(i).text,address:e(E),email:e(i).email,phone:e(i).phoneNumber,"address-link":e(L),"staff-directory-link":e(D)},null,8,["title","text","address","email","phone","address-link","staff-directory-link"])):r("",!0),e(i).heroImage&&e(i).heroImage.length===1?(s(),l(e(g),{key:1,class:"section-banner"},{default:v(()=>[o(e(J),{media:e(i).heroImage[0].image[0],title:e(i).title,text:e(i).text,address:e(E),email:e(i).email,phone:e(i).phoneNumber,"staff-directory-link":e(D),"address-link":e(L)},null,8,["media","title","text","address","email","phone","staff-directory-link","address-link"])]),_:1})):r("",!0),o(e(g),{theme:"divider"},{default:v(()=>[e(i).libcalLocationIdForHours||e(i).amenitiesIcons.length||e(h).length?(s(),l(e(y),{key:0,class:"divider-way-finder",color:"visit"})):r("",!0)]),_:1}),e(T).length>=2?(s(),l(e(j),{key:2,"section-titles":e(T)},null,8,["section-titles"])):r("",!0),e(i).libcalLocationIdForHours||e(i).amenitiesIcons.length||e(h).length?(s(),l(e(g),{key:3,"section-title":"Using the Library","section-summary":e(i).howToGetHere},{default:v(()=>[e(i).libcalLocationIdForHours?(s(),l(e(ee),{key:0,lid:e(i).libcalLocationIdForHours},null,8,["lid"])):r("",!0),e(i).amenitiesIcons.length?(s(),l(e(V),{key:1,class:"divider-general"})):r("",!0),e(i).amenitiesIcons.length?(s(),l(e(ie),{key:2,amenities:e(i).amenitiesIcons,class:"amenities"},null,8,["amenities"])):r("",!0),e(h).length?(s(),l(e(V),{key:3,class:"divider-general"})):r("",!0),e(h).length?(s(),l(e(ne),{key:4,class:"section-block-spaces",items:e(h)},null,8,["items"])):r("",!0)]),_:1},8,["section-summary"])):r("",!0),o(e(g),{theme:"divider"},{default:v(()=>[e(i).resourceServiceWorkshop.length?(s(),l(e(y),{key:0,class:"divider-way-finder",color:"visit"})):r("",!0)]),_:1}),e(i).resourceServiceWorkshop.length?(s(),l(e(g),{key:4,class:"services-and-resources","section-title":"Services & Resources"},{default:v(()=>[o(e(ae),{items:e(U)},null,8,["items"]),e(i).resourceServiceWorkshop.length?(s(),l(B,{key:0,class:"button-more",to:"/help/services-resources"},{default:v(()=>[o(e(te),{text:"See All Services & Resources"})]),_:1})):r("",!0)]),_:1})):r("",!0),o(e(g),{theme:"divider"},{default:v(()=>[e(I).length?(s(),l(e(y),{key:0,color:"visit",class:"divider-way-finder"})):r("",!0)]),_:1}),e(I).length>0?(s(),l(e(g),{key:5,class:"events-exhibitions","section-title":"Events & Exhibitions"},{default:v(()=>[o(e(de),{class:"section-teaser-list",items:e(I)},null,8,["items"])]),_:1})):r("",!0),o(e(g),{theme:"divider"},{default:v(()=>[e(i).blocks.length>0?(s(),l(e(y),{key:0,class:"divider-way-finder",color:"visit"})):r("",!0)]),_:1}),o(e(se),{class:"content",blocks:e(i).blocks},null,8,["blocks"]),o(e(g),{theme:"divider"},{default:v(()=>[e(i).about?(s(),l(e(y),{key:0,color:"visit",class:"divider-way-finder"})):r("",!0)]),_:1}),e(i).about?(s(),l(e(g),{key:6,class:"about","section-title":"About"},{default:v(()=>[o(e(le),{class:"about-text","rich-text-content":e(i).about},null,8,["rich-text-content"])]),_:1})):r("",!0)])}}},Ee=W(ge,[["__scopeId","data-v-2aace6a5"]]);export{Ee as default};
