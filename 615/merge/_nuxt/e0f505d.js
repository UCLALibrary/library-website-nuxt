(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{393:function(e,r,t){var content=t(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("4817e1f3",content,!0,{sourceMap:!1})},471:function(e,r,t){"use strict";var o=t(3),n=t(23),c=t(11),l=t(8),path=t(235),h=t(5),f=t(119),d=t(14),v=t(232),m=t(58),y=t(93),_=t(233),w=t(4),x=t(92).f,N=t(45).f,S=t(20).f,k=t(472),E=t(473).trim,I="Number",$=l[I],A=path[I],R=$.prototype,C=l.TypeError,T=h("".slice),F=h("".charCodeAt),L=function(e){var r=_(e,"number");return"bigint"==typeof r?r:O(r)},O=function(e){var r,t,o,n,c,l,h,code,f=_(e,"number");if(y(f))throw C("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),43===(r=F(f,0))||45===r){if(88===(t=F(f,2))||120===t)return NaN}else if(48===r){switch(F(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(l=(c=T(f,2)).length,h=0;h<l;h++)if((code=F(c,h))<48||code>n)return NaN;return parseInt(c,o)}return+f},z=f(I,!$(" 0o1")||!$("0b1")||$("+0x1")),U=function(e){return m(R,e)&&w((function(){k(e)}))},j=function(e){var r=arguments.length<1?0:$(L(e));return U(this)?v(Object(r),this,j):r};j.prototype=R,z&&!n&&(R.constructor=j),o({global:!0,constructor:!0,wrap:!0,forced:z},{Number:j});var G=function(e,source){for(var r,t=c?x(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;t.length>o;o++)d(source,r=t[o])&&!d(e,r)&&S(e,r,N(source,r))};n&&A&&G(path[I],A),(z||n)&&G(path[I],$)},472:function(e,r,t){var o=t(5);e.exports=o(1..valueOf)},473:function(e,r,t){var o=t(5),n=t(36),c=t(15),l=t(474),h=o("".replace),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e){return function(r){var t=c(n(r));return 1&e&&(t=h(t,d,"")),2&e&&(t=h(t,v,"")),t}};e.exports={start:m(1),end:m(2),trim:m(3)}},474:function(e,r){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},475:function(e,r,t){"use strict";t(393)},476:function(e,r,t){var o=t(49)(!1);o.push([e.i,".section-wrapper-block:last-child .divider-general[data-v-ff13b71c]{display:none}",""]),e.exports=o},601:function(e,r,t){"use strict";t.r(r);var o=t(2),n=(t(33),t(471),t(52),{data:function(){return{page:{},from:0,previous:!1,next:!1,prevFrom:0,nextFrom:0,size:10,searchGenericQuery:{queryText:this.$route.query.q||""}}},fetchOnServer:!1,fetchKey:"search-site",fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.page={},console.log("In fetch start"),r.prev=2,!e.$route.query.q||""===e.$route.query.q){r.next=12;break}return console.log("in router query in asyc data"),r.next=7,e.$dataApi.siteSearch(e.$route.query.q,e.$route.query.from||e.from);case 7:e.page=r.sent,e.page&&e.page.hits&&e.page.hits.total.value>0?(console.log("search success"),e.from=Number(e.$route.query.from||0),console.log("from 1: "+e.from),e.from+e.size>=e.page.hits.total.value?e.next=!1:e.next=!0,0==e.from?e.previous=!1:e.previous=!0,e.next&&(e.nextFrom=e.from+e.size),e.previous&&(e.prevFrom=e.from-e.size),console.log("what is start now:"+e.from)):(e.page={},e.from=0,e.previous=!1,e.next=!1),e.searchGenericQuery={queryText:e.$route.query.q||""},r.next=13;break;case 12:e.page={};case 13:console.log("Search Response: "+JSON.stringify(e.page)),r.next=19;break;case 16:throw r.prev=16,r.t0=r.catch(2),new Error("Some Error with ES search "+r.t0);case 19:case"end":return r.stop()}}),r,null,[[2,16]])})))()},computed:{parsePrev:function(){return this.previous?"".concat(this.$route.path,"?q=").concat(this.$route.query.q,"&from=").concat(this.prevFrom):""},parseNext:function(){return this.next?"".concat(this.$route.path,"?q=").concat(this.$route.query.q,"&from=").concat(this.nextFrom):""},searchAdditionalResources:function(){return[{iconName:"illustration-book-binding",to:"https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&_ga=2.45842788.1343136842.1666633264-241535065.1664829276",title:"UC Library Search",text:"Locate books, journal articles, course reserves and other content at UCLA, other UC schools and beyond.",isHorizontal:!1},{iconName:"illustration-find-space",to:"https://guides.library.ucla.edu/az.php?&_ga=2.94193502.2106042584.1646675621-1729352043.1643913957",title:"A-Z Databases",text:"Find the best library databases for your research.",isHorizontal:!1},{iconName:"illustration-digitized-resources",to:"https://guides.library.ucla.edu/index.php",title:"Library Research Guides",text:"Our research guides help users of all backgrounds discover resources by subject, course, format or topic.",isHorizontal:!1}]}},watch:{"$route.query":"$fetch","$route.query.q":function(e){console.log("watching querytEXT:"+e)}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("In mounted");case 1:case"end":return e.stop()}}),e)})))()},methods:{getSearchData:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,e.$router.push({path:e.$route.path,query:{q:data.text}}),r.next=7;break;case 4:throw r.prev=4,r.t0=r.catch(0),new Error("ES error maybe: "+r.t0);case 7:case"end":return r.stop()}}),r,null,[[0,4]])})))()}}}),c=(t(475),t(41)),component=Object(c.a)(n,(function(){var e=this,r=e._self._c;return r("main",{staticClass:"page page-search-site",attrs:{id:"main"}},[r("masthead-secondary",{attrs:{title:"Search Results"}}),e._v(" "),r("search-generic",{attrs:{"search-generic-query":e.searchGenericQuery},on:{"search-ready":e.getSearchData}}),e._v(" "),e.$fetchState.pending?r("div",[r("p",[e._v(".....Its Loading")])]):e.$fetchState.error?r("div",[r("p",[e._v("There is an error")])]):r("div",[e.page&&e.page.hits&&e.page.hits.hits.length>0?r("div",{staticClass:"meta"},[e._l(e.page.hits.hits,(function(t,o){return r("section-wrapper",{key:"SearchResultBlock".concat(o),staticClass:"section-wrapper-block"},[r("search-result",{staticClass:"search-result-item",attrs:{title:t._source.title,category:t._source.sectionHandle,summary:t._source.summary||t._source.text,to:"/".concat(t._source.uri)}}),e._v(" "),r("divider-general",{staticClass:"divider-general"})],1)})),e._v(" "),e.page.hits.total.value>10?r("section-wrapper",[r("section-pagination",{attrs:{"previous-to":e.parsePrev,"next-to":e.parseNext}})],1):e._e()],2):r("div",[r("rich-text",{staticClass:"error-text"},[r("h1",[e._v("Search for “"+e._s(e.$route.query.q)+"” not found.")]),e._v(" "),r("p",[e._v("\n                    We can’t find the page you are looking for, but we're\n                    here to help. Try these regularly visited links or one\n                    of the Additional Search Tools below.\n                ")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://library.ucla.edu"}},[e._v("UCLA Library Home")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.library.ucla.edu/research-teaching-support/research-help"}},[e._v("Research Help")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/help/services-resources/ask-us"}},[e._v("Ask Us")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.library.ucla.edu/use/access-privileges/disability-resources"}},[e._v("Accessibility Resources")])])])])],1),e._v(" "),r("section-wrapper",[r("divider-way-finder",{staticClass:"divider-way-finder"})],1),e._v(" "),r("section-wrapper",[r("section-cards-with-illustrations",{staticClass:"section-cards",attrs:{items:e.searchAdditionalResources,"section-title":"Additional Search Tools"}})],1)],1)],1)}),[],!1,null,"ff13b71c",null);r.default=component.exports}}]);