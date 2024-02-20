<script setup>
// in nuxt2 we used https://github.com/nuxt-community/router-extras-module
// now this module suggest to use definePageMeta
/*
definePageMeta({
  path: '/posts',
  alias: ['/articles', '/blog']
})
*/
definePageMeta({
  redirect: (to) => {
    // the function receives the target route as the argument
    // a relative location doesn't start with `/`
    // or { path: 'profile'}
    return '/about/reports'
  },
})
</script>
