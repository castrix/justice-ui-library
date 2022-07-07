import{createElement as o}from"react";import{jsxs as r,jsx as i}from"react/jsx-runtime";import{c as a}from"../../../index-6ea95111.js";import{s as e}from"../../../style-inject.es-1f59c1d0.js";import{FieldLabel as t,FieldErrorMessage as d}from"../../Form/utility/index.js";import{LineBreakToList as l}from"../../Typography/LineBreakToList.js";import{addLineBreaks as s}from"../../../utils/typography.js";import"../../../server-ce56d26a.js";import"../../../index-dd80248b.js";import"stream";import"../../../utils/i18n/index.js";import"../../../inherits-d3723d19.js";import"../../../setPrototypeOf-c6ba02e6.js";import"../../../nonIterableRest-e93b6547.js";import"../../../unsupportedIterableToArray-0ca076cc.js";import"../../../utils/i18n/loadLanguages.js";import"../../../constants/common.js";import"../../../utils/makeSafeReactInnerHTML.js";e('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.horizontal-radio-group{display:flex;flex-wrap:wrap;font-family:Roboto,sans-serif}.horizontal-radio-group.vertical-radio-group,.horizontal-radio-group.vertical-radio-group .radio-item{display:block}.horizontal-radio-group.vertical-radio-group .radio-item:not(:last-child){margin-bottom:10px}.horizontal-radio-group .radio-item{cursor:pointer;margin-right:20px}.horizontal-radio-group .radio-item:hover{background-color:transparent}.horizontal-radio-group .radio-item:hover .radio-icon{border-color:#7b89a1}.horizontal-radio-group .radio-item .radio-helper{color:#687792;display:block;font-size:14px;margin-left:30px;margin-top:8px}.horizontal-radio-group .radio-item.disabled{cursor:not-allowed}.horizontal-radio-group .radio-item.disabled .radio-label{color:#b8bfcd}.horizontal-radio-group .radio-item.disabled .radio-icon:hover,.horizontal-radio-group .radio-item.disabled.selected .radio-icon,.horizontal-radio-group .radio-item.disabled.selected .radio-icon:active,.horizontal-radio-group .radio-item.disabled.selected .radio-icon:hover{border-color:#b8bfcd}.horizontal-radio-group .radio-item .radio-icon{border:1px solid #b8bfcd;border-radius:50%;display:inline-block;height:20px!important;margin-right:10px;position:relative;vertical-align:middle;width:20px!important}.horizontal-radio-group .radio-item.selected .radio-icon{border:5px solid #0b6cff}.horizontal-radio-group .radio-item.selected .radio-icon:hover{border-color:#4c93ff}.horizontal-radio-group .radio-item.selected .radio-icon:active{border-color:#004ec3}.horizontal-radio-group .radio-item.selected .radio-icon:before{display:none!important}.horizontal-radio-group .radio-item .radio-label{color:#232831;font-size:14px;vertical-align:bottom}.horizontal-radio-helper{background-color:#f5f6f8;border-radius:4px;color:#232831;font-size:14px;margin-top:16px;padding:16px 20px}');const p=({label:e,options:p=[],selectedRadio:n,onChange:c,errMessage:m,isInvalid:h,disabled:u=!1,isRequired:g=!0,isList:b=!1,tooltip:f,isHorizontal:v=!0,className:z,dataQa:x})=>r("div",{className:z,children:[!!e&&i(t,{label:e,isRequired:g,tooltip:f}),i("div",{"data-qa-id":x,className:a("horizontal-radio-group",{"vertical-radio-group":!v}),children:p.map((r=>o("div",{className:a("radio-item",{disabled:u,selected:r.value===n}),...!u&&r.value!==n&&{onClick:c.bind(null,r)},key:String(r.value),"data-qa-props":x&&r.value},i("span",{className:"radio-icon"}),i("span",{className:"radio-label",children:r.label}),!v&&r.helper&&(b?i(l,{text:r.helper,className:"radio-helper ml-2"}):i("span",{className:"radio-helper",children:s(r.helper)})),r.customChild&&i("div",{children:r.customChild}))))}),g&&h&&m&&i(d,{message:m}),v&&p.map((o=>n===o.value&&o.helper&&i("div",{className:"horizontal-radio-helper",children:s(o.helper)},String(o.value))))]});export{p as StyledRadio};