export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  
  const query = /* groq */`
    *[_type == "user"] | order(name asc) {
      _id,
      name,
      username
    }
  `
  
  try {
    const users = await client.fetch(query)
    return users
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users'
    })
  }
})
