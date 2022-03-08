<template>
    <div class-"nav-breadcrumb subtitle">
        {% for crumb in craft.navigation.breadcrumbs() %}
            {{ crumb.link }}
        {% endfor %}
        <span class="parent-page-title" />
        <arrow-left-small.svg class="arrow"/>
        <span class="slug-page-title" />
    </div>
</template>

<script>
// SVGs
import SvgArrowLeftSmall from "~/assets/svg/arrow-left-small"

export default {
    components: {
        SvgArrowLeftSmall
    },
    props: {
        parent-page-title: {
            type: String,
            default: "",
        },
        slug-page-title: {
            type: String,
            default: "",
        },
    }
}
</script>

<style>
.nav-breadcrumb {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    width:100%;
    top: 0;
    left: 0;
    .parent-page-title{
        @include step-1;
        color: var(--color-primary-blue-03);
    }
    .arrow {
        margin: 0 10px;
    }
    .slug-page-title {
        font-size: 20px;
        color: var(--color-black);
    }
}
</style>
