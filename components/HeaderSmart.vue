<template lang="html">
    <component
        :is="whichHeader"
        :class="isMobile ? 'mobile-header' : 'desktop-header'"
    />
</template>

<script>
export default {
    computed: {
        isMobile() {
            return this.$store.state.winWidth <= 1200 ? true : false
        },
        whichHeader() {
            console.log(this.$store.state.winWidth)
            return this.isMobile ? "header-main-responsive" : "header-main"
        },
    },
}
</script>

<style lang="scss" scoped>
.mobile-header {
    top: 0;
    right: 0;
}

.desktop-header {
    top: 0;
    left: 0;
}
</style>
