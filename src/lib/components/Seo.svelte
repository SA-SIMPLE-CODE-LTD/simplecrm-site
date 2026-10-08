<script lang="ts">
	import { SITE } from '#lib/site.js';

	interface Props {
		title: string;
		description: string;
		/** Path of this page, starting with "/". */
		path: string;
	}

	let { title, description, path }: Props = $props();

	const canonical = $derived(`${SITE.url}${path === '/' ? '' : path}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{SITE.url}/icon-512.png" />
	<meta name="twitter:card" content="summary" />
</svelte:head>
