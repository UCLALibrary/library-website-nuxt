/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */
// import getS3Bucket from "~/utils/getS3Bucket"

function updateImageData(obj={}) {
    let imageDest = {}
    console.log("Is there a image for extrenal content: "+obj.image)
    console.log("Is there a image for internal content: "+obj.heroImage)
    if(obj.image && obj.image.length > 0) {
        imageDest = obj.image[0]
    }else if(obj.heroImage && obj.heroImage.length > 0) {
        imageDest = obj.heroImage[0].image[0]
    }
    console.log("Grid Gallery Image:"+JSON.stringify(imageDest))
    return imageDest
}

export default updateImageData
