/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function getS3Bucket($config = {},image_filename = "") {
    

    return $config.s3Bucket + image_filename
}

export default getS3Bucket
