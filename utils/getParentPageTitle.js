/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function getParentPageTitle(uri = "") {
    let output = "default"

    switch (true) {
        case uri.includes("/staff"):
            output = "Staff Directory"
            break

        case uri.includes("/about"):
            output = "About"
            break

        case uri.includes("/visit"):
        case uri.includes("/events-exhibits"):
            output = "Visit"
            break

        case uri.includes("/help"):
        case uri.includes("/services-resources"):
            output = "Services / Resources"
            break
    }

    return output
}

export default getParentPageTitle
