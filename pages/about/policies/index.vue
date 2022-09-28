<template>
    <main class="page page-policies">
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
// GQL
import POLICIES_LIST from "~/gql/queries/PoliciesList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(POLICIES_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedPolicies() {
            return this.page.entries.map((obj) => {
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
