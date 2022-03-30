<template lang="html">
    <ul class="section-staff-list">
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
            :consultation="item.consultation"
            class="block-staff-list-item"
        />
    </ul>
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
    gap: var(--space-m);

    max-width: $container-l-main + px;
    margin: 0 auto var(--space-3xl);

    @media #{$medium} {
        padding-left: var(--unit-gutter);
        padding-right: var(--unit-gutter);
    }
}
</style>
