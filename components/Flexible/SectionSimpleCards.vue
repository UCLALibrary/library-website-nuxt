<template>
    <div class="cards">
        <block-card-vertical
            v-for="item in items"
            :key="item.to"
            class="card"
            :icon-name="item.iconName"
            :to="item.to"
            :title="item.title"
            :text="item.text"
        />
    </div>
</template>

<script>
import _kebabCase from "lodash/kebabCase"

export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        cypressSelector() {
            return `section-cards-${_kebabCase(this.title) || "untitled"}`
        },
    },
}
</script>

<style lang="scss" scoped>
.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
}
.card {
    margin: 0 30px 0 0;
    width: 281px;

    &:nth-child(3n) {
        margin-right: 0;
    }
    &:nth-child(n + 4) {
        margin-top: 40px;
    }
}
</style>
