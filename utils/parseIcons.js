function parseIcons(obj) {
  return obj.amenitiesIcons.map((item) => {
    const parsedAmenity = item.split('-')[1]
    return `Icon${parsedAmenity.charAt(0).toUpperCase() + parsedAmenity.slice(1)}`
  })
}
export default parseIcons
