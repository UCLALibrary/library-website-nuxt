<template lang="html">
    <div class="search-home">
        <div
            v-if="parsedTabs.length"
            class="tabs"
        >
            <div
                v-for="(tab, index) in parsedTabs"
                :key="tab.title"
                :class="tab.classes"
                @click="setActiveTab(index)"
                v-text="tab.title"
            />
        </div>

        <div class="box">
            <form
                name="searchHome"
                :action="actionUrl"
                @submit.prevent="doSearch"
            >
                <div class="input-container">
                    <icon-search class="icon" />
                    <input
                        v-model="searchWords"
                        type="text"
                        class="input-search"
                        placeholder="Search by keyword"
                    >
                </div>
            </form>

            <div class="divider" />

            <nav
                v-if="linkItems.length || advancedSearchLink"
                class="links"
            >
                <div
                    v-if="linkItems.length"
                    class="regular-links"
                >
                    <a
                        v-for="link in linkItems"
                        :key="link.url"
                        class="link"
                        :href="link.url"
                        :target="link.target"
                        v-text="link.text"
                    />
                </div>
                <div
                    v-if="advancedSearchLink"
                    class="advanced-links"
                >
                    <a
                        :href="advancedSearchLink.url"
                        :target="advancedSearchLink.target"
                        v-text="advancedSearchLink.text"
                    />
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import IconSearch from "~/assets/svg/icon-search"

const tabs = [
    {
        title: "Search the Library Site",
        actionURL: "/search",
        queryParam: "q",
    },
    {
        title: "Search Materials",
        actionURL: "https://www.google.com/search",
        queryParam: "q",
    },
]

export default {
    components: {
        IconSearch,
    },
    props: {
        // List of links with the following properties: [{text, url, target}]
        linkItems: {
            type: Array,
            default: () => [],
        },
        // An advanced search link in this format: {text, url, target}
        advancedSearchLink: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            searchWords: "",
            activeTabIndex: 1,
        }
    },
    computed: {
        parsedTabs() {
            return tabs.map((obj, index) => {
                let classes = "tab"
                if (index === this.activeTabIndex) {
                    classes = "tab is-active"
                }
                return {
                    ...obj,
                    classes,
                }
            })
        },
        isMaterialsSearch() {
            return this.activeTabIndex === 1
        },
        isSiteSearch() {
            return this.activeTabIndex === 0
        },
        actionUrl() {
            return tabs[this.activeTabIndex].actionURL
        },
        queryParam() {
            return tabs[this.activeTabIndex].queryParam
        },
        queryifySearchWords() {
            // Replaces spaces with '+' for search words.
            return this.searchWords.split(" ").join("+")
        },
    },
    methods: {
        doSearch() {
            if (this.isSiteSearch) {
                this.$router.push({
                    path: this.actionUrl,
                    query: { [this.queryParam]: this.searchWords },
                })
            } else {
                window.location = `${this.actionUrl}?${this.queryParam}=${this.queryifySearchWords}`
            }
        },
        setActiveTab(index) {
            this.activeTabIndex = index
        },
    },
}
</script>

<style lang="scss" scoped>
.search-home {
    .tabs {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
    .tab {
        padding: 20px 25px;
        background-color: var(--color-lightest-blue);
        border: 1px solid transparent;
        border-radius: var(--rounded-slightly-top);
        transition: background-color 400ms ease-in-out;

        &.is-active {
            background-color: var(--color-white);
            margin-right: 0;
        }

        &:not(.is-active) {
            margin: 0 4px 4px 4px;
        }

        &:last-child {
            margin-right: 0;
        }
    }
    .box {
        background-color: var(--color-white);
        padding: 30px 50px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;
    }
    .input-container {
        position: relative;
    }
    .icon {
        padding: 25px 40px 25px 32px;
        position: absolute;
        z-index: 10;
        height: 27px;
        width: auto;
    }

    .input-search {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;

        background-color: var(--color-lightest-blue);
        border-color: transparent;
        padding: 27px 37px 27px 95px;
        width: 100%;
        box-sizing: border-box;

        &::placeholder {
            text-transform: uppercase;
        }
    }

    .divider {
        margin-top: 15px;
        border-bottom: 2px solid var(--color-cyan-01);
        height: 1px;
    }

    .links {
        display: flex;
        margin: 25px 0;
    }
    .regular-links {
        display: flex;

        .link {
            display: flex;

            &:after {
                content: "";
                border-right: 2px solid #efefef;
                margin: 0 25px;
            }
            &:last-child:after {
                display: none;
            }
        }
    }
    .advanced-links {
        color: var(--color-primary-blue);
        margin-left: auto;
        text-transform: uppercase;
    }

    // Breakpoints
    @media #{$lte-phone} {
        .tabs {
            font-size: 13px;
        }
        .box {
            padding: 18px 24px;
        }
        .input-container {
            .icon {
                height: 21px;
                padding: 18px 24px 18px 18px;
                width: 22px;
            }
            .input-search {
                font-size: 15px;
                padding: 20px 60px;
            }
        }

        .links {
            display: unset;
            font-size: 12px;
        }
        .regular-links {
            margin-top: 20px;

            .vertical-divider {
                margin: 0 4px;
            }
        }
        .advanced-links {
            margin-top: 30px;
        }
    }
}
</style>
