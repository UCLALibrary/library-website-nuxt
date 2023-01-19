(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{398:function(e,n,t){var content=t(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("558e66a4",content,!0,{sourceMap:!1})},484:function(e,n,t){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PoliciesList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"listingPolicies",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"listingPolicies_listingPolicies_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"policyBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionSummary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedEntries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpbWithNoBanner"},directives:[]}]}}]}}]}}],loc:{start:0,end:404}};r.loc.source={body:'#import "~/gql/fragments/collections/AllFpbWithNoBanner"\n\nquery PoliciesList {\n  entry(section: "listingPolicies") {\n    ... on listingPolicies_listingPolicies_Entry {\n      title\n      text: summary\n      policyBlock {\n        sectionSummary\n        sectionTitle\n        associatedEntries {\n          uri\n          title\n          text: summary\n        }\n      }\n      ...AllFpbWithNoBanner\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function c(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){c(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){c(e,n)})),e.definitions&&e.definitions.forEach((function(e){c(e,n)}))}r.definitions=r.definitions.concat(t(397).definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!o[n]&&(o[n]=!0,!0)})));var l={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}r.definitions.forEach((function(e){if(e.name){var n=new Set;c(e,n),l[e.name.value]=n}})),e.exports=r,e.exports.PoliciesList=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=l[n]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(r,"PoliciesList")},485:function(e,n,t){"use strict";t(398)},486:function(e,n,t){var r=t(49)(!1);r.push([e.i,".page-policies[data-v-277d2fc4] .simple-cards .text p{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}",""]),e.exports=r},610:function(e,n,t){"use strict";t.r(n);var r=t(12),o=t(2),c=(t(37),t(31),t(28),t(30),t(10),t(42),t(29),t(43),t(33),t(347)),l=t.n(c),d=t(345),m=t(484),f=t.n(m);function v(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var y={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){var t,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$graphql,r=e.params,n.next=3,t.default.request(f.a,{uri:r.path});case 3:return data=n.sent,n.abrupt("return",{page:l()(data,"entry",{}),policyBlock:l()(data,"entry.policyBlock",{})});case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(d.a)(this.page.text)}]}},computed:{parsedPolicyBlocks:function(){return this.page.policyBlock.map((function(e){return k(k({},e),{},{parsedAssociatedEntries:e.associatedEntries.map((function(e){return k(k({},e),{},{to:"/".concat(e.uri)})}))})}))}}},h=(t(485),t(41)),component=Object(h.a)(y,(function(){var e=this,n=e._self._c;return n("main",{staticClass:"page page-policies",attrs:{id:"main"}},[n("masthead-secondary",{attrs:{title:e.page.title,text:e.page.text}}),e._v(" "),e._l(e.parsedPolicyBlocks,(function(t,r){return n("div",{key:"PolicyBlocksKey".concat(r)},[n("section-wrapper",[n("simple-cards",{attrs:{"section-title":t.sectionTitle,"section-summary":t.sectionSummary,items:t.parsedAssociatedEntries,button:"View all"}})],1),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1)],1)})),e._v(" "),n("flexible-blocks",{attrs:{blocks:e.page.blocks}})],2)}),[],!1,null,"277d2fc4",null);n.default=component.exports}}]);