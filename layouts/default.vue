<template lang="html">
  <main class="layout layout-default">
      <site-brand-bar></site-brand-bar>
      <nuxt/>
  </main>
</template>

<script>
import SiteBrandBar from "../components/SiteBrandBar"

export default {
  components: {
    SiteBrandBar
  }
}
</script>

<style lang="scss" scoped>
.layout-default {

}
</style>
