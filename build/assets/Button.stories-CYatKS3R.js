import{r as i,j as r}from"./index-BuNdbtqw.js";const m=i.forwardRef(({children:t,variant:e="primary",loading:s=!1,leftIcon:a,rightIcon:n,className:o="",fullWidth:c,disabled:l,...d},u)=>{const C=["ui-btn no-drag",e==="ghost"?"ui-btn--ghost":"",c?"w-full":"",s?"cursor-wait":"",o].filter(Boolean).join(" ");return r.jsxs("button",{ref:u,className:C,disabled:l||s,"aria-busy":s,...d,children:[a?r.jsx("span",{"aria-hidden":!0,children:a}):null,r.jsx("span",{children:s?"Loading…":t}),n?r.jsx("span",{"aria-hidden":!0,children:n}):null]})});m.displayName="Button";/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,a)=>a?a.toUpperCase():s.toLowerCase()),p=t=>{const e=x(t);return e.charAt(0).toUpperCase()+e.slice(1)},w=(...t)=>t.filter((e,s,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===s).join(" ").trim(),y=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...l},d)=>i.createElement("svg",{ref:d,...b,width:e,height:e,stroke:t,strokeWidth:a?Number(s)*24/Number(e):s,className:w("lucide",n),...!o&&!y(l)&&{"aria-hidden":"true"},...l},[...c.map(([u,h])=>i.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,e)=>{const s=i.forwardRef(({className:a,...n},o)=>i.createElement(j,{ref:o,iconNode:e,className:w(`lucide-${g(p(t))}`,`lucide-${t}`,a),...n}));return s.displayName=p(t),s};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],v=f("loader-circle",k);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],B=f("mail",A),z={title:"Components/Button"},L=t=>r.jsx(m,{...t,children:"Button"});L.args={variant:"primary",loading:!1};const E=t=>r.jsx(m,{...t,leftIcon:r.jsx(B,{size:16}),rightIcon:t.loading?r.jsx(v,{className:"animate-spin",size:16}):null,children:"Send"});E.args={variant:"ghost",loading:!1};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{L as Playground,E as WithIcons,z as default};
