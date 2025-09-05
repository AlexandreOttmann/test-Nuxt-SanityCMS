
export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  const query = `*[_type == "voyage"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    duration,
    nights,
    includeFlight,
    destinations[]->{_id, title, "slug": slug.current},
    experienceType->{_id, title, "slug": slug.current},
    categories[]->{_id, title, "slug": slug.current},
    image{..., "url": asset->url}
  }`
  return await client.fetch(query)
})

