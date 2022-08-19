<template lang="html">
    <div class="page page-resources-list">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.text"
        />

        <divider-way-finder
            class="divider divider-first"
            color="resource"
        />

        <section-cards-with-illustrations
            :items="resourceList"
            :isHorizontal= "true"
        />

        <divider-way-finder
            class="divider divider-first"
            color="applicant"
        />

        <block-call-to-action
            class="section"
            svgName="search"
            title="Have further questions?"
            text="Get in touch"
            name="Contact us"
            to="https://google.com/map"
            :isDark=false
            :isSmallSize="isSmallSize"
        />
    </div>
</template>
<script>
// GQL
import RESOURCE_LIST from "~/gql/queries/ResourceList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(RESOURCE_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData
            ? this.summaryData.resourceListTitle
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        resourceList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
    }
}

</script>

<style lang="scss" scoped>
.page-resources-list {
    .section-header {
        margin-top: var(--space-3xl);
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: 0 auto;
        max-width: $container-l-main + px;
    }
    .content {
        margin: 0 auto;
    }

    .section-cards {
        margin: var(--space-3xl) auto;
    }

    @media #{$medium} {
        .content,
        .section-title {
            padding: 0 var(--unit-gutter);
        }
    }
    }
</style>
</template>