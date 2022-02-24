<template lang="html">
    <div class="card-with-image">
        <block-highlight
            v-for="item in parsedContent"
            :key="item.contentLink[0].to"
            :to="item.contentLink[0].to"
            :image="item.image[0]"
            :category="item.contentLink[0].category"
            :title="item.contentLink[0].title"
            :text="item.text"
            :is-vertical="true"
            image-aspect-ratio="60"
            class="block"
        />
        <!--  :locations="item.contentLink[0].associatedLocations" -->
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        // Determines whether content link or new content is used for text
        parsedContent() {
            return this.block.cardWithImage.map((obj) => {
                return {
                    ...obj,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.card-with-image {
    max-width: 960px;
    padding: 0 calc(var(--unit-gutter) - 16px);
    background-color: var(--color-white);
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        margin: 0 8px 50px 8px;
    }

    // Breakpoints
    @media #{$small} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}
</style>
