import { c as createComponent, r as renderTemplate, a as renderComponent, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DrpItRLz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_JU7PJV5-.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { sections } = Astro2.props;
  return renderTemplate`${sections?.map((section) => renderTemplate`${renderComponent($$result, "p-accordion", "p-accordion", { "heading": section.name, "heading-tag": "h3", "class": "narrow" }, { "default": () => renderTemplate`${renderComponent($$result, "p-text", "p-text", {}, { "default": () => renderTemplate`${section.description}` })}` })}`)}`;
}, "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/modules/Accordion/Accordion.astro", void 0);

const $$Astro = createAstro();
const $$Models = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Models;
  const response = await fetch("https://astro-demo-pds.vercel.app/api/models");
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="wide">Hello Astro!</h1> <div class="wide"> ${renderComponent($$result2, "p-button", "p-button", {}, { "default": () => renderTemplate`Click me` })} </div> ${renderComponent($$result2, "Accordion", $$Accordion, { "sections": data })} ` })} `;
}, "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/models.astro", void 0);

const $$file = "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/models.astro";
const $$url = "/models";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Models,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
