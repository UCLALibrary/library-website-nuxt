<template lang="html">
    <nav class="nav-primary">
        <nuxt-link to="/">
            <svg-logo-ucla-library-blue
                class="svg ucla-library-logo"
                alt="UCLA Library logo blue"
            />
        </nuxt-link>

        <ul class="menu">
            <li
                v-for="item in items"
                class="menu-item"
            >
                <span
                    v-if="item.url == ''"
                    v-html="item.name"
                />

                <ul
                    v-if="item.url == ''"
                    class="submenu"
                >
                    <li
                        v-for="link in item.items"
                        class="submenu-item"
                    >
                        <smart-link
                            class="link underline-hover"
                            :to="link.to"
                            :target="link.target"
                            v-html="link.text"
                        />
                    </li>
                </ul>
            </li>
        </ul>
        <smart-link
            v-for="item in items"
            v-if="item.url != ''"
            class="link underline-hover"
            :to="item.url"
            target="_blank"
            v-html="item.name"
        />
    </nav>
</template>

<script>
import SvgLogoUclaLibraryBlue from "~/assets/svg/logo-ucla-library-blue"
export default {
    components: {
        SvgLogoUclaLibraryBlue,
    },
    props: {
        items: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-primary {
    padding: 0 var(--unit-gutter);
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .menu {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .logo-ucla-library {
            height: 67px;
            width: auto;
        }

        .menu-item {
            list-style-type: none;
            padding-right: 10px;
        }
    }
    @media #{$has-hover} {
        .menu:hover .submenu {
            background-color: var(--color-primary-blue);
            display: block;
        }
        .menu-item:hover {
            text-decoration: underline;
            text-decoration-color: yellow;
        }
    }
    .submenu {
        flex: 1 1 auto;
        display: none;
        position: absolute;
        top: 50px;
        max-width: 350px;
        height: 100px;
        color: var(--color-white);

        .submenu-item {
            list-style-type: none;
            margin: 10px 0;
            padding: 0 10px;
        }
    }
}
</style>
