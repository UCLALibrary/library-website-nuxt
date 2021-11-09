<template>
    <div class="section">
        <div class="simple-cards">
            <flexible-simple-card
                v-for="(item, index) in items"
                :key="index"
                :class="classes"
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
        //TODO fill in parsed title or text depedning on new content or content link,
        //change to be a case statement
        classes() {
            console.log(this.items.length)
            if (this.items.length == 4) {
                return ["card", "card-large"]
            } else if (this.items.length == 2) {
                return ["card", "card-large"]
            } else {
                return ["card"]
            }
        },
        // if length of items is equal to two or 4, set width to 100%
        // if length is equal to three or 6, set width to smaller
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

    // width: fit-content;
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

.card-large {
    width: 100%;
}
// .card-small {
//     // width: 300px;
// }
</style>
