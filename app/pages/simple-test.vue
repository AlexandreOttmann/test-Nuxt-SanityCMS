<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Simple Test - Server-side API</h1>
    
    <div v-if="pending" class="text-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Loading posts...</p>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <div class="text-red-600 mb-4">
        <h2 class="text-xl font-semibold">Error loading posts</h2>
        <p>{{ error }}</p>
      </div>
    </div>

    <div v-else class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-800">Posts ({{ posts?.length || 0 }})</h2>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
interface User {
  _id: string
  name: string
  username: string
}

interface Category {
  _id: string
  title: string
}

interface Post {
  _id: string
  title: string
  excerpt: string
  publishedAt: string
  author?: User
  categories?: Category[]
}

// Fetch data using server-side API route
const { data: posts, pending, error } = await useFetch<Post[]>('/api/posts')

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