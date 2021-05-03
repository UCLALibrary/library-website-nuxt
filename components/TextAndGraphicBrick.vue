<template lang="html">
    <section class="text-and-graphic-brick">
        <div class="background" />

        <div class="brick">
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
.text-and-graphic-brick {
    .brick {
        color: var(--color-white);
        font-family: Karbon;
        height: var(--unit-height);
        background-color: var(--color-primary-blue);
        background: url(~/assets/svg/molecule-background-pink-top.svg?url)
            center -100px;
        background-size: cover;

        .category {
            color: var(--color-yellow-03);
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .title {
            font-weight: bold;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 0.01em;
        }
        .dates {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
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
