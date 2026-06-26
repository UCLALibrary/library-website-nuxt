import ARTICLE_DETAIL from '../gql/queries/ArticleDetail.gql'
export default defineNuxtRouteMiddleware(async (to) => {
  if (!import.meta.client) return
  // Only run for /about/news/*
  if (!to.path.startsWith('/about/news/')) return
  const { $graphql } = useNuxtApp()

  const data = await $graphql.default.request(ARTICLE_DETAIL, {
    slug: to.params.slug
  })

  const url = data?.entry?.externalResourceUrl?.trim()

  if (url) {
    return navigateTo(url, {
      external: true,
      redirectCode: 301
    })
  }
})
