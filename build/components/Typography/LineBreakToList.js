import{jsx as e}from"react/jsx-runtime";import{c as t}from"../../index-6ea95111.js";import{makeSafeReactInnerHTML as s}from"../../utils/makeSafeReactInnerHTML.js";const r=({text:r,className:a=""})=>{const n=r.split("\n").map(((r,a)=>{const n=r.startsWith("-"),m=n?r.slice(1):r;return e("li",{className:t("pl-1",{"ml-4":n}),dangerouslySetInnerHTML:s(m)},`${a}-${r}`)}));return e("ul",{className:a,children:n})};export{r as LineBreakToList};
