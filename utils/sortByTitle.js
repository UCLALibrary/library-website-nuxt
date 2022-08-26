/**
let entries = [
    {
      id: "28303",
      title: "Metadata Planning Worksheet",
    },
    {
      id: "28301",
      title: "EAP Remote Capture (Arabic)",
    },
    {
        "id": "31313",
        "title": "Augmented Reality"
    },
    {
        "id": "22989", 
        "title": "Danelectro Guitars"
    }
  ]

entries.sort( sortByTitle );
 */

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
