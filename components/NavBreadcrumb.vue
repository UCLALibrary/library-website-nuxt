<template>
    <div class="nav-breadcrumb subtitle">
        <!-- {% for crumb in craft.navigation.breadcrumbs() %}
            {{ crumb.link }}
        {% endfor %} -->
        <div class="parent-page-title">
            Parent
            <svg-chevron-left class="svg-chevron-left" />
            <span class="slug-page-title">Slug</span>
        </div>
    </div>
</template>

<script>
// SVGs
import SvgChevronLeft from "~/assets/svg/chevron-left"

export default {
    components: {
        SvgChevronLeft,
    },
    props: {
        parentPageTitle: {
            type: String,
            default: "",
        },
        slugPageTitle: {
            type: String,
            default: "",
        },
    }
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
