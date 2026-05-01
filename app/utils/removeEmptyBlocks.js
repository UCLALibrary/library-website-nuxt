const blockFieldMap = {
  pullQuote: "pullQuote",
  mediaGallery: "mediaGallery",
  cardWithImage: "cardWithImage",
  ctaBlock2Up: "ctaBlock2Up",
  ctaBlockContentWidth: "innerBlocks",
  mediaWithText: "mediaWithText",
  bannerFeatured: "bannerFeatured",
  imageWithTextOverlay: "imageWithTextOverlay",
  impactNumbersCarousel: "impactNumbersCarousel",
  helpTopicCards: "helpTopicCards",
  simpleCards: "simpleCards",
  highlight: "highlight",
  form: "form",
  richText: "richText"
};

function shouldKeepBlock(block) {
  const field = blockFieldMap[block.typeHandle];

  if (!field) return true;

  const value = block[field];

  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "object") return value && Object.keys(value).length > 0;

  return true;
}

function removeEmptyBlocks(blocks = []) {
  return blocks.filter(shouldKeepBlock);
}

export default removeEmptyBlocks
