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
        <heading-arrow
            text="Featured "
            to="/visit/"
        />
        <banner-text
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
        />
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
        bannerHeaderData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/help/foo/bar/",
                title: "Curabitur Tortor Pellentesque Nibh Aenean",
                category: "Lectus",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                byline: ["Cursus Quis"],
                locations: [
                    {
                        id: "523",
                        title: "Powell Library",
                        to: "visit/locations/powell-library",
                    },
                    {
                        id: "3062",
                        title: "Online",
                        to: "visit/locations/online",
                    },
                ],
                prompt: "Cursus Quis",
                alignRight: true,
            }
        },
        bannerFeaturedData() {
            return {
                image: {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                },
                to: "/visit/foo/bar/",
                title: "Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit",
                category: "Torquent",
                breadcrumb: "Torquent",
                startDate: "1995-12-17T03:24:00",
                endDate: "1995-12-17T03:24:00",
                prompt: "Cursus Quis",
                alignRight: false,
            }
        },
    },
}
</script>
