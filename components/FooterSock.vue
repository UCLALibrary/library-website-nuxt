<template lang="html">
    <footer class="footer-sock">
        <div class="container">
            <ul class="links">
                <li v-for="item in items">
                    <smart-link
                        class="underline-link"
                        :to="item.to"
                        :target="item.target"
                        v-html="item.text"
                    />
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
        items: {
            // Mock: api.links
            type: Array,
            default: () => [],
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
.footer-sock {
    background-color: var(--color-white);
    height: 89px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .container {
        max-width: 1080;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;

        .links {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;

            li {
                list-style-type: none;
                padding-right: 48px;
                &:last-child {
                    padding-right: none;
                }
            }
            a {
                color: var(--color-black);
                text-decoration: none;
            }
        }

        .regents {
            padding-left: 100px;
        }

        .underline-link {
            border-bottom: 2px solid var(--color-cyan-01);
            display: inline-block;
            line-height: 1.25;
            &:hover {
                color: var(--color-primary-blue);
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .underline-link:hover {
                color: var(--color-primary-blue);
            }
        }
    }

    @media #{$lte-tablet} {
        height: auto;
        display: block;
        background-color: var(--color-white);

        .container {
            display: block;

            .links {
                display: block;
                padding-top: 30px;

                li {
                    display: block;
                    line-height: 2em;
                    list-style-type: none;
                    padding-left: 37px;
                }
            }

            .regents {
                display: block;
                padding-right: 0px;
                padding-left: 37px;
                margin-top: 50px;
                padding-bottom: 49px;
            }
        }
    }
}
</style>
