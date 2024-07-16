import{_ as U,u as j,k as J,l as K,m as A,r as X,a as Y,p as Z,e as k,f as y,h as _,s as a,t as S,v as F,q as u,x as N,A as ee,ao as ne,M as L,F as I,G as h,ad as ie,a2 as te,O as $,P as D,ay as ae,I as le,n as re,S as de,T as oe}from"./D87QO4dW.js";import{u as se}from"./BWVOSsg_.js";import{_ as E}from"./I9wROFQL.js";import{_ as M}from"./CD_oK3U4.js";import{r as me}from"./Dim8bG2a.js";import{d as ce}from"./BIzRNX9S.js";import{d as ke,a as ue}from"./Cw_akS4-.js";import{d as pe}from"./BEx1Bxtt.js";import{b as ge,a as ve,d as fe}from"./Q2Lk47BP.js";import{d as ye}from"./CIf3dq7z.js";import{d as Se}from"./DeFtLck0.js";import{d as Fe,a as Ne}from"./CL8yYu5A.js";import{d as he}from"./CvV-bfGY.js";var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ImpactReportFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"impactReportFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_bannerFeatured_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_impactNumberCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumberCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_gridGalleryCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockGridGalleryCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportFpb_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:1966}};r.loc.source={body:`#import "../gql/fragments/BlockBannerFeaturedFragment.gql"
#import "../gql/fragments/BlockCallToActionFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockImpactNumbersCarouselFragment.gql"
#import "../gql/fragments/BlockCardWithImageFragment.gql"
#import "../gql/fragments/BlockHighlightFragment.gql"
#import "../gql/fragments/BlockImpactNumberCardsFragment.gql"
#import "../gql/fragments/BlockGridGalleryCardsFragment.gql"

fragment ImpactReportFpb on ElementInterface {
    blocks: impactReportFpb {
        id
        typeHandle

        ... on impactReportFpb_bannerFeatured_BlockType {
            ...BlockBannerFeaturedFragment
        }
        ... on impactReportFpb_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
        ... on impactReportFpb_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on impactReportFpb_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on impactReportFpb_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on impactReportFpb_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on impactReportFpb_impactNumbersCarousel_BlockType {
            ...BlockImpactNumbersCarouselFragment
        }
        ... on impactReportFpb_impactNumberCards_BlockType {
            ...BlockImpactNumberCardsFragment
        }
        ... on impactReportFpb_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on impactReportFpb_gridGalleryCards_BlockType {
            ...BlockGridGalleryCardsFragment
        }
        ... on impactReportFpb_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var H={};function c(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return H[t]?!1:(H[t]=!0,!0)})}r.definitions=r.definitions.concat(c(ke.definitions));r.definitions=r.definitions.concat(c(pe.definitions));r.definitions=r.definitions.concat(c(ge.definitions));r.definitions=r.definitions.concat(c(ve.definitions));r.definitions=r.definitions.concat(c(ye.definitions));r.definitions=r.definitions.concat(c(fe.definitions));r.definitions=r.definitions.concat(c(Se.definitions));r.definitions=r.definitions.concat(c(Fe.definitions));r.definitions=r.definitions.concat(c(Ne.definitions));r.definitions=r.definitions.concat(c(ue.definitions));r.definitions=r.definitions.concat(c(he.definitions));function b(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){b(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){b(n,i)}),e.definitions&&e.definitions.forEach(function(n){b(n,i)})}var C={};(function(){r.definitions.forEach(function(i){if(i.name){var t=new Set;b(i,t),C[i.name.value]=t}})})();function V(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function _e(e,i){var t={kind:e.kind,definitions:[V(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=C[i]||new Set,d=new Set,s=new Set;for(n.forEach(function(o){s.add(o)});s.size>0;){var f=s;s=new Set,f.forEach(function(o){if(!d.has(o)){d.add(o);var m=C[o]||new Set;m.forEach(function(l){s.add(l)})}})}return d.forEach(function(o){var m=V(e,o);m&&t.definitions.push(m)}),t}_e(r,"ImpactReportFpb");var p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ImpactReport"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"impactReport",block:!1}},{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"postDate desc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReport_impactReport_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"portrait"},name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"richText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"keyArt"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"keyArt_keyArt_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaAndDocuments_Asset"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ImpactReportFpb"},directives:[]},{kind:"Field",alias:{kind:"Name",value:"timelineTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"timelineGallery"},name:{kind:"Name",value:"impactReportTimeline"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactReportTimeline_gridGalleryCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"subtitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gridGalleryCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"gridGalleryCards_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featured"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"externalLink"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"headlineText"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"snippet"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"acknowledgements"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"acknowledgements_richTextWithSectionTitle_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"acknowledgements"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displaySectionTitle"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:1956}};p.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/ImpactReportFpb.gql"

query ImpactReport($path: [String!]) {
  entry(section: "impactReport", uri: $path, orderBy:"postDate desc") {
    ... on impactReport_impactReport_Entry {
      id
      sectionHandle
      uri
      slug
      title
      to: uri
      portrait: image {
        ...Image
      }
      text: richText
      keyArt {
        ... on keyArt_keyArt_BlockType {
          titleGeneral
          summary
          buttonText
          buttonUrl
          heroImage {
            ... on mediaAndDocuments_Asset {
              ...Image
            }
          }
        }
      }

      ...ImpactReportFpb

      timelineTitle: titleGeneral
      timelineGallery: impactReportTimeline {
        ... on impactReportTimeline_gridGalleryCards_BlockType {
          id
          subtitle: titleGeneral
          summary
          gridGalleryCards {
            ... on gridGalleryCards_internalContent_BlockType {
              id
              featured
              contentLink {
                contentType: sectionHandle
                headlineText: title
                snippet: summary
                to: uri
                heroImage {
                  ... on heroImage_heroImage_BlockType {
                    image {
                      ...Image
                    }
                  }
                }
              }
            }
            ... on gridGalleryCards_externalContent_BlockType {
              id
              featured
              to: externalLink
              headlineText: titleGeneral
              snippet: summary
              image {
                ...Image
              }
            }
          }
        }
      }
      acknowledgements {
        ... on acknowledgements_richTextWithSectionTitle_BlockType {
          titleGeneral
          acknowledgements
          displaySectionTitle
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var W={};function O(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return W[t]?!1:(W[t]=!0,!0)})}p.definitions=p.definitions.concat(O(ce.definitions));p.definitions=p.definitions.concat(O(r.definitions));function B(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){B(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){B(n,i)}),e.definitions&&e.definitions.forEach(function(n){B(n,i)})}var R={};(function(){p.definitions.forEach(function(i){if(i.name){var t=new Set;B(i,t),R[i.name.value]=t}})})();function Q(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Te(e,i){var t={kind:e.kind,definitions:[Q(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=R[i]||new Set,d=new Set,s=new Set;for(n.forEach(function(o){s.add(o)});s.size>0;){var f=s;s=new Set,f.forEach(function(o){if(!d.has(o)){d.add(o);var m=R[o]||new Set;m.forEach(function(l){s.add(l)})}})}return d.forEach(function(o){var m=Q(e,o);m&&t.definitions.push(m)}),t}Te(p,"ImpactReport");function be(e=[]){const i=[];for(const t of e)for(const n of t.gridGalleryCards){const d={};d.subtitle=t.subtitle||"",d.sectionSummary=t.summary||"",d.headlineText=n.contentLink&&n.contentLink[0]?n.contentLink[0].headlineText:n.headlineText,d.snippet=n.contentLink&&n.contentLink[0]?n.contentLink[0].snippet:n.snippet,d.featured=n.featured==="true",d.to=n.contentLink&&n.contentLink[0]?`/${n.contentLink[0].to}`:n.to,d.image=n.contentLink&&n.contentLink[0]&&n.contentLink[0].heroImage&&n.contentLink[0].heroImage.length>0&&n.contentLink[0].heroImage[0].image?n.contentLink[0].heroImage[0].image[0]:n.image?n.image[0]:{},i.push(d)}return i}const Be=e=>(de("data-v-057abdd3"),e=e(),oe(),e),Ie={id:"main",class:"page page-impact-report"},Ce={class:"meta"},Re=["innerHTML"],xe=Be(()=>_("h2",{class:"visually-hidden"}," Main Story ",-1)),we={key:1},Ge=["innerHTML"],qe={__name:"index",async setup(e){var x,w;let i,t;const{$graphql:n}=j(),d=J(),f={path:d.params&&d.params.year?`impact/${d.params.year}`:"*"},{data:o,error:m}=([i,t]=K(async()=>ee("impact-report-index",async()=>await n.default.request(p,f))),i=await i,t(),i);if(m.value)throw A({statusCode:404,statusMessage:"Page not found.",fatal:!0});if(!o.value.entry)throw A({statusCode:404,statusMessage:"Page Not Found"});o.value.entry.slug;const l=X(E(o.value,"entry",{}));Y(o,(g,v)=>{console.log("In watch preview enabled, newVal, oldVal",g,v),l.value=E(g,"entry",{})}),se({title:((x=l.value)==null?void 0:x.title)||"... loading",meta:[{hid:"description",name:"description",content:me((w=l.value)==null?void 0:w.text)}]});const P=Z(()=>{const g=be(l.timelineGallery),v=M.groupBy(g,"subtitle");for(const T in v)v[T]=M.groupBy(v[T],"sectionSummary");return v});return(g,v)=>(k(),y("main",Ie,[_("div",Ce,[_("h1",{class:"intro",innerHTML:a(l).title},null,8,Re),a(l).portrait&&a(l).portrait.length>0?(k(),S(a(ne),{key:0,media:a(l).portrait[0],"aspect-ratio":60,class:"portrait-Ginny",alt:"Sketch of Ginny Steel wearing glasses and a grey blazer, with a yellow background"},null,8,["media"])):F("",!0),u(a(L),{class:"text","rich-text-content":a(l).text},null,8,["rich-text-content"])]),u(a(h),{theme:"divider"},{default:N(()=>[u(a(I),{class:"divider",color:"about"})]),_:1}),xe,a(l).keyArt&&a(l).keyArt.length!==0?(k(),S(a(ie),{key:0,class:"section-banner",media:a(l).keyArt[0].heroImage[0],ratio:40,title:a(l).keyArt[0].titleGeneral,description:a(l).keyArt[0].summary,prompt:a(l).keyArt[0].buttonText,to:a(l).keyArt[0].buttonUrl,"align-right":!1},null,8,["media","title","description","prompt","to"])):F("",!0),a(l).blocks?(k(),y("div",we,[a(l).blocks?(k(),S(a(te),{key:0,class:"flexible-content",blocks:a(l).blocks},null,8,["blocks"])):F("",!0)])):F("",!0),u(a(h),{theme:"divider"},{default:N(()=>[u(a(I),{class:"divider",color:"about"})]),_:1}),u(a(h),{"section-title":a(l).timelineTitle},{default:N(()=>[(k(!0),y($,null,D(a(P),(T,G)=>(k(),y("div",{key:G,class:"sub-section-grid"},[_("h3",{class:"grid-gallery-subtitle",innerHTML:G},null,8,Ge),(k(!0),y($,null,D(T,(z,q)=>(k(),S(a(ae),{key:q,"section-summary":q,items:z},null,8,["section-summary","items"]))),128))]))),128))]),_:1},8,["section-title"]),u(a(h),{theme:"divider"},{default:N(()=>[u(a(I),{class:"divider",color:"about"})]),_:1}),a(l).acknowledgements&&a(l).acknowledgements.length===1?(k(),S(a(h),{key:2},{default:N(()=>[_("h2",{class:re(a(l).acknowledgements[0].displaySectionTitle==="true"?"":"visually-hidden")},le(a(l).acknowledgements[0].titleGeneral),3),u(a(L),{class:"credits","rich-text-content":a(l).acknowledgements[0].acknowledgements},null,8,["rich-text-content"])]),_:1})):F("",!0)]))}},Ue=U(qe,[["__scopeId","data-v-057abdd3"]]);export{Ue as default};
