<template lang="html">
    <section class="section-staff-orcid-publications">
        <divider-way-finder
            class="divider divider-first"
            color="about"
        />
        <div
            v-if="sectionTitle"
            class="section-title"
            v-html="sectionTitle"
        />
        <div
            v-if="orcid"
            class="orcid"
            v-html="orcid"
        />
        <div
            v-if="publications"
            class="publications"
            v-html="publications"
        />
        <divider-way-finder
            class="divider divider-first"
            color="about"
        />
    </section>
</template>

<script>
export default {
    props: {
        sectionTitle: {
            type: String,
            default: "",
            required: true,
        },
        orcid: {
            type: String,
            default: "",
        },
        publications: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.section-staff-orcid-publications {
    max-width: 100%;
    margin: auto;

    .section-title {
        @include step-3;
        text-transform: capitalize;
        color: var(--color-primary-blue-03);
        padding-top: 100px;
        padding-bottom: 10px;
    }


    @media #{$has-hover} {
        .orcid-value:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-default-cyan-03);
            text-decoration-thickness: 1.5px;
        }
    }
}
</style>
