import{DEFAULT_MIN_VALUE as n}from"../constants/common.js";function o(o,r,t){var m=!isNaN(Number(o)),e=!!t&&"."===o,s=!!r&&r<n&&"-"===o,a=o.length>1;return!(m||e||s||a)}export{o as isForbiddenKey};
