import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{a as h,d as v}from"./chunk-ALW5VTGR.mjs";import w from"./angular-app-engine-manifest.mjs";var u;function f(e){u=e}function R(){if(!u)throw new Error("Angular app engine manifest is not set. Please ensure you are using the '@angular/build:application' builder to build your server application.");return u}var i=function(e){return e[e.Server=0]="Server",e[e.Client=1]="Client",e[e.Prerender=2]="Prerender",e}(i||{});var c=class{store=new Map;async run(s,t){let r=this.store.get(s);switch(s){case"html:transform:pre":{if(!r)return t.html;let n=h({},t);for(let o of r)n.html=await o(n);return n.html}default:throw new Error(`Running hook "${s}" is not supported.`)}}on(s,t){let r=this.store.get(s);r?r.push(t):this.store.set(s,[t])}has(s){return!!this.store.get(s)?.length}};var T={[i.Prerender]:"ssg",[i.Server]:"ssr",[i.Client]:""};function y(e,s){let{pathname:t}=e,r=s.length;t[r]==="/"&&r++;let n=t.indexOf("/",r);return n===-1&&(n=t.length),t.slice(r,n)}var l=(()=>{class e{static \u0275allowStaticRouteRender=!1;static \u0275hooks=new c;manifest=R();entryPointsCount=Object.keys(this.manifest.entryPoints).length;entryPointsCache=new Map;async handle(t,r){let n=await this.getAngularServerAppForRequest(t);return n?n.handle(t,r):null}async getAngularServerAppForRequest(t){let r=new URL(t.url),n=await this.getEntryPointExportsForUrl(r);if(!n)return null;let o=n.\u0275getOrCreateAngularServerApp;return o({allowStaticRouteRender:e.\u0275allowStaticRouteRender,hooks:e.\u0275hooks})}getEntryPointExports(t){let r=this.entryPointsCache.get(t);if(r)return r;let{entryPoints:n}=this.manifest,o=n[t];if(!o)return;let a=o();return this.entryPointsCache.set(t,a),a}getEntryPointExportsForUrl(t){let{basePath:r}=this.manifest;if(this.entryPointsCount===1)return this.getEntryPointExports("");let n=y(t,r);return this.getEntryPointExports(n)}}return e})();function p(e){return e.__ng_request_handler__=!0,e}f(w);var d={};v(d,{netlifyAppEngineHandler:()=>m,reqHandler:()=>A});var g=()=>typeof Netlify<"u"?Netlify?.context:void 0;var S=new l;async function m(e){let s=g();return await S.handle(e,s)||new Response("Not found",{status:404})}var A=p(m);var C="default",H=d[C];export{l as AngularAppEngine,H as default,m as netlifyAppEngineHandler,A as reqHandler};