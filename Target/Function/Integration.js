var s=(...[e={}])=>{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t]===!0&&(e[t]=o[t]);const{Path:a}=f(o,e),r=new Set;if(typeof a<"u"&&(Array.isArray(a)||a instanceof Set))for(const t of a)r.add(t);return{name:"convert-astro",hooks:{"astro:build:done":async({dir:t})=>{r.size||r.add(t)}}}};const{default:o}=await import("../Variable/Option.js"),{default:f}=await import("@playform/build/Target/Function/Merge.js");export{o as Default,f as Merge,s as default};
