<template lang="html">
    <div class="site-brand-bar">
        <a
            href="https://www.ucla.edu"
            target="_blank"
        >
            <img
                class="ucla-logo"
                src="https://brand.ucla.edu/images/logo-ucla.svg"
                alt="UCLA logo"
            >
        </a>
    </div>
</template>

<style lang="scss" scoped>
.site-brand-bar {
    height: 40px;
    background-color: var(--color-blue-01);
    padding: 0 var(--unit-gutter);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

    .ucla-logo {
        height: 16px;
        width: auto;
    }
}
</style>
