<template>
    <div class-"nav-breadcrumb">
        <span class="parent-page-title" />
        <arrow-left-small.svg>
            <span class="slug-page-title" />
        </arrow-left-small.svg>
    </div>
</template>

<script>
// SVGs
import SvgArrowRightSmall from "~/assets/svg/arrow-left-small"

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
        margin: 16px 0 0 0;
    }
    .slug-page-title {
        font-size: 20px;
    }
}
</style>
