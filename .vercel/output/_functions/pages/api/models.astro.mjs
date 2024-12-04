export { renderers } from '../../renderers.mjs';

const GET = () => {
  return new Response(
    JSON.stringify(
      [
        {
          name: "Taycan",
          description: "price: 103000, range: 200, topSpeed: 161, acceleration: 3.8"
        },
        {
          name: "Macan",
          description: "price: 56000, range: 200, topSpeed: 141, acceleration: 6.3"
        },
        {
          name: "Cayenne",
          description: "price: 68000, range: 200, topSpeed: 152, acceleration: 5.9"
        },
        {
          name: "Panamera",
          description: "price: 87000, range: 200, topSpeed: 167, acceleration: 5.4"
        }
      ]
    )
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
