---
title: Pig-Sikap
summary: A web-based system that helps pig farmers manage inventory, health records, expenses, sales, reports, and profitability insights.
longDescription: Pig-Sikap is a full-stack farm management platform built for small-to-mid scale swine operations. It tracks every pig through its growth cycle, logs health interventions, records expenses and sales, and produces profitability and profit-sharing reports that the operation owner can act on. The dashboard surfaces the metrics that matter most to a working farm, including mortality rate, feed cost per kilo, and realized margin per cycle.
highlights:
  - Pig inventory and cycle management
  - Health records and health task tracking
  - Profitability and profit-sharing reports
challenges:
  - Modeling multi-pig cycles with shared expenses and shared revenue splits
  - Designing a dashboard that surfaces profitability without overwhelming a non-technical user
tags:
  - label: Laravel
    icon: tabler:brand-laravel
  - label: Vue
    icon: tabler:brand-vue
  - label: Tailwind
    icon: tabler:brand-tailwind
  - label: MySQL
    icon: tabler:database
  - label: Analytics
    icon: tabler:chart-bar
  - label: Livestock Mgmt
    icon: tabler:paw
stack:
  - label: Laravel
    group: backend
  - label: MySQL
    group: data
  - label: Vue
    group: frontend
  - label: Tailwind
    group: frontend
metrics:
  - value: '6'
    label: Module areas
  - value: Reports
    label: Owner-ready output
  - value: Solo
    label: Build ownership
image: /images/projects/pig-sikap/dashboard.webp
imageWidth: 1280
imageHeight: 727
gallery:
  - src: /images/projects/pig-sikap/dashboard.webp
    alt: Pig-Sikap dashboard
    caption: Dashboard with cycle and profitability overview
  - src: /images/projects/pig-sikap/analytics.png
    alt: Pig-Sikap analytics
    caption: Per-cycle analytics and growth metrics
  - src: /images/projects/pig-sikap/health.png
    alt: Health records
    caption: Health interventions and task tracking
  - src: /images/projects/pig-sikap/expenses.png
    alt: Expense tracking
    caption: Feed, medication, and overhead entries
  - src: /images/projects/pig-sikap/profitability.png
    alt: Profitability report
    caption: Margin per cycle and profit-share preview
  - src: /images/projects/pig-sikap/reports.png
    alt: Operational reports
    caption: Exportable reports for the farm owner
githubUrl: https://github.com/niks0501/pig-sikap
liveDemoUrl: null
sourceOnly: true
featured: true
categories:
  - web-app
year: '2025'
role: Solo build
status: live
accent: oklch(0.555 0.163 48.998)
problem: Small farm operations often track livestock, expenses, health interventions, and sales in separate notebooks or spreadsheets, making profitability hard to understand until too late.
approach: I modeled pig cycles, shared expenses, health events, sales, and profit-sharing as connected workflows, then designed the dashboard around the questions an owner needs answered quickly.
result: The system centralizes operational records and produces owner-ready reports so farm decisions can be based on actual costs, cycle performance, and realized margins.
---

Pig-Sikap was designed around practical farm operations rather than a generic CRUD dashboard. The core challenge was making data entry feel direct enough for everyday use while still preserving the detail needed for cycle-level reporting.

The interface prioritizes the operational loop: record activity, review current cycle health, check expenses, then export reports when a cycle closes.
