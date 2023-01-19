(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{345:function(e,t,n){"use strict";n(27),n(73);t.a=function(e){return e?e.replace(/(<([^>]+)>)/gi,"").replace(/"/gi,""):"The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."}},417:function(e,t,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("5151713b",content,!0,{sourceMap:!1})},562:function(e,t,n){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ProgramDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"program",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"buttonUrl_button_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"viewStaffDirectory"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"AllFpb"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"associatedArticles"},name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"article",block:!1}},{kind:"Argument",name:{kind:"Name",value:"relatedToEntries"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"program",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"StringValue",value:"dateUpdated desc",block:!1}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"article_article_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedArticles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"description"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"startDate"},name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"endDate"},name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1497}};r.loc.source={body:'#import "~/gql/fragments/Image"\n#import "~/gql/fragments/collections/AllFpb"\n\nquery ProgramDetail($slug: [String!]) {\n    entry(section: "program", slug: $slug) {\n        id\n        sectionHandle\n        slug\n        uri\n        title\n        text: summary\n        heroImage {\n            ... on heroImage_heroImage_BlockType {\n                id\n                image {\n                    ...Image\n                }\n            }\n        }\n        buttonUrl {\n            ... on buttonUrl_button_BlockType {\n                buttonText\n                buttonUrl\n            }\n        }\n        email\n        phoneNumber\n        viewStaffDirectory\n        department {\n            id\n            title\n        }\n        ...AllFpb\n    }\n    associatedArticles: entries(\n        section: "article"\n        relatedToEntries: { section: "program", slug: $slug }\n        orderBy: "dateUpdated desc"\n        limit: 3\n    ) {\n        ... on article_article_Entry {\n            id\n            title\n            associatedArticles {\n                id\n                title\n            }\n            to: slug\n            heroImage {\n                ... on heroImage_heroImage_BlockType {\n                    id\n                    image {\n                        ...Image\n                    }\n                    altText\n                }\n            }\n            description: summary\n            category: typeHandle\n            startDate: dateCreated\n            endDate: dateCreated\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function o(defs){return defs.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;return!l[t]&&(l[t]=!0,!0)}))}function d(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,t)})),e.definitions&&e.definitions.forEach((function(e){d(e,t)}))}r.definitions=r.definitions.concat(o(n(346).definitions)),r.definitions=r.definitions.concat(o(n(354).definitions));var c={};function m(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}r.definitions.forEach((function(e){if(e.name){var t=new Set;d(e,t),c[e.name.value]=t}})),e.exports=r,e.exports.ProgramDetail=function(e,t){var n={kind:e.kind,definitions:[m(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=c[t]||new Set,l=new Set,o=new Set;for(r.forEach((function(e){o.add(e)}));o.size>0;){var d=o;o=new Set,d.forEach((function(e){l.has(e)||(l.add(e),(c[e]||new Set).forEach((function(e){o.add(e)})))}))}return l.forEach((function(t){var r=m(e,t);r&&n.definitions.push(r)})),n}(r,"ProgramDetail")},563:function(e,t,n){"use strict";n(417)},564:function(e,t,n){var r=n(49)(!1);r.push([e.i,'.page-program-detail .section-teaser-card[data-v-621a169a]{display:flex;flex-direction:row}.page-program-detail .section-title[data-v-621a169a]{margin-bottom:var(--space-xl)}.page-program-detail .section-title .title[data-v-621a169a]{font-family:"Karbon",Helvetica,Arial,sans-serif;font-size:var(--step-3);font-weight:400;line-height:1.2;color:var(--color-primary-blue-03);margin-bottom:var(--space-m)}.page-program-detail .button-more[data-v-621a169a]{margin:var(--space-2xl) auto}',""]),e.exports=r},624:function(e,t,n){"use strict";n.r(t);var r=n(12),l=n(2),o=(n(37),n(31),n(28),n(30),n(10),n(42),n(29),n(43),n(33),n(347)),d=n.n(o),c=n(345),m=n(562),v=n.n(m);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$graphql,r=e.params,l=e.$elasticsearchplugin,o=e.error,console.log("fetching graphql data for Service or Resource detail from Craft for live preview"),t.next=4,n.default.request(v.a,{slug:r.slug});case 4:if((data=t.sent).entry||o({statusCode:404,message:"Page not found"}),!data){t.next=9;break}return t.next=9,l.index(data.entry,r.slug);case 9:return t.abrupt("return",{page:d()(data,"entry",{}),associatedArticles:d()(data,"associatedArticles",{})});case 10:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.page?this.page.title:"... loading",meta:[{hid:"description",name:"description",content:Object(c.a)(this.page.text)}]}},computed:{parsedButtonText:function(){return d()(this.page,"buttonUrl[0].buttonText","")},parsedButtonTo:function(){return d()(this.page,"buttonUrl[0].buttonUrl","")},parsedStaffDirectory:function(){return"false"==this.page.viewStaffDirectory?"":"/about/staff"},parsedArticles:function(){return this.associatedArticles.map((function(e){return f(f({},e),{},{to:"/about/news/".concat(e.to),image:d()(e,"heroImage[0].image[0]",{}),category:d()(e,"category",""),title:d()(e,"title",""),text:d()(e,"description",""),startDate:d()(e,"startDate","")})}))},parsedSeeMore:function(){return"preservation-conservation-program"==this.page.slug?"/about/blogs/listing-preservation-and-conservation-blog":"/about/news"}}},y=(n(563),n(41)),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"page page-program-detail",attrs:{id:"main"}},[t("nav-breadcrumb",{attrs:{to:"/about/programs",title:e.page.title,"parent-title":"Programs"}}),e._v(" "),e.page.heroImage&&0!=e.page.heroImage.length?e._e():t("banner-text",{attrs:{title:e.page.title,text:e.page.text,email:e.page.email,phone:e.page.phoneNumber,"staff-directory-link":e.parsedStaffDirectory,"button-text":e.parsedButtonText,to:e.parsedButtonTo}}),e._v(" "),e.page.heroImage&&1==e.page.heroImage.length?t("section-wrapper",{staticClass:"section-banner"},[t("banner-header",{attrs:{image:e.page.heroImage[0].image[0],title:e.page.title,text:e.page.text,email:e.page.email,phone:e.page.phoneNumber,"staff-directory-link":e.parsedStaffDirectory,prompt:e.parsedButtonText,to:e.parsedButtonTo,"align-right":!0}})],1):e._e(),e._v(" "),t("section-wrapper",{attrs:{theme:"divider"}},[t("divider-way-finder",{staticClass:"divider",attrs:{color:"about"}})],1),e._v(" "),t("section-wrapper",["about/programs/campus-library-instructional-computing-commons-clicc"==e.page.uri?t("block-hours",{attrs:{lid:"0","is-clicc":!0}}):e._e(),e._v(" "),"about/programs/campus-library-instructional-computing-commons-clicc"==e.page.uri?t("divider-way-finder",{staticClass:"divider",attrs:{lid:"0","is-clicc":!0,color:"about"}}):e._e()],1),e._v(" "),t("flexible-blocks",{staticClass:"flexible-content",attrs:{blocks:e.page.blocks}}),e._v(" "),t("section-wrapper",{attrs:{theme:"divider"}},[e.parsedArticles.length>0?t("divider-way-finder",{staticClass:"divider-way-finder",attrs:{color:"about"}}):e._e()],1),e._v(" "),e.parsedArticles.length>0?t("section-wrapper",{staticClass:"associated-articles",attrs:{"section-title":"Associated News"}},[t("section-teaser-card",{staticClass:"section-teaser-card",attrs:{items:e.parsedArticles}}),e._v(" "),e.associatedArticles?t("nuxt-link",{staticClass:"button-more",attrs:{to:e.parsedSeeMore}},[t("button-more",{attrs:{text:"See More"}})],1):e._e()],1):e._e()],1)}),[],!1,null,"621a169a",null);t.default=component.exports}}]);