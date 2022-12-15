/**
 * Takes a String and removes HTML tags and double quotes
 * @param {String}
 * @returns {String}
 */

function removeTags(str) {
    if(str){
        let stripHtml = str.replace( /(<([^>]+)>)/ig, '')
        let removeQuotes = stripHtml.replace(/"/ig, '')
        return removeQuotes
    } else {
        return "The UCLA Library creates a vibrant nexus of ideas, collections, expertise, and spaces in which users illuminate solutions for local and global challenges. We constantly evolve to advance UCLA’s research, education, and public service mission by empowering and inspiring communities of scholars and learners to discover, access, create, share, and preserve knowledge."
    }
}

export default removeTags
