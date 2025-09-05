<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">Test Simple - Tailwind CSS</h1>
      
      <!-- Test Tailwind Classes -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 border">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800">Test Card 1</h2>
          <p class="text-gray-600 mb-4">Ceci est un test pour vérifier que Tailwind CSS fonctionne correctement.</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Bouton Test
          </button>
        </div>
        
        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-green-800">Test Card 2</h2>
          <p class="text-green-700 mb-4">Une autre carte pour tester les couleurs et le responsive.</p>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Tag 1</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Tag 2</span>
          </div>
        </div>
      </div>
      
      <!-- Test Responsive -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 class="text-xl font-semibold mb-4 text-yellow-800">Test Responsive</h3>
        <div class="text-sm text-yellow-700">
          <p class="hidden sm:block">Visible sur small et plus (sm:block)</p>
          <p class="block sm:hidden">Visible uniquement sur mobile (block sm:hidden)</p>
          <p class="hidden md:block">Visible sur medium et plus (md:block)</p>
        </div>
      </div>
      
      <!-- Test Typography -->
      <div class="bg-white rounded-lg shadow-md p-6 border">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Test Typography</h3>
        <div class="prose prose-lg max-w-none">
          <h4>Ceci est un H4</h4>
          <p>Ceci est un paragraphe normal avec du <strong>texte en gras</strong> et du <em>texte en italique</em>.</p>
          <ul>
            <li>Liste à puces 1</li>
            <li>Liste à puces 2</li>
            <li>Liste à puces 3</li>
          </ul>
          <blockquote>
            Ceci est une citation de test pour vérifier le style blockquote.
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Page simple pour tester Tailwind CSS
</script>
