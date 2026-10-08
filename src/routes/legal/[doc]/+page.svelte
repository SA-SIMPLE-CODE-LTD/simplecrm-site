<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { LEGAL_GROUPS, SITE } from '#lib/site.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const updatedLabel = $derived(
		data.updated
			? new Date(`${data.updated}T00:00:00Z`).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: ''
	);
</script>

<Seo
	title={`${data.title} — ${SITE.name}`}
	description={`${data.title} for ${SITE.name}.`}
	path={`/legal/${data.id}`}
/>

<div class="container layout">
	<nav class="toc" aria-label="Legal documents">
		<div class="toc-inner">
			<a class="overview" href="/legal">← Legal overview</a>
			{#each LEGAL_GROUPS as group (group.title)}
				<p class="toc-heading">{group.title}</p>
				<ul>
					{#each group.docs as doc (doc.id)}
						<li>
							<a href="/legal/{doc.id}" aria-current={doc.id === data.id ? 'page' : undefined}>
								{doc.title}
							</a>
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</nav>

	<article>
		<h1>{data.title}</h1>
		{#if updatedLabel}
			<p class="updated">Last updated: <time datetime={data.updated}>{updatedLabel}</time></p>
		{/if}
		<div class="prose">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own Markdown, rendered at build time -->
			{@html data.html}
		</div>
	</article>
</div>

<style>
	.layout {
		display: grid;
		gap: 32px;
		padding-top: 56px;
		grid-template-columns: minmax(0, 1fr);
	}

	@media (min-width: 900px) {
		.layout {
			grid-template-columns: 220px minmax(0, 1fr);
			gap: 56px;
		}

		.toc-inner {
			position: sticky;
			top: 100px;
		}
	}

	.overview {
		display: inline-block;
		margin-bottom: 8px;
	}

	.toc-heading {
		margin: 16px 0 6px;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.toc ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 4px 16px;
	}

	@media (min-width: 900px) {
		.toc ul {
			flex-direction: column;
		}
	}

	.toc a {
		color: var(--text-muted);
		text-decoration: none;
		font-size: 15px;
	}

	.toc a[aria-current='page'] {
		color: var(--primary);
		font-weight: 600;
	}

	article {
		max-width: 760px;
		min-width: 0;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(32px, 5vw, 48px);
	}

	.updated {
		color: var(--text-muted);
		margin: 0 0 32px;
	}

	.prose :global(h2) {
		font-size: 24px;
		margin-top: 40px;
	}

	.prose :global(h3) {
		font-size: 19px;
		margin-top: 28px;
	}

	.prose :global(p),
	.prose :global(li) {
		overflow-wrap: anywhere;
	}

	.prose :global(table) {
		display: block;
		overflow-x: auto;
		border-collapse: collapse;
		width: 100%;
		font-size: 15px;
		margin: 16px 0;
	}

	.prose :global(th),
	.prose :global(td) {
		text-align: left;
		padding: 10px 12px;
		border-bottom: 1px solid var(--border);
		vertical-align: top;
	}

	.prose :global(th) {
		background: var(--surface-muted);
	}

	.prose :global(blockquote) {
		margin: 24px 0;
		padding: 12px 18px;
		border-left: 4px solid var(--mango);
		background: var(--surface-muted);
		border-radius: 0 8px 8px 0;
	}
</style>
