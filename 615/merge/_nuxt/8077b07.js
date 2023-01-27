(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{345:function(e,n,t){"use strict";t(26),t(73);n.a=function(e){return e?e.replace(/(<([^>]+)>)/gi,"").replace(/"/gi,""):"The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."}},346:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Image"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AssetInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"src"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"srcset"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sizes"},value:{kind:"ListValue",values:[{kind:"StringValue",value:"375",block:!1},{kind:"StringValue",value:"960",block:!1},{kind:"StringValue",value:"1280",block:!1},{kind:"StringValue",value:"1920",block:!1},{kind:"StringValue",value:"2560",block:!1}]}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"alt"},name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"focalPoint"},arguments:[],directives:[]}]}}],loc:{start:0,end:243}};t.loc.source={body:'fragment Image on AssetInterface {\n    id\n    src: url(transform: "fullscreen")\n    height(transform: "fullscreen")\n    width(transform: "fullscreen")\n    srcset(sizes: ["375", "960", "1280", "1920", "2560"])\n    alt: altText\n    focalPoint\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.Image=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,o=new Set,m=new Set;for(r.forEach((function(e){m.add(e)}));m.size>0;){var c=m;m=new Set,c.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){m.add(e)})))}))}return o.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"Image")},371:function(e,n,t){"use strict";var r=t(3),d=t(5),l=t(56),o=t(34),m=t(44),c=t(231),v=t(15),k=t(4),f=t(230),h=t(156),S=t(372),N=t(373),y=t(91),A=t(374),F=[],T=d(F.sort),D=d(F.push),E=k((function(){F.sort(void 0)})),x=k((function(){F.sort(null)})),w=h("sort"),_=!k((function(){if(y)return y<70;if(!(S&&S>3)){if(N)return!0;if(A)return A<603;var code,e,n,t,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(t=0;t<47;t++)F.push({k:e+t,v:n})}for(F.sort((function(a,b){return b.v-a.v})),t=0;t<F.length;t++)e=F[t].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:E||!x||!w||!_},{sort:function(e){void 0!==e&&l(e);var n=o(this);if(_)return void 0===e?T(n):T(n,e);var t,r,d=[],k=m(n);for(r=0;r<k;r++)r in n&&D(d,n[r]);for(f(d,function(e){return function(n,t){return void 0===t?-1:void 0===n?1:void 0!==e?+e(n,t)||0:v(n)>v(t)?1:-1}}(e)),t=m(d),r=0;r<t;)n[r]=d[r++];for(;r<k;)c(n,r++);return n}})},372:function(e,n,t){var r=t(74).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},373:function(e,n,t){var r=t(74);e.exports=/MSIE|Trident/.test(r)},374:function(e,n,t){var r=t(74).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},385:function(e,n,t){"use strict";n.a=function(a,b){return a.title<b.title?-1:a.title>b.title?1:0}},408:function(e,n,t){var content=t(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("19afab44",content,!0,{sourceMap:!1})},539:function(e,n,t){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EventsExhibitionsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingEventsExhibitions",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingEventsExhibitions_listingEventsExhibitions_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredEvents"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"eventDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"associatedLocationsAndPrograms"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"events"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"event",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"startDateWithTime ASC",block:!1}},{kind:"Argument",name:{kind:"Name",value:"startDateWithTime"},value:{kind:"StringValue",value:">= now",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventType"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDateWithTime"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"eventLocation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"series"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"workshopOrEventSeries",block:!1}},{kind:"Argument",name:{kind:"Name",value:"workshopOrEventSeriesType"},value:{kind:"StringValue",value:"visit/events-exhibitions",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"workshopOrEventSeriesType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"exhibitions"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"exhibition",block:!1}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"title",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"formatDateTime"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"StringValue",value:"Y-m-d\\TH:i:s",block:!1}},{kind:"Argument",name:{kind:"Name",value:"timezone"},value:{kind:"StringValue",value:"America/Los_Angeles",block:!1}}]}]},{kind:"Field",name:{kind:"Name",value:"ongoing"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:4243}};r.loc.source={body:'#import "~/gql/fragments/Image"\n\nquery EventsExhibitionsList {\n    entry(section: "listingEventsExhibitions") {\n        ... on listingEventsExhibitions_listingEventsExhibitions_Entry {\n            title\n            text: summary\n            featuredEvents {\n                category\n                title\n                summary\n                sectionHandle\n                to: uri\n                eventType {\n                    title\n                }\n                eventDescription\n                ongoing\n                startDate\n                    @formatDateTime(\n                        format: "Y-m-d\\\\TH:i:s"\n                        timezone: "America/Los_Angeles"\n                    )\n                endDate\n                    @formatDateTime(\n                        format: "Y-m-d\\\\TH:i:s"\n                        timezone: "America/Los_Angeles"\n                    )\n                startDateWithTime\n                    @formatDateTime(\n                        format: "Y-m-d\\\\TH:i"\n                        timezone: "America/Los_Angeles"\n                    )\n                endDateWithTime\n                    @formatDateTime(\n                        format: "Y-m-d\\\\TH:i"\n                        timezone: "America/Los_Angeles"\n                    )\n                workshopOrEventSeriesType\n                typeHandle\n                associatedLocations {\n                    title\n                    to: uri\n                }\n                associatedLocationsAndPrograms {\n                    title\n                    to: uri\n                }\n                heroImage {\n                    ... on heroImage_heroImage_BlockType {\n                        id\n                        image {\n                            ...Image\n                        }\n                    }\n                }\n            }\n        }\n    }\n    events: entries(\n        section: "event"\n        orderBy: "startDateWithTime ASC"\n        startDateWithTime: ">= now"\n        limit: 10\n    ) {\n        title\n        to: uri\n        sectionHandle\n        eventType {\n            title\n        }\n        startDateWithTime\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        endDateWithTime\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        associatedLocations {\n            title\n        }\n        eventLocation {\n            title\n        }\n        # Request for heroImage results in 503 error if not limited to 10 entries\n        heroImage {\n            ... on heroImage_heroImage_BlockType {\n                id\n                image {\n                    ...Image\n                }\n            }\n        }\n    }\n    series: entries(\n        section: "workshopOrEventSeries"\n        workshopOrEventSeriesType: "visit/events-exhibitions"\n        orderBy: "title"\n    ) {\n        title\n        sectionHandle\n        startDate\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        endDate\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        ongoing\n        text: summary\n        to: uri\n        category: workshopOrEventSeriesType\n        heroImage {\n            ... on heroImage_heroImage_BlockType {\n                id\n                image {\n                    ...Image\n                }\n            }\n        }\n    }\n    exhibitions: entries(section: "exhibition", orderBy: "title") {\n        title\n        typeHandle\n        sectionHandle\n        startDate\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        endDate\n            @formatDateTime(\n                format: "Y-m-d\\\\TH:i:s"\n                timezone: "America/Los_Angeles"\n            )\n        ongoing\n        text: summary\n        to: uri\n        heroImage {\n            ... on heroImage_heroImage_BlockType {\n                id\n                image {\n                    ...Image\n                }\n            }\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function l(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){l(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){l(e,n)})),e.definitions&&e.definitions.forEach((function(e){l(e,n)}))}r.definitions=r.definitions.concat(t(346).definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!d[n]&&(d[n]=!0,!0)})));var o={};function m(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}r.definitions.forEach((function(e){if(e.name){var n=new Set;l(e,n),o[e.name.value]=n}})),e.exports=r,e.exports.EventsExhibitionsList=function(e,n){var t={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var c=l;l=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(n){var r=m(e,n);r&&t.definitions.push(r)})),t}(r,"EventsExhibitionsList")},540:function(e,n,t){"use strict";t(408)},541:function(e,n,t){var r=t(49)(!1);r.push([e.i,".page-events-exhibits .search-margin[data-v-3b07ad1a]{margin:var(--space-2xl) auto}",""]),e.exports=r},612:function(e,n,t){"use strict";t.r(n);t(30),t(27),t(29),t(10),t(42),t(28),t(43);var r=t(32),d=t(12),l=t(2),o=(t(37),t(51),t(371),t(52),t(33),t(347)),m=t.n(o),c=t(345),v=t(385),k=t(539),f=t.n(k);function h(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(n){Object(d.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var N={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function n(){var t,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$graphql,r=e.params,e.store,console.log("in asyncdata calling axios get event"),console.log("fetching graphql data for Service or Resource detail from Craft for live preview"),n.next=5,t.default.request(f.a,{slug:r.slug});case 5:return data=n.sent,n.abrupt("return",{page:m()(data,"entry",{}),events:m()(data,"events",{}),series:m()(data,"series",{}),exhibitions:m()(data,"exhibitions",{})});case 7:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(c.a)(this.page.text)}]}},computed:{parsedFeaturedEventsAndExhibits:function(){return this.page.featuredEvents.map((function(e){return S(S({},e),{},{to:"/".concat(e.to),image:m()(e,"heroImage[0].image[0]",null),startDate:"event"===e.typeHandle?e.startDateWithTime:e.startDate,endDate:"event"===e.typeHandle?e.endDateWithTime:e.endDate,prompt:"exhibition"===e.typeHandle?"View exhibition":"visit/events-exhibitions"===e.workshopOrEventSeriesType?"View event series":"View event",locations:"exhibition"!==e.typeHandle?e.associatedLocations:e.associatedLocationsAndPrograms})}))},parsedBannerHeader:function(){return this.parsedFeaturedEventsAndExhibits[0]},parsedSectionHighlight:function(){return this.parsedFeaturedEventsAndExhibits.slice(1).map((function(e){return S(S({},e),{},{category:"exhibition"===e.typeHandle?"Exhibition":"visit/events-exhibitions"===e.workshopOrEventSeriesType?"Event Series":e.eventType.length>0?e.eventType[0].title:"Event",title:e.title})}))},parsedEvents:function(){return Object(r.a)(this.events||[]).map((function(e){var n=e||{};return S(S({},n),{},{to:"/".concat(n.to),image:m()(n,"heroImage[0].image[0]",null),startDate:m()(n,"startDateWithTime",null),endDate:m()(n,"endDateWithTime",null),category:m()(n,"eventType[0].title",null)})}))},parsedSeriesAndExhibitions:function(){return[].concat(Object(r.a)(this.series||[]),Object(r.a)(this.exhibitions||[])).sort(v.a).map((function(e){var n=e||{};return S(S({},n),{},{category:"visit/events-exhibitions"===n.category?"event series":"exhibition"===n.typeHandle?"exhibition":n.category,to:"/".concat(n.to),image:m()(n,"heroImage[0].image[0]",null)})}))},blockCallToAction:function(){return{to:"/help/foo/bar/",name:"Lorem ipsum dolor",title:"Lorem ipsum dolor sit amet?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}},watchQuery:["offset","q"]},y=(t(540),t(41)),component=Object(y.a)(N,(function(){var e=this,n=e._self._c;return n("main",{staticClass:"page page-events-exhibits",attrs:{id:"main"}},[n("masthead-secondary",{attrs:{title:e.page.title,text:e.page.text}}),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"search-margin"})],1),e._v(" "),e.page.featuredEvents.length?n("section-wrapper",{staticClass:"section-no-top-margin"},[n("banner-featured",{staticClass:"banner section-featured-banner",attrs:{image:e.parsedBannerHeader.image,title:e.parsedBannerHeader.title,breadcrumb:"Featured","align-right":!1,"start-date":e.parsedBannerHeader.startDate,"end-date":e.parsedBannerHeader.endDate,text:e.parsedBannerHeader.text,to:e.parsedBannerHeader.to,prompt:e.parsedBannerHeader.prompt,locations:e.parsedBannerHeader.locations,"section-handle":e.parsedBannerHeader.sectionHandle}}),e._v(" "),e.parsedSectionHighlight.length?n("divider-general"):e._e(),e._v(" "),n("section-teaser-highlight",{staticClass:"section",attrs:{items:e.parsedSectionHighlight}})],1):e._e(),e._v(" "),e.page.featuredEvents.length&&e.parsedEvents.length?n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{attrs:{color:"visit"}})],1):e._e(),e._v(" "),n("section-wrapper",{attrs:{"section-title":"All Upcoming Events"}},[n("section-teaser-list",{attrs:{items:e.parsedEvents}})],1),e._v(" "),e.parsedEvents.length?n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{attrs:{color:"visit"}})],1):e._e(),e._v(" "),n("section-wrapper",{attrs:{"section-title":"Ongoing Event Series & Exhibitions"}},[n("section-teaser-card",{attrs:{items:e.parsedSeriesAndExhibitions}})],1),e._v(" "),e.parsedSeriesAndExhibitions.length?n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{attrs:{color:"visit"}})],1):e._e(),e._v(" "),n("section-wrapper",[n("block-call-to-action",{staticClass:"section block-call-to-action",attrs:{"is-global":!0}})],1)],1)}),[],!1,null,"3b07ad1a",null);n.default=component.exports}}]);