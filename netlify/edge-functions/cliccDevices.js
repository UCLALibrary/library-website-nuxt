const CLICC_DEVICES_ENDPOINT = 'https://clicc-devices.library.ucla.edu/devices/'

export default async (_request, _context) => {
  try {
    const upstreamResponse = await fetch(CLICC_DEVICES_ENDPOINT, {
      headers: {
        Accept: 'application/json'
      }
    })

    if (!upstreamResponse.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch CLICC devices data' }),
        {
          status: upstreamResponse.status,
          headers: {
            'content-type': 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
          }
        }
      )
    }

    const responseBody = await upstreamResponse.text()
    return new Response(responseBody, {
      status: 200,
      headers: {
        'content-type': upstreamResponse.headers.get('content-type') || 'application/json',
        'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
      }
    })
  } catch {
    return new Response(
      JSON.stringify({ error: 'Unable to reach CLICC devices service' }),
      {
        status: 502,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
        }
      }
    )
  }
}
