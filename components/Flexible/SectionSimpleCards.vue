<template>
    <div class="cards">
        <simple-card
            v-for="item in items"
            :key="item.to"
            class="card"
            :to="item.to"
            :title="item.title"
            :text="item.text"
        />
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
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

    max-width: 928px;
}
.card {
    margin: 0 16px 0 0;

    // &:nth-child(3n) {
    //     margin-right: 0;
    // }
    // &:nth-child(n + 4) {
    //     margin-top: 40px;
    // }
}
</style>
