/* 
  * To Title Case 2.1 – http://individed.com/code/to-title-case/
  * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 */

String.prototype.toTitleCase = function() {
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
  
    return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(
        match,
        index,
        title
    ) {
        if (
            index > 0 &&
        index + match.length !== title.length &&
        match.search(smallWords) > -1 &&
        title.charAt(index - 2) !== ":" &&
        (title.charAt(index + match.length) !== "-" ||
          title.charAt(index - 1) === "-") &&
        title.charAt(index - 1).search(/[^\s-]/) < 0
        ) {
            return match.toLowerCase()
        }
  
        if (match.substring(1).search(/[A-Z]|\../) > -1) {
            return match
        }
  
        return match.charAt(0).toUpperCase() + match.substr(1)
    })
}



/**
 * Take a string and turn it into kebab-case-string
 * @param {String} str
 * @returns {String}
 */
function titleCase(str) {
    return str
        .toTitleCase()
    
}

export default titleCase
