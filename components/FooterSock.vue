<template lang="html">
    <footer class="footer-sock">
        <div class="container">
            <ul class="links">
                <li
                    v-for="item in sockItems"
                    :key="item.id"
                    class="item"
                >
                    <smart-link
                        class="link"
                        :to="item.to"
                        :target="item.target"
                    >
                        {{ item.name }}
                    </smart-link>
                </li>
            </ul>

            <div class="regents">
                &#169;{{ year }} Regents of the University of California
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        sockItems: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        year() {
            console.log(this.$store.state.footerSock)
            const current_year = new Date().getFullYear()
            return current_year
        },
    },
}
</script>

<style lang="scss" scoped>
.footer-sock {
    background-color: var(--color-white);
    padding: 0 var(--unit-gutter);

    .container {
        max-width: var(--unit-content-width);
        min-height: 89px;
        margin: auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        align-items: stretch;

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
        .item {
            margin-right: 48px;
        }
        .link {
            border-bottom: 2px solid var(--color-default-cyan-03);
            display: inline-block;
            line-height: 1.25;
            color: var(--color-black);
        }
        .regents {
            color: var(--color-secondary-grey-04);
            margin: 15px 0;
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .link:hover {
                color: var(--color-primary-blue-03);
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        padding: var(--unit-gutter);

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
            }
        }
    }
}
</style>
