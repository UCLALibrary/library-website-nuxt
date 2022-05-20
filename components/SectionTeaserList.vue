<template lang="html">
    <section class="section-teaser-list">
        <div
            v-for="item in items"
            :key="item.to"
            class="meta"
        >
            <block-highlight
                :image="item.image"
                :to="item.to"
                :category="item.category"
                :title="item.title"
                :start-date="item.startDate"
                :end-date="item.endDate"
                :text="item.text"
                :locations="item.locations"
                class="block"
            />
            <divider-general class="divider" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            //Array of objects {image, to, category, title, dates, times, text}
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-list {
    background-color: var(--color-white);
    // padding: 0 var(--unit-gutter);
    max-width: $container-l-main + px;

    .meta {
        // display: flex;
        // flex-direction: column;
        // flex-wrap: nowrap;
        // justify-content: center;
        // align-content: center;
        // align-items: center;
    }

    .block {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .divider {
        width: 100%;
    }

    .meta:last-child {
        .divider {
            display: none;
        }
    }
}
</style>
