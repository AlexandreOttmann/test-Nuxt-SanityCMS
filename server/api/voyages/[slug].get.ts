

export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  const {slug} = getRouterParams(event)
  const query = `*[_type == "voyage" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    published,
    duration,
    nights,
    includeFlight,
    level,
    authorNote{ text, author->{_id, name, position} },
    destinations[]->{_id, title, "slug": slug.current, regions[]->{_id, nom, "slug": slug.current}},
    experienceType->{_id, title, "slug": slug.current},
    categories[]->{_id, title, "slug": slug.current},
    image{..., "url": asset->url},
    imageSecondary{..., "url": asset->url},
    photosList[]{..., "url": asset->url},
    experiencesBlock,
    description,
    emailDescription,
    metaDescription,
    programmeBlock[]{title, badgeText, description, photo{..., "url": asset->url}, denivellation, road, night},
    pricingDetailsBlock,
    pricing,
    accompanistsDescription,
    accompanistsList[]{name, description, role, image{..., "url": asset->url}},
    housingBlock[]{title, housingType, housingMood, image[]{src{..., "url": asset->url}, alt}},
    videoLinks,
    faqBlock,
    seoSection
  }`
  return await client.fetch(query, {slug})
})

