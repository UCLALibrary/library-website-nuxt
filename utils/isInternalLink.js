/**
 * Take a URI and figure out what if it an external or internal link
 * @param {String} uri
 * @returns {Boolean}
 */

function isInternalLink(uri = "") {
    let output = false

    switch (true) {
        case uri.includes("library.ucla.edu"):
        case !uri.includes("."):
            output = true
            break
    }

    return output
}

export default isInternalLink
