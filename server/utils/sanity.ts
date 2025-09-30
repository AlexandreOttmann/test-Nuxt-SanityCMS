import {createClient} from '@sanity/client'
import type {H3Event} from 'h3'

export function getSanityClient(event?: H3Event) {
  // Prefer runtime config from Nuxt options; fall back to env vars
  // Token is optional (only needed for drafts or private datasets)
  // Use NUXT_SANITY_TOKEN if set
  // @ts-ignore runtimeConfig is available in Nitro
  const config = event ? useRuntimeConfig(event) : useRuntimeConfig()
  const projectId = config.public?.sanity?.projectId || process.env.NUXT_SANITY_PROJECT_ID
  const dataset = config.public?.sanity?.dataset || process.env.NUXT_SANITY_DATASET || 'production'
  const token = config.sanityToken || process.env.NUXT_SANITY_TOKEN

  if (!projectId) {
    throw new Error('Sanity projectId is not configured')
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-12-01',
    token,
    useCdn: true,
    perspective: 'published',
  })
}

