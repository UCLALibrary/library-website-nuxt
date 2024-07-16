import{_ as ee,k as se,r as n,u as te,a as re,p as q,L as ae,N as le,e as S,f as B,q as i,s as e,x as c,y as b,z as x,h as a,B as ie,D as oe,E as ue,F as G,G as h,H as ne,I as R,O as ce,P as he,t as M,Q as de,R as fe,v as pe,M as ye,U as ve,S as me,T as ge}from"./D87QO4dW.js";import{c as f}from"./DSQ4ZnfI.js";import{q as _e}from"./BOdCFMn0.js";import{p as w}from"./iHpIRGTP.js";const L=g=>(me("data-v-286a0728"),g=g(),ge(),g),qe={id:"main",class:"page page-search-site"},Se=L(()=>a("div",null,[a("p",null,"...Search results loading")],-1)),be={class:"about-results"},xe=L(()=>a("p",null," We can’t find the page you are looking for, but we're here to help. Try these regularly visited links or one of the Additional Search Tools below. ",-1)),we=L(()=>a("ul",null,[a("li",null,[a("a",{href:"https://library.ucla.edu"},"UCLA Library Home")]),a("li",null,[a("a",{href:"https://www.library.ucla.edu/research-teaching-support/research-help"},"Research Help")]),a("li",null,[a("a",{href:"/help/services-resources/ask-us"},"Ask Us")]),a("li",null,[a("a",{href:"https://www.library.ucla.edu/use/access-privileges/disability-resources"},"Accessibility Resources")])],-1)),Ne={__name:"index",setup(g){const t=se(),l=n({}),d=n(0),p=n(!1),y=n(!1),A=n(0),F=n(0),N=n(10),_=n(!1),H=n([]),k=n({queryText:t.query.q||"",queryFilters:w(t.query.filters||"")}),v=n(!0),{$dataApi:O}=te();re(()=>t.query,(s,u)=>{console.log("Site search page ES newVal, oldVal",s,u),k.value.queryText=t.query.q||"",k.value.queryFilters=w(t.query.filters||""),J()},{deep:!0,immediate:!0});async function J(){l.value={},console.log("In fetch start");try{t.query.q&&t.query.q!==""||t.query.filters&&_e(w(t.query.filters||""),f.siteSearch.filters)?(console.log("Search site in router query in asyc data"),l.value=await O.siteSearch(t.query.q||"*",t.query.from||d.value,w(t.query.filters||""),f.siteSearch.sectionHandleMapping),l.value&&l.value.hits&&l.value.hits.total.value>0?(d.value=Number(t.query.from||0),d.value+N.value>=l.value.hits.total.value?y.value=!1:y.value=!0,d.value===0?p.value=!1:p.value=!0,y.value&&(F.value=d.value+N.value),p.value&&(A.value=d.value-N.value),_.value=!1,v.value=!1):(_.value=!0,l.value={},d.value=0,p.value=!1,y.value=!1,v.value=!1)):(v.value=!1,console.log("No Search site in router query in asyc data"),_.value=!0,l.value={}),console.log("Search Response: "+JSON.stringify(l.value))}catch(s){throw console.log("Search Site Error found "+JSON.stringify(s)),s}}const P=q(()=>{var s,u,o;return(o=(u=(s=l.value)==null?void 0:s.hits)==null?void 0:u.hits)==null?void 0:o.map(r=>(r._source.sectionHandle==="Libguide"&&(r._source.sectionHandleDisplayName="Libguide"),r._source.sectionHandle==="Libguide"||r._source.sectionHandle==="externalResource"||r._source.sectionHandle==="affiliateLibrary"?{...r._source,to:r._source.uri?r._source.uri:r._source.to}:{...r._source,to:r._source.uri?`/${r._source.uri}`:`/${r._source.to}`}))}),Q=q(()=>p.value?`${t.path}?q=${t.query.q}&from=${A.value}`:""),Z=q(()=>y.value?`${t.path}?q=${t.query.q}&from=${F.value}`:""),W=q(()=>[{iconName:"illustration-book-binding",to:"https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&_ga=2.45842788.1343136842.1666633264-241535065.1664829276",title:"UC Library Search",text:"Locate books, journal articles, course reserves and other content at UCLA, other UC schools and beyond.",isHorizontal:!1},{iconName:"illustration-find-space",to:"https://guides.library.ucla.edu/az.php?&_ga=2.94193502.2106042584.1646675621-1729352043.1643913957",title:"A-Z Databases",text:"Find the best library databases for your research.",isHorizontal:!1},{iconName:"illustration-digitized-resources",to:"https://guides.library.ucla.edu/index.php",title:"Library Research Guides",text:"Our research guides help users of all backgrounds discover resources by subject, course, format or topic.",isHorizontal:!1}]);function K(s){if(s)return s==="Libguide"?"RESEARCH GUIDE":s.split(/(?=[A-Z])/).join(" ").toUpperCase()}ae(async()=>{console.log("onMounted called"),await X()});function X(){const s=[],u={label:f.siteSearch.filters[0].label,esFieldName:f.siteSearch.filters[0].esFieldName,inputType:f.siteSearch.filters[0].inputType,items:f.siteSearch.sectionHandleMapping.reduce((o,r)=>[...o,{name:r.key}],[])||[]};console.log("getlisting obj:"+JSON.stringify(u)),s.push(u),H.value=s}function Y(s){const u=[];if(s.filters)for(const o in s.filters)s.filters[o].length>0&&u.push(`${o}:(${s.filters[o].join(" OR ")})`);try{ie().push({path:t.path,query:{q:s.text,filters:u.join(" AND ")}})}catch(o){throw new Error("ES error maybe: "+o)}}return(s,u)=>{var r,C,D,$;const o=le("DividerGeneral");return S(),B("main",qe,[i(e(oe),{title:"Search Results"}),i(e(ue),{"search-generic-query":e(k),placeholder:"Search library website",filters:e(H),onSearchReady:Y},null,8,["search-generic-query","filters"]),i(e(h),{theme:"divider"},{default:c(()=>[i(e(G),{class:"search-margin",color:"default"})]),_:1}),b(i(e(h),{class:"results section-no-top-margin"},{default:c(()=>[Se]),_:1},512),[[x,e(v)]]),b(a("div",null,[b(i(e(h),{class:"meta section-no-top-margin"},{default:c(()=>{var U,E,T,z,I,V;return[a("h2",be,[ne(" Displaying "+R((T=(E=(U=e(l))==null?void 0:U.hits)==null?void 0:E.total)==null?void 0:T.value)+" results for ",1),a("strong",null,[a("em",null,"“"+R(e(t).query.q)+"”",1)])]),(S(!0),B(ce,null,he(e(P),(m,j)=>(S(),M(e(h),{key:`SearchResultBlock${j}`,class:"section-wrapper-block"},{default:c(()=>[i(e(de),{title:m.title,category:K(m.sectionHandle),summary:m.summary||m.text,to:m.to,class:"search-result-item"},null,8,["title","category","summary","to"]),i(o,{class:"divider-general"})]),_:2},1024))),128)),((V=(I=(z=e(l))==null?void 0:z.hits)==null?void 0:I.total)==null?void 0:V.value)>10?(S(),M(e(h),{key:0},{default:c(()=>[i(e(fe),{"previous-to":e(Q),"next-to":e(Z)},null,8,["previous-to","next-to"])]),_:1})):pe("",!0)]}),_:1},512),[[x,e(l)&&((r=e(l))==null?void 0:r.hits)&&(($=(D=(C=e(l))==null?void 0:C.hits)==null?void 0:D.hits)==null?void 0:$.length)>0]]),b(i(e(h),{class:"section-no-top-margin"},{default:c(()=>[i(e(ye),{class:"error-text"},{default:c(()=>[a("h2",null,"Search for “"+R(e(t).query.q)+"” not found.",1),xe,we]),_:1})]),_:1},512),[[x,e(_)]]),i(e(h),null,{default:c(()=>[i(e(G),{class:"divider-way-finder"})]),_:1}),i(e(h),null,{default:c(()=>[i(e(ve),{class:"section-cards",items:e(W),"section-title":"Additional Search Tools"},null,8,["items"])]),_:1})],512),[[x,!e(v)]])])}}},Fe=ee(Ne,[["__scopeId","data-v-286a0728"]]);export{Fe as default};
