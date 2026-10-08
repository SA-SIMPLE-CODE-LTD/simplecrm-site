<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { LEGAL_GROUPS, SITE } from '#lib/site.js';

	const contacts = [
		{ label: 'Product help and your account', email: SITE.email.support },
		{ label: 'Billing and invoices', email: SITE.email.billing },
		{ label: 'Privacy and data requests', email: SITE.email.privacy },
		{ label: 'Security vulnerabilities', email: SITE.email.security },
		{ label: 'Abuse and copyright reports', email: SITE.email.abuse },
		{ label: 'Contracts and legal notices', email: SITE.email.legal }
	];

	const faq = [
		{
			q: 'Do you offer a Data Processing Agreement?',
			a: 'Yes. Our DPA is part of the Terms of Service and applies automatically to every workspace, so there is nothing to sign. If your organization needs a countersigned copy, write to us.',
			href: '/legal/dpa'
		},
		{
			q: 'Where is my data stored?',
			a: 'Customer Data is hosted by the providers on our Subprocessors page, in the regions listed there.',
			href: '/legal/subprocessors'
		},
		{
			q: 'Who owns the data in my workspace?',
			a: 'You do. We process it only to provide the Service, we never sell it, and we do not use it to train AI models. You can export it at any time.',
			href: '/legal/terms'
		},
		{
			q: 'How do I ask for my personal data, or ask you to delete it?',
			a: 'Most of it you can change in your profile settings. For anything else, write to our privacy address and we will answer within 30 days. If your data is in another company’s workspace, that company controls it, so contact them first.',
			href: '/legal/privacy'
		}
	];
</script>

<Seo
	title={`Legal — ${SITE.name}`}
	description={`Terms, privacy, security and the other policies that apply to ${SITE.name}.`}
	path="/legal"
/>

<div class="container page">
	<header class="intro">
		<h1>All things legal</h1>
		<p class="lead">
			The terms and policies that apply when you use {SITE.name}, in plain language wherever we
			could manage it.
		</p>
	</header>

	{#each LEGAL_GROUPS as group (group.title)}
		<section aria-labelledby="group-{group.title}">
			<h2 id="group-{group.title}">{group.title}</h2>
			<ul class="cards">
				{#each group.docs as doc (doc.id)}
					<li>
						<a class="card" href="/legal/{doc.id}">
							<span class="card-title">{doc.title}</span>
							<span class="card-summary">{doc.summary}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<section aria-labelledby="faq">
		<h2 id="faq">Common questions</h2>
		<div class="faq">
			{#each faq as item (item.q)}
				<details>
					<summary>{item.q}</summary>
					<p>{item.a} <a href={item.href}>Read more</a></p>
				</details>
			{/each}
		</div>
	</section>

	<section aria-labelledby="contact">
		<h2 id="contact">Contact us</h2>
		<p class="muted">
			Write to the address that matches your question, so it reaches the right person faster.
		</p>
		<dl class="contacts">
			{#each contacts as c (c.email)}
				<div>
					<dt>{c.label}</dt>
					<dd><a href="mailto:{c.email}">{c.email}</a></dd>
				</div>
			{/each}
		</dl>
		<p class="muted address">
			{SITE.company.legalName}, {SITE.company.address}, {SITE.company.country}
		</p>
	</section>
</div>

<style>
	.page {
		padding-top: 56px;
		max-width: 960px;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(36px, 6vw, 56px);
		margin: 0 0 12px;
	}

	.lead {
		color: var(--text-muted);
		font-size: 19px;
		margin: 0 0 24px;
		max-width: 620px;
	}

	h2 {
		font-size: 22px;
		margin: 48px 0 16px;
	}

	.cards {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 6px;
		height: 100%;
		padding: 20px;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		color: var(--text);
		text-decoration: none;
		transition:
			border-color 0.15s,
			transform 0.15s;
	}

	.card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}

	.card-title {
		font-weight: 700;
		font-size: 17px;
	}

	.card-summary {
		color: var(--text-muted);
		font-size: 15px;
	}

	.faq {
		border-top: 1px solid var(--border);
	}

	details {
		border-bottom: 1px solid var(--border);
		padding: 16px 0;
	}

	summary {
		cursor: pointer;
		font-weight: 600;
	}

	details p {
		color: var(--text-muted);
		margin: 10px 0 0;
	}

	.muted {
		color: var(--text-muted);
	}

	.contacts {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
		margin: 20px 0 0;
	}

	dt {
		font-weight: 600;
		font-size: 15px;
	}

	dd {
		margin: 2px 0 0;
		overflow-wrap: anywhere;
	}

	.address {
		margin-top: 24px;
		font-size: 15px;
	}
</style>
