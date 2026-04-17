/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */

function getS3Bucket($config = {}, imageFilename = '') {
  return $config.s3Bucket + imageFilename
}

export default getS3Bucket
