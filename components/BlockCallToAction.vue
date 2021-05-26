<template lang="html">
    <footer class="block-call-to-action">
        <div class="container">
            <svg-call-to-action1 class="svg" />
            <h3
                class="title"
                v-html="title"
            />
            <div
                class="text"
                v-html="text"
            />
            <button-link
                class="button"
                label="Ask a Librarian"
            />
        </div>
    </footer>
</template>

<script>
import SvgCallToAction1 from "~/assets/svg/call-to-action1"
import SvgCallToAction3 from "~/assets/svg/call-to-action3"
export default {
    components: {
        SvgCallToAction1,
        SvgCallToAction3,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
    },
    computed: {
        year() {
            const current_year = new Date().getFullYear()
            return current_year
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    background-color: var(--color-white);

    .container {
        background-color: var(--color-lightest-blue);
        max-width: var(--unit-content-width);
        min-height: 468px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;

        .svg {
            padding-top: 60px;
        }
        .title {
            position: static;
            max-width: 630px;
            min-height: 40px;

            font-family: Karbon;
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 100%;
            text-align: center;
            letter-spacing: 0.01em;
            padding-top: 20px;
            color: var(--color-primary-blue);
        }

        .text {
            position: static;
            max-width: 638px;
            min-height: 50px;
            left: 0px;
            top: 0px;

            font-family: Karbon;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;

            text-align: center;
            letter-spacing: 0.02em;
            padding: 16px 0 46px 0;
            color: var(--color-dark-blue);
        }

        .links {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;

            list-style-type: none;
            margin: 15px 0;
        }
        .button {
            width: 199px;
            height: 50px;
            background: #0b6ab7;
            padding: 0;

            font-family: Proxima Nova;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 100%;
            color: var(--color-white);
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .link:hover {
                color: var(--color-primary-blue);
            }
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        padding-top: 40px;
        padding-bottom: 40px;

        .container {
            display: block;

            .links {
                display: block;
                margin: 0;
            }
            .item {
                display: block;
                line-height: 2em;
            }

            .regents {
                display: block;
                margin: 50px 0 0 0;
            }
        }
    }
}
</style>
