<template lang="html">
    <section class="brick-top">
        <div class="molecule-top" />

        <div class="text-bottom">
            <div class="text">
                <p class="category">
                    {{ category }}
                </p>
                <h2 class="title">
                    {{ title }}
                </h2>
                <h3 class="dates">
                    {{ dates }}
                </h3>
                <button class="button">
                    {{ prompt }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        dates: {
            type: String,
            default: "",
        },
        prompt: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.brick-top {
    position: relative;
    z-index: 0px;
    background-color: var(--color-primary-blue);
    color: var(--color-white);
    font-family: var(--font-primary);
    width: 640px;
    height: 880px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .molecule-top {
        height: 400px;
        width: 640px;
        position: absolute;
        top: 0;
        z-index: 10px;
        background: url(~/assets/svg/molecule-background-pink-top.svg?url)
            center -10px;
        background-size: cover;
        background-position: top;
    }

    .text-bottom {
        position: absolute;
        bottom: 0;
        margin-left: var(--unit-height);
        width: 464px;
        height: 440px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .category {
            color: var(--color-yellow-03);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .title {
            font-weight: bold;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 0.01em;
            font-family: Karbon;
            font-weight: 500;
            text-align: left;
            margin-bottom: 25px;
        }
        .dates {
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 140%;
            font-family: var(--font-primary);
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            text-align: left;
            margin-bottom: 40px;
        }
        .button {
            border: 1px solid var(--color-primary-light-blue);
            background-color: var(--color-primary-blue);
            padding: 16px 40px;
            color: var(--color-fushia-03);
            font-family: var(--font-secondary);
            font-size: 18px;
            font-weight: 400;
            line-height: 18px;

            &:hover {
                color: var(--color-white);
            }
        }
    }
}
</style>
