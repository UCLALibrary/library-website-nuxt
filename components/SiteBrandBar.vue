<template lang="html">
    <div  class="site-brand-bar">
        <nuxt-link to="https://www.ucla.edu"><img src="https://brand.ucla.edu/images/logo-ucla.svg" alt="UCLA logo" /></nuxt-link>
    </div>
</template>

<script>
export default {
    name: "SiteBrandBar"
}
</script>

<style lang="scss" scoped>
.site-brand-bar {
    height: 40px;
    background-color: #3284bf; //--color-blue-01;
    margin: -8px;
}
img {
  height: 25px;
  padding-top: 5px;
  padding-left: 70px;
}
</style>
