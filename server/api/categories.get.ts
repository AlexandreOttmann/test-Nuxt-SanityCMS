export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  
  const query = /* groq */`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      description,
      showOnHome
    }
  `
  
  try {
    const categories = await client.fetch(query)
    return categories
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch categories'
    })
  }
})
