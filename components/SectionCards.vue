<template>
    <div class="section-cards">
        <div class="meta">
            <h3
                class="title"
                v-html="title"
            />
            <div
                class="text"
                v-html="text"
            />
        </div>
        <div class="cards">
            <block-card-vertical
                v-for="item in items"
                :key="item.to"
                class="vertical-card"
                :icon-name="item.iconName"
                :to="item.to"
                :title="item.title"
                :text="item.text"
            />
            <block-card-vertical
                class="vertical-card more-button"
                :to="to"
            >
                <button-more />
            </block-card-vertical>
        </div>
    </div>
</template>

<script>
export default {
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
            // The Array of Objects will look like this [{iconName: "", title: "", text: "", to: "", section: ""}]
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
    .meta {
        margin-bottom: 60px;
        padding-left: 25px;

        .title {
            margin-bottom: 24px;
            font-weight: 400;
            font-size: 44px;
            line-height: 100%;
            text-transform: capitalize;
            color: var(--color-primary-blue);
        }
        .text {
            max-width: 730px;
            font-size: 24px;
            line-height: 130%;
            letter-spacing: 0.01em;
            color: var(--color-black);
        }
    }
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;

        width: 100%; // DO WE NEED THIS?
        max-width: 960px;
        // TODO min-height?
        padding-left: 25px;

        .vertical-card {
            margin-bottom: 25px;
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .cards {
            flex-wrap: nowrap;

            .vertical-card {
                margin: 0 20px;
                min-width: 300px;
            }
        }
        .meta {
            .title {
                font-size: 40px;
            }
            .text {
                max-width: 600px;
                font-size: 22px;
            }
        }
    }
}
</style>
