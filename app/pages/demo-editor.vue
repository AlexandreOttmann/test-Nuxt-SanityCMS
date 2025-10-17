<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-gray-800">Démo de l'éditeur visuel Sanity</h1>
    
    <!-- Instructions -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-blue-800">Comment utiliser l'éditeur visuel</h2>
      <ol class="list-decimal list-inside space-y-2 text-blue-700">
        <li>Ouvrez Sanity Studio : <code class="bg-blue-100 px-2 py-1 rounded">cd studio-hello-world && npm run dev</code></li>
        <li>Créez un nouvel article dans la section "Posts"</li>
        <li>Utilisez la barre d'outils pour formater votre texte</li>
        <li>Ajoutez des images, encadrés, et blocs de code</li>
        <li>Sauvegardez et publiez</li>
        <li>Revenez sur cette page pour voir le résultat</li>
      </ol>
    </div>

    <!-- Sample Post Display -->
    <div v-if="samplePost" class="bg-white rounded-lg shadow-lg p-8 border">
      <h2 class="text-3xl font-bold mb-4 text-gray-800">{{ samplePost.title }}</h2>
      
      <div class="flex items-center gap-4 text-sm text-gray-600 mb-6">
        <span>Par {{ samplePost.author?.name || 'Auteur' }}</span>
        <span>{{ formatDate(samplePost.publishedAt) }}</span>
      </div>

      <div v-if="samplePost.excerpt" class="text-lg text-gray-700 mb-6 italic">
        {{ samplePost.excerpt }}
      </div>

      <!-- Rich Content Display -->
      <div v-if="samplePost.body" class="prose prose-lg max-w-none">
        <SanityContent :value="samplePost.body" />
      </div>

      <div v-else class="text-gray-500 italic text-center py-8">
        Aucun contenu riche disponible. Créez du contenu dans Sanity Studio pour le voir ici.
      </div>
    </div>

    <!-- Sample Voyage Display -->
    <div v-if="sampleVoyage" class="bg-white rounded-lg shadow-lg p-8 border mt-8">
      <h2 class="text-3xl font-bold mb-4 text-gray-800">{{ sampleVoyage.title }}</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-700">Informations</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <img :src="sampleVoyage.imageUrl" :alt="sampleVoyage.image?.alt" class="w-full h-auto rounded-lg shadow-md">
            <div>📍 Destination: {{ sampleVoyage.destinations?.[0]?.title || 'Non définie' }}</div>
            <div>⏱️ Durée: {{ sampleVoyage.duration }} jours</div>
            <div>⭐ Note: {{ sampleVoyage.rating }}/5</div>
            <div>💰 Prix: À partir de {{ sampleVoyage.pricing?.startingPrice }}€</div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-700">Catégories</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="category in sampleVoyage.categories" :key="category._id"
                  class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              {{ category.title }}
            </span>
          </div>
        </div>
      </div>

      <!-- Rich Description Display -->
      <div v-if="sampleVoyage.description" class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">Description</h3>
        <SanityContent :value="sampleVoyage.description" />
      </div>

      <!-- Programme Display -->
      <div v-if="sampleVoyage.programmeBlock?.length" class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">Programme</h3>
        <div class="space-y-4">
          <div v-for="(day, index) in sampleVoyage.programmeBlock" :key="index"
               class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {{ day.badgeText || `Jour ${index + 1}` }}
              </span>
              <h4 class="font-semibold text-gray-800">{{ day.title }}</h4>
            </div>
            <div v-if="day.description" class="text-gray-700">
              <SanityContent :value="day.description" />
            </div>
            <div class="flex gap-4 mt-2 text-sm text-gray-600">
              <span v-if="day.denivellation">📈 {{ day.denivellation }}</span>
              <span v-if="day.road">🚗 {{ day.road }}</span>
              <span v-if="day.night">🏨 {{ day.night }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Content Message -->
    <div v-if="!samplePost && !sampleVoyage" class="text-center py-12">
      <div class="text-6xl mb-4">📝</div>
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">Aucun contenu disponible</h2>
      <p class="text-gray-600 mb-6">
        Pour voir du contenu ici, vous devez d'abord créer des articles et voyages dans Sanity Studio.
      </p>
      <div class="bg-gray-100 rounded-lg p-4 inline-block">
        <code class="text-sm">npm run seed</code> dans le dossier studio-hello-world
      </div>
    </div>

    <!-- Features Demo -->
    <div class="mt-12 bg-gray-50 rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Fonctionnalités de l'éditeur</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-700">Édition de texte</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Styles de titre (H2, H3, H4)</li>
            <li>• Formatage (gras, italique, code)</li>
            <li>• Listes à puces et numérotées</li>
            <li>• Liens avec options d'ouverture</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-700">Blocs spéciaux</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Images avec hotspots et légendes</li>
            <li>• Encadrés colorés (info, attention, succès)</li>
            <li>• Blocs de code avec coloration</li>
            <li>• Citations et références</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SanityContent from '~/components/SanityContent.vue'

// Sample post query
const postQuery = /* groq */`
  *[_type == "post"] | order(publishedAt desc)[0] {
    _id,
    title,
    excerpt,
    publishedAt,
    author->{_id, name},
    body
  }
`

// Sample voyage query
const voyageQuery = /* groq */`
  *[_type == "voyage" && published == true] | order(title asc)[0] {
    _id,
    title,
    duration,
    rating,
    description,
    destinations[]->{_id, title},
    categories[]->{_id, title},
    pricing,
    "imageUrl": image.asset->url,
    ...,
    programmeBlock[]{
      title,
      badgeText,
      description,
      denivellation,
      road,
      night
    }
  }
`

// Fetch sample content
const { data: samplePost } = await useSanityQuery(postQuery)
const { data: sampleVoyage } = await useSanityQuery(voyageQuery)
console.log('Sample voyage:', sampleVoyage)
// Helper function
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date inconnue'
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
