import{a as e,_ as t}from"../../tslib.es6-ee5f1b9a.js";import{jsxs as s,jsx as i}from"react/jsx-runtime";import{c as o}from"../../index-6ea95111.js";import{FieldLabel as a,FieldErrorMessage as r,FieldHelperText as m}from"../Form/utility/index.js";import{Enum as l}from"../../types/enum.js";import{Select as p}from"../styled-atlaskit/Select/Select.js";import"react";import"../../style-inject.es-1f59c1d0.js";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../Select-fd4c941c.js";import"../../Select-ff8c827a.js";import"../../react-select.esm-a9962e8e.js";import"../../stateManager-845a3300.esm-5648760f.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-1d853662.js";import"../../createSelect-674f675b.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";var n=l("LOADING","FAILED","SUCCESS"),c=function(l){var n=l.label,c=l.placeholder,d=l.options,j=void 0===d?[]:d,b=l.name,u=l.value,f=l.onChange,h=l.errMessage,v=l.optionalLabel,g=l.isInvalid,x=l.isDisabled,y=void 0!==x&&x,C=l.isRequired,L=void 0===C||C,S=l.isClearable,D=l.tooltip,I=l.selectDataQa,M=l.isMulti,N=void 0!==M&&M,R=l.className,q=l.helperText,A=e(l,["label","placeholder","options","name","value","onChange","errMessage","optionalLabel","isInvalid","isDisabled","isRequired","isClearable","tooltip","selectDataQa","isMulti","className","helperText"]);return s("div",t({className:o("valid-select-input",R)},{children:[!!n&&i(a,{label:n,optionalLabel:v,isRequired:L,tooltip:D}),i(p,t({},A,{options:j,placeholder:c,name:b,value:u,onChange:f,isDisabled:y,isClearable:S,isMulti:N,dataQa:I})),g&&i(r,{message:h}),q&&i(m,{message:q})]}))};export{n as RELOADSTATUS,c as ValidSelect};
