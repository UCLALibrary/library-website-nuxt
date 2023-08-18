<template>
    <main
        id="main"
        class="page page-news"
    >
        <nav-breadcrumb
            to="/about"
            :title="page.entry.title"
            parent-title="About Us"
        />
        <banner-text
            :title="page.entry.title"
            :text="page.entry.summary"
            button-text="View this year's report"
            :to="parsedReportsList[0].to"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list :items="parsedReportsList" />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import fixUri from "~/utils/fixUri"
import removeTags from "~/utils/removeTags"

// GQL
import REPORTS_LIST from "~/gql/queries/ReportsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(REPORTS_LIST)

        return {
            page: data,
        }
    },
    head() {
        let title = this.page ? this.page.entry.title : "... loading"
        let metaDescription = removeTags(this.page.entry.summary)

        return {
            title: title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: metaDescription,
                },
            ],
        }
    },
    computed: {
        parsedReportsList() {
            return this.page.entries.map((obj) => {
                return {
                    to: fixUri(_get(obj, "to", null)),
                    image: _get(obj, "image[0]", null),
                    title: _get(obj, "title", "hi"),
                    description: _get(obj, "richText", null),
                }
            })
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
