import{_ as i}from"../../tslib.es6-ee5f1b9a.js";import{jsxs as t,jsx as e}from"react/jsx-runtime";import{c as a}from"../../index-6ea95111.js";import{translation as n}from"../../utils/i18n/index.js";import{Select as o}from"../styled-atlaskit/Select/Select.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"react";import"../../Select-fd4c941c.js";import"../../Select-bfbf8793.js";import"../../react-select.esm-4922d3fb.js";import"../../stateManager-845a3300.esm-994e94af.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-8cad2dd6.js";import"../../index-dd80248b.js";import"../../createSelect-080d4093.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-3344e74f.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.pagination{font-family:Roboto,sans-serif}.pagination.with-limit{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){.pagination.with-limit{justify-content:center}.pagination.with-limit .limit-wrapper,.pagination.with-limit .paging-wrapper{margin-bottom:12px}}.pagination.with-limit .limit-wrapper{align-items:center;color:#687792;display:flex;font-size:14px}.pagination.with-limit .limit-wrapper .limit-prefix,.pagination.with-limit .limit-wrapper .styled-atlaskit-select{margin-right:12px}.pagination.with-limit .limit-wrapper .styled-atlaskit-select .styled-atlaskit-select__control{min-width:72px}.pagination.without-limit{display:flex;justify-content:center}.pagination.without-limit .paging-wrapper{align-items:center;justify-content:center}.pagination .paging-wrapper{display:flex;font-size:14px;font-weight:500;line-height:20px;padding:25px}.pagination .paging-wrapper a{align-items:center;display:flex;margin:0 10px}.pagination .paging-wrapper a.disabled{color:#b8bfcd;cursor:not-allowed;pointer-events:none}.pagination .paging-wrapper a.navigation{color:#687792;cursor:pointer}');var s=function(r){var s,p=r.paging,l=r.changePage,m=r.limit,c=r.prevDataQa,g=r.nextDataQa;return t("div",i({className:a("pagination",{"without-limit":!m,"with-limit":!!m})},{children:[!!m&&t("div",i({className:"limit-wrapper"},{children:[e("span",i({className:"limit-prefix"},{children:n("pagination.limit.prefix")})),e(o,i({},m)),e("span",i({className:"limit-suffix"},{children:n("pagination.limit.suffix")}))]})),t("div",i({className:"paging-wrapper"},{children:[(s=p.previous?"navigation":"disabled",t("a",i({className:s,onClick:function(){return l(p.previous)},"data-qa-id":c&&c},{children:[e("i",{className:"fa-icon-chevron-left page-icon"})," ",n("pagination.prev")]}))),function(){var a=p.next?"navigation":"disabled";return t("a",i({className:a,onClick:function(){return l(p.next)},"data-qa-id":g&&g},{children:[n("pagination.next")," ",e("i",{className:"fa-icon-chevron-right page-icon"})]}))}()]}))]}))};export{s as Pagination};
