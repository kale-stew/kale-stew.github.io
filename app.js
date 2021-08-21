import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/svelte-kit-blog-demo/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    " + head + "\n  </head>\n  <body>\n    <div id=\"svelte\">" + body + "</div>\n  </body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/internal/start-8cea9b71.js",
			css: [assets + "/internal/assets/start-61d1577b.css"],
			js: [assets + "/internal/start-8cea9b71.js",assets + "/internal/chunks/vendor-d79afd49.js",assets + "/internal/chunks/paths-28a87002.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/internal/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"CNAME","size":33,"type":null},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"favicon.png","size":39720,"type":"image/png"},{"file":"robots.txt","size":66,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\.json$/,
						params: empty,
						load: () => import("../../src/routes/blog.json.js")
					},
		{
						type: 'endpoint',
						pattern: /^\/images\/dune-otis\/?$/,
						params: empty,
						load: () => import("../../src/routes/images/dune-otis.jpg")
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/blog\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/([^/]+?)\.json$/,
						params: (m) => ({ slug: d(m[1])}),
						load: () => import("../../src/routes/[slug].json.js")
					},
		{
						type: 'page',
						pattern: /^\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/blog.svelte": () => import("../../src/routes/blog.svelte"),"src/routes/[slug].svelte": () => import("../../src/routes/[slug].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-88957fb7.js","css":["assets/pages/__layout.svelte-37ba07d1.css"],"js":["pages/__layout.svelte-88957fb7.js","chunks/vendor-d79afd49.js","chunks/paths-28a87002.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-4119af3f.js","css":[],"js":["error.svelte-4119af3f.js","chunks/vendor-d79afd49.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-438ec223.js","css":["assets/pages/index.svelte-238e0f1e.css"],"js":["pages/index.svelte-438ec223.js","chunks/vendor-d79afd49.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-c2c4656c.js","css":["assets/pages/about.svelte-cd99b2c0.css"],"js":["pages/about.svelte-c2c4656c.js","chunks/vendor-d79afd49.js"],"styles":[]},"src/routes/blog.svelte":{"entry":"pages/blog.svelte-148c27c9.js","css":["assets/pages/blog.svelte-017a6d66.css"],"js":["pages/blog.svelte-148c27c9.js","chunks/vendor-d79afd49.js","chunks/paths-28a87002.js"],"styles":[]},"src/routes/[slug].svelte":{"entry":"pages/[slug].svelte-8743bf44.js","css":["assets/pages/[slug].svelte-ecef8022.css"],"js":["pages/[slug].svelte-8743bf44.js","chunks/vendor-d79afd49.js","chunks/paths-28a87002.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/internal/" + entry,
		css: css.map(dep => assets + "/internal/" + dep),
		js: js.map(dep => assets + "/internal/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}