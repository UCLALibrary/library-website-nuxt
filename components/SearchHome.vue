<template lang="html">
    <div class="search-form">
        <div
            v-if="tabs.length"
            class="tabs"
        >
            <div 
                v-for="(tab, index) in tabs"
                :key="tab.id"
                :ref="tab.id"
                :class="`tab${index === activeTabIndex ? ' active' : ''}`"
                @click="setActiveTab(tab.id)"
            >
                {{ tab.title }}
            </div>
        </div>
        <div class="box">
            <form 
                name="searchHome"
                :action="tabs[activeTabIndex].actionURL"
                @submit="doSearch(searchWords)"
                @submit.prevent
            >
                <input
                    v-model="searchWords" 
                    type="text" 
                    :placeholder="tabs[activeTabIndex].actionURL"
                >
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            searchWords: '',
            activeTabIndex: 1,
            tabs: [
                {
                    id: 'searchLibrarySite',
                    title: 'Search the Library Site',
                    actionURL: 'https://yahoo.com/',
                },
                {
                    id: 'searchMaterials',
                    title: 'Search Materials',
                    actionURL: 'https://duckduckgo.com/',
                },
            ]
        }
    },
    methods: {
        doSearch(searchWords) {
            this.$emit('search', searchWords)
        },
        setActiveTab(clickedTabId) {
            this.activeTabIndex = this.tabs.findIndex(
                tab => tab.id === clickedTabId
            )
            this.$emit('activeTabSet', clickedTabId)
        }
    }
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

        .tab.active {
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
