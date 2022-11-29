function parseIcons(obj) {
    return obj.amenitiesIcons.map(item => {
        let parsedAmenity = item.split("-")[1]
        return `SvgIcon${parsedAmenity.charAt(0).toUpperCase() + parsedAmenity.slice(1)}`
    })
}
export default parseIcons
