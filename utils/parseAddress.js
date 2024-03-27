function parseAddress(obj) {
  return obj.address.map((item) => {
    if (item.addressLine2) {
      return (
        item.addressLine1 +
                    '\n' +
                    item.addressLine2 +
                    '\n' +
                    item.addressCity +
                    ', ' +
                    item.addressState +
                    ' ' +
                    item.addressZipCode
      )
    } else if (item) {
      return (
        item.addressLine1 +
                    '\n' +
                    item.addressCity +
                    ', ' +
                    item.addressState +
                    ' ' +
                    item.addressZipCode
      )
    } else {
      return ''
    }
  })
}
export default parseAddress
