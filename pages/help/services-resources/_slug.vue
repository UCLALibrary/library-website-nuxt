<template lang="html">
    <section class="page-service-detail">
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="page.button.buttonText"
            :to="page.button.buttonUrl"
            :locations="page.locations"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage.image"
            :to="page.button.buttonUrl"
            :prompt="page.button.buttonText"
            :title="page.title"
            :category="page.type"
            :locations="page.locations"
            :text="page.text"
        />
        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />
        <h2 class="more-info">
            More Information
        </h2>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />
        <!-- TO DO write a computed property to parse associated content -->
        <!--section-cards
            v-if="page.resourceServiceWorkshop.length > 0"
            :items="
                page.resourceServiceWorkshop[0]
            "
            :title="page.helpTopic[0].title"
            :text="page.helpTopic[0].text"
            to="/help/services-resources"
        /-->
        <!-- Remove this once associated content computed property is ready -->
        <section-cards
            class="section-cards"
            :items="parsedItems"
            title="Get Help with"
            to="/help/foo/bar"
        />
        <block-call-to-action
            class="block-call-to-action"
            svg-name="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/"
            :is-dark="isDark"
            :is-small-size="isSmallSize"
        />
    </section>
</template>

<script>
// GQL
import SERVICE_OR_RESOURCE_DETAIL from "~/gql/queries/ServiceOrResourceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(
            SERVICE_OR_RESOURCE_DETAIL,
            {
                slug: params.slug,
            }
        )
        const items = [
            {
                iconName: "illustration-book-binding",
                to: "/help/foo/bar/",
                title: "Lacus Luctus",
                text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
            },
            {
                iconName: "illustration-find-space",
                to: "/help/foo/baz/",
                title: "Ultrices Enim",
                text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
            },
            {
                iconName: "illustration-digitized-resources",
                to: "/help/foo/fred/",
                title: "Egestas et Augue",
                text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
            },
            {
                iconName: "illustration-databases",
                to: "/about/foo/thud/",
                title: "Proin Sodales",
                text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
            },
            {
                iconName: "illustration-remote-access",
                to: "/visit/foo/qux/",
                title: "Taciti sociosqu",
                text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
            },
        ]
        return {
            page: _get(data, "entry", {}),
            items: items,
        }
    },
    computed: {
        parsedItems() {
            return [{ ...this.items[0] }, { ...this.items[1] }]
        },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .banner-text {
        max-width: 1440px;
    }
    .banner-header {
        margin-bottom: $layout-06 + px;
        padding: 0;
        max-width: 1440px;
    }
    .divider-way-finder {
        max-width: $content-width-05 + px;
        margin: $layout-07 + px auto;
    }
    .content {
        margin: var(--unit-gutter) auto;
        ::v-deep .pull-quote {
            margin: var(--unit-gutter) auto;
        }
        ::v-deep .simple-cards {
            margin: var(--unit-gutter) auto;
        }
        ::v-deep .divider-general {
            margin: var(--unit-gutter) auto;
            max-width: $content-width-05 + px;
        }
    }
    .section-cards {
        margin: $layout-07 + px auto;
    }
    .more-info {
        display: none;
    }
    .block-call-to-action {
        margin: $layout-07 + px auto;
    }
}
</style>
