import{_ as e}from"../../../tslib.es6-ee5f1b9a.js";import{jsxs as a,Fragment as i,jsx as d}from"react/jsx-runtime";import{c as l}from"../../../index-6ea95111.js";import{BADGE_APPEARANCE as t,Badge as s,BADGE_TYPE as o}from"../../Badge/index.js";import"../../../types/enum.js";var n=function(n){var r=n.isChecked,c=n.isLoading,m=void 0!==c&&c,v=n.isEditable,g=void 0===v||v,p=n.isDisabled,b=void 0!==p&&p,h=n.label,u=void 0===h?"":h,x=n.name,f=void 0===x?"":x,y=n.value,C=void 0===y?"":y,N=n.onChange,j=n.activeText,E=void 0===j?"":j,T=n.inactiveText,k=void 0===T?"":T,I=n.className,R=n.dataQa,S=m||b,_=r?t.SUCCESS:t.ERROR;return a(i,{children:[g&&a("div",e({className:l("styled-toggle",I,{disabled:S}),"data-qa-id":R},{children:[m&&d("span",{className:"styled-toggle__loading"}),d("label",e({"data-checked":r,className:"toggle-label"},{children:d("input",e({type:"checkbox","aria-label":u},{name:f,value:C,onChange:N},{disabled:S}))})),(E||k)&&d(s,{text:r?E:k,type:o.LIGHT,appearance:S?t.INACTIVE:_})]})),!g&&(E||k)&&d("div",e({className:"styled-toggle-uneditable"},{children:r?E:k}))]})};export{n as StyledToggle};
