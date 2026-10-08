<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { SITE } from '#lib/site.js';

	const features = [
		{
			title: 'Boards that fit your work',
			body: 'Items, groups, subitems and more than twenty column types: status, people, dates, numbers, files, formulas, connections and mirrors.',
			color: 'var(--blue)'
		},
		{
			title: 'Every view you need',
			body: 'Switch the same board between table, kanban, chart, calendar, form and files views without losing a filter.',
			color: 'var(--mango)'
		},
		{
			title: 'Dashboards and docs',
			body: 'Combine boards into live dashboards, and keep specs, notes and meeting docs right next to the work.',
			color: 'var(--coral)'
		},
		{
			title: 'Automations',
			body: 'When a status changes, a date arrives or an item is created, notify people, move items or update columns automatically.',
			color: 'var(--blue)'
		},
		{
			title: 'Permissions you control',
			body: 'Roles, teams, private boards and column restrictions, so everyone sees exactly what they should.',
			color: 'var(--mango)'
		},
		{
			title: 'A monday.com-compatible API',
			body: 'A GraphQL API that speaks the monday.com dialect plus a REST API with scoped keys. Existing integrations switch by changing one URL.',
			color: 'var(--coral)'
		}
	];
</script>

<Seo title={`${SITE.name} — ${SITE.tagline}`} description={SITE.description} path="/" />

<section class="hero">
	<div class="container hero-inner">
		<h1>
			Your team's work,<br /><span class="accent">simply organized.</span>
		</h1>
		<p class="lead">{SITE.description}</p>
		<div class="actions">
			<a class="button button-primary" href="{SITE.appUrl}/login">Get started</a>
			<a class="button button-ghost" href="mailto:{SITE.email.support}">Talk to us</a>
		</div>
	</div>
</section>

<section class="features" aria-labelledby="features-title">
	<div class="container">
		<h2 id="features-title">Everything in one place</h2>
		<ul class="grid">
			{#each features as feature (feature.title)}
				<li class="card">
					<span class="bar" style:background={feature.color} aria-hidden="true"></span>
					<h3>{feature.title}</h3>
					<p>{feature.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="switch" aria-labelledby="switch-title">
	<div class="container switch-inner">
		<h2 id="switch-title">Moving from monday.com?</h2>
		<p>
			We import your boards, items, updates and files for you. The screens and shortcuts work the
			way your team already expects, so nobody needs retraining.
		</p>
		<a class="button button-primary" href="mailto:{SITE.email.support}">Plan your move</a>
	</div>
</section>

<style>
	.hero {
		padding: 88px 0 72px;
	}

	.hero-inner {
		max-width: 860px;
		text-align: center;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(40px, 7vw, 72px);
		letter-spacing: -0.01em;
	}

	.accent {
		color: var(--primary);
	}

	.lead {
		font-size: clamp(18px, 2.2vw, 21px);
		color: var(--text-muted);
		margin: 0 auto 32px;
		max-width: 680px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: center;
	}

	.features {
		padding: 48px 0;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(30px, 4.5vw, 44px);
		text-align: center;
		margin-bottom: 40px;
	}

	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr;
	}

	@media (min-width: 720px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 28px;
	}

	.card .bar {
		display: block;
		width: 44px;
		height: 10px;
		border-radius: 999px;
		margin-bottom: 18px;
	}

	h3 {
		font-size: 19px;
		font-weight: 700;
	}

	.card p {
		margin: 0;
		color: var(--text-muted);
	}

	.switch {
		padding: 72px 0 0;
	}

	.switch-inner {
		max-width: 820px;
		text-align: center;
		background: var(--surface-muted);
		border-radius: calc(var(--radius) * 2);
		padding-top: 56px;
		padding-bottom: 56px;
	}

	.switch h2 {
		margin-bottom: 16px;
	}

	.switch p {
		color: var(--text-muted);
		max-width: 600px;
		margin: 0 auto 28px;
	}
</style>
