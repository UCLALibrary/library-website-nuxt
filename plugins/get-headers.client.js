// Find all elements with class name "section-header2" or "section-header3"
// Loop through each section-header element and push it into the array
// Excludes the section-header2 More Information which is a visually-hidden element above the divider-way-finder in the Flexible Block component

function getHeadersMethod() {
  const elements = document.querySelectorAll('.section-header2, .section-header3')

  const h2Array = []

  elements.forEach((element) => {
    if (element.textContent !== 'More Information') {
      h2Array.push(element.textContent)
    }
  })

  // console.log('The plugin has been mounted!')
  // console.log('h2Array:', h2Array)

  return h2Array
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      getHeaders: {
        getHeadersMethod
        // Make plugin available to all components
      }
    }
  }
})
