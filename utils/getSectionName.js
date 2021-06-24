/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

const helps = ["/help"]
const abouts = ["/about"]
const visits = ["/events-exhibits"]

function getSectionName(uri = "") {
    let output = "default"

    switch (true) {
        case helps.includes(uri):
            output = "help"
            break

        case abouts.includes(uri):
            output = "about"
            break

        case abouts.includes(uri):
            output = "visit"
            break
    }
    return output
}

export default getSectionName
