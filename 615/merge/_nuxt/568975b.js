(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{418:function(e,t,n){var content=n(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("e28f237c",content,!0,{sourceMap:!1})},567:function(e,t,n){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EndowmentDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"endowment",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"alternativeName"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"alternativeName_alternativeName_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"languageAltName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"endowmentDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectAreas"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"donors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"donors_donor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"donationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"spakCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpbWithNoBanner"},directives:[]}]}}]}}],loc:{start:0,end:792}};r.loc.source={body:'#import "~/gql/fragments/Image"\n#import "~/gql/fragments/collections/AllFpbWithNoBanner"\n\nquery EndowmentDetail($slug: [String!]) {\n  entry(section: "endowment", slug: $slug) {\n    uri\n    slug\n    sectionHandle\n    title\n    text: summary\n    heroImage {\n      ... on heroImage_heroImage_BlockType {\n        image {\n          ...Image\n        }\n        altText\n      }\n    }\n    alternativeName {\n      ... on alternativeName_alternativeName_BlockType {\n        languageAltName\n        fullName\n      }\n    }\n    endowmentDescription\n    subjectAreas {\n      title\n    }\n    donors {\n      ... on donors_donor_BlockType {\n        firstName\n        lastName\n      }\n    }\n    to: donationUrl\n    spakCode\n    associatedLocations {\n      title\n      uri\n    }\n    ...AllFpbWithNoBanner\n  }\n} \n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function l(defs){return defs.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;return!o[t]&&(o[t]=!0,!0)}))}function d(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,t)})),e.definitions&&e.definitions.forEach((function(e){d(e,t)}))}r.definitions=r.definitions.concat(l(n(346).definitions)),r.definitions=r.definitions.concat(l(n(395).definitions));var c={};function m(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}r.definitions.forEach((function(e){if(e.name){var t=new Set;d(e,t),c[e.name.value]=t}})),e.exports=r,e.exports.EndowmentDetail=function(e,t){var n={kind:e.kind,definitions:[m(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=c[t]||new Set,o=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var d=l;l=new Set,d.forEach((function(e){o.has(e)||(o.add(e),(c[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(t){var r=m(e,t);r&&n.definitions.push(r)})),n}(r,"EndowmentDetail")},568:function(e,t,n){"use strict";n(418)},569:function(e,t,n){var r=n(49)(!1);r.push([e.i,'.page-endowments-detail .description-with-image[data-v-2060b504]{max-width:928px;margin:0 auto;display:flex;justify-content:space-between;grid-gap:32px;gap:32px;flex-wrap:wrap}.page-endowments-detail .description-with-image .bookplate[data-v-2060b504]{width:300px;height:auto;-o-object-fit:contain;object-fit:contain;align-self:start}.page-endowments-detail .description[data-v-2060b504]{max-width:596px;display:flex;flex-flow:column;grid-gap:4px;gap:4px}.page-endowments-detail .description ul[data-v-2060b504]{list-style:none}.page-endowments-detail .description .description-text[data-v-2060b504]{padding-right:0;margin:20px 0}.page-endowments-detail .donors[data-v-2060b504]{font-family:"Karbon",Helvetica,Arial,sans-serif;font-size:var(--step-1);font-weight:500;line-height:1.2;color:var(--color-primary-blue-03);margin-bottom:12px;margin-left:0}.page-endowments-detail .catalog-link[data-v-2060b504]{font-family:var(--font-secodary);font-size:20px;color:var(--color-primary-blue-03);text-decoration:underline;text-decoration-thickness:2px;-webkit-text-decoration-color:var(--color-default-cyan-03);text-decoration-color:var(--color-default-cyan-03);text-underline-offset:1px;text-decoration:none}.page-endowments-detail .catalog-link[data-v-2060b504]:hover{color:var(--color-black);text-decoration:underline;text-decoration-thickness:2px;-webkit-text-decoration-color:var(--color-default-cyan-03);text-decoration-color:var(--color-default-cyan-03);text-underline-offset:1px}.page-endowments-detail .catalog-link[data-v-2060b504]:after{content:"";width:22px;height:22px;margin-left:4px;line-height:1;background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN2Z19faWNvbi1leHRlcm5hbC1saW5rIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xMS44NzggMTkuNTY3bDkuNTQxLTkuNTQxIiBzdHJva2U9IiMwQjZBQjciIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ic3ZnX19zdHJva2UtLXByaW1hcnktYmx1ZS0wMyIvPjxwYXRoIGQ9Ik0yMi43MSAxOS41Njd2Ljc1aC0xLjV2LS43NWgxLjV6bS0uNzUtMTAuMDgydi0uNzVoLjc1di43NWgtLjc1em0tMTAuMDgyLjc1aC0uNzV2LTEuNWguNzV2MS41em05LjMzMSA5LjMzMlY5LjQ4NWgxLjV2MTAuMDgyaC0xLjV6bS43NS05LjMzMkgxMS44Nzh2LTEuNWgxMC4wODF2MS41eiIgZmlsbD0iIzBCNkFCNyIgY2xhc3M9InN2Z19fZmlsbC0tcHJpbWFyeS1ibHVlLTAzIi8+PHBhdGggZD0iTTcgMjUuNDc0aDE0LjI4NiIgc3Ryb2tlPSIjMEFBNUZGIiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9InN2Z19fc3Ryb2tlLS1kZWZhdWx0LWN5YW4tMDMiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzMiAwKSIgZD0iTTAgMGgzMnYzMi44NjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");background-position:50%;background-repeat:no-repeat;background-size:contain;vertical-align:middle;display:inline-block}@media only screen and (max-width:1024px){.page-endowments-detail .description[data-v-2060b504]{max-width:100%}}',""]),e.exports=r},620:function(e,t,n){"use strict";n.r(t);n(10),n(22),n(54),n(39),n(26),n(27),n(53),n(55),n(38),n(30),n(29),n(42),n(28),n(43);var r=n(12),o=n(2),l=(n(33),n(90),n(51),n(37),n(347)),d=n.n(l),c=n(345),m=n(567),v=n.n(m);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function N(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function y(e){if(!(e&&e.length>0))return"";w(e)}function w(e){var t,n=[],r=N(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,l="";""!==(l=!o.firstName||""===o.firstName||o.lastName&&""!==o.lastName?o.firstName&&""!==o.firstName&&o.lastName&&""!==o.lastName?o.firstName+" "+o.lastName:o.lastName:o.firstName)&&n.push(l)}}catch(e){r.e(e)}finally{r.f()}if(1==n.length)return"".concat(n[0]);var d=[n.slice(0,-1).join(", "),n.slice(-1)[0]].join(n.length<2?"":" and ");return"".concat(d)}var x={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$graphql,r=e.params,o=e.$elasticsearchplugin,l=e.error,e.app,t.next=3,n.default.request(v.a,{slug:r.slug});case 3:if((data=t.sent).entry||l({statusCode:404,message:"Page not found"}),!data||!data.entry){t.next=10;break}return console.log("Endowment detail page: slug: "+data.entry.slug+"Now uri:"+data.entry.uri),data.entry.donorNames=y(data.entry.donors),t.next=10,o.index(data.entry,r.slug);case 10:return t.abrupt("return",{page:d()(data,"entry",{})});case 11:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(c.a)(this.page.text)}]}},computed:{parsedDonors:function(){return this.page.donors&&this.page.donors.length>0?w(this.page.donors):""},parsedAssociatedLocations:function(){return this.page.associatedLocations.map((function(e){return k(k({},e),{},{to:"/".concat(e.uri)})}))},parsedImage:function(){return this.page.heroImage[0].image[0]},catalogLink:function(){return"https://search.library.ucla.edu/discovery/search?query=lds04,contains,".concat(this.page.spakCode,",AND&tab=LibraryCatalog&search_scope=MyInstitution&vid=01UCS_LAL:UCLA&mode=advanced&offset=0")}}},S=(n(568),n(41)),component=Object(S.a)(x,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"page page-endowments-detail",attrs:{id:"main"}},[t("nav-breadcrumb",{attrs:{to:"/give/endowments",title:e.page.title,"parent-title":"Collection Endowments"}}),e._v(" "),t("banner-text",{attrs:{title:e.page.title,text:e.page.text,"alternative-full-name":e.page.alternativeName&&e.page.alternativeName[0]&&e.page.alternativeName[0].fullName||"",language:e.page.alternativeName&&e.page.alternativeName[0]&&e.page.alternativeName[0].languageAltName||"","button-text":"Give Now",to:e.page.to}}),e._v(" "),t("section-wrapper",{attrs:{theme:"divider"}},[t("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1),e._v(" "),t("section-wrapper",[t("div",{staticClass:"description-with-image"},[t("div",{staticClass:"description"},[e.page.donors[0].lastName?t("rich-text",{staticClass:"donors"},[e._v("\n                    Made possible by a gift from "+e._s(e.parsedDonors)+"\n                ")]):e._e(),e._v(" "),e.page.subjectAreas[0]?t("icon-with-link",{staticClass:"subject-area",attrs:{"icon-name":"svg-icon-book",text:e.page.subjectAreas[0].title,to:"/give"}}):e._e(),e._v(" "),e.parsedAssociatedLocations.length>0?t("ul",e._l(e.parsedAssociatedLocations,(function(e,n){return t("li",{key:"AssociatedLocation".concat(n)},[t("icon-with-link",{staticClass:"associated-locations",attrs:{"icon-name":"svg-icon-location",text:e.title,to:e.to}})],1)})),0):e._e(),e._v(" "),e.page.endowmentDescription?t("rich-text",{staticClass:"description-text",attrs:{"rich-text-content":e.page.endowmentDescription}}):e._e(),e._v(" "),e.page.spakCode?t("smart-link",{staticClass:"catalog-link",attrs:{to:e.catalogLink}},[e._v("\n                    See all items purchased through this Endowment\n                ")]):e._e()],1),e._v(" "),e.page.heroImage.length>0?t("img",{staticClass:"bookplate",attrs:{src:e.parsedImage.src,alt:e.parsedImage.alt}}):e._e()])]),e._v(" "),t("section-wrapper",{attrs:{theme:"divider"}},[t("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1),e._v(" "),t("section-wrapper",[t("block-call-to-action",{attrs:{"svg-name":"svg-call-to-action-money",title:"Give to this endowment",text:"Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public.",name:"Donate",to:e.page.to}})],1)],1)}),[],!1,null,"2060b504",null);t.default=component.exports}}]);