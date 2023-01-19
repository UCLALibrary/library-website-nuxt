(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{345:function(e,n,t){"use strict";t(27),t(73);n.a=function(e){return e?e.replace(/(<([^>]+)>)/gi,"").replace(/"/gi,""):"The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."}},346:function(e,n){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Image"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AssetInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"src"},name:{kind:"Name",value:"url"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[{kind:"Argument",name:{kind:"Name",value:"transform"},value:{kind:"StringValue",value:"fullscreen",block:!1}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"srcset"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sizes"},value:{kind:"ListValue",values:[{kind:"StringValue",value:"375",block:!1},{kind:"StringValue",value:"960",block:!1},{kind:"StringValue",value:"1280",block:!1},{kind:"StringValue",value:"1920",block:!1},{kind:"StringValue",value:"2560",block:!1}]}}],directives:[]},{kind:"Field",alias:{kind:"Name",value:"alt"},name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"focalPoint"},arguments:[],directives:[]}]}}],loc:{start:0,end:243}};t.loc.source={body:'fragment Image on AssetInterface {\n    id\n    src: url(transform: "fullscreen")\n    height(transform: "fullscreen")\n    width(transform: "fullscreen")\n    srcset(sizes: ["375", "960", "1280", "1920", "2560"])\n    alt: altText\n    focalPoint\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var l={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.Image=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=l[n]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(t,"Image")},418:function(e,n,t){var content=t(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("85dfb108",content,!0,{sourceMap:!1})},565:function(e,n,t){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"StaffDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"staffMember",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"staffMember_staffMember_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"image"},name:{kind:"Name",value:"staffPortrait"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameFirst"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameLast"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeName"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"alternativeName_alternativeName_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"languageAltName"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"jobTitle"},name:{kind:"Name",value:"staffMemberJobTitle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"departments"},name:{kind:"Name",value:"staffDepartment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"level",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"locations"},name:{kind:"Name",value:"staffAssociatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pronouns"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"phone"},name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"consultation"},name:{kind:"Name",value:"bookAConsultation"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"topics"},name:{kind:"Name",value:"askMeAbout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"academicDepartments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"biography"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectLibrarian"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"orcid"},name:{kind:"Name",value:"orcidId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publications"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"staffMember",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"authors"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"date"},name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1988}};r.loc.source={body:'#import "~/gql/fragments/Image"\nquery StaffDetail($slug: [String]!) {\n    entry(section: "staffMember", slug: $slug) {\n        ... on staffMember_staffMember_Entry {\n            id\n            sectionHandle\n            slug\n            uri\n            title\n            image: staffPortrait {\n                ...Image\n            }\n            to: slug\n            nameFirst\n            nameLast\n            alternativeName {\n                ... on alternativeName_alternativeName_BlockType {\n                    fullName\n                    languageAltName\n                }\n            }\n            jobTitle: staffMemberJobTitle\n            departments: staffDepartment(orderBy: "level") {\n                id\n                title\n            }\n            locations: staffAssociatedLocations {\n                title\n                to: uri\n                id\n            }\n            pronouns\n            email\n            phone: phoneNumber\n            consultation: bookAConsultation\n            topics: askMeAbout {\n                title\n                id\n            }\n            academicDepartments {\n                id\n                title\n            }\n            biography\n            subjectLibrarian\n            orcid: orcidId\n            publications\n        }\n    }\n    entries(\n        section: "article"\n        relatedToEntries: { section: "staffMember", slug: $slug }\n    ) {\n        ... on article_article_Entry {\n            id\n            title\n            to: uri\n            heroImage {\n                ... on heroImage_heroImage_BlockType {\n                    id\n                    image {\n                        ...Image\n                    }\n                    altText\n                }\n            }\n\n            authors: staffMember {\n                id\n                slug\n                to: uri\n                title\n            }\n            description: summary\n            category: typeHandle\n            date: dateUpdated\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}r.definitions=r.definitions.concat(t(346).definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!l[n]&&(l[n]=!0,!0)})));var o={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}r.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}})),e.exports=r,e.exports.StaffDetail=function(e,n){var t={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,l=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(n){var r=c(e,n);r&&t.definitions.push(r)})),t}(r,"StaffDetail")},566:function(e,n,t){"use strict";t(418)},567:function(e,n,t){var r=t(49)(!1);r.push([e.i,".page-staff-detail .selected-articles[data-v-3650b57a] .divider .dotted{border-color:var(--color-secondary-grey-03)}",""]),e.exports=r},625:function(e,n,t){"use strict";t.r(n);var r=t(12),l=t(2),d=(t(51),t(37),t(10),t(38),t(31),t(28),t(30),t(42),t(29),t(43),t(33),t(347)),o=t.n(d),c=t(345),m=t(565),v=t.n(m);function k(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var N={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function n(){var t,r,l,d,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$graphql,r=e.params,l=e.$elasticsearchplugin,d=e.error,console.log("fetching graphql data for staff detail from Craft for live preview"),n.next=4,t.default.request(v.a,{slug:r.slug});case 4:if((data=n.sent).entry||d({statusCode:404,message:"Page not found"}),!data||!data.entry){n.next=11;break}return n.next=9,l.index(data.entry,r.slug);case 9:n.next=12;break;case 11:console.log("staff data missing:"+r.slug);case 12:return n.abrupt("return",{page:data});case 13:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(c.a)(this.page.text)}]}},computed:{parsedImage:function(){return o()(this.page.entry,"image[0]",null)},parsedStaffName:function(){return"".concat(this.page.entry.nameFirst," ").concat(this.page.entry.nameLast)},parsedAlternativeFullName:function(){return o()(this.page.entry,"alternativeName[0].fullName","")},parsedLanguage:function(){return o()(this.page.entry,"alternativeName[0].languageAltName","")},parsedItems:function(){return this.page.entries.map((function(e){return f(f({},e),{},{to:"/".concat(e.to),image:o()(e,"heroImage[0].image[0]",null),staffName:"".concat(e.nameFirst," ").concat(e.nameLast)})}))}}},y=(t(566),t(41)),component=Object(y.a)(N,(function(){var e=this,n=e._self._c;return n("main",{staticClass:"page page-staff-detail",attrs:{id:"main"}},[n("nav-breadcrumb",{attrs:{to:"/about/staff",title:e.page.entry.title,"parent-title":"Staff Directory"}}),e._v(" "),n("section-wrapper",[n("block-staff-detail",{attrs:{image:e.parsedImage,"staff-name":e.parsedStaffName,"alternative-full-name":e.parsedAlternativeFullName,language:e.parsedLanguage,"job-title":e.page.entry.jobTitle,departments:e.page.entry.departments,locations:e.page.entry.locations,pronouns:e.page.entry.pronouns,email:e.page.entry.email,phone:e.page.entry.phone,consultation:e.page.entry.consultation,topics:e.page.entry.topics,"academic-departments":e.page.entry.academicDepartments,biography:e.page.entry.biography}})],1),e._v(" "),e.parsedItems.length||e.page.entry.publications||e.page.entry.orcid?n("section-wrapper",{staticClass:"selected-articles",attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1):e._e(),e._v(" "),e.parsedItems.length||e.page.entry.publications||e.page.entry.orcid?n("div",{staticClass:"selected-articles"},[n("section-wrapper",[n("section-staff-orcid-publications",{staticClass:"staff-orcid-publications",attrs:{orcid:e.page.entry.orcid,publications:e.page.entry.publications}})],1),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[e.parsedItems.length&&(e.page.entry.publications||e.page.entry.orcid)?n("divider-way-finder",{staticClass:"divider divider-first",attrs:{color:"about"}}):e._e()],1),e._v(" "),n("section-wrapper",[e.parsedItems.length?n("section-staff-article-list",{staticClass:"staff-article-list-section",attrs:{"section-title":"Articles",items:e.parsedItems}}):e._e()],1)],1):e._e(),e._v(" "),n("section-wrapper",{attrs:{theme:"divider"}},[n("divider-way-finder",{staticClass:"divider divider-first",attrs:{color:"about"}})],1),e._v(" "),n("section-wrapper",[n("block-call-to-action",{staticClass:"block-call-to-action",attrs:{"is-global":!0}})],1)],1)}),[],!1,null,"3650b57a",null);n.default=component.exports}}]);