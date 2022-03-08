<template>
    <div class="nav-breadcrumb subtitle">
        <div class="parent-page-title">
            {{ getUrl }}
            <svg-chevron-left class="svg-chevron-left" />
            <span class="slug-page-title">{{ getSlug }}</span>
        </div>
    </div>
</template>

<script>
// SVGs
import SvgChevronLeft from "~/assets/svg/chevron-left"

// Helpers
import getParentPageTitle from "~/utils/getParentPageTitle"

export default {
    components: {
        SvgChevronLeft,
    },
    props: {
        slugPageTitle: {
            type: String,
            default: "",
        },
    },
    computed: {
        getUrl() {
            return getParentPageTitle(this.$route.path)
        },
        getSlug() {
            return this.$route.params.slug
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

    max-width: 990px;
    height: 80px;
    margin: 30px 0;
    padding: 0 var(--unit-gutter);

    .parent-page-title {
        @include step-1;
        color: var(--color-primary-blue-03);
        text-transform: capitalize;
    }
    .svg-chevron-left {
        flex-shrink: 0;
        position: relative;
        top: 7px;
        stroke: var(--color-primary-blue-03);
    }
    .slug-page-title {
        font-size: 20px;
        color: var(--color-black);
    }
}
</style>
