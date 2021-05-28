<template lang="html">
    <div class="search-form">
        <div
            v-if="parsedTabs.length"
            class="tabs"
        >
            <div
                v-for="(tab, index) in parsedTabs"
                :key="tab.title"
                :class="tab.classes"
                @click="activeTabIndex = index"
            >
                {{ tab.title }}
            </div>
        </div>

        <div class="box">
            <form
                name="searchHome"
                :action="actionUrl"
                @submit.prevent="doSearch"
            >
                <div class="input-container">
                    <icon-search 
                        class="icon" 
                        width="28" 
                        height="27"
                    />
                    <input
                        v-model="searchWords"
                        type="text"
                        placeholder="Search by keyword"
                    >
                </div>
            </form>

            <div class="divider" />

            <div
                v-if="linkItems.length || advancedSearchLink"
                class="links"
            >
                <div
                    v-if="linkItems.length"
                    class="regular-links"
                >
                    <template 
                        v-for="(link, i) in linkItems" 
                        class="link"
                    >
                        <a
                            :key="link.url"
                            :href="link.url"
                            :target="link.target"
                        >{{ link.text }}</a>
                        <div 
                            v-if="i !== linkItems.length - 1"
                            :key="i"
                            class="vertical-divider" 
                        />
                    </template>
                </div>
                <div
                    v-if="Object.keys(advancedSearchLink).length"
                    class="advanced-links"
                >
                    <a
                        :href="advancedSearchLink.url"
                        :target="advancedSearchLink.target"
                    >{{ advancedSearchLink.text }}</a>
                </div>
            </div>
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
        /**
         * List of links with the following properties: [{text, url, target}]
         */
        linkItems: {
            type: Array,
            default: () => [],
        },
        /**
         * An advanced search link in this format: {text, url, target}
         */
        advancedSearchLink: {
            type: Object,
            default() {
                return {}
            }
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
        /**
         * Replaces spaces with '+' for search words.
         */
        queryifySearchWords() {
            return this.searchWords.split(' ').join('+')
        },
    },
    methods: {
        async doSearch() {
            if (this.isSiteSearch) {
                this.$router.push({
                    path: this.actionUrl,
                    query: { [this.queryParam]: this.searchWords },
                })
            } else {
                window.location = `${this.actionUrl}?${this.queryParam}=${this.queryifySearchWords}`
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.search-form {
    .tabs {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;

        .tab {
            padding: 20px 25px;
            background-color: var(--color-lightest-blue);
            border: 1px solid transparent;
            border-radius: 4px 4px 0 0;

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
        
    }
    .box {
        background-color: var(--color-white);
        padding: 30px 50px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;

        .input-container {

            .icon {
                padding: 25px 40px 25px 32px;
                position: absolute;
                z-index: 10;
            }
            
            input {
                font-family: Karbon;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 100%;

                background-color: var(--color-lightest-blue);
                border-color: transparent;
                padding: 27px 95px;
                width: 100%;
                width: -moz-available;          /* WebKit-based browsers will ignore this. */
                width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
                width: fill-available;

                &::placeholder {
                    text-transform: uppercase;
                }
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

            .regular-links {
                display: flex;

                
                .link {
                    display: flex;

                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        border-right: unset;
                    }
                }

                .vertical-divider {
                    border-right: 2px solid var(--color-grey-02);
                    margin: 0 25px;
                }
            }

            .advanced-links {
                color: var(--color-primary-blue);
                margin-left: auto;
                text-transform: uppercase;
            }
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        .tabs {
            font-size: 13px;
        }

        .box {
            padding: 18px 24px;

            .input-container {

                .icon {
                    height: 21px;
                    padding: 18px 24px 18px 18px;
                    width: 22px;
                }

                input {
                    font-size: 15px;
                    padding: 20px 60px;
                }
            }

            .links {
                display: unset;
                font-size: 12px;
                
                .regular-links {
                    display: flex;
                    justify-content: space-between;
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
    }
}
</style>
