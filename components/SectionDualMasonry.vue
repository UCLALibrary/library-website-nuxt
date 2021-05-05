<template lang="html">
    <section class="section-dual-masonry">
        <div class="col1">
            <div class="left-gap">
                <brick-top
                    :category="items[0].category"
                    :title="items[0].title"
                    :prompt="items[0].prompt"
                    :dates="items[0].dates"
                    :to="items[0].to"
                />
            </div>

            <nuxt-link
                :to="to"
                :class="classes"
            >
                <responsive-image
                    :image="items[0].image"
                    class="image"
                />
            </nuxt-link>
        </div>

        <div class="col2">
            <nuxt-link
                :to="to"
                class="right-gap"
            >
                <responsive-image
                    :image="items[0].image"
                    class="image"
                />
            </nuxt-link>

            <div class="meta">
                <brick-bottom
                    :category="items[0].category"
                    :title="items[0].title"
                    :prompt="items[0].prompt"
                    :dates="items[0].dates"
                    :to="items[0].to"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            // Mock as: [{image:{}, category: "", title: ", prompt: "", dates: "", to: ""}, {...}]
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.section-dual-masonry {
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .left-gap {
        margin-bottom: 18px;
    }
    .right-gap {
        margin-bottom: 18px;
    }
    .col1 {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-right: 18px;
    }
    .col2 {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .masonry {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 0;
        grid-gap: 25px;
    }
    .image {
        height: 640px;
        width: 640px;
    }
    .button-more {
        justify-content: center;
        flex-direction: row;
    }
    // Breakpoints
    @media #{$lte-phone} {
        width: 50%;
    }
}
</style>
