<template lang="html">
    <div class="page page-exhibits">
        exhibits components go here

        <section-list v-if="pageType" />
        <section-calender v-if="isCalenderView" />
    </div>
</template>

<script>
export default {
    async asyncData() {},
    data() {
        return {
            pageType: "list",
        }
    },
    computed: {
        isListView() {
            return this.pageType == "list"
        },
        isCalenderView() {
            return this.pageType == "calender"
        },
    },
}
</script>

<style lang="scss" scoped>
.page-exhibits {
}
</style>
