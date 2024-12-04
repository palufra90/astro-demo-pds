import { c as createComponent, r as renderTemplate, a as renderComponent, b as addAttribute, d as renderHead, e as renderSlot, f as createAstro, u as unescapeHTML, F as Fragment } from './astro/server_DrpItRLz.mjs';
import 'kleur/colors';
import { getInitialStyles, getFontLinks, getComponentChunkLinks, getLoaderScript } from '@porsche-design-system/components-js/partials';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const porscheDesignHeaders = `${getInitialStyles()}
  ${getFontLinks()}
  ${getComponentChunkLinks({ components: ["crest", "wordmark"] })}`;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(porscheDesignHeaders)}` })}<meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getLoaderScript())}` })} <header class="header" data-astro-cid-sckkx6r4> ${renderComponent($$result, "p-wordmark", "p-wordmark", { "data-astro-cid-sckkx6r4": true })} </header> <main class="main" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
