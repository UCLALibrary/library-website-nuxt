<template lang="html">
    <main
        id="main"
        class="page page-careers"
    >
        <nav-breadcrumb
            to="/about"
            title="Careers"
            parent-title="About"
        />

        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :email="page.email"
            :phone="page.phoneNumber"
        />

        <!-- <h3>{{ page }}</h3>
        <hr> -->
        <h3>jobs ---- {{ jobs }}</h3>
        <hr>
        <h3>associatedTopics ---- {{ associatedTopics }}</h3>

        <!-- <block-highlight
            :image="associatedTopics.image"
            :to="associatedTopics.to"
            :category="associatedTopics.category"
            :title="associatedTopics.title"
            :start-date="startDate"
            :end-date="endDate"
            :text="text"
            :has-triangle="true"
            :is-vertical="true"
            :image-aspect-ratio="60"
            :locations="locations"
        /> -->

        <section-wrapper>
            <search-result
                :title="jobs[0].title"
                :summary="jobs[0].summary"
                :to="jobs[0].to"
            />
            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                :items="associatedTopics"
                section-title="Associated Topics"
                section-summary="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
                to="/help/foo/bar"
                :is-horizontal="false"
                button-text="See More"
            />
            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import JOBS_LIST from "~/gql/queries/JobOpportunitiesList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(JOBS_LIST)
        return {
            page: _get(data, "entry", {}),
            associatedTopics: _get(data, "entry.associatedTopics", {}),
            jobs: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.page
            ? this.page.title
            : "... loading"
        return {
            title: title,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-careers {
}
</style>
