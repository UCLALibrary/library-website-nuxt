
<template>
    <div class="nav-breadcrumb subtitle">
        <nuxt-link
            :to="getUrl"
            class="parent-page-url"
            v-html="getParentPage"
        />
        <svg-icon-caret-left />
        <span
            class="current-page-title"
            v-html="title"
        />
    </div>
</template>

<script>
// SVGs
import SvgIconCaretLeft from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-caret-left"

// Helpers
import getParentPageTitle from "~/utils/getParentPageTitle"
import getParentPageUrl from "~/utils/getParentPageUrl"

export default {
    components: {
        SvgIconCaretLeft,
    },
    props: {
        to: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        }
    },
    computed: {
        getUrl() {
            return getParentPageUrl(this.$route.fullPath)
        },
        getParentPage() {
            return getParentPageTitle(this.$route.path)
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-breadcrumb {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    max-width: 990px;
    margin: var(--space-l) 0;
    padding: 0 var(--unit-gutter);

    @include step-1;
    color: var(--color-primary-blue-03);
    text-transform: capitalize;

    .svg__icon-caret-left {
        flex-shrink: 0;
    }
    .current-page-title {
        @include step-0;
        color: var(--color-black);
    }
}

// Hovers
@media #{$has-hover} {
    .parent-page-url:hover {
        @include link-hover;
    }
}
</style>
