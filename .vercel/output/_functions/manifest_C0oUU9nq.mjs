import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DoznGQg1.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DrpItRLz.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/models","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/models\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"models","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/models.ts","pathname":"/api/models","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.querySelectorAll(\"p-accordion\");t.forEach(o=>o.addEventListener(\"update\",e=>{e.target.open=e.detail.open}));\n"}],"styles":[{"type":"inline","content":".header[data-astro-cid-sckkx6r4]{display:flex;justify-content:center;padding:1rem}.main[data-astro-cid-sckkx6r4]{margin:0 var(--pds-internal-grid-margin, 0);display:grid;padding:0 calc(50% - var(--pds-internal-grid-margin, 0px) - 1280px);grid-gap:clamp(16px,1.25vw + 12px,36px);max-width:var(--pds-internal-grid-width-max, 2560px);min-width:var(--pds-internal-grid-width-min, 320px);box-sizing:content-box;grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start extended-start basic-start narrow-start] repeat(6,minmax(0,1fr)) [narrow-end basic-end extended-end wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: max(22px, 10.625vw - 12px);--pds-grid-basic-span-one-half: span 3;--pds-grid-basic-span-one-third: span 2;--pds-grid-narrow-span-one-half: span 3;--pds-grid-basic-span-two-thirds: span 4;--pds-grid-extended-span-one-half: span 3}@media (min-width: 760px){.main[data-astro-cid-sckkx6r4]{grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start] minmax(0,1fr) [extended-start] minmax(0,1fr) [basic-start] repeat(2,minmax(0,1fr)) [narrow-start] repeat(8,minmax(0,1fr)) [narrow-end] repeat(2,minmax(0,1fr)) [basic-end] minmax(0,1fr) [extended-end] minmax(0,1fr) [wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: calc(5vw - 16px) ;--pds-grid-basic-span-one-half: span 6;--pds-grid-basic-span-one-third: span 4;--pds-grid-narrow-span-one-half: span 4;--pds-grid-basic-span-two-thirds: span 8;--pds-grid-extended-span-one-half: span 7}}@media (min-width: 1920px){.main[data-astro-cid-sckkx6r4]{--pds-internal-grid-safe-zone: min(50vw - 880px, 400px)}}\n.grid{margin:0 var(--pds-internal-grid-margin, 0);display:grid;padding:0 calc(50% - var(--pds-internal-grid-margin, 0px) - 1280px);grid-gap:clamp(16px,1.25vw + 12px,36px);max-width:var(--pds-internal-grid-width-max, 2560px);min-width:var(--pds-internal-grid-width-min, 320px);box-sizing:content-box;grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start extended-start basic-start narrow-start] repeat(6,minmax(0,1fr)) [narrow-end basic-end extended-end wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: max(22px, 10.625vw - 12px);--pds-grid-basic-span-one-half: span 3;--pds-grid-basic-span-one-third: span 2;--pds-grid-narrow-span-one-half: span 3;--pds-grid-basic-span-two-thirds: span 4;--pds-grid-extended-span-one-half: span 3}@media (min-width: 760px){.grid{grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start] minmax(0,1fr) [extended-start] minmax(0,1fr) [basic-start] repeat(2,minmax(0,1fr)) [narrow-start] repeat(8,minmax(0,1fr)) [narrow-end] repeat(2,minmax(0,1fr)) [basic-end] minmax(0,1fr) [extended-end] minmax(0,1fr) [wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: calc(5vw - 16px) ;--pds-grid-basic-span-one-half: span 6;--pds-grid-basic-span-one-third: span 4;--pds-grid-narrow-span-one-half: span 4;--pds-grid-basic-span-two-thirds: span 8;--pds-grid-extended-span-one-half: span 7}}@media (min-width: 1920px){.grid{--pds-internal-grid-safe-zone: min(50vw - 880px, 400px)}}.narrow{grid-column:narrow-start/narrow-end}.wide{grid-column:wide-start/wide-end}\n"}],"routeData":{"route":"/models","isIndex":false,"type":"page","pattern":"^\\/models\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/models.astro","pathname":"/models","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".grid{margin:0 var(--pds-internal-grid-margin, 0);display:grid;padding:0 calc(50% - var(--pds-internal-grid-margin, 0px) - 1280px);grid-gap:clamp(16px,1.25vw + 12px,36px);max-width:var(--pds-internal-grid-width-max, 2560px);min-width:var(--pds-internal-grid-width-min, 320px);box-sizing:content-box;grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start extended-start basic-start narrow-start] repeat(6,minmax(0,1fr)) [narrow-end basic-end extended-end wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: max(22px, 10.625vw - 12px);--pds-grid-basic-span-one-half: span 3;--pds-grid-basic-span-one-third: span 2;--pds-grid-narrow-span-one-half: span 3;--pds-grid-basic-span-two-thirds: span 4;--pds-grid-extended-span-one-half: span 3}@media (min-width: 760px){.grid{grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start] minmax(0,1fr) [extended-start] minmax(0,1fr) [basic-start] repeat(2,minmax(0,1fr)) [narrow-start] repeat(8,minmax(0,1fr)) [narrow-end] repeat(2,minmax(0,1fr)) [basic-end] minmax(0,1fr) [extended-end] minmax(0,1fr) [wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: calc(5vw - 16px) ;--pds-grid-basic-span-one-half: span 6;--pds-grid-basic-span-one-third: span 4;--pds-grid-narrow-span-one-half: span 4;--pds-grid-basic-span-two-thirds: span 8;--pds-grid-extended-span-one-half: span 7}}@media (min-width: 1920px){.grid{--pds-internal-grid-safe-zone: min(50vw - 880px, 400px)}}.narrow{grid-column:narrow-start/narrow-end}.wide{grid-column:wide-start/wide-end}\n.header[data-astro-cid-sckkx6r4]{display:flex;justify-content:center;padding:1rem}.main[data-astro-cid-sckkx6r4]{margin:0 var(--pds-internal-grid-margin, 0);display:grid;padding:0 calc(50% - var(--pds-internal-grid-margin, 0px) - 1280px);grid-gap:clamp(16px,1.25vw + 12px,36px);max-width:var(--pds-internal-grid-width-max, 2560px);min-width:var(--pds-internal-grid-width-min, 320px);box-sizing:content-box;grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start extended-start basic-start narrow-start] repeat(6,minmax(0,1fr)) [narrow-end basic-end extended-end wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: max(22px, 10.625vw - 12px);--pds-grid-basic-span-one-half: span 3;--pds-grid-basic-span-one-third: span 2;--pds-grid-narrow-span-one-half: span 3;--pds-grid-basic-span-two-thirds: span 4;--pds-grid-extended-span-one-half: span 3}@media (min-width: 760px){.main[data-astro-cid-sckkx6r4]{grid-template-columns:[full-start] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [wide-start] minmax(0,1fr) [extended-start] minmax(0,1fr) [basic-start] repeat(2,minmax(0,1fr)) [narrow-start] repeat(8,minmax(0,1fr)) [narrow-end] repeat(2,minmax(0,1fr)) [basic-end] minmax(0,1fr) [extended-end] minmax(0,1fr) [wide-end] minmax(0,var(--pds-internal-grid-outer-column, calc(var(--pds-internal-grid-safe-zone) - clamp(16px, 1.25vw + 12px, 36px)))) [full-end];--pds-internal-grid-safe-zone: calc(5vw - 16px) ;--pds-grid-basic-span-one-half: span 6;--pds-grid-basic-span-one-third: span 4;--pds-grid-narrow-span-one-half: span 4;--pds-grid-basic-span-two-thirds: span 8;--pds-grid-extended-span-one-half: span 7}}@media (min-width: 1920px){.main[data-astro-cid-sckkx6r4]{--pds-internal-grid-safe-zone: min(50vw - 880px, 400px)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/models.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/models@_@ts":"pages/api/models.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/models@_@astro":"pages/models.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-manifest":"manifest_C0oUU9nq.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DsEMSMCj.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ljd7xMCOTt8gqVg4vKwLT/wIr55suSI0pK/V439BEMU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
