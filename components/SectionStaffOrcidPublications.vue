<template lang="html">
    <section
        v-if="orcid || publications"
        class="section-staff-orcid-publications"
    >
        <h2 class="secondary-header">
            Publications
        </h2>
        <div
            v-if="orcid"
            class="orcid-key"
        >
            ORCID:
            <smart-link
                :to="orcid"
                class="orcid-value"
            >
                {{ orcid }}
            </smart-link>
        </div>
        <rich-text
            v-if="publications"
            class="publications"
            :rich-text-content="publications"
        />
    </section>
</template>

<script>
export default {
    props: {
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
    max-width: $container-l-main + px;
    margin: 0 auto;

    .secondary-header {
        margin-bottom: var(--space-l);
        @include step-3;
        color: var(--color-primary-blue-03);
    }

    .orcid-key {
        @include step-1;
        color: var(--color-primary-blue-03);

        .orcid-value {
            @include step-0;
            @include link-default;

            &:hover {
                @include link-hover;
            }
        }
    }

    .publications {
        padding-right: 0;
    }

    @media #{$has-hover} {
        .orcid-value:hover {
            @include link-hover;
        }
    }

    @media #{$medium} {
        margin-left: var(--unit-gutter);
        margin-right: var(--unit-gutter);
    }
}
</style>
