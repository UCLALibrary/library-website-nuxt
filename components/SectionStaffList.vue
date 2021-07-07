<template lang="html">
    <section class="section-staff-list">
        <div
            v-for="item in items"
            :key="item.to"
            class="meta"
        >
            <block-staff-list
                :image="item.image"
                :to="item.to"
                :staff-name="item.staffName"
                :job-title="item.jobTitle"
                :locations="item.locations"
                :email="item.email"
                :phone="item.phone"
                :department="item.department"
                class="block"
            />
        </div>
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
    background-color: var(--color-white);
    // padding: 0 var(--unit-gutter);
    max-width: 990px;
    margin-left: auto;
    margin-right: auto;

    .meta {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .block {
        margin-bottom: 25px;
    }
}
</style>
