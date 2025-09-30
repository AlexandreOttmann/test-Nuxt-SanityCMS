<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600 text-lg">Chargement de l'article...</p>
      </div>
    </div>

    <!-- Post Content -->
    <div v-else-if="post" class="max-w-4xl mx-auto px-4 py-8">
      <!-- Header Section -->
      <header class="mb-8">
        <nav class="mb-6">
          <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 transition-colors">
            ← Retour à l'accueil
          </NuxtLink>
        </nav>
        
        <!-- Category Tags -->
        <div v-if="post.categories?.length" class="mb-4">
          <div class="flex gap-2">
            <span v-for="category in post.categories" :key="category._id" 
                  class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
              {{ category.title }}
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Excerpt -->
        <p v-if="post.excerpt" class="text-xl text-gray-600 mb-6 leading-relaxed">
          {{ post.excerpt }}
        </p>

        <!-- Author and Date -->
        <div class="flex items-center gap-4 text-gray-600 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {{ post.author?.name?.charAt(0) || 'A' }}
            </div>
            <div>
              <p class="font-semibold text-gray-800">{{ post.author?.name || 'Auteur inconnu' }}</p>
              <p class="text-sm">{{ post.author?.username || 'Utilisateur' }}</p>
            </div>
          </div>
          <div class="text-sm">
            <p>Publié le {{ formatDate(post.publishedAt) }}</p>
            <p v-if="post.readingTime" class="text-gray-500">{{ post.readingTime }} min de lecture</p>
          </div>
        </div>

        <!-- Featured Image -->
        <div v-if="post.image" class="mb-8">
          <img 
            :src="post.image.src" 
            :alt="post.image.alt || post.title"
            class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
          <p v-if="post.image.caption" class="text-center text-sm text-gray-500 mt-2 italic">
            {{ post.image.caption }}
          </p>
        </div>
      </header>

      <!-- Article Content -->
      <main class="mb-12">
        <div class="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
            Contenu de l'article
          </h2>
          
          <div v-if="post.body" class="prose prose-lg max-w-none">
            <SanityContent :value="post.body" />
          </div>
          
          <div v-else class="text-gray-500 italic text-center py-12">
            <p>Aucun contenu disponible pour cet article.</p>
          </div>
        </div>
      </main>

      <!-- Related Posts -->
      <section v-if="relatedPosts?.length" class="mb-8">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
            Articles similaires
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <article v-for="relatedPost in relatedPosts" :key="relatedPost._id" 
                     class="group cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden border border-gray-100">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {{ relatedPost.title }}
                </h3>
                <p v-if="relatedPost.excerpt" class="text-gray-600 mb-4 line-clamp-3">
                  {{ relatedPost.excerpt }}
                </p>
                <div class="flex items-center justify-between text-sm text-gray-500">
                  <span>{{ relatedPost.author?.name || 'Auteur' }}</span>
                  <span>{{ formatDate(relatedPost.publishedAt) }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Author Bio -->
      <section v-if="post.author" class="bg-white rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
          À propos de l'auteur
        </h2>
        
        <div class="flex items-start gap-6">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {{ post.author.name.charAt(0) }}
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ post.author.name }}</h3>
            <p v-if="post.author.bio" class="text-gray-600 leading-relaxed">
              {{ post.author.bio }}
            </p>
            <p v-else class="text-gray-500 italic">
              Aucune biographie disponible.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Error State -->
    <div v-else-if="postError || !post" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="text-6xl mb-4">😕</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">
          {{ postError ? 'Erreur de chargement' : 'Article non trouvé' }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ postError ? 'Une erreur est survenue lors du chargement de l\'article.' : 'L\'article que vous recherchez n\'existe pas ou a été supprimé.' }}
        </p>
        <div class="space-y-3">
          <NuxtLink to="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Retour à l'accueil
          </NuxtLink>
          <button v-if="postError" @click="() => $router.go(0)" 
                  class="block w-full mt-3 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Réessayer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SanityContent from '~/components/SanityContent.vue'

// Types
interface User {
  _id: string
  name: string
  username: string
  bio?: string
}

interface Category {
  _id: string
  title: string
}

interface Post {
  _id: string
  title: string
  excerpt?: string
  publishedAt: string
  readingTime?: number
  author?: User
  categories?: Category[]
  image?: {
    src: string
    alt?: string
    caption?: string
  }
  body?: any[]
}

// Fetch the specific post "Bienvenue en Islande" by Jane Doe
const postQuery = /* groq */`
  *[_type == "post" && title == "Bienvenue en Islande"][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    author->{
      _id,
      name,
      username,
      bio
    },
    categories[]->{
      _id,
      title
    },
    image{
      "src": asset->url,
      alt,
      caption
    },
    body[]{
      ...,
      _type == 'image' => {
        ...,
        "asset": {
          "url": asset->url,
          "alt": alt,
          "caption": caption
        }
      }
    }
  }
`

// Fetch related posts (simplified query)
const relatedPostsQuery = /* groq */`
  *[_type == "post" && title != "Bienvenue en Islande"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    excerpt,
    publishedAt,
    author->{
      _id,
      name
    }
  }
`

// Fetch the main post with error handling
const { data: post, pending, error: postError } = await useSanityQuery<Post>(postQuery)
console.log('Post data:', post)
// Fetch related posts (simplified)
const { data: relatedPosts, error: relatedError } = await useSanityQuery<Post[]>(relatedPostsQuery)

// Log errors for debugging
if (postError.value) {
  console.error('Error fetching post:', postError.value)
}

if (relatedError.value) {
  console.error('Error fetching related posts:', relatedError.value)
}

// Debug: Log what we're getting
console.log('Post data:', post.value)
console.log('Post error:', postError.value)
console.log('Related posts:', relatedPosts.value)

// Helper function to format dates
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date inconnue'
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Set page title
useHead({
  title: post.value ? `${post.value.title} - Blog` : 'Article non trouvé',
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt || 'Article de blog'
    }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose :deep(h2) {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-900;
}

.prose :deep(h3) {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-900;
}

.prose :deep(p) {
  @apply mb-4 leading-relaxed text-gray-700;
}

.prose :deep(ul), .prose :deep(ol) {
  @apply mb-4 pl-6;
}

.prose :deep(li) {
  @apply mb-2;
}

.prose :deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6 bg-blue-50 py-2;
}

.prose :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.prose :deep(strong) {
  @apply font-semibold text-gray-900;
}

.prose :deep(em) {
  @apply italic;
}
</style>