(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[592],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(f,c(c({ref:t},m),{},{components:n})):a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(7294),o=n(6010),r=n(2921),c=n(7524),l=n(9960),i=n(5999);const s={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,o.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,o.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,o.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s.sidebarItem},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))}var u=n(3102);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return a.createElement(u.Zo,{component:d,props:e})}function f(e){let{sidebar:t}=e;const n=(0,c.i)();return t?.items.length?"mobile"===n?a.createElement(p,{sidebar:t}):a.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:n,children:c,...l}=e,i=t&&t.items.length>0;return a.createElement(r.Z,l,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(f,{sidebar:t}),a.createElement("main",{className:(0,o.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},n))))}},4048:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var a=n(7294),o=n(3905),r=n(7462),c=n(5742);var l=n(2389),i=n(6010),s=n(2949),m=n(6668);function u(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var d=n(5281),p=n(7594),f=n.n(p);const h=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:a}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&g.test(r)){const e=r.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(b),t)}}(a,o),l=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<l.length;){const e=l[p].match(c);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:m[t]?i[m[t]].start=p:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${p-1},`),l.splice(p,1)}n=l.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const E={codeBlockContainer:"codeBlockContainer_Ckt0"};function k(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const r=t[a];r&&"string"==typeof o&&(n[r]=o)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:o,className:(0,i.Z)(n.className,E.codeBlockContainer,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return a.createElement(k,{as:"pre",tabIndex:0,className:(0,i.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:N.codeBlockLines},t))}var w=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,a.useState)(),r=(0,a.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const o=(0,w.zX)(t),r=(0,w.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()}),[e,o,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Z={Prism:n(7410).Z,theme:T};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}var O=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function S(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=_({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=_({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=_({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?_({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),j(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),j(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,c=_({},S(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?_({},c.style,o):o),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),j(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,c=0,l=[],i=[l];c>-1;){for(;(r=a[c]++)<o[c];){var s=void 0,m=t[c],u=n[c][r];if("string"==typeof u?(m=c>0?m:["plain"],s=u):(m=I(m,u.type),u.alias&&(m=I(m,u.alias)),s=u.content),"string"==typeof s){var d=s.split(O),p=d.length;l.push({types:m,content:d[0]});for(var f=1;f<p;f++)x(l),i.push(l=[]),l.push({types:m,content:d[f]})}else c++,t.push(m),n.push(s),a.push(0),o.push(s.length)}c--,t.pop(),n.pop(),a.pop(),o.pop()}return x(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const P=A,z={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function W(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=c({line:t,className:(0,i.Z)(n,o&&z.codeLine)}),m=t.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))));return a.createElement("span",s,o?a.createElement(a.Fragment,null,a.createElement("span",{className:z.codeLineNumber}),a.createElement("span",{className:z.codeLineContent},m)):m,a.createElement("br",null))}var H=n(5999);const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function D(e){let{code:t,className:n}=e;const[o,r]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),l=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection(),c=r.rangeCount>0&&r.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),c&&(r.removeAllRanges(),r.addRange(c)),o&&o.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,M.copyButton,o&&M.copyButtonCopied),onClick:l},a.createElement("span",{className:M.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:M.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:M.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function V(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,o&&R.wordWrapButtonEnabled),"aria-label":r,title:r},a.createElement("svg",{className:R.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function $(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:l,language:s}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,m.L)(),f=s??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,g=u(),b=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),r=(0,a.useRef)(null),c=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");o(n)}),[r]);return L(r,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}(),y=function(e){return e?.match(h)?.groups.title??""}(o)||c,{lineClassNames:E,code:C}=v(t,{metastring:o,language:f,magicComments:p}),w=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return a.createElement(k,{as:"div",className:(0,i.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},y&&a.createElement("div",{className:N.codeBlockTitle},y),a.createElement("div",{className:N.codeBlockContent},a.createElement(P,(0,r.Z)({},Z,{theme:g,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,i.Z)(t,N.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,i.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(W,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:E[t],showLineNumbers:w})))))})),a.createElement("div",{className:N.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&a.createElement(V,{className:N.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),a.createElement(D,{className:N.codeButton,code:C}))))}function F(e){let{children:t,...n}=e;const o=(0,l.Z)(),c=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?$:C;return a.createElement(i,(0,r.Z)({key:String(o)},n),c)}var q=n(9960);var G=n(6043);const U={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function Q(e,t){return!!e&&(e===t||Q(e.parentElement,t))}function X(e){let{summary:t,children:n,...o}=e;const c=(0,l.Z)(),s=(0,a.useRef)(null),{collapsed:m,setCollapsed:u}=(0,G.u)({initialState:!o.open}),[d,p]=(0,a.useState)(o.open),f=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,r.Z)({},o,{ref:s,open:d,"data-collapsed":m,className:(0,i.Z)(U.details,c&&U.isBrowser,o.className),onMouseDown:e=>{Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Y(t)&&Q(t,s.current)&&(e.preventDefault(),m?(u(!1),p(!0)):u(!0))}}),f,a.createElement(G.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)}},a.createElement("div",{className:U.collapsibleContent},n)))}const J={details:"details_b_Ee"},K="alert alert--info";function ee(e){let{...t}=e;return a.createElement(X,(0,r.Z)({},t,{className:(0,i.Z)(K,J.details,t.className)}))}const te={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function ne(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:c}}=(0,m.L)();if("h1"===t||!n)return a.createElement(t,(0,r.Z)({},o,{id:void 0}));const l=(0,H.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof o.children?o.children:n});return a.createElement(t,(0,r.Z)({},o,{className:(0,i.Z)("anchor",c?te.anchorWithHideOnScrollNavbar:te.anchorWithStickyNavbar,o.className),id:n}),o.children,a.createElement(q.Z,{className:"hash-link",to:`#${n}`,"aria-label":l,title:l},"\u200b"))}function ae(e){return a.createElement(ne,e)}const oe={containsTaskList:"containsTaskList_mC6p"};const re={img:"img_ev3q"};const ce="admonition_LlT9",le="admonitionHeading_tbUL",ie="admonitionIcon_kALy",se="admonitionContent_S0QG";const me={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(H.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(H.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(H.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(H.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(H.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},ue={secondary:"note",important:"info",success:"tip",warning:"danger"};function de(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const pe={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e):e));return a.createElement(c.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(F,e)},a:function(e){return a.createElement(q.Z,e)},pre:function(e){return a.createElement(F,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ee,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,i.Z)(t,t?.includes("contains-task-list")&&oe.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,re.img))}));var t},h1:e=>a.createElement(ae,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(ae,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(ae,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(ae,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(ae,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(ae,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:r}=de(e),c=function(e){const t=ue[e]??e,n=me[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),me.info)}(n),l=o??c.label,{iconComponent:s}=c,m=r??a.createElement(s,null);return a.createElement("div",{className:(0,i.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,ce)},a.createElement("div",{className:le},a.createElement("span",{className:ie},m),l),a.createElement("div",{className:se},t))},mermaid:n(1875).Z};function fe(e){let{children:t}=e;return a.createElement(o.Zo,{components:pe},t)}},3008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),o=n(6010),r=n(9960);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function l(e){let{permalink:t,label:n,count:l}=e;return a.createElement(r.Z,{href:t,className:(0,o.Z)(c.tag,l?c.tagWithCount:c.tagRegular)},n,l&&a.createElement("span",null,l))}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);