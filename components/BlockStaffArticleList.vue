<template lang="html">
    <div class="block-staff-article-list">
        <responsive-image
            :image="image"
            :aspect-ratio="60"
            class="image"
        />
        <div class="meta">
            <div
                class="category"
                v-html="category"
            />
            <div
                class="title"
                v-html="title"
            />
            <div
                class="author"
                v-html="author"
            />
            <div
                class="date"
                v-html="date"
            />
            <div
                class="description"
                v-html="description"
            />
        </div>
    </div>
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
        author: {
            type: Array,
            default: () => [],
        },
        date: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-article-list {
    max-width: 990px;
    max-height: 274px;
    background-color: var(--color-secondary-grey-01);

    display: flex;
    flex-direction: row;

    .image {
        width: 456px;
        max-height: 274px;
        margin-right: 56px;
    }
    .meta {
        width: 412px;
        max-height: 222px;
        margin-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
    }
    .category {
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-secondary-black);
        font-weight: 500;
    }
    .title {
        font-size: 26px;
        line-height: 130%;
        color: var(--color-primary-blue);
        font-weight: 500;
    }
    .author,
    .date {
        font-size: 18px;
        line-height: 140%;
        color: #434343;
    }
    .description {
        font-size: 18px;
        line-height: 140%;
        color: var(--color-black);
    }
}

// Breakpoints
@media #{$lte-tablet} {
    .block-staff-article-list {
        max-width: 95%;
        padding-left: 5px;
        padding-right: 5px;
    }
}

@media #{$lte-phone} {
    .block-staff-article-list {
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
        .meta {
            max-width: 100%;
        }
    }
}
</style>
