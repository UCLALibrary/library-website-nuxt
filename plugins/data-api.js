export default function(context, inject) {
    const ESApiKey = "ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="
    const ES_URL = "https://elastical.library.ucla.edu"

    /*
    {"id":"j6tUj4IBzYVXfPB9-JvU","name":"dev-es-key","api_key":"N_f0_5WSSae3QOvm4hlq0g","encoded":"ajZ0VWo0SUJ6WVZYZlBCOS1KdlU6Tl9mMF81V1NTYWUzUU92bTRobHEwZw=="}
    */

    inject('dataApi', {
        getMapping
    })

    async function getMapping(){
        const response = await fetch(`${ES_URL}/apps-dev-library-website/_mapping`, {
            headers: {
                'Authorization': `ApiKey ${ESApiKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const data = await response.json()
        return data
    }
}
