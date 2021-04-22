<template lang="html">
    <div class="masthead-primary">
        <div class="background" />
        <div class="logo">
            <svg-logo-ucla-library-underline class="svg" />
        </div>
        <div class="search-form">
            <!-- searchform goes here -->
        </div>
    </div>
</template>

<script>
import SvgLogoUclaLibraryUnderline from "~/assets/svg/logo-ucla-library-underline"
export default {
    components: {
        SvgLogoUclaLibraryUnderline,
    },
    props: {},
}
</script>

<style lang="scss" scoped>
.masthead-primary {
    position: relative;
    z-index: 0;
    .background {
        background-image: var(--gradient-01);
        height: 560px;
    }
    .logo {
        position: absolute;
        bottom: 275px;
        left: 0;
        max-width: 990px;
        margin: 0 auto;
        right: 0;
    }
    .svg {
        max-width: 100%;
        height: auto;
    }
    .search-form {
        height: 270px;
        max-width: 990px;
        background-color: white;
        margin: -220px auto 0 auto;
    }

    // Breakpoints
    @media #{$lte-phone} {
        .background {
            height: 230px;
        }
        .logo {
            bottom: 150px;
        }
        .svg {
            max-width: 325px;
            width: 100%;
            display: block;
            margin: 0 auto;
        }
        .search-form {
            margin-top: -50px;
            height: 170px;
        }
    }
}
</style>

