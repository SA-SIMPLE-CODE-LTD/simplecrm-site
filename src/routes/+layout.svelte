<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/brand/favicon.svg';
	import wordmark from '#lib/assets/brand/wordmark.svg';
	import wordmarkOnDark from '#lib/assets/brand/wordmark-on-dark.svg';
	import { LEGAL_DOCS, SITE } from '#lib/site.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const year = new Date().getFullYear();
	const FOOTER_DOCS = LEGAL_DOCS.filter(({ id }) =>
		['terms', 'privacy', 'cookies', 'security'].includes(id)
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#216ef6" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&display=swap"
	/>
</svelte:head>

<a class="visually-hidden" href="#main">Skip to content</a>

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/" aria-label="{SITE.name} home">
			<picture>
				<source srcset={wordmarkOnDark} media="(prefers-color-scheme: dark)" />
				<img src={wordmark} alt={SITE.name} width="168" height="32" />
			</picture>
		</a>
		<nav aria-label="Main">
			<a class="button button-ghost" href="{SITE.appUrl}/login">Log in</a>
		</nav>
	</div>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<p class="footer-name">{SITE.name}</p>
			<p class="muted">{SITE.tagline}</p>
		</div>
		<nav aria-label="Legal">
			<p class="footer-heading">Legal</p>
			<ul>
				<li><a href="/legal">Legal overview</a></li>
				{#each FOOTER_DOCS as doc (doc.id)}
					<li><a href="/legal/{doc.id}">{doc.title}</a></li>
				{/each}
			</ul>
		</nav>
		<div>
			<p class="footer-heading">Contact</p>
			<ul>
				<li><a href="mailto:{SITE.email.support}">Support</a></li>
				<li><a href="mailto:{SITE.email.privacy}">Privacy</a></li>
				<li><a href="mailto:{SITE.email.security}">Report a security issue</a></li>
			</ul>
		</div>
	</div>
	<div class="container">
		<p class="muted copyright">© {year} {SITE.company.legalName}. All rights reserved.</p>
	</div>
</footer>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--paper) 88%, transparent);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--border);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 68px;
	}

	.brand img {
		height: 30px;
		width: auto;
	}

	.site-footer {
		margin-top: 96px;
		padding: 48px 0 32px;
		border-top: 1px solid var(--border);
		font-size: 15px;
	}

	.footer-grid {
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr;
	}

	@media (min-width: 720px) {
		.footer-grid {
			grid-template-columns: 2fr 1fr 1fr;
		}
	}

	.footer-name {
		font-family: var(--font-display);
		font-size: 22px;
		margin: 0 0 4px;
	}

	.footer-heading {
		font-weight: 700;
		margin: 0 0 8px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 6px;
	}

	.site-footer a {
		color: var(--text-muted);
		text-decoration: none;
		overflow-wrap: anywhere;
	}

	.site-footer a:hover {
		color: var(--text);
	}

	.muted {
		color: var(--text-muted);
		margin: 0;
	}

	.copyright {
		margin-top: 32px;
		font-size: 14px;
	}
</style>
