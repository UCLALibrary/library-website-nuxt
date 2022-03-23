<template lang="html">
    <section class="section-staff-article-list">
        <div class="container">
            <div
                v-if="sectionTitle"
                class="section-title"
                v-html="sectionTitle"
            />
            <div

                class="block-staff-article-list"
            >
                <block-staff-article-list
                v-for="item in items"
                :key="item.to"
                    :image="item.image"
                    :to="item.to"
                    :category="item.category"
                    :title="item.title"
                    :date="item.date"
                    :authors="item.authors"
                    :description="item.description"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            //Array of BlockStaffArticleList objects [{image: image, to: to, category: category, title: title, date: date, authors: authors
            //description: description},...]
            type: Array,
            default: () => [],
        },
        sectionTitle: {
            type: String,
            default: "",
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.section-staff-article-list {
    max-width: 100%;
    margin: auto;

    .container {
        max-width: $container-l-main + px;
        margin: auto;

        > .block-staff-article-list:last-child .divider-general {
            display: none;
        }
    }

    .divider-wayfinder {
        width: 100%;
        padding-top: 100px;
        ::v-deep .dotted {
            border-bottom-color: var(--color-secondary-grey-03);
        }
    }

    .section-title {
        @include step-3;
        line-height: $line-height--1;
        text-transform: capitalize;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-xl);
    }
    .block-staff-article-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .block-staff-article-item {
            border-bottom: 2px dotted var(--color-secondary-grey-03);

            &:last-child {
                border-bottom: 0;
                padding: 0;
                margin: 0;
            }
        }
    }

    .divider-general {
        width: 100%;
    }
}

@media #{$medium} {
    .section-staff-article-list {
        padding: 0 var(--unit-gutter);
    }
}
</style>
