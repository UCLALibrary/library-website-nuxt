function removeHtmlTruncate(str, maxlength) {
    // Remove HTML
    let stripHtml = str.replace( /(<([^>]+)>)/ig, '')
    let removeQuotes = stripHtml.replace(/"/ig, '')

    // Truncate
    let limitCharacter = removeQuotes.substring(0, maxlength)
    let words = limitCharacter.split(' ')
    return words.slice(0, -1).join(' ') + " ..."
}

// Components with CSS truncation:

// BlockCardWithIllustration
//<section-cards-with-illustrations

// BlockGenericList
// BlockHighlight
// BlockSimpleCard
// BlockStaffArticleList
// SearchResult
// ThumbnailCard
// Acceptance criteria:

// Strip HTML tags
// Truncate to 250 characters
// Keep CSS/visual truncation

export default removeHtmlTruncate
