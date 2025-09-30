export default defineEventHandler(async (event) => {
  const client = getSanityClient(event)
  
  const query = /* groq */`
    *[_type == "post"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      excerpt,
      publishedAt,
      author->{_id, name, username},
      categories[]->{_id, title}
    }
  `
  
  try {
    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts'
    })
  }
})
