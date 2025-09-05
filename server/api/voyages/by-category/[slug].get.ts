
export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  const {slug} = getRouterParams(event)
  const query = `*[_type == "voyage" && references(*[_type == "category" && slug.current == $slug][0]._id)]{
    _id,
    title,
    "slug": slug.current,
    categories[]->{_id, title, "slug": slug.current},
    destinations[]->{_id, title, "slug": slug.current}
  }`
  return await client.fetch(query, {slug})
})

