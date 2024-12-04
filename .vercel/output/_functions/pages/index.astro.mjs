import { c as createComponent, r as renderTemplate, a as renderComponent, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DrpItRLz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_JU7PJV5-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="wide">Hello Astro!</h1> <div class="wide"> ${renderComponent($$result2, "p-button", "p-button", {}, { "default": () => renderTemplate`Click me` })} </div> ` })} `;
}, "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/index.astro", void 0);

const $$file = "/Users/francesca.palu/Desktop/project/PDS/astro-demo-pds/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
