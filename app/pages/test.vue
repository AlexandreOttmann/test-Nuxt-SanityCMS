<template>
  <div class="p-8 max-w-6xl mx-auto">
    <div v-if="pending" class="text-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Chargement...</p>
    </div>

    <div v-else class="space-y-12">
      <!-- Posts Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Articles récents</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="post in posts" :key="post._id" class="bg-white rounded-lg shadow-md p-6 border">
            <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>Par {{ post.author?.name || 'Auteur inconnu' }}</span>
              <span>{{ formatDate(post.publishedAt) }}</span>
            </div>
            <div v-if="post.categories?.length" class="mt-3">
              <div class="flex gap-2">
                <span v-for="category in post.categories" :key="category._id" 
                      class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {{ category.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Voyages Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Voyages disponibles</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="voyage in voyages" :key="voyage._id" class="bg-white rounded-lg shadow-md p-6 border">
            <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ voyage.title }}</h3>
            <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span>📍 {{ voyage.destinations?.[0]?.title || 'Destination' }}</span>
              <span>⏱️ {{ voyage.duration }} jours</span>
              <span>⭐ {{ voyage.rating }}/5</span>
            </div>
            <div class="text-gray-600 mb-4">
              <SanityContent v-if="voyage.description" :value="voyage.description" />
              <p v-else class="text-gray-500 italic">Aucune description</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <span v-if="voyage.experienceType" 
                      class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {{ voyage.experienceType.title }}
                </span>
                <span v-for="category in voyage.categories?.slice(0, 2)" :key="category._id"
                      class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {{ category.title }}
                </span>
              </div>
              <span class="text-lg font-bold text-blue-600">
                À partir de {{ voyage.pricing?.startingPrice }}€
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Catégories</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="category in categories" :key="category._id" 
               class="bg-white rounded-lg shadow-md p-4 border text-center">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ category.title }}</h3>
            <p class="text-sm text-gray-600">{{ category.description }}</p>
            <div v-if="category.showOnHome" class="mt-2">
              <span class="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Affiché sur l'accueil
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Statistiques</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ posts?.length || 0 }}</div>
            <div class="text-sm text-gray-600">Articles</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">{{ voyages?.length || 0 }}</div>
            <div class="text-sm text-gray-600">Voyages</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600">{{ categories?.length || 0 }}</div>
            <div class="text-sm text-gray-600">Catégories</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">{{ users?.length || 0 }}</div>
            <div class="text-sm text-gray-600">Utilisateurs</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SanityContent from '~/components/SanityContent.vue'

// Types for our content
interface User {
  _id: string
  name: string
  username: string
}

interface Category {
  _id: string
  title: string
  description: string
  showOnHome: boolean
}

interface Post {
  _id: string
  title: string
  excerpt: string
  publishedAt: string
  author?: User
  categories?: Category[]
}

interface Destination {
  _id: string
  title: string
}

interface Experience {
  _id: string
  title: string
}

interface Voyage {
  _id: string
  title: string
  duration: number
  rating: number
  description?: any[]
  destinations?: Destination[]
  experienceType?: Experience
  categories?: Category[]
  pricing?: {
    startingPrice: number
  }
}

// GROQ queries with relations
const postsQuery = /* groq */`
  *[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    excerpt,
    publishedAt,
    author->{_id, name, username},
    categories[]->{_id, title}
  }
`

const voyagesQuery = /* groq */`
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

const categoriesQuery = /* groq */`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description,
    showOnHome
  }
`

const usersQuery = /* groq */`
  *[_type == "user"] | order(name asc) {
    _id,
    name,
    username
  }
`

// Fetch data using server-side API routes
const { data: posts, pending: postsPending } = await useFetch<Post[]>('/api/posts')
const { data: voyages, pending: voyagesPending } = await useFetch<Voyage[]>('/api/voyages')
const { data: categories, pending: categoriesPending } = await useFetch<Category[]>('/api/categories')
const { data: users, pending: usersPending } = await useFetch<User[]>('/api/users')

// Combined loading state
const pending = postsPending || voyagesPending || categoriesPending || usersPending

// Helper function to format dates
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date inconnue'
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Add some basic styling */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
