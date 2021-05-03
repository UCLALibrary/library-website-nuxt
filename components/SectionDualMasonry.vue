<template lang="html">
    <section class="masonry-item">
        <div class="molecule" />
        <div class="meta">
            <p class="category">
                {{ items[0].category }}
            </p>
            <h2 class="title">
                {{ items[0].title }}
            </h2>
            <h3 class="dates">
                {{ items[0].dates }}
            </h3>
            <button class="button">
                Visit Exhibit
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            // Mock as: [{image:{}, category: "", title: ", prompt: "", dates: "", to: ""}, {...}]
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.masonry-item {
    position: absolute;
    width: 640px;
    background-color: var(--color-primary-blue);
    z-index: 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: stretch;
    align-items: flex-start;

    .molecule {
        position: relative;
        z-index: 10;
        width: 640px;
        height: 440px;
        color: var(--color-white);
        font-family: Karbon;
        background: url(~/assets/svg/molecule-background.svg?url) center 0px;
        background-size: cover;
    }
    .meta {
        margin: 0 88px 100px;
        color: var(--color-white);
        height: 440px;
        .title {
            font-weight: 600;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 0.01em;
            text-align: left;
            margin-top: 50px;
        }
        .category {
            color: var(--color-yellow-03);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            font-weight: 600;
        }
        .dates {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            margin: 50px 0;
        }
        .button {
            border: 1px solid var(--color-primary-light-blue);
            background-color: var(--color-primary-blue);
            padding: 16px 40px;
            color: var(--color-white);
        }
    }
    // Breakpoints
    //@media #{$lte-phone} {

    //}
}
</style>
