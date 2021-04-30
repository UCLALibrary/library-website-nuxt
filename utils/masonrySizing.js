function resizeMasonryItem(item) {
    /* Get the grid object, its row-gap, and the size of its implicit rows */
    var grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        )

    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
    console.log({ item })
    var rowSpan = Math.ceil(
        (item.querySelector(".masonry-content").getBoundingClientRect().height +
            rowGap) /
            (rowHeight + rowGap)
    )

    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = "span " + rowSpan
}

/**
 * Apply spanning to all the masonry items
 *
 * Loop through all the items and apply the spanning to them using
 * `resizeMasonryItem()` function.
 *
 * @uses resizeMasonryItem
 */
function resizeAllMasonryItems() {
    // Get all item class objects in one list
    var allItems = document.getElementsByClassName("masonry-item")

    /*
     * Loop through the above list and execute the spanning function to
     * each list-item (i.e. each masonry item)
     */
    for (var i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i])
    }
}

export default resizeMasonryItem
