<template>
    <main class="page page-policies">
        <masthead-secondary
            :title="summaryData.libraryPoliciesListTitle"
            :text="summaryData.libraryPoliciesListSummary"
        />

        <section-wrapper
            v-if="page.entries"
            class="section"
        >
            <ul class="policies">
                <li
                    v-for="(item, index) in parsedPolicies"
                    :key="`impact-${index}`"
                >
                    <nuxt-link :to="item.to">
                        {{ item.title }}
                    </nuxt-link>
                </li>
            </ul>
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import POLICIES_LIST from "~/gql/queries/PoliciesList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(POLICIES_LIST, {
            uri: params.path,
        })

        return {
            page: _get(data, "entries", {}),
            summaryData: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedPolicies() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/about/policies/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-policies {
    .policies {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }
}
</style>
