import{jsxs as e,Fragment as t,jsx as s}from"react/jsx-runtime";import{FieldLabel as o,FieldErrorMessage as i,FieldHelperText as r}from"../Form/utility/index.js";import{Select as a}from"../styled-atlaskit/Select/Select.js";import"../../tslib.es6-ee5f1b9a.js";import"react";import"../../style-inject.es-1f59c1d0.js";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../index-6ea95111.js";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../Select-fd4c941c.js";import"../../Select-ff8c827a.js";import"../../react-select.esm-a9962e8e.js";import"../../stateManager-845a3300.esm-5648760f.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-1d853662.js";import"../../createSelect-674f675b.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";var m=function(m){var p=m.label,l=m.placeholder,c=m.options,n=void 0===c?[]:c,j=m.onChange,d=m.errMessage,u=m.optionalLabel,b=m.isInvalid,f=m.isRequired,h=void 0===f||f,x=m.value,g=m.isDisabled,v=m.tooltip,y=m.helperText;return e(t,{children:[!!p&&s(o,{label:p,optionalLabel:u,isRequired:h,tooltip:v}),s(a,{className:"react-select",isDisabled:g,classNamePrefix:"select",options:n,isMulti:!0,isSearchable:!0,placeholder:l,onChange:j,value:x,menuPlacement:"auto"}),b&&s(i,{message:d}),y&&s(r,{message:y})]})};export{m as ValidMultiSelect};
