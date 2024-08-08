export default async (request, context) => {
  const blockedUserAgents = [
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)', 'claudebot'
  ]

  const userAgent = await request.headers.get('user-agent')
  if (blockedUserAgents.includes(userAgent)) {
    return new Response('Access Denied', {
      status: 403
    })
  }

  return context.next()
}
