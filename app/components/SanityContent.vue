
<template>
  <div class="sanity-content">
    <PortableText 
      :value="value" 
      :components="components"
      class="prose prose-lg max-w-none"
    />
  </div>
</template>

<script lang="ts" setup>
import { PortableText } from '@portabletext/vue'
import { h } from 'vue'

interface Props {
  value: any[]
}

const props = defineProps<Props>()

// Custom components for different block types using render functions
const components = {
  types: {
    image: ({ value }: any) => {
      console.log('Image value:', value) // Debug log
      return h('figure', { class: 'my-6' }, [
        h('img', {
          src: value.asset?.url || value.url,
          alt: value.alt || 'Image',
          class: 'w-full h-auto rounded-lg shadow-md'
        }),
        value.caption && h('figcaption', { class: 'text-center text-sm text-gray-600 mt-2' }, value.caption)
      ])
    },
    callout: ({ value }: any) => {
      const colors: Record<string, string> = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        success: 'bg-green-50 border-green-200 text-green-800'
      }
      
      return h('div', { 
        class: `my-6 p-4 rounded-lg border ${colors[value.type as string] || colors.info}` 
      }, [
        value.title && h('h4', { class: 'font-semibold mb-2' }, value.title),
        h(PortableText, { value: value.content })
      ])
    },
    codeBlock: ({ value }: any) => {
      return h('div', { class: 'my-6' }, [
        h('div', { class: 'bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto' }, [
          h('pre', { class: 'text-sm' }, [
            h('code', {}, value.code)
          ])
        ]),
        value.language && h('div', { class: 'text-xs text-gray-500 mt-1 text-right' }, value.language)
      ])
    }
  },
  marks: {
    link: ({ value, children }: any) => {
      const target = value?.openInNewTab ? '_blank' : undefined
      const rel = value?.openInNewTab ? 'noopener noreferrer' : undefined
      
      return h('a', {
        href: value?.href,
        target,
        rel,
        class: 'text-blue-600 hover:text-blue-800 underline'
      }, children)
    }
  }
}
</script>

<style scoped>
.sanity-content {
  @apply text-gray-800;
}

.sanity-content :deep(h2) {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-900;
}

.sanity-content :deep(h3) {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-900;
}

.sanity-content :deep(h4) {
  @apply text-lg font-semibold mt-4 mb-2 text-gray-900;
}

.sanity-content :deep(p) {
  @apply mb-4 leading-relaxed;
}

.sanity-content :deep(ul) {
  @apply mb-4 pl-6;
}

.sanity-content :deep(ol) {
  @apply mb-4 pl-6;
}

.sanity-content :deep(li) {
  @apply mb-2;
}

.sanity-content :deep(blockquote) {
  @apply border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4;
}

.sanity-content :deep(code) {
  @apply bg-gray-100 px-1 py-0.5 rounded text-sm font-mono;
}

.sanity-content :deep(strong) {
  @apply font-semibold;
}

.sanity-content :deep(em) {
  @apply italic;
}
</style>
