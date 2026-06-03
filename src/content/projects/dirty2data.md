---
title: Dirty2Data
summary: A Laravel + Inertia + React data cleaning and analytics system for uploading, profiling, cleaning, analyzing, and visualizing datasets.
longDescription: Dirty2Data turns messy CSVs into trustworthy datasets. Users upload a file, the system profiles columns and surfaces quality issues, applies cleaning transformations with one-click recommendations and a full undo history, then drops the cleaned data into a dashboard builder with charts and exportable insights. The focus is on making the cleaning step feel safe and reversible.
highlights:
  - Dataset upload and profiling
  - Cleaning workflow with recommendations and undo
  - Analytics dashboards, visualizations, and insights
challenges:
  - Designing an undo/redo system that works across the cleaning pipeline without re-running expensive transforms
  - Surfacing data quality issues in a way non-technical users can act on
tags:
  - label: Laravel
    icon: tabler:brand-laravel
  - label: Inertia
    icon: tabler:brand-inertia
  - label: React
    icon: tabler:brand-react
  - label: TypeScript
    icon: tabler:brand-typescript
  - label: Tailwind
    icon: tabler:brand-tailwind
  - label: Data Analytics
    icon: tabler:chart-dots
stack:
  - label: Laravel
    group: backend
  - label: Inertia
    group: backend
  - label: React
    group: frontend
  - label: TypeScript
    group: frontend
  - label: Tailwind
    group: frontend
metrics:
  - value: CSV
    label: Upload pipeline
  - value: Undo
    label: Cleaning history
  - value: In dev
    label: Status
image: /images/projects/dirty2data/dashboard.webp
imageWidth: 1280
imageHeight: 725
gallery:
  - src: /images/projects/dirty2data/dashboard.webp
    alt: Dirty2Data dashboard
    caption: Cleaning workflow with profiling and recommendations
  - src: /images/projects/dirty2data/data-profile.png
    alt: Data profile view
    caption: Column-level profiling with quality issue flags
  - src: /images/projects/dirty2data/cleaning-engine.png
    alt: Cleaning engine
    caption: One-click cleaning transforms with full undo history
  - src: /images/projects/dirty2data/original-vs-cleaned.png
    alt: Original vs cleaned comparison
    caption: Side-by-side diff of raw and cleaned data
  - src: /images/projects/dirty2data/insight-generation.png
    alt: Insight generation
    caption: Auto-generated insights from cleaned datasets
  - src: /images/projects/dirty2data/visualize.png
    alt: Visualization builder
    caption: Dashboard builder with chart and export options
githubUrl: https://github.com/niks0501/dirty2data
liveDemoUrl: null
sourceOnly: true
featured: false
categories:
  - web-app
  - tool
  - data
year: '2025'
role: Solo build
status: in-progress
accent: oklch(0.585 0.233 277.117)
problem: 'Data cleaning is usually the most fragile part of analytics work, especially when users need to trust what changed between the raw file and the cleaned result.'
approach: 'I designed the workflow around profiling first, reversible transformations second, and visualization last so users can inspect quality issues before committing to a cleaned dataset.'
result: 'The project creates a safer analysis path: upload a CSV, understand the problems, clean with history, and move into dashboarding without losing traceability.'
---

Dirty2Data focuses on the trust layer between raw data and final insight. The key design decision was to avoid making cleaning feel like a black box.

Every transformation is intended to be visible, reversible, and connected to a measurable data-quality issue.
