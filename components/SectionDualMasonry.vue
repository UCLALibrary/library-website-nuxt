<template lang="html">
    <section class="section-dual-masonry">
        <div class="background" />

        <div
            ref="masonry"
            class="masonry"
        >
            <div
                class="text"
                style="grid-row-end: span 20"
            >
                <p class="category">
                    {{ items[0].category }}
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

            <div
                class="meta masonry-item"
                style="grid-row-end: span 15"
            >
                <!-- <nuxt-link>
                    <responsive-image image="items[0].image" />
                </nuxt-link> -->
                <p class="category">
                    {{ items[0].category }}
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

            <div
                class="text"
                style="grid-row-end: span 20"
            >
                <p class="category">
                    {{ items[0].category }}
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

            <div
                class="meta masonry-item"
                style="grid-row-end: span 15"
            >
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
    position: relative;
    z-index: 0px;
    background-color: var(--color-primary-blue);
    color: var(--color-white);
    font-family: var(--font-primary);
    width: 640px;
    height: 880px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .masonry {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 0;
    }
    .text-block-bottom {
        position: absolute;
        bottom: 0;

        .text {
            margin-left: var(--unit-height);
            width: 464px;
            height: 440px;

            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;

            .category {
                color: var(--color-yellow-03);
                letter-spacing: 0.06em;
                text-transform: uppercase;
                margin-bottom: 30px;
                font-weight: 500;
            }
            .title {
                font-weight: bold;
                font-size: 40px;
                line-height: 44px;
                letter-spacing: 0.01em;
                font-family: Karbon;
                font-weight: 500;
                text-align: left;
                margin-bottom: 25px;
            }
            .dates {
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 140%;
                font-family: var(--font-primary);
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px;
                text-align: left;
                margin-bottom: 40px;
            }
            .button {
                border: 1px solid var(--color-primary-light-blue);
                background-color: var(--color-primary-blue);
                padding: 16px 40px;
                color: var(--color-fushia-03);
                font-family: var(--font-secondary);
                font-size: 18px;
                font-weight: 400;
                line-height: 18px;

                &:hover {
                    color: var(--color-white);
                }
            }
        }
    }

    // Variants
    .molecule-top {
        height: 400px;
        width: 640px;
        position: absolute;
        top: 0;
        z-index: 10px;
        background: url(~/assets/svg/molecule-background-pink-top.svg?url)
            center -10px;
        background-size: cover;
        background-position: top;
    }

    .text-block-top {
        position: absolute;
        top: 0;

        .text {
            margin-left: var(--unit-height);
            width: 464px;
            height: 440px;

            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: flex-start;

            .category {
                color: var(--color-yellow-03);
                letter-spacing: 0.06em;
                text-transform: uppercase;
                // margin-top: 85px;
                margin-bottom: 30px;
                font-weight: 500;
            }
            .title {
                font-weight: bold;
                font-size: 40px;
                line-height: 44px;
                letter-spacing: 0.01em;
                font-family: var(--font-primary);
                font-weight: 500;
                text-align: left;
                margin-bottom: 25px;
            }
            .dates {
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 140%;
                font-family: var(--font-primary);
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px;
                text-align: left;
                margin-bottom: 40px;
            }
            .button {
                border: 1px solid var(--color-primary-light-blue);
                background-color: var(--color-primary-blue);
                padding: 16px 40px;
                color: var(--color-fushia-03);
                font-family: var(--font-secondary);
                font-size: 18px;
                font-weight: 400;
                line-height: 18px;

                &:hover {
                    color: var(--color-white);
                }
            }
        }
    }

    .molecule-bottom {
        height: 400px;
        width: 640px;
        position: absolute;
        bottom: 0;
        z-index: 10px;
        background: url(~/assets/svg/molecule-background.svg?url) center 100px;
        background-size: cover;
        background-position: bottom;
    }
}

// <style lang="scss" scoped>
// .section-dual-masonry {
//     .masonry {
//         display: grid;
//         grid-gap: 1em;
//         grid-template-columns: 1fr 1fr;
//         grid-auto-rows: 0;
//     }
//     .meta {
//         color: var(--color-white);
//         font-family: Karbon;
//         height: var(--unit-height);
//         background-color: var(--color-primary-blue);
//         background: url(~/assets/svg/molecule-background.svg?url) center -100px,
//             var(--gradient-03);
//         background-size: cover;

//         .meta-title {
//             font-weight: bold;
//             font-size: 40px;
//             line-height: 44px;
//             letter-spacing: 0.01em;
//         }
//         .category {
//             color: var(--color-yellow-03);
//             letter-spacing: 0.06em;
//             text-transform: uppercase;
//         }
//         .title {
//         }
//         .dates {
//             font-style: normal;
//             font-weight: 600;
//             font-size: 20px;
//             line-height: 140%;
//         }
//         .button {
//             border: 1px solid var(--color-primary-light-blue);
//             background-color: var(--color-primary-blue);
//             padding: 16px 40px;
//             color: var(--color-white);
//         }
//     }
//     // Breakpoints
//     //@media #{$lte-phone} {

//     //}
// }
//
</style>
