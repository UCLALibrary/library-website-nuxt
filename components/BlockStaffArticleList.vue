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
            <div class="byline">
                <div class="author-block">
                    <div
                        v-for="(author, index) in authors"
                        :key="index"
                        class="author"
                    >
                        {{ author }}
                    </div>
                </div>
                <div
                    class="date"
                    v-html="date"
                />
            </div>
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
        authors: {
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
    max-height: 300px;
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
        margin-top: 5px;
        margin-bottom: 16px;
        overflow: hidden;
    }
    .category {
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-secondary-black);
        font-weight: 500;
        padding-bottom: 16px;
    }
    .title {
        font-size: 26px;
        line-height: 130%;
        color: var(--color-primary-blue);
        font-weight: 500;
        padding-bottom: 16px;
    }
    .byline {
        padding-bottom: 24px;
        font-size: 18px;
        line-height: 140%;
        color: #434343;

        display: flex;
        flex-direction: row;
    }
    .author-block {
        display: flex;
        flex-direction: row;
    }
    .author {
        &:after {
            content: ",";
            padding-right: 5px;
        }
        &:last-child:after {
            content: "";
        }
    }
    .date {
        padding-left: 20px;
    }
    .description {
        font-size: 18px;
        line-height: 140%;
        color: var(--color-black);
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
