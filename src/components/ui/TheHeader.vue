<template>
  <div>
    <nav class="bg-gray-800 fixed w-full z-10">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center">
          <RouterLink to="/" class="text-white font-bold brand">
            Chatbot Lenka
          </RouterLink>
          <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
            <!-- menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="menu.open = !menu.open"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                :class="`h-6 w-6 ${menu.open ? 'hidden' : 'block'}`"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                :class="`h-6 w-6 ${menu.open ? 'block' : 'hidden'}`"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-end"
          >
            <div class="hidden md:ml-6 md:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink
                  v-for="(item, index) in menu.items"
                  :key="index"
                  :to="item.to"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >{{ item.text }}</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="transition ease-out duration-1000"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div :class="`md:hidden ${menu.open ? 'active' : 'hidden'}`">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <RouterLink
              v-for="(item, index) in menu.items"
              :key="index"
              :to="item.to"
              @click="menu.open = !menu.open"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
              >{{ item.text }}</RouterLink
            >
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";

let menu = reactive({
  open: false,
  items: [
    { text: "Slovíčka", to: "/words" },
    { text: "Vlastné slovíčka", to: "/custom-words" },
    { text: "Predložky", to: "/prepositions" },
    { text: "Nepravidelné slovesá", to: "/irregular-verbs" },
  ],
});
</script>
<style lang="scss" scoped>
.router-link-active {
  background-color: rgb(17 24 39);
}
.brand.router-link-active {
  background-color: none;
}
</style>

