function sortByTitle(a, b) {
    if ( a.title < b.title ){
        return -1
    }
    if ( a.title > b.title ){
        return 1
    }
    return 0
}

export default sortByTitle
