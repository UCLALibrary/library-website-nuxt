<template lang="html">
    <main
        id="main"
        class="page page-ask-us"
    >
        <nav-breadcrumb
            to="/"
            title="Ask Us"
            parent-title="Home"
        />
        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.summary"
        />
        <!-- LibChat Widget -->
        <script src="https://ucla.libanswers.com/load_chat.php?hash=e6e621712e7b0ed0193f065d84d4e0c9" />

        <div
            id="libchat_e6e621712e7b0ed0193f065d84d4e0c9"
        />
        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.blocks.length > 0"
                color="help"
                class="divider-way-finder"
            />
        </section-wrapper>

        <!-- Flexible Page Blocks -->
        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// gql
import ASK_US from "~/gql/queries/AskUs"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ASK_US)
        return {
            page: _get(data, "entry", {}),
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
.page-ask-us {
    .banner-text {
        margin-bottom: var(--space-l);
    }

}
</style>
