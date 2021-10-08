<template lang="html">
  <banner-featured
    :image="block.contentLink[0].image"
    :to="block.contentLink[0].to"
    :title="block.contentLink[0].title"
    :category="category"
    :breadcrumb="breadcrumb"
    :dates="dates"
    :is-online="isOnline"
    :prompt="block.prompt"
    :align-right="parsedAlignment"
    :location="parsedLocations"
  />
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    parsedAlignment() {
      return this.block.alignment === "right" ? true : false;
    },
    parsedIsOnline() {},
    parsedLocations() {
      locations = [];
      for (let location in block.contentLink[0].associatedLocations) {
        locations.push(
          block.contentLink[0].associatedLocations[location].title
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
