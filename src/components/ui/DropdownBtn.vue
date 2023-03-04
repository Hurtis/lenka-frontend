<template>
  <div
    class="relative inline-block text-left"
    @click="open = !open"
    ref="componentRef"
  >
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center gap-x-1.5 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {{ content.title }}
        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" />
      </button>
    </div>

    <div
      v-if="open"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1" role="none">
        <RouterLink
          v-for="(item, index) in content.items"
          :key="index"
          :to="item.to"
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
          >{{ item.text }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import useDetectOutsideClick from "@/composable/useDetectOutsideClick.js";
import { ref } from "vue";
const { content } = defineProps(["content"]);
const componentRef = ref();
const open = ref(false);
useDetectOutsideClick(componentRef, () => {
  open.value = false;
});
</script>

