<template lang="html">
    <header class="header-smart">
        <site-brand-bar />
        <component
            :is="whichHeader"
            :class="isMobile ? 'mobile-header' : 'desktop-header'"
            :primary-nav="primaryMenuItems"
            :secondary-nav="secondaryMenuItems"
        />
    </header>
</template>

<script>
export default {
    computed: {
        primaryMenuItems() {
            return this.$store.state.header.primary
        },
        secondaryMenuItems() {
            return this.$store.state.header.secondary
        },
        isMobile() {
            return this.$store.state.winWidth <= 1024 ? true : false
        },
        whichHeader() {
            return this.isMobile ? "header-main-responsive" : "header-main"
        },
    },
}
</script>

<style lang="scss" scoped>
.mobile-header {
    top: 0;
    right: 0;
    z-index: 400;
    position: relative;
}

.desktop-header {
    top: 0;
    left: 0;
}
</style>
