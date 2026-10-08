import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// Not 5173: that is the CRM's port, and a CRM tab left open would poll this site for /api/v1/* (404s).
	server: { port: 5180, strictPort: true },
	preview: { port: 5181, strictPort: true },
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// 404.html: served by Cloudflare for unknown paths, and renders the site's error page.
			adapter: adapter({ fallback: '404.html' })
		})
	]
});
