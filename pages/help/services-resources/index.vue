<template lang="html">
    <div class="page page-help">
        <nuxt-link
            v-for="item in parsedServiceAndResourceList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
    </div>
</template>

<script>
// gql
import SERVICE_AND_RESOURCE_LIST from "~/gql/queries/ServiceAndResourceList"

export default {
    async asyncData({ $graphql, params }) {
        console.log("live preview enters staff list")
        const data = await $graphql.default.request(SERVICE_AND_RESOURCE_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedServiceAndResourceList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/help/services-resources/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
