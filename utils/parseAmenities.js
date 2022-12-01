import parseIcons from "~/utils/parseIcons"

function parseAmenities(obj) {
    return obj.amenities.map((amenity, index )=> {
        return {
            title: amenity,
            icon: parseIcons(obj)[index]
        }
    })
}
export default parseAmenities
