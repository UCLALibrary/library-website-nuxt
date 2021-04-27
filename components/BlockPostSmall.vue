<template lang="html">
    <nuxt-link :to="category.to">
        <div :class="classes">
            <responsive-image
                :image="image"
                class="block-post-image"
            />
            <div class="block-post-text">
                <div class="block-post-category">
                    {{ category.name }}
                </div>
                <div class="block-post-title">
                    {{ title }}
                </div>
                <div class="block-post-author">
                    By {{ author }}
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

export default {
    props: {
        image: {
            // Mock: api.page
            type: Object,
            default: () => {},
        },
        category: {
            // Mock: {name, to}
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            default: "",
        },
        author: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["block-post-small", `color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.block-post-small {
    display: flex;
    align-items: center;
    position: absolute;

    width: 320px;
    height: 150px;
}

.color-visit {
    @media #{$has-hover} {
        &:hover {
            background-color: var(--color-fushia-03);
        }
    }
}
.color-help {
    @media #{$has-hover} {
        &:hover {
            background-color: var(--color-green-03);
        }
    }
}
.color-about {
    @media #{$has-hover} {
        &:hover {
            background-color: var(--color-purple-03);
        }
    }
}

.block-post-text {
    display: flex;
    width: 180px;
    flex-direction: column;
    padding-left: 24px;
}

.block-post-category {
    font-weight: bold;
    font-size: 14.6705px;
    line-height: 100%;
    /* identical to box height, or 15px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-dark-blue);
}
.block-post-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: var(--color-primary-blue);
    margin-top: 20px;
}

.block-post-author {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #434343;
    margin-top: 15px;
}

.block-post-image {
    height: 100px;
    width: 100px;
}
</style>
