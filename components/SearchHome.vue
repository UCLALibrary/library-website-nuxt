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
                @click="setActiveTab(index)"
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
                <input
                    v-model="searchWords"
                    type="text"
                    placeholder="Search by keyword"
                >
            </form>

            <div class="links">
                // TODO Loop linkItems here in nav element
                <br>
                // TODO nuxt-link for advancedSearchLink
            </div>
        </div>
    </div>
</template>

<script>
const tabs = [
    {
        title: "Search the Library Site",
        actionURL: "/search",
    },
    {
        title: "Search Materials",
        actionURL: "https://www.google.com/search",
    },
]

export default {
    props: {
        linkItems: {
            type: Array,
            default: () => [],
        },
        advancedSearchLink: {
            type: String,
            default: "",
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
    },
    methods: {
        async doSearch() {
            if (this.isSiteSearch) {
                this.$router.push({
                    path: this.actionUrl,
                    query: { q: this.searchWords },
                })
            } else {
                window.location = `${this.actionUrl}?site%3Alibrary.ucla.edu+${this.searchWords}`
            }
        },
        setActiveTab(clickedTabId) {
            this.activeTabIndex = clickedTabId
        },
    },
}
</script>

<style lang="scss" scoped>
.search-form {
    .tabs {
        height: 50px;
        max-width: 400px;
        background-color: white;
        opacity: 0.8;
        margin-left: auto;
        border-radius: 4px 4px 0 0;
        cursor: pointer;

        .is-active {
            font-weight: bold;
        }
    }
    .box {
        height: 220px;
        background-color: white;
    }

    // Breakpoints
    @media #{$lte-phone} {
        .box {
            height: 170px;
        }
    }
}
</style>
