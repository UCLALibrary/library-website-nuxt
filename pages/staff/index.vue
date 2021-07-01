<template>
    <div class="page page-staff">
        <!-- staff page here -->
        {{ page }}
    </div>
</template>

<script>
import STAFF_LIST from "~/gql/queries/StaffList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(STAFF_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-staff {
}
</style>
