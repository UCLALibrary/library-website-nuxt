<template lang="html">
    <div class="page page-home">
        Home page goes here.
    </div>
</template>

<script>
// import * as MOCK_API from "~/stories/mock-api.json"

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
.page-home {
}
</style>
