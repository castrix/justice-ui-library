import{_ as e}from"../../../tslib.es6-ee5f1b9a.js";import{jsxs as i,Fragment as t,jsx as o}from"react/jsx-runtime";import*as l from"react";import{R as r,s as a}from"../../../server-ce56d26a.js";import{c as s}from"../../../index-6ea95111.js";import{s as n}from"../../../style-inject.es-1f59c1d0.js";import{translation as d}from"../../../utils/i18n/index.js";import"../../../index-dd80248b.js";import"stream";import"../../../inherits-d3723d19.js";import"../../../setPrototypeOf-c6ba02e6.js";import"../../../nonIterableRest-e93b6547.js";import"../../../unsupportedIterableToArray-0ca076cc.js";import"../../../utils/i18n/loadLanguages.js";n('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.horizontalFieldText.row{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap}.horizontalFieldText .cell-1 .label{color:#687792;font-size:16px;margin-right:5px}.horizontalFieldText .cell-1 #horizontal-field-text-label__tooltip{text-align:left}');var c=function(n){var c=n.children,m=n.className,p=n.tooltip,f=n.showTooltip,u=n.showTooltipOnFocus,h=n.label,b=void 0===h?"":h,x=n.isLabelHidden,j=void 0!==x&&x,v=n.isFlex,g=void 0===v||v,w=n.rightCellClassName,T=n.isValueMultiLine,z=void 0!==T&&T,F=n.dataQa,N=n.labelAlignment,_=n.isRequired,y=void 0===_||_,L=n.optionalLabel,R=void 0===L?d("common.optionalFieldLabel"):L,E=l.useRef(null);return l.useEffect((function(){var e=setTimeout((function(){r.rebuild()}),100);return function(){clearTimeout(e)}}),[]),l.useEffect((function(){f&&u?E.current&&r.show(E.current):E.current&&r.hide(E.current)}),[f]),i("div",e({className:s("horizontalFieldText",m,{"multi-line-row":z,"label-hidden":j,row:g})},{children:[!j&&i("div",e({className:s("cell-1",N)},{children:[i("span",e({className:"label"},{children:[b,!y&&" ".concat(R)]})),p&&i(t,{children:[o("i",{ref:E,className:"fa-icon-info","data-for":"horizontal-field-text-label__tooltip","data-tip":l.isValidElement(p)?a.renderToString(p):p}),o(r,{effect:"solid",id:"horizontal-field-text-label__tooltip",html:!0})]})]})),o("div",e({className:s("cell-2",w),"data-qa-id":F},{children:c}))]}))};export{c as HorizontalFieldText};
