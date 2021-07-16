<template lang="html">
    <header class="header-sticky">
        <!-- TODO Style this header with UCLA logo and side border  -->
        <slot />
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-sticky {
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    background-color: red;
    height: 96px;

    transform: translateY(-100%);
    transition: transform 400ms ease-in-out;

    // States
    .has-scrolled-past-header & {
        transform: translateY(0);
    }
}
</style>

<!-- TODO Write story for this component -->
