<template lang="html">
    <div class="block-staff-article-item">
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
            <nuxt-link
                class="title"
                :to="to"
                v-html="title"
            />

            <div class="byline">
                <div
                    v-for="author in authors"
                    v-if="authors"
                    :key="author.id"
                    class="author"
                    v-html="author.title"
                />
                <div
                    v-if="date"
                    class="date"
                    v-html="parsedDate"
                />
            </div>

            <!-- TODO strip html tags coming out of WYSIWYG -->
            <div
                v-if="description"
                class="description"
                v-html="description"
            />
        </div>
    </div>
</template>

<script>
import format from "date-fns/format"
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
    computed: {
        parsedDate() {
            return format(new Date(this.date), "MMMM d, Y")
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-article-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    width: 100%;

    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-xl);

    .image {
        width: 50%;
        margin-right: var(--space-xl);
    }

    .meta {
        width: calc(50% - var(--space-xl));
    }

    .category {
        @include overline;
        color: var(--color-secondary-grey-05);
        padding-bottom: var(--space-s);
    }
    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: 4px;
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .byline {
        @include step--1;
        margin-bottom: var(--space-m);
        color: #434343;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .author {
        &:after {
            content: ",";
            padding-right: 5px;
        }
        &:nth-last-child(2):after {
            content: "";
        }
    }
    .date {
        padding-left: 20px;
    }
    .description {
        @include step--1;
        color: var(--color-black);
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
// Hovers
@media #{$has-hover} {
    .title:hover {
        @include link-hover;
    }
}

// Breakpoints
@media #{$small} {
    .block-staff-article-item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .image {
            width: 100%;
            margin-right: 0;
            margin-bottom: var(--space-l);
        }
        .meta {
            width: 100%;

            > *:last-child {
                padding-bottom: 0;
            }
        }
    }
}
</style>
