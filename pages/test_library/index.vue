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
        <divider-general
            
            :is-bold="true"
        />
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
    name: 'Home',
}
</script>
