// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss'],
  sanity: {
    projectId: 'nu6yntji',
    dataset: 'production',
    apiVersion: "2024-12-01",
    useCdn: true,
    withCredentials: false,
    visualEditing: {
	    token: process.env.SANITY_VIEWER_TOKEN,
	    studioUrl: process.env.SANITY_STUDIO_URL,
	    stega: true
    }
  }
})