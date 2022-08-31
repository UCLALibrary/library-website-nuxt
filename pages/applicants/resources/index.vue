<template lang="html">
    <main
        id="main"
        class="page page-resources-list"
    >
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.text"
        />

        <section-wrapper
            v-if="resourceList"
            class="section"
        >
            <section-cards-with-illustrations
                class="section"
                :items="sortedData"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper
            v-if="resourceList"
            class="section"
        >
            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-meap-global="true"
            />
        </section-wrapper>
    </main>
</template>
<router>
  {
    alias: '/applicants',
  }
</router>
<script>
// Helpers
import sortByTitle from "~/utils/sortByTitle"

// GQL
import RESOURCE_LIST from "~/gql/queries/ResourceList"
import RESOURCE_EXTERNAL_LIST from "~/gql/queries/ResourceExternalList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(RESOURCE_LIST, {})
        const externalData = await $graphql.default.request(
            RESOURCE_EXTERNAL_LIST,
            {}
        )
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
            externalResourceData: _get(externalData, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData ? this.summaryData.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        resourceList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/resources/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
        // merge external & internal meap resource entries
        allData() {
            const allResources = [...this.page, ...this.externalResourceData]
            return allResources.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        sortedData() {
            return this.allData.sort(sortByTitle)
        },
    },
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
