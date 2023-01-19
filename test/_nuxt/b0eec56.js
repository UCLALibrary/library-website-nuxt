(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{421:function(e,n,t){var content=t(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("be758b24",content,!0,{sourceMap:!1})},572:function(e,n,t){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EndowmentDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"endowment",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"alternativeName"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"alternativeName_alternativeName_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"languageAltName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"endowmentDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectAreas"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"donors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"donors_donor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"endowmentDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectAreas"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"donors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"donors_donor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"donationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"spakCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpbWithNoBanner"},directives:[]}]}}]}}],loc:{start:0,end:954}};r.loc.source={body:'#import "~/gql/fragments/Image"\n#import "~/gql/fragments/collections/AllFpbWithNoBanner"\n\nquery EndowmentDetail($slug: [String!]) {\n  entry(section: "endowment", slug: $slug) {\n    uri\n    slug\n    sectionHandle\n    title\n    text: summary\n    heroImage {\n      ... on heroImage_heroImage_BlockType {\n        image {\n          ...Image\n        }\n        altText\n      }\n    }\n    alternativeName {\n      ... on alternativeName_alternativeName_BlockType {\n        languageAltName\n        fullName\n      }\n    }\n    endowmentDescription\n    subjectAreas {\n      title\n    }\n    donors {\n      ... on donors_donor_BlockType {\n        firstName\n        lastName\n      }\n    }\n    endowmentDescription\n    subjectAreas {\n      title\n    }\n    donors {\n      ... on donors_donor_BlockType {\n        firstName\n        lastName\n      }\n    }\n    to: donationUrl\n    spakCode\n    associatedLocations {\n      title\n      uri\n    }\n    ...AllFpbWithNoBanner\n  }\n} \n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function d(defs){return defs.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!o[n]&&(o[n]=!0,!0)}))}function l(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){l(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){l(e,n)})),e.definitions&&e.definitions.forEach((function(e){l(e,n)}))}r.definitions=r.definitions.concat(d(t(346).definitions)),r.definitions=r.definitions.concat(d(t(397).definitions));var c={};function m(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}r.definitions.forEach((function(e){if(e.name){var n=new Set;l(e,n),c[e.name.value]=n}})),e.exports=r,e.exports.EndowmentDetail=function(e,n){var t={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=c[n]||new Set,o=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var l=d;d=new Set,l.forEach((function(e){o.has(e)||(o.add(e),(c[e]||new Set).forEach((function(e){d.add(e)})))}))}return o.forEach((function(n){var r=m(e,n);r&&t.definitions.push(r)})),t}(r,"EndowmentDetail")},573:function(e,n,t){"use strict";t(421)},574:function(e,n,t){var r=t(49)(!1);r.push([e.i,'.page-endowments-detail .description-with-image[data-v-3594ec33]{max-width:928px;margin:0 auto;display:flex;justify-content:space-between;grid-gap:32px;gap:32px;flex-wrap:wrap}.page-endowments-detail .description-with-image .bookplate[data-v-3594ec33]{width:300px;height:auto;-o-object-fit:contain;object-fit:contain;align-self:start}.page-endowments-detail .description[data-v-3594ec33]{max-width:596px}.page-endowments-detail .description .description-text[data-v-3594ec33]{padding-right:0}.page-endowments-detail .donors[data-v-3594ec33]{font-family:"Karbon",Helvetica,Arial,sans-serif;font-size:var(--step-1);font-weight:500;line-height:1.2;color:var(--color-primary-blue-03);margin-bottom:12px}.page-endowments-detail .description-text[data-v-3594ec33],.page-endowments-detail .subject-area[data-v-3594ec33]{margin-bottom:20px}.page-endowments-detail .catalog-link[data-v-3594ec33]{font-family:var(--font-secodary);font-size:20px;color:var(--color-primary-blue-03);text-decoration:underline;text-decoration-thickness:2px;-webkit-text-decoration-color:var(--color-default-cyan-03);text-decoration-color:var(--color-default-cyan-03);text-underline-offset:1px;text-decoration:none}.page-endowments-detail .catalog-link[data-v-3594ec33]:hover{color:var(--color-black);text-decoration:underline;text-decoration-thickness:2px;-webkit-text-decoration-color:var(--color-default-cyan-03);text-decoration-color:var(--color-default-cyan-03);text-underline-offset:1px}.page-endowments-detail .catalog-link[data-v-3594ec33]:after{content:"";width:22px;height:22px;margin-left:4px;line-height:1;background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN2Z19faWNvbi1leHRlcm5hbC1saW5rIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xMS44NzggMTkuNTY3bDkuNTQxLTkuNTQxIiBzdHJva2U9IiMwQjZBQjciIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ic3ZnX19zdHJva2UtLXByaW1hcnktYmx1ZS0wMyIvPjxwYXRoIGQ9Ik0yMi43MSAxOS41Njd2Ljc1aC0xLjV2LS43NWgxLjV6bS0uNzUtMTAuMDgydi0uNzVoLjc1di43NWgtLjc1em0tMTAuMDgyLjc1aC0uNzV2LTEuNWguNzV2MS41em05LjMzMSA5LjMzMlY5LjQ4NWgxLjV2MTAuMDgyaC0xLjV6bS43NS05LjMzMkgxMS44Nzh2LTEuNWgxMC4wODF2MS41eiIgZmlsbD0iIzBCNkFCNyIgY2xhc3M9InN2Z19fZmlsbC0tcHJpbWFyeS1ibHVlLTAzIi8+PHBhdGggZD0iTTcgMjUuNDc0aDE0LjI4NiIgc3Ryb2tlPSIjMEFBNUZGIiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9InN2Z19fc3Ryb2tlLS1kZWZhdWx0LWN5YW4tMDMiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzMiAwKSIgZD0iTTAgMGgzMnYzMi44NjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");background-position:50%;background-repeat:no-repeat;background-size:contain;vertical-align:middle;display:inline-block}@media only screen and (max-width:1024px){.page-endowments-detail .description[data-v-3594ec33]{max-width:100%}}',""]),e.exports=r},627:function(e,n,t){"use strict";t.r(n);t(10),t(22),t(55),t(39),t(27),t(28),t(53),t(56),t(38);var r=t(2),o=(t(33),t(90),t(52),t(347)),d=t.n(o),l=t(345),c=t(572),m=t.n(c);function v(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return k(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return d=e.done,e},e:function(e){l=!0,o=e},f:function(){try{d||null==t.return||t.return()}finally{if(l)throw o}}}}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function f(e){if(!(e&&e.length>0))return"";N(e)}function N(e){var n,t=[],r=v(e);try{for(r.s();!(n=r.n()).done;){var o=n.value,d="";""!==(d=!o.firstName||""===o.firstName||o.lastName&&""!==o.lastName?o.firstName&&""!==o.firstName&&o.lastName&&""!==o.lastName?o.firstName+" "+o.lastName:o.lastName:o.firstName)&&t.push(d)}}catch(e){r.e(e)}finally{r.f()}if(1==t.length)return"".concat(t[0]);var l=[t.slice(0,-1).join(", "),t.slice(-1)[0]].join(t.length<2?"":" and ");return"".concat(l)}var h={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$graphql,r=e.params,o=e.$elasticsearchplugin,l=e.error,e.app,n.next=3,t.default.request(m.a,{slug:r.slug});case 3:if((data=n.sent).entry||l({statusCode:404,message:"Page not found"}),!data||!data.entry){n.next=10;break}return console.log("Endowment detail page: slug: "+data.entry.slug+"Now uri:"+data.entry.uri),data.entry.donorNames=f(data.entry.donors),n.next=10,o.index(data.entry,r.slug);case 10:return n.abrupt("return",{page:d()(data,"entry",{})});case 11:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(l.a)(this.page.text)}]}},computed:{parsedDonors:function(){return this.page.donors&&this.page.donors.length>0?N(this.page.donors):""},parsedImage:function(){return this.page.heroImage[0].image[0]},catalogLink:function(){return"https://search.library.ucla.edu/discovery/search?query=lds04,contains,".concat(this.page.spakCode,",AND&tab=LibraryCatalog&search_scope=MyInstitution&vid=01UCS_LAL:UCLA&mode=advanced&offset=0")}}},y=(t(573),t(41)),component=Object(y.a)(h,(function(){var e=this,n=e._self._c;return n("main",{staticClass:"page page-endowments-detail",attrs:{id:"main"}},[n("nav-breadcrumb",{attrs:{to:"/give/endowments",title:e.page.title,"parent-title":"Endowments"}}),e._v(" "),n("banner-text",{attrs:{title:e.page.title,text:e.page.text,"button-text":"Give Now",to:e.page.to}}),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1),e._v(" "),n("section-wrapper",[n("div",{staticClass:"description-with-image"},[n("div",{staticClass:"description"},[e.page.donors[0].lastName?n("rich-text",{staticClass:"donors"},[e._v("\n                    Made possible by a gift from "+e._s(e.parsedDonors)+"\n                ")]):e._e(),e._v(" "),e.page.subjectAreas[0]?n("icon-with-link",{staticClass:"subject-area",attrs:{"icon-name":"svg-icon-book",text:e.page.subjectAreas[0].title,to:"/give"}}):e._e(),e._v(" "),n("rich-text",{staticClass:"description-text",attrs:{"rich-text-content":e.page.endowmentDescription}}),e._v(" "),e.page.spakCode?n("smart-link",{staticClass:"catalog-link",attrs:{to:e.catalogLink}},[e._v("\n                    See all items purchased through this Endowment\n                ")]):e._e()],1),e._v(" "),e.page.heroImage.length>0?n("img",{staticClass:"bookplate",attrs:{src:e.parsedImage.src,alt:e.parsedImage.alt}}):e._e()])]),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1),e._v(" "),n("section-wrapper",[n("block-call-to-action",{attrs:{"svg-name":"svg-call-to-action-money",title:"Give to this endowment",text:"Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public.",name:"Donate",to:e.page.to}})],1)],1)}),[],!1,null,"3594ec33",null);n.default=component.exports}}]);