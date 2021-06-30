<template lang="html">
    <section class="block-staff-detail">
        <responsive-image
            :image="item.image"
            :aspect-ratio="60"
            class="image"
        />
        <div
            class="meta"
            v-bind="item"
            view="detail"
        />
    </section>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: "",
        },
        staffName: {
            type: String,
            default: "",
        },
        jobTitle: {
            type: String,
            default: "",
        },
        location: {
            type: Array,
            default: () => [],
        },
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        department: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-detail {
    max-width: 990px;
    max-height: 274px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;

    .image {
        width: 456px;
        max-height: 274px;
        margin-right: 56px;
    }
    .block-staff {
        width: 412px;
        max-height: 222px;
        margin-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
    }

    /deep/ {
        .block-staff-meta {
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}

// Breakpoints
@media #{$lte-tablet} {
    .block-staff-detail {
        max-width: 95%;
        padding-left: 5px;
        padding-right: 5px;
    }
}

@media #{$lte-phone} {
    .block-staff-detail {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        max-height: 550px;
        max-width: 100%;
        padding-left: 5px;
        padding-right: 5px;

        .image {
            max-width: 100%;
        }
        .block-staff {
            max-width: 100%;
        }
    }
}
</style>
