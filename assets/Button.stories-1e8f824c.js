import{j as V}from"./jsx-runtime-ffb262ed.js";import{R as e,r as Z}from"./index-76fb7be0.js";import{P as F,c as I}from"./index-2a0b04dd.js";const B=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),e.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]);var R=Object.defineProperty,_=Object.defineProperties,T=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,p=(r,a,t)=>a in r?R(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,G=(r,a)=>{for(var t in a||(a={}))z.call(a,t)&&p(r,t,a[t]);if(d)for(var t of d(a))D.call(a,t)&&p(r,t,a[t]);return r},N=(r,a)=>_(r,T(a));const L=Z.forwardRef((r,a)=>e.createElement(F,N(G({ref:a},r),{weights:B})));L.displayName="ArrowRight";const W={title:"Form/Button",component:I,args:{size:"md",disabled:!1,children:"Button"},argTypes:{children:{control:{type:"text"},defaultValue:"Button"},size:{options:["sm","md","lg"],control:{type:"inline-radio"},defaultValue:"md"},variant:{options:["primary","secondary","ghost","outline"],control:{type:"inline-radio"},defaultValue:"primary"},disabled:{control:{type:"boolean"},defaultValue:!1},leftIcon:{table:{disable:!0}},rightIcon:{table:{disable:!0}},css:{table:{disable:!0}}}},n={args:{variant:"primary"}},o={args:{variant:"secondary"}},s={args:{variant:"ghost"}},l={args:{variant:"outline"}},c={args:{disabled:!0}},i={args:{variant:"primary",children:"Next page",rightIcon:V.jsx(L,{weight:"bold"})},argTypes:{children:{table:{disable:!0}}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,v,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var O,S,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,A,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,P,x;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Next page',
    rightIcon: <ArrowRight weight="bold" />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const $=["Primary","Secondary","Ghost","Outline","Disabled","WithIcon"],J=Object.freeze(Object.defineProperty({__proto__:null,Disabled:c,Ghost:s,Outline:l,Primary:n,Secondary:o,WithIcon:i,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"}));export{J as B,s as G,l as O,n as P,o as S};
