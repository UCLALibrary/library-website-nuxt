<template lang="html">
    <div class="page page-resources-list">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.text"
        />

        <div
            v-if="resourceList"
            class="section"
        >
            <!-- <h4>allData: {{ allData }}</h4> -->

            <h2>externalResourceData: {{ externalResourceData }}</h2>

            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />

            <section-cards-with-illustrations
                class="section"
                :items="allData"
                :is-horizontal="true"
            />

            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />
        </div>

        <block-call-to-action
            class="block-call-to-action"
            :is-meap-global="true"
        />
    </div>
</template>
<script>
// GQL
import RESOURCE_LIST from "~/gql/queries/ResourceList"
import RESOURCE_EXTERNAL_LIST from "~/gql/queries/ResourceExternalList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(RESOURCE_LIST, {})
        const externalData = await $graphql.default.request(RESOURCE_EXTERNAL_LIST, {})
        // const allResources = [...data, ...externalData]
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
            externalResourceData: _get(externalData, "entries", {}),
            // allResources: _get(allResources, "entries", {}),
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
        // merge & sort data
        resourceList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/resources/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
        allData() {
            const allResources = [...this.page, ...this.externalResourceData]
            return allResources.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/resources/${obj.to}`,
                    // image: _get(obj, "image[0].image[0]", {}),
                }
            })
        }
        // alphbeticalData(a, b) {
        //     if ( a.last_nom < b.last_nom ){
        //         return -1;
        //     }
        //     if ( a.last_nom > b.last_nom ){
        //         return 1;
        //     }
        //     return 0;
        //     }
        // }
        // objs.sort( compare );
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
