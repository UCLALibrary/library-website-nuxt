<template lang="html">
    <div class="help-topic-card">
        <section-cards-with-illustrations
            :items="parsedItems"
            title="Associated Topics"
            text="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
            to="/services-resources"
            button-text="All Services & Resources"
            :is-horizontal="false"
        />
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedItems() {
            let items = []
            for (let item in this.block.helpTopicCards) {
                items.push(this.block.helpTopicCards[item].contentLink[0])
            }
            return items
        },
    },
}
</script>

<style lang="scss" scoped>
.help-topic-card {
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
}
</style>
