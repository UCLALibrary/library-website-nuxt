<template lang="html">
    <div class="site-brand-bar">
        <a
            href="https://www.ucla.edu"
            target="_blank"
        >
            <svg-logo-ucla
                class="svg ucla-logo"
                alt="UCLA logo"
            />
        </a>
    </div>
</template>

<script>
import SvgLogoUcla from "~/assets/svg/logo-ucla"

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
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

    .ucla-logo {
        height: 16px;
        width: auto;
        path {
            fill: var(--color-white);
        }
    }
}
</style>
