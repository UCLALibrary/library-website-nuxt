<template>
    <main class="page-collection-detail">
        <nav-breadcrumb
            to="/collection"
            :title="page.title"
            parent-title="Collections"
        />
        <h3>{{ page }}</h3>
    </main>
</template>
<!-- nav-breadcrumb
banner-text (if hero image does not exists)
section-wrapper (if hero image exists)
banner-header
section-wrapper
divider-way-finder
section-wrapper (section-title="Using the Collection")
rich-text
section-wrapper
divider-way-finder
flexible-blocks
section-wrapper (if not empty, section-title="Services & Resources")
simple-cards
section-wrapper (if there are simple cards and endowments or staff)
divider-way-finder
section-wrapper (if not empty, section-title="Collection Endowments")
section-teaser-card
section-wrapper (if there are endowments and staff)
divider-way-finder
section-wrapper (if not empty, section-title="Contact a Subject Specialist")
section-staff-list -->