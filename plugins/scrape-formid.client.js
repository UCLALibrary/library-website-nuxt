export default function({$axios}, inject){
    const libcalURL = "https://calendar.library.ucla.edu/event/"
    inject('scrapeApi', {
        scrapeFormId,
    })
    async function scrapeFormId(eventId = ""){
        const response = await fetch(libcalURL + eventId)
        const html = await response.text()
        var parser = new DOMParser()
        var doc = parser.parseFromString(html, "text/html")
        let formId = doc.querySelector("input[name='fid']").getAttribute("value") 
        console.log(formId) 
        console.log(doc)
        const formData = await fetchformData(formId)
        return formData
    }

    async function fetchformData(formId){
        const formData = await $axios.$get(`api/1.1/events/form/${formId}`)
        return formData
    }
}
