import{jsx as e,jsxs as r}from"react/jsx-runtime";import{c as o}from"../../index-6ea95111.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{Icon as i}from"../Icon/index.js";import{Enum as n}from"../../types/enum.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.search-panel__container{background-color:#fff;border:1px solid #b8bfcd;border-radius:4px;box-sizing:border-box;display:flex;flex-direction:column;height:40px;justify-content:center;min-width:330px;width:100%}.search-panel__container:hover{background-color:#f5f6f8;border:1px solid #687792}.search-panel__container:focus-within{border:2px solid #0b6cff}.search-panel__container.fixed-width{width:360px}.search-panel__container.disabled:hover{background-color:#fff;border:1px solid #b8bfcd;cursor:not-allowed}.search-panel__bar{display:flex;flex-direction:row;padding:0 5px}.search-panel__bar .fa-icon-search{align-items:center;color:#687792;display:flex;height:30px;justify-content:center;width:30px}.search-panel__bar input{background-color:transparent;border:0;color:#232831;display:block;font-size:16px;line-height:30px;margin:0 5px;outline:0;padding:0;width:100%}.search-panel__bar input::placeholder{color:#b8bfcd}.search-panel__bar input:-ms-input-placeholder{color:#b8bfcd}.search-panel__bar input::-webkit-input-placeholder{color:#b8bfcd}.search-panel__bar input[disabled]{cursor:not-allowed}');const c=n("LEFT","RIGHT"),s=({onSearch:a,fixedWidth:n=!1,searchIconPosition:s="RIGHT",isDisabled:l=!1,...d})=>e("div",{className:o("search-panel__container",{"fixed-width":n,disabled:l}),children:r("div",{className:"search-panel__bar "+(s===c.LEFT?"searchIconLeft":""),children:[s===c.LEFT&&e(i,{name:"fa-icon-search",onClick:a}),e("input",{disabled:l,...d}),!s||s===c.RIGHT&&e(i,{name:"fa-icon-search",onClick:a})]})});export{s as PureSearchPanel,c as SearchIconPosition};
