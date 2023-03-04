<template>
  <div>
    <button
      class="flex w-full items-center justify-between text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      ref="componentRef"
      @click="open = !open"
    >
      {{ content.title }}
      <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" />
    </button>
    <div v-if="open" @click="$emit('sendCloseMenu')">
      <RouterLink
        v-for="(item, index) in content.items"
        :key="index"
        :to="item.to"
        class="block text-gray-300 hover:bg-gray-700 hover:text-white py-2 pl-6 rounded-md text-sm font-medium"
        >{{ item.text }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
const { content } = defineProps(["content"]);
const componentRef = ref(null);
const open = ref(false);
</script>

