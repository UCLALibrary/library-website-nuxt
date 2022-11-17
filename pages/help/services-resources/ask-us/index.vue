<template lang="html">
    <main
        id="main"
        class="page page-ask-us"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />

        <!-- LibCal Widget -->
        <!-- <div id="libchat_5a44dfe7cc29aaee5bba635ab13fa753" /> -->

        <section-wrapper theme="divider">
            <divider-way-finder color="help" />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
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

}
</style>
