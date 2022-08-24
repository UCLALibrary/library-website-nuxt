<template lang="html">
    <main class="page page-project-list">
        <masthead-secondary
            :title="summaryData.projectListTitle"
            :text="summaryData.projectListSummary"
        />

        <section-wrapper>
            <div class="section-header">
                <h2 class="section-title">
                    All Projects
                </h2>
            </div>
            <section-teaser-card :items="projectList" />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
            theme="divider"
        >
            <divider-way-finder color="help" />
        </section-wrapper>
        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
        >
            <section-cards-with-illustrations
                :items="parsedAssociatedTopics"
                title="Associated Topics"
                button-text="All Resources"
                to="/applicants/resources"
            />
        </section-wrapper>
        />
    </main>
</template>

<script>
// GQL
import PROJECT_LIST from "~/gql/queries/ProjectList"
// Helpers
import _get from "lodash/get"
export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(PROJECT_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData
            ? this.summaryData.projectListTitle
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        projectList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
        parsedAssociatedTopics() {
            return this.summaryData.featuredMeapResourcesListing.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : obj.uri,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-project-list {
    .section-header {
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }
}
</style>
