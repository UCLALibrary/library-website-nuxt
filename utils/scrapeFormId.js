/**
 * Scrapping function in Nuxt utils directory, this will accept event-id from event slug page, and return formId.
 * @param {String} eventId
 * @returns {String}
 */

function scrapeFormId(eventId = "", axios) {
    fetch('https://calendar.library.ucla.edu/event/' + eventId)
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
            return axios.$get(
                `api/1.1/events/form/${formId}`
            )
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err)  
        })
}

export default scrapeFormId
