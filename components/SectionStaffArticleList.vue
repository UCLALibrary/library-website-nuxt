<template lang="html">
    <section class="section-staff-article-list">
        <divider-way-finder
            color="about"
            class="divider-wayfinder"
        />
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
            <divider-general class="divider-general" />
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
    padding: 0 var(--unit-gutter);
    max-width: 990px;
    margin-left: auto;
    margin-right: auto;

    .divider-wayfinder {
        width: 100%;
        padding-top: 100px;
    }
    .section-title {
        font-size: 44px;
        line-height: 100%;
        text-transform: capitalize;
        color: var(--color-primary-blue);
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
