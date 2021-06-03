<template lang="html">
    <div class="search-generic">
        <div class="box">
            <form
                name="searchHome"
                :action="actionURL"
                @submit.prevent="doSearch"
            >
                <div class="input-container">
                    <icon-search class="icon" />
                    <input
                        v-model="searchWords"
                        type="text"
                        placeholder="Search by keyword"
                    >
                </div>
            </form>
            <hr class="divider">
        </div>
    </div>
</template>

<script>
import IconSearch from "~/assets/svg/icon-search"

export default {
    components: {
        IconSearch,
    },
    props: {
        actionURL: {
            type: String,
            required: true,
        },
        filters: {
            // Mock: api.pages
            type: Array, // array of objects that contain the filter objects
            default: () => [],
        },
        viewModes: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            searchWords: "",
        }
    },
    methods: {
        async doSearch() {
            this.$router.push({
                path: this.actionURL,
                query: { q: this.searchWords },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.search-generic {
    .box {
        // margin: 0 auto;
        padding: 30px 50px;
        background-color: var(--color-white);
        height: 70px;
        width: 890px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;
    }
    .input-container {
        .icon {
            padding: 25px 40px 25px 32px;
            position: absolute;
            z-index: 10;
            width: 28px;
            height: 27px;
        }

        input {
            font-size: 20px;
            line-height: 100%;
            background-color: var(--color-lightest-blue);
            border-color: transparent;
            padding: 27px 95px;

            width: -moz-available; /* WebKit-based browsers will ignore this. */
            width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
            width: fill-available;

            &::placeholder {
                text-transform: uppercase;
            }
        }
    }
    .divider {
        margin-top: 15px;
        height: 1px;
        border: none;
        background-color: var(--color-cyan-01);
    }
}
</style>
