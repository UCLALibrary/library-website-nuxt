const compare = new Intl.Collator('en').compare

function sortByTitle(a, b) {
  return compare(a.title, b.title)
}

export default sortByTitle
