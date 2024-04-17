/* eslint-disable no-console */
async function scrapeFormId(eventId = '') {
  console.log('event ID:' + eventId)

  // const response = await fetch($config.libcalProxy+"event/" + eventId)
  const html = await $fetch(useRuntimeConfig().public.libcalProxy + 'event/' + eventId)
  // console.log("response",response)
  // const html = await response.text()
  // console.log('event html:' + html)
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  if (doc.querySelector("input[name='fid']")) {
    const formId = doc.querySelector("input[name='fid']").getAttribute('value')
    console.log(formId)
    console.log(doc)
    const formData = await fetchformData(formId)
    // console.log('form data in scarpe function is :' + JSON.stringify(formData))
    return formData
  } else {
    console.log('there is no formid on the page')
    return []
  }
}

async function fetchformData(formId) {
  console.log('you are in fetchformdata:' + formId)
  // const formData = await $axios.$get(`api/1.1/events/form/${formId}`)
  const formData = await $fetch(useRuntimeConfig().public.libcalProxy + `api/1.1/events/form/${formId}`)
  // console.log('is data ready:' + JSON.stringify(formData))
  return formData
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      scrapeApi: {
        scrapeFormId
        // Make plugin available to components
      }
    }
  }
})

// export default function({ $axios, $config }, inject) {
// const libcalURL = "https://calendar.library.ucla.edu/event/"
// inject('scrapeApi', {
//   scrapeFormId,
// })
// async function scrapeFormId(eventId = '') {
//   console.log('event ID:' + eventId)
//   const response = await fetch($config.libcalProxy + 'event/' + eventId)
//   const html = await response.text()
//   console.log('event html:' + html)
//   const parser = new DOMParser()
//   const doc = parser.parseFromString(html, 'text/html')
//   if (doc.querySelector("input[name='fid']")) {
//     const formId = doc.querySelector("input[name='fid']").getAttribute('value')
//     console.log(formId)
//     console.log(doc)
//     const formData = await fetchformData(formId)
//     console.log('form data in scarpe function is :' + JSON.stringify(formData))
//     return formData
//   } else {
//     console.log('there is no formid on the page')
//     return []
//   }
// }

// async function fetchformData(formId) {
//   console.log('you are in fetchformdata:' + formId)
//   const formData = await $axios.$get(`api/1.1/events/form/${formId}`)
//   console.log('is data ready:' + JSON.stringify(formData))
//   return formData
// }
// }
