---
title: Security
updated: 2026-10-08
---

> **Draft.** Every measure on this page must be true in production before you publish it. Remove or change anything that is not.

Your data is your business, and protecting it is ours. This page describes how we protect {{name}} and the data you store in it, and how to report a security issue.

## 1. Infrastructure

- The Service runs on cloud infrastructure from the providers listed on our [Subprocessors](/legal/subprocessors) page. Their data centers hold independent certifications, such as ISO 27001 and SOC 2.
- Customer Data is stored in [REGION].
- The production database and file storage are not reachable from the public internet, except through the application.

## 2. Encryption

- **In transit:** all traffic to the Site, the Service and the APIs uses HTTPS (TLS 1.2 or later) with HSTS.
- **At rest:** the database, backups and file storage are encrypted with AES-256.
- **Files:** uploaded files are not served from the application domain. They are delivered through short-lived signed links.

## 3. Authentication and sessions

- Passwords are hashed with Argon2id and are never stored in plain text.
- Sign-in attempts are rate limited, and accounts are temporarily locked after repeated failures.
- "Continue with Google" sign-in uses OAuth 2.0 with PKCE.
- Session cookies are `HttpOnly`, `Secure` and `SameSite`. Sessions expire after 30 days of inactivity and after 90 days at most, and the server can revoke them at once. Changing or resetting your password signs out your other sessions and revokes your API keys.
- Password reset and invitation links expire, and work only once.

## 4. Access control in the product

- Workspace roles (admin, member, viewer, guest), teams, private boards and column restrictions decide who can see and change what. These rules are checked on the server for every request, including API requests and realtime updates.
- API keys belong to a User, can be scoped, can be revoked at any time, and can never do more than that User can.
- The activity log records changes to boards and items, so admins can see who changed what.

## 5. Application security

- Every code change is reviewed and must pass automated tests, including tests that check permissions, before it is deployed.
- Dependencies are monitored for known vulnerabilities and kept up to date.
- The application sends strict security headers, including a Content Security Policy, and protects against cross-site request forgery.
- Webhooks can be given a signing secret, so the receiving system can verify that each call came from us.

## 6. Our team and operations

- Production access is limited to the few people who need it, protected with multi-factor authentication, and logged.
- We do not access Customer Data except to provide support you ask for, to investigate abuse or a security issue, or when the law requires it.
- The database is backed up daily, with point-in-time recovery. We test that backups can be restored.
- We monitor the Service for errors, outages and suspicious activity.

## 7. Incidents

If we become aware of a security incident that affects your data, we will notify the affected workspace admins without undue delay, as set out in our [Data Processing Agreement](/legal/dpa). We will tell you what happened, what data was affected and what we are doing about it.

## 8. Reporting a vulnerability

If you think you have found a security vulnerability in {{name}}, please write to [{{securityEmail}}](mailto:{{securityEmail}}) with the details and the steps to reproduce it. We will acknowledge your report within [3] business days and keep you informed until it is resolved.

While you research, please:

- test only against your own account and data, and never access, change or delete other people's data;
- avoid anything that could harm the Service or its users, such as denial of service, spam or social engineering;
- give us reasonable time to fix the issue before you disclose it publicly.

If you follow these guidelines and act in good faith, we will not take legal action against you for your research, and we will credit you if you wish.

## 9. Your part

Security is shared. You can help by using a strong, unique password or Google sign-in, giving each User the narrowest role they need, keeping API keys secret and revoking the ones you no longer use, and removing Users who leave your organization.
