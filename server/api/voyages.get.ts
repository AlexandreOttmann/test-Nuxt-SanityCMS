export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  
  const query = /* groq */`
    *[_type == "voyage" && published == true] | order(title asc)[0...4] {
      _id,
      title,
      duration,
      rating,
      description,
      destinations[]->{_id, title},
      experienceType->{_id, title},
      categories[]->{_id, title},
      pricing
    }
  `
  
  try {
    const voyages = await client.fetch(query)
    return voyages
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch voyages'
    })
  }
})
