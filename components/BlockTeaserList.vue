<template lang="html">
    <section class="block-teaser-list">
        <responsive-image
            :image="image"
            :aspect-ratio="60"
            class="image"
        />
        <block-teaser-meta
            :image="image"
            :to="to"
            :category="category"
            :title="title"
            :date="date"
            :time="time"
            :text="text"
            view="list"
            class="block-teaser"
        />
    </section>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "",
        },
        time: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-teaser-list {
    max-width: 990px;
    max-height: 274px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;

    .image {
        width: 456px;
        max-height: 274px;
        margin-right: 56px;
    }
    .block-teaser {
        width: 412px;
        max-height: 222px;
        margin-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
    }

    /deep/ {
        .block-teaser-meta {
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}

// Breakpoints
@media #{$medium} {
    .block-teaser-list {
        max-width: 95%;
        padding-left: 5px;
        padding-right: 5px;
    }
}

@media #{$small} {
    .block-teaser-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        max-height: 550px;
        max-width: 100%;
        padding-left: 5px;
        padding-right: 5px;

        .image {
            max-width: 100%;
        }
        .block-teaser {
            max-width: 100%;
        }
    }
}
</style>
