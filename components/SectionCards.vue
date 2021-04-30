<template>
    <div class="section-cards">
        <div class="meta">
            <h3 class="title" v-html="title" />
            <div class="text" v-html="text" />
        </div>
        <div class="cards">
            <block-card-vertical
                v-for="item in items"
                :key="item.to"
                :iconName="item.iconName"
                :to="item.to"
                :title="item.title"
                :text="item.text"
            />
        </div>
    </div>
</template>

<script>
import BlockCardVertical from "./BlockCardVertical.vue"

export default
    components: { BlockCardVertical },{
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        items: {
            // the Array of Objects will look like this [{iconName: "", title: "", text: "", to: "", section: ""}]
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "", // (see more link)
        },
    },
}
</script>

<style lang="scss" scoped>
.section-cards {
}
</style>
