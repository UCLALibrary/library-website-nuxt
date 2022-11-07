<template lang="html">
    <main class="page-service-detail">
        <!-- TODO create separate sectionpage component based on typehandle will either use serviceorresource or workshopseries component-->
        <nav-breadcrumb
            to="/help/services-resources"
            :title="page.title"
            parent-title="Services & Resources"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <section-wrapper
            v-if="page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :category="page.type"
                :title="page.title"
                :text="page.text"
                :to="parsedButtonTo"
                :prompt="parsedButtonText"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="help"
            />
        </section-wrapper>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />

        <section-wrapper theme="divider"
            v-if="parsedAssociatedTopics.length"
        >
            <divider-way-finder
                color="help"
            />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                v-if="parsedAssociatedTopics.length"
                class="section-cards"
                :items="parsedAssociatedTopics"
                section-title="Associated Topics"
                button-text="All Services and Resources"
                to="/help/services-resources"
            />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedTopics.length"
        >
            <divider-way-finder
                class="divider-way-finder"
                color="help"
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
// GQL
import SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL from "~/gql/queries/ServiceOrResourceOrWorkshopDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(
            SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL,
            {
                slug: params.slug,
            }
        )
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page:
                _get(data, "serviceOrResource", {}) ||
                _get(data, "workshopseries", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedAssociatedTopics() {
            if (!this.page.associatedTopics) return []
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : obj.uri,
                }
            })
        },
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .more-info {
        @include visually-hidden;
    }
    // .section-cards {
    //     margin: var(--space-3xl) auto;
    // }
    // .block-call-to-action {
    //     margin: var(--space-3xl) auto;
    // }
}
</style>
