---
title: LumbanganSystem
summary: A web-based Barangay Management Information System for resident records, document requests, approvals, and barangay service workflows.
longDescription: LumbanganSystem digitizes day-to-day barangay operations, including resident records, document requests, approvals, and operational reporting. The admin dashboard tracks request volume, approval turnaround, and document-type breakdowns so staff can spot bottlenecks and constituents get a clear answer on where their request stands.
highlights:
  - Document requests with status tracking
  - Document types/templates and proof uploads
  - Admin dashboard and statistics
challenges:
  - Modeling document request states and template variants without a rigid schema
  - Keeping the admin dashboard responsive under thousands of historical records
tags:
  - label: PHP
    icon: tabler:brand-php
  - label: MySQL
    icon: tabler:database
  - label: MVC
    icon: tabler:code
  - label: Bootstrap
    icon: tabler:brand-bootstrap
  - label: Barangay System
    icon: tabler:building-community
stack:
  - label: PHP
    group: backend
  - label: MySQL
    group: data
  - label: Bootstrap
    group: frontend
  - label: MVC
    group: backend
metrics:
  - value: Records
    label: Residents
  - value: Templates
    label: Documents
  - value: Team
    label: Build mode
image: /images/projects/lumbangan-system/dashboard.webp
imageWidth: 1280
imageHeight: 725
gallery:
  - src: /images/projects/lumbangan-system/dashboard.webp
    alt: LumbanganSystem dashboard
    caption: Admin dashboard with request status and statistics
  - src: /images/projects/lumbangan-system/resident-dashboard.png
    alt: Resident dashboard
    caption: Constituent-facing dashboard for request tracking
  - src: /images/projects/lumbangan-system/document-request.png
    alt: Document request form
    caption: Clearance and certification request workflow
  - src: /images/projects/lumbangan-system/recent-acts.png
    alt: Recent activity log
    caption: Audit trail of barangay actions and approvals
  - src: /images/projects/lumbangan-system/survey.png
    alt: Survey module
    caption: Community survey builder and response analytics
githubUrl: https://github.com/alfredD-12/LumbanganSystem
liveDemoUrl: null
sourceOnly: true
featured: false
categories:
  - web-app
year: '2024'
role: Team build
status: live
accent: oklch(0.585 0.233 277.117)
problem: Barangay service workflows rely on accurate resident records, predictable document processing, and clear status tracking for constituents and staff.
approach: Our team built a structured management system around resident records, document request states, templates, and admin reporting.
result: The system centralizes request handling and gives staff a clearer operational dashboard for document volume, approvals, and recent activity.
---

LumbanganSystem was built as a practical public-service workflow tool. The project emphasized reliable records, request visibility, and maintainable PHP/MVC structure.

My focus was contributing to the system flows and interface patterns that make document processing easier to track for both administrators and residents.
