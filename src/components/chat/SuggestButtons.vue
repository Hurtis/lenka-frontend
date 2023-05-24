<template>
  <div class="flex flex-wrap" v-if="buttons.length > 0">
    <div v-for="(btn, index) in buttons" :key="index" class="mr-2 mb-3">
      <a
        v-if="btn.type === 'message'"
        class="py-1 px-4 border border-neutral-400 bg-neutral-200 hover:bg-neutral-300 text-sm rounded-md shadow cursor-pointer block"
        @click="$emit('sendChoice', btn.text)"
      >
        {{ btn.text }}
      </a>
      <RouterLink
        v-if="btn.type === 'appLink'"
        class="py-1 px-4 border border-neutral-400 bg-neutral-200 hover:bg-neutral-300 text-sm rounded-md shadow cursor-pointer block"
        :to="btn.url"
      >
        {{ btn.text }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const { buttons } = defineProps(['buttons'])
</script>
