<template lang="html">
    <section class="section-dual-masonry">
        <div class="background" />

        <div
            ref="masonry"
            class="masonry"
        >
            <div class="meta masonry-item">
                <div class="masonry-content">
                    <p class="category">
                        DATA {{ items[0].category }}
                    </p>
                    <h2 class="title">
                        {{ items[0].title }}
                    </h2>
                    <h3 class="dates">
                        {{ items[0].dates }}
                    </h3>
                    <button class="button">
                        Visit Exhibit 1
                    </button>
                </div>
            </div>

            <div class="meta masonry-item">
                <!-- <nuxt-link>
                    <responsive-image image="items[0].image" />
                </nuxt-link> -->
                <p class="category">
                    DATA {{ items[0].category }}
                </p>
                <h2 class="title">
                    {{ items[0].title }}
                </h2>
                <h3 class="dates">
                    {{ items[0].dates }}
                </h3>
                <button class="button">
                    Visit Exhibit 2
                </button>
            </div>

            <div class="meta masonry-item">
                <p class="category">
                    DATA {{ items[0].category }}
                </p>
                <h2 class="title">
                    {{ items[0].title }}
                </h2>
                <h3 class="dates">
                    {{ items[0].dates }}
                </h3>
                <button class="button">
                    Visit Exhibit 3
                </button>
            </div>

            <div class="meta masonry-item">
                <!-- <nuxt-link>
                    <responsive-image image="items[0].image" />
                </nuxt-link> -->
                <p class="category">
                    DATA {{ items[0].category }}
                </p>
                <h2 class="title">
                    {{ items[0].title }}
                </h2>
                <h3 class="dates">
                    {{ items[0].dates }}
                </h3>
                <button class="button">
                    Visit Exhibit 4
                </button>
            </div>
        </div>

        <nuxt-link :to="to">
            <svg-see-more />
        </nuxt-link>
    </section>
</template>

<script>
import resizeMasonryItem from "~/utils/masonrySizing"

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
    mounted() {
        // console.log(this.$refs)
        const allItems = this.$refs.masonry.getElementsByClassName(
            "masonry-item"
        )
        // console.log(resizeAllMasonryItems)
        // resizeAllMasonryItems(allItems)
        resizeMasonryItem(allItems[0])
        resizeMasonryItem(allItems[1])
        resizeMasonryItem(allItems[2])
        resizeMasonryItem(allItems[4])
    },
}
</script>

<style lang="scss" scoped>
.section-dual-masonry {
    .masonry {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        /* Adjust columns according to the available viewport */
        grid-auto-rows: 0;
    }
    .masonry-item {
    }
    // https://w3bits.com/css-grid-masonry/
    // R - row
    // G - gap
    // H- height
    // H1 - H + G
    // T = G + R
    // S - span
    // S = H1 / T
    .meta {
        color: var(--color-white);
        font-family: Karbon;
        height: var(--unit-height);
        background-color: var(--color-primary-blue);
        background: url(~/assets/svg/molecule-background.svg?url) center -100px,
            var(--gradient-03);
        background-size: cover;

        .meta-title {
            font-weight: bold;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 0.01em;
        }
        .category {
            color: var(--color-yellow-03);
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .title {
        }
        .dates {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
        }
        .button {
            border: 1px solid var(--color-primary-light-blue);
            background-color: var(--color-primary-blue);
            padding: 16px 40px;
            color: var(--color-white);
        }
    }
    // Breakpoints
    //@media #{$lte-phone} {

    //}
}
</style>
