<template lang="html">
    <div class="site-brand-bar">
        <a
            href="https://www.ucla.edu"
            target="_blank"
        >
            <svg-logo-ucla
                class="svg ucla-logo"
            />
            <span class="visually-hidden">UCLA Home</span>
        </a>
    </div>
</template>

<script>
import SvgLogoUcla from "~/node_modules/ucla-library-design-tokens/assets/svgs/logo-ucla"

export default {
    components: {
        SvgLogoUcla,
    },
}
</script>

<style lang="scss" scoped>
.site-brand-bar {
    height: 40px;
    background-color: var(--color-primary-blue-03);
    padding: 0 var(--unit-gutter);

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;

    .svg__logo-ucla {
        display: block;
        height: 16px;
        width: auto;
    }

    @media #{$medium} {
        height: 32px;
    }
}
</style>
