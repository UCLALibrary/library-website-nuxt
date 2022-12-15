<template>
    <main
        id="main"
        class="page page-news"
    >
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
// HELPERS
import _get from "lodash/get"
import format from "date-fns/format"
import removeTags from "~/utils/removeTags"

// GQL
import IMPACT_REPORTS_LIST from "~/gql/queries/ImpactReportsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(IMPACT_REPORTS_LIST)

        return {
            page: data,
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
        }
    },
    computed: {
        entryCount() {
            return `${this.page.entryCount}`
        },

        parsedNewsList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        },

        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
        },
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
