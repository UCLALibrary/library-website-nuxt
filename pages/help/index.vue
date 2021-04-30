<template lang="html">
    <div class="page page-help">
        Help page goes here.
    </div>
</template>

<script>
export default {
    components: {},
    async asyncData() {
        //const data = await this.$graphql(QUERY);

        return {
            page: {},
        }
    },
}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
