<template lang="html">
    <section>
        <block-call-to-action-two-up
            v-for="item in items"
            :key="item.title"
            class="two-up"
            :svg-name="item.icon"
            :title="item.title"
            :text="item.description"
            :name="item.buttonText"
            :to="item.buttonUrl"
            :is-dark="item.backgroundColor"
            :is-small-size="true"
        />
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    }
}
</script>
