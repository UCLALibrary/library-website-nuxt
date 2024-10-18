export default async (request, context) => {
  const url = await new URL(request.url)
  const params = await url.searchParams
  const filters = await params.get('filters')

  if (filters && filters === '{"subjectLibrarian.keyword":"yes"}') {
    // Modify the query parameters
    params.set('filters', 'subjectLibrarian.keyword:(yes)')

    // Redirect to the new URL with the updated parameters
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${url.pathname}?${params.toString()}`
      }
    })
  }

  return context.next()
}
