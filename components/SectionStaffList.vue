<template lang="html">
    <section class="section-staff-list">
        <block-staff-list
            v-for="item in items"
            :key="item.to"
            :image="item.image"
            :to="item.to"
            :staff-name="item.staffName"
            :job-title="item.jobTitle"
            :locations="item.locations"
            :email="item.email"
            :phone="item.phone"
            :departments="item.departments"
            class="block"
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
    },
}
</script>

<style lang="scss" scoped>
.section-staff-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    background-color: var(--color-white);
    // padding: 0 var(--unit-gutter);
    max-width: 990px;
    margin: 0 auto;

    .block {
        margin-bottom: 25px;
    }
}
</style>
