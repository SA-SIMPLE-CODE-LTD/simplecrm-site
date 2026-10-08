---
title: Data Processing Agreement
updated: 2026-10-08
---

> **Draft.** This is a template, not a finished agreement. Have a lawyer complete it and attach the Standard Contractual Clauses and the UK Addendum before you offer it to customers.

This Data Processing Agreement ("**DPA**") forms part of the [Terms of Service](/legal/terms) (the "**Agreement**") between {{legalName}} ("**{{name}}**", "**Processor**", "**we**") and the Customer ("**Controller**", "**you**"). It applies whenever we process Customer Personal Data while providing the Service. If this DPA and the Agreement conflict, this DPA prevails on data protection matters.

## 1. Definitions

- **Data Protection Laws:** all laws on personal data that apply to the processing, including the GDPR, the UK GDPR, the Swiss FADP, the Israeli Protection of Privacy Law, and US state privacy laws such as the CCPA.
- **Customer Personal Data:** personal data in Customer Data that we process for you.
- **Subprocessor:** a third party we engage to process Customer Personal Data.
- **Security Incident:** a breach of security that leads to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Customer Personal Data.
- "Controller", "processor", "data subject", "personal data" and "processing" have the meanings given in the GDPR. "Business", "service provider", "sell" and "share" have the meanings given in the CCPA.

## 2. Roles and instructions

**2.1 Roles.** You are the controller (or a processor acting for your own controller), and we are your processor (or subprocessor).

**2.2 Your instructions.** We process Customer Personal Data only on your documented instructions. Those instructions are the Agreement, this DPA, and how you and your Users configure and use the Service, for example the boards, automations, integrations and forms you set up. We will tell you if we believe an instruction breaks Data Protection Laws, and if the law requires us to process data in another way, we will tell you first unless the law forbids it.

**2.3 Your responsibilities.** You are responsible for the lawfulness of the data you put into the Service and of your instructions, including giving notices and obtaining consents.

**2.4 Details of processing.** Annex 1 describes the processing.

## 3. Our personnel

Only people who need access to provide the Service, support or security may access Customer Personal Data. They are bound by confidentiality obligations.

## 4. Security

We implement and maintain the technical and organizational measures in Annex 2 and on our [Security](/legal/security) page. We may update them over time, but never in a way that materially lowers the overall protection of Customer Personal Data.

## 5. Subprocessors

**5.1 Authorization.** You give general authorization for us to use subprocessors. The current list is on our [Subprocessors](/legal/subprocessors) page.

**5.2 Changes.** We will give at least [30] days' notice before adding or replacing a subprocessor, by updating that page and emailing those who have asked to be notified. To ask, write to [{{privacyEmail}}](mailto:{{privacyEmail}}).

**5.3 Objections.** You may object on reasonable data protection grounds within that notice period. If we cannot reasonably address your objection, you may end the affected part of the Service and receive a refund of prepaid fees for the unused period.

**5.4 Flow-down.** Each subprocessor is bound by a written agreement with data protection obligations at least as protective as this DPA. We remain responsible for our subprocessors.

## 6. Security Incidents

We will notify you without undue delay, and in any case within [48] hours, after we become aware of a Security Incident. We will give you the information you reasonably need to meet your own notification duties, take reasonable steps to contain and investigate the incident, and keep you informed. Our notice is not an admission of fault.

## 7. Assistance

**7.1 Data subject requests.** The Service lets you find, correct, export and delete personal data. If you cannot do something through the Service, we will help you respond to data subject requests. If a data subject contacts us directly about Customer Personal Data, we will pass the request to you and will not answer it ourselves unless you tell us to.

**7.2 Impact assessments and authorities.** We will give you reasonable help with data protection impact assessments and consultations with supervisory authorities.

## 8. Audits

We will make available the information you reasonably need to show compliance with this DPA, including our security documentation and the certifications of our infrastructure providers. If that is not enough, you may audit us, or have an independent auditor bound by confidentiality do so, [once a year], with at least [30] days' notice, during business hours and without disrupting other customers. You bear the costs of the audit.

## 9. International transfers

**9.1 Transfers.** We and our subprocessors may process Customer Personal Data outside the country where it was collected, as listed on the Subprocessors page.

**9.2 Safeguards.** When Customer Personal Data is transferred from the EEA, the UK, Switzerland or Israel to a country without an adequacy decision, the Standard Contractual Clauses (Module 2, controller to processor, or Module 3, processor to processor, as applicable) apply and are incorporated into this DPA, with the UK Addendum for UK data and the Swiss amendments for Swiss data. [Attach the completed clauses and annexes.]

## 10. Deletion and return

You can export Customer Data at any time during the subscription, and for [30] days after it ends. After that we delete Customer Personal Data from the Service. Backups are overwritten within [35] days. We may keep data only where the law requires it, and then only for as long as it requires, under this DPA's protections.

## 11. US state privacy laws

Where the CCPA or a similar law applies, we act as your service provider. We will not sell or share Customer Personal Data, retain, use or disclose it outside our direct business relationship with you or for any purpose other than providing the Service, or combine it with personal data from other sources except as the law allows. We will tell you if we can no longer meet these obligations.

## 12. Liability and term

Each side's liability under this DPA is subject to the limits in the Agreement, unless Data Protection Laws do not allow it. This DPA lasts as long as we process Customer Personal Data.

## Annex 1: Details of processing

| Item               | Description                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subject matter     | Providing the Service under the Agreement                                                                                                                                                       |
| Duration           | The term of the Agreement plus the deletion period in section 10                                                                                                                                |
| Nature and purpose | Hosting, storage, retrieval, display, search, sharing within the Customer's workspace, automations and integrations the Customer configures, email notifications, backups, support and security |
| Data subjects      | The Customer's Users, and any people whose data the Customer stores in the Service, such as its clients, leads, suppliers, staff and form respondents                                           |
| Categories of data | Whatever the Customer chooses to store, usually names, contact details, job information, messages, comments and files                                                                           |
| Special categories | None, unless the Customer stores them in breach of section 3.3 of the Terms                                                                                                                     |
| Frequency          | Continuous                                                                                                                                                                                      |
| Subprocessors      | As listed on the [Subprocessors](/legal/subprocessors) page                                                                                                                                     |

## Annex 2: Technical and organizational measures

- **Encryption:** TLS 1.2 or later in transit; AES-256 at rest for the database, backups and file storage.
- **Access control in the Service:** workspace roles, teams, private boards and column restrictions, enforced on the server for every request, API call and realtime update.
- **Authentication:** Argon2id password hashing, sign-in rate limiting and temporary lockout, OAuth 2.0 with PKCE for Google sign-in, revocable sessions with a fixed maximum lifetime.
- **Staff access:** least privilege, multi-factor authentication and logging for production access.
- **Availability:** daily backups with point-in-time recovery, and restore tests.
- **Secure development:** code review and automated tests for every change, including permission tests, and dependency vulnerability monitoring.
- **Logging:** an activity log of changes in each workspace, plus security event logs.
- **Incident response:** a documented process for detecting, containing and notifying Security Incidents.

## Contact

Data protection questions: [{{privacyEmail}}](mailto:{{privacyEmail}}).
