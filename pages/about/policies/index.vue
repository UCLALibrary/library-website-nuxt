<template>
    <main class="page page-news">
        <h2>{{ page }}</h2>
        <ul>
            <li
                v-for="(item, index) in page.entries"
                :key="`impact-${index}`"
            >
                <nuxt-link :to="`/${item.to}`">
                    {{ item.title }}
                </nuxt-link>
            </li>
        </ul>
    </main>
</template>

<script>
// Helpers
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

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
}
</script>

<style lang="scss" scoped>
.page-news {
    padding-left: 50px;

    .entry-count {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin: var(--space-m);
    }

    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .all-news-heading {
        @include step-1;
        color: var(--color-primary-blue-03);
    }

    .news-item-link {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }
}
</style>
