<template lang="html">
    <section class="section-staff-article-list">
        <div class="container">
            <div
                v-if="sectionTitle"
                class="section-title"
                v-html="sectionTitle"
            />
            <div
                v-for="item in items"
                :key="item.to"
                class="meta"
            >
                <block-staff-article-list
                    :image="item.image"
                    :to="item.to"
                    :category="item.category"
                    :title="item.title"
                    :date="item.date"
                    :authors="item.authors"
                    :description="item.description"
                    class="block"
                />
                <divider-general
                    :is-bold="true"
                    class="divider-general"
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
    background-color: var(--color-secondary-grey-01);
    max-width: 100%;
    margin: auto;

    .container {
        max-width: $container-l-main + px;
        padding: 0 var(--unit-gutter) 46px;
        margin: auto;

        > .meta:last-child .divider-general {
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
        text-transform: capitalize;
        color: var(--color-primary-blue-03);
        padding-top: 100px;
        padding-bottom: 10px;
    }
    .meta {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .block {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .divider-general {
        width: 100%;
    }
}
</style>
