<template lang="html">
    <section class="page-project-detail">
        <nav-breadcrumb
            :title="page.title"
            class="nav-breadcrumb"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
        />

        <divider-way-finder
            class="divider-way-finder"
            color="help"
        />
        <div class="content">
            <div
                class="about-the-project"
                v-html="`About the Project`"
            />

            <div
                class="title-general"
                v-html="page.titleGeneral"
            />

            <div
                v-if="page.projectType"
                class="project-type"
                v-html="page.projectType"
            />

            <rich-text
                v-if="page.projectDescription"
                :rich-text-content="page.projectDescription"
                class="project-description"
            />

            <rich-text
                v-if="page.citation"
                :rich-text-content="page.citation"
                class="citation"
            />

            <divider-general
                v-if="page.projectContributors && page.projectDescription"
                class="divider-general"
            />

            <div
                v-if="page.projectContributorsSubheading"
                class="contributors-subheading"
                v-html="page.projectContributorsSubheading"
            />

            <rich-text
                v-if="page.projectContributors"
                class="contributors-content"
                :rich-text-content="page.projectContributors"
            />

            <div
                v-if="page.institutionSubheading"
                class="institution-subheading"
                v-html="page.institutionSubheading"
            />

            <rich-text
                v-if="page.institution"
                class="institution-content"
                :rich-text-content="page.institution"
            />
        </div>

        <divider-way-finder
            class="divider-way-finder"
            color="help"
        />

        <flexible-blocks
            v-if="page.blocks.length"
            class="content"
            :blocks="page.blocks"
        />

        <divider-way-finder
            v-if="page.blocks.length"
            class="divider-way-finder"
            color="help"
        />

        <!-- TO DO replace with content from meap -->
        <block-call-to-action
            class="block-call-to-action"
            :is-global="true"
        />
    </section>
</template>

<script>
// GQL
import PROJECT_DETAIL from "~/gql/queries/ProjectDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(PROJECT_DETAIL, {
            slug: params.slug,
        })
        console.log(data)
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedButtonText() {
            return _get(this.page, "meapProjectCallToAction[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "meapProjectCallToAction[0].externalUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-project-detail {
    .nav-breadcrumb {
        max-width: $container-xl-full-width + px;
    }

    .banner-text {
        --color-theme: var(--color-help-green-03);
    }

    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }

    .banner-text + .divider-way-finder {
        margin: 0 auto var(--space-2xl);
    }

    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }

    .divider-general {
        max-width: $container-l-main + px;
        margin: var(--space-2xl) auto;
    }

    .content {
        margin: 0 auto;
    }
    
    .about-the-project {
        @include step-3;
        color: var(--color-primary-blue-03);
        max-width: $container-l-main + px;
        margin: 0 auto var(--space-xl);
    }

    .title-general {
        @include step-1;
        color: var(--color-secondary-grey-05);
        max-width: $container-l-main + px;
        margin: 0 auto 12px;
    }

    .project-type {
        @include step-0;
        font-weight: $font-weight-medium;
        // color: var(--color-secondary-grey-05);
        color: var(--color-primary-blue-03);
        text-transform: capitalize;
        max-width: $container-l-main + px;
        margin: 0 auto var(--space-m);
    }

    .project-description {
    }

    .citation {
        margin-top: var(--space-m);
        :deep p {
            // @include step-1;
            color: var(--color-secondary-grey-04);
        }
    }

    .contributors-subheading, .institution-subheading {
        @include step-1;
        max-width: $container-l-main + px;
        margin: 0 auto var(--space-m);
        color: var(--color-secondary-grey-05);
    }

    .contributors-content, .institution-content {
        margin-bottom: var(--space-xl);
    }

    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }

    @media #{$medium} {
        .content {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
