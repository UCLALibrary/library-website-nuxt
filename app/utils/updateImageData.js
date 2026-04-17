/**
 * Take a URI and figure out what "section" of the site it is pointing too
 * @param {String} uri
 * @returns {String}
 */
import getS3Bucket from '~/utils/getS3Bucket'

function updateImageData(imgSrc = '', imgAlt = '', imageDest = {}, $config = {}) {
  imageDest.srcset = ''
  imageDest.src = getS3Bucket($config, imgSrc)
  imageDest.alt = imgAlt
  imageDest.title = imgAlt
  return imageDest
}

export default updateImageData
