/**
 * Scrapping function in Nuxt utils directory, this will accept event-id from event slug page, and return formId.
 * @param {String} eventId
 * @returns {String}
 */

async function scrapeFormId(eventId = "") {
    await fetch('http://localhost:8010/proxy/' + eventId)
        .then(function(response) {
        // When the page is loaded convert it to text
            return response.text()
        })
        .then(function(html) {
            // Initialize the DOM parser
            var parser = new DOMParser()

            // Parse the text
            var doc = parser.parseFromString(html, "text/html")

            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;

            let formId = doc.querySelector("input[name='fid']").getAttribute("value") 
            console.log(formId) 
            console.log(doc)
            return formId
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err)  
        }) 
}

export default scrapeFormId
