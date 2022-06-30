<template>
    <div id="app">
        <h1>Hello I'm consuming the component library</h1>
        <!--Hello /-->
        <!--test-vue-component-rollup-sfc-sample /-->
        <ucla-library-website-component-sample />
        <br>
        <!--divider-general-test /-->
        <divider-general />
        <br>
        <button-link
            label="Egest perl Conub"
            to="/help/more"
        />
        <br>
        <br>
        <divider-general />
        <br>
        <divider-general :is-bold="true" />
        <br>
        <alphabetical-browse-by />
        <br>
        <smart-link to="/">
            This will render as a vue-router link
        </smart-link>
        <br>
        <br>
        <search-home
            :link-items="parsedLinkItems"
            :advanced-search-link="parsedAdvancedSearchLink"
        />
        <br>
        <br>
        <heading-arrow
            text="Featured "
            to="/visit/"
        />
        <!-- <banner-text
            category="Featured"
            title="New Exhibition"
            text="This is a New Exhibition"
            button-text="See More"
            to="/visit/exhibition"
        />
        <banner-header
            :image="bannerHeaderData.image"
            :to="bannerHeaderData.to"
            :title="bannerHeaderData.title"
            :category="bannerHeaderData.category"
            :start-date="bannerHeaderData.startDate"
            :end-date="bannerHeaderData.endDate"
            :prompt="bannerHeaderData.prompt"
        />
        <banner-featured
            :image="bannerFeaturedData.image"
            :to="bannerFeaturedData.to"
            :title="bannerFeaturedData.title"
            :category="bannerFeaturedData.category"
            :breadcrumb="bannerFeaturedData.breadcrumb"
            :start-date="bannerFeaturedData.startDate"
            :end-date="bannerFeaturedData.endDate"
            :prompt="bannerFeaturedData.prompt"
        /> -->
        <!--block-call-to-action
            svg-name="svg-call-to-action-chat"
            title="test block call to action"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/help/foo"
            is-dark="false"
            is-small-size="false"
        /-->
    </div>
</template>
<script>
export default {
    name: "Home",
    computed: {
        parsedLinkItems() {
            return [
                {
                    text: "Course Reserves",
                    url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                    target: "_blank",
                },
                {
                    text: "UCLA Research Guides",
                    url: "https://guides.library.ucla.edu/",
                    target: "",
                },
                {
                    text: "Databases A-Z",
                    url: "https://guides.library.ucla.edu/az.php",
                    target: "_blank",
                },
            ]
        },
        parsedAdvancedSearchLink() {
            return {
                text: "Advanced Search",
                url: "https://www.library.ucla.edu/search",
                target: "_blank",
            }
        },
    }
}
</script>
