<template>
    <main
        id="main"
        class="page page-error"
    >
        <p class="error">
            404
        </p>
        <divider-way-finder />

        <rich-text class="error-text">
            <h1
                v-if="error.statusCode === 404"
                class="error-title"
            >
                Page not found
            </h1>
            <h1
                v-else
                class="error-title"
            >
                An error occurred
            </h1>
            <p>We can’t find the page you are looking for, but we're here to help. Try these regularly visited links:</p>
            <ul>
                <li>
                    <nuxt-link to="/">
                        Go back to home page
                    </nuxt-link>
                </li>
                <li><a href="https://library.ucla.edu">UCLA Library Home</a></li>
                <li><a href="https://www.library.ucla.edu/research-teaching-support/research-help">Research Help</a></li>
                <li><a href="https://www.library.ucla.edu/use/access-privileges/disability-resources">Accessibility Resources</a></li>
            </ul>
        </rich-text>
    </main>
</template>
<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
}
</script>
<style lang="scss" scoped>
.page-error {
    padding: var(--space-3xl) var(--unit-gutter);

    .error {
        font-family: var(--font-secondary);
        font-size: 248px;
        font-weight: 600;
        line-height: 1;
        background: linear-gradient(20deg, #FD9BE0 10.99%, #E29AEE 23.02%, #C099FF 32.91%, #8BA0EF 42.44%, #0AA5FF 56.68%, #06BEF2 73.09%, #00E0E0 89.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-align: center;
    }
    .error-title {
        @include step-5;
        margin-bottom: 32px;

        p {
            margin-bottom: var(--space-xl);
        }
    }
}
</style>
