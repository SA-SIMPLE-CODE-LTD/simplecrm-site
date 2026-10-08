---
title: Subprocessors
updated: 2026-10-08
---

> **Draft.** Check the providers, regions and purposes against the real production setup before publishing.

To provide {{name}}, {{legalName}} uses the third-party providers below ("**subprocessors**"). They may process Customer Data under our [Data Processing Agreement](/legal/dpa). Each is bound by a written agreement with data protection obligations at least as protective as ours, and we remain responsible for them.

## Infrastructure subprocessors

They host and run the Service, and may process all Customer Data.

| Provider                  | Purpose                              | Data                           | Location                          |
| ------------------------- | ------------------------------------ | ------------------------------ | --------------------------------- |
| Amazon Web Services, Inc. | Application hosting and file storage | All Customer Data and files    | [AWS REGION, e.g. EU (Frankfurt)] |
| Neon, Inc.                | Managed Postgres database            | All Customer Data except files | [NEON REGION]                     |

## Service-specific subprocessors

They provide one part of the Service and receive only the data that part needs.

| Provider     | Purpose                                                              | Data                                                    | Location      |
| ------------ | -------------------------------------------------------------------- | ------------------------------------------------------- | ------------- |
| Resend, Inc. | Sending service emails (invitations, password resets, notifications) | Recipient name and email address, email content         | United States |
| Google LLC   | "Continue with Google" sign-in, only for users who choose it         | Google account ID, email address, name, profile picture | United States |

## Not subprocessors

- **The website** at {{url}} is hosted by [ADD PROVIDER, e.g. Cloudflare]. It serves only public pages and receives no Customer Data.
- **Integrations you connect**, such as webhooks and API clients, are chosen and controlled by you. They are not our subprocessors.

## Changes to this list

We give at least [30] days' notice before adding or replacing a subprocessor. To be notified by email, write to [{{privacyEmail}}](mailto:{{privacyEmail}}) with the subject line "Subprocessor updates". You may object to a change as described in section 5 of the [DPA](/legal/dpa).
