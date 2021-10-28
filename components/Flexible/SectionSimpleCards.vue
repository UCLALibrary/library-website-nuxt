<template>
    <div class="section">
        <div class="simple-cards">
            <flexible-simple-card
                v-for="(item, index) in items"
                :key="index"
                class="card"
                :to="item.to"
                :title="item.title"
                :text="item.text"
            />
        </div>
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
    computed: {
        //TODO fill in parsed title or text depedning on new content or content link
    },
}
</script>

<style lang="scss" scoped>
.section {
    max-width: 960px;
    height: 100%;
    background-color: pink;
}
.simple-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    width: fit-content;
    // block-size: fit-content;
}

.card {
    margin: 5px 16px 0 0;
    // width: auto;
    flex-grow: 1;

    // &:nth-child(3n) {
    //     margin-right: 0;
    // }
    // &:nth-child(n + 4) {
    //     margin-top: 40px;
    // }
}
</style>
