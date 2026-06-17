const A11Y_TEST_RETRIES = {
  runMode: 0,
  openMode: 0,
}

function runA11yTest(url, { selector = '#main', impacts, visitOptions = {} } = {}) {
  cy.visit(url, { failOnStatusCode: false, ...visitOptions })
  cy.checkCriticalA11y(selector, impacts)
}

function registerA11yTest(url, options = {}, register) {
  register(
    'has no accessibility violations',
    { retries: A11Y_TEST_RETRIES },
    () => runA11yTest(url, options)
  )
}

export function a11yIt(url, options = {}) {
  if (options.skip) {
    a11yIt.skip(url, options)
    return
  }
  registerA11yTest(url, options, it)
}

a11yIt.skip = (url, options = {}) => {
  registerA11yTest(url, options, it.skip)
}
