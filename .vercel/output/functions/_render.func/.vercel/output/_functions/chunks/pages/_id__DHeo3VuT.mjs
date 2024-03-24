/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as createTransitionScope, h as renderComponent, i as renderHead } from '../astro_CJRzK2-q.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate` Un texto por defecto`)} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "E:/Astro/curso-astro/src/components/HeaderButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All te information about SpaceX launches
</p> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`, "default": ($$result2) => renderTemplate` 
Ultimos lanzamientos
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`, "default": ($$result2) => renderTemplate` 
Sobre el proyecto
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-time-duration-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12v.01"></path><path d="M7.5 19.8v.01"></path><path d="M4.2 16.5v.01"></path><path d="M4.2 7.5v.01"></path><path d="M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03"></path><path d="M3 3l18 18"></path></svg>`, "default": ($$result2) => renderTemplate` 
Los más viejos
` })} </nav> </header>`;
}, "E:/Astro/curso-astro/src/components/Header.astro", "self");

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "E:/Astro/curso-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main>  </body></html>`;
}, "E:/Astro/curso-astro/src/layouts/Layout.astro", void 0);

const getLaunchBy = async ({
  id
}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  console.log(launch);
  return launch;
};
const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 18
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  console.log(launch);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">
Launch #${launch?.flight_number} </h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "E:/Astro/curso-astro/src/pages/launch/[id].astro", void 0);

const $$file = "E:/Astro/curso-astro/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLatestLaunches as g };
