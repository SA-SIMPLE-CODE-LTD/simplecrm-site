<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Simple CRM</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="container">
	<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
	<p><a href="/">Back to the home page</a></p>
</section>

<style>
	section {
		padding-top: 96px;
		text-align: center;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(32px, 5vw, 48px);
	}
</style>
