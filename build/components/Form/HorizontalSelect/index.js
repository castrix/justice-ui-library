import{_ as o}from"../../../tslib.es6-ee5f1b9a.js";import{jsx as t}from"react/jsx-runtime";import{c as e}from"../../../index-6ea95111.js";import{s as r}from"../../../style-inject.es-1f59c1d0.js";var l="horizontalSelect___XNVXV",a="horizontalSelectOption___UAyHn",n="isSelected___nf7AW";function i(r){var i=r.options,c=r.className,_=r.onChange,s=r.value,f=r.dataQa;return t("div",o({className:e(l,c),"data-qa-id":f},{children:i.map((function(r){var l;return t("div",o({className:e(a,(l={},l[n]=r.value===s,l)),onClick:function(){return _(r.value)},"data-qa-props":r.label},{children:r.label}),"".concat(r.label,"-").concat(r.value))}))}))}r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.horizontalSelect___XNVXV{display:flex;font-family:Roboto,sans-serif}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn{background-color:#fff;border:1px solid #b8bfcd;color:#687792;cursor:pointer;font-size:16px;padding:8px;text-align:center}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn.isSelected___nf7AW{background-color:#0b6cff;border-color:transparent;color:#fff}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn:not(.isSelected___nf7AW):hover{background-color:#eff5ff;color:#0b6cff}.horizontalSelect___XNVXV .horizontalSelectOption___UAyHn:not(:first-child){border-left:none}');export{i as HorizontalSelect};
