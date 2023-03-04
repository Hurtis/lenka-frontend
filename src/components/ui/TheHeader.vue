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
              @click="open = !open"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                :class="`h-6 w-6 text-white ${open ? 'hidden' : 'block'}`"
              />
              <XMarkIcon
                :class="`h-6 w-6 text-white ${open ? 'block' : 'hidden'}`"
              />
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-end"
          >
            <div class="hidden md:ml-6 md:block">
              <div class="flex space-x-4">
                <RouterLink
                  to="/"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Domov</RouterLink
                >
                <DropdownBtn :content="menu.words" />
                <DropdownBtn :content="menu.grammar" />
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
        <div :class="`md:hidden ${open ? 'active' : 'hidden'} pb-3`">
          <div class="space-y-1 px-2 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <RouterLink
              to="/"
              class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              @click="open = false"
              >Domov</RouterLink
            >
          </div>
          <div class="space-y-1 px-2">
            <MenuAccordeon
              :content="menu.words"
              @sendCloseMenu="open = false"
            />
          </div>
          <div class="space-y-1 px-2">
            <MenuAccordeon
              :content="menu.grammar"
              @sendCloseMenu="open = false"
            />
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref, onMounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import DropdownBtn from "@/components/ui/DropdownBtn.vue";
import MenuAccordeon from "@/components/ui/MenuAccordeon.vue";
const open = ref(false);
let menu = reactive({
  words: {
    title: "Slovná zásoba",
    items: [
      { text: "Slová podľa tém", to: "/words" },
      { text: "Vlastné slová", to: "/custom-words" },
      { text: "Upraviť vlastné slová", to: "/edit-custom-words" },
    ],
  },
  grammar: {
    title: "Gramatika",
    items: [
      { text: "Predložky", to: "/prepositions" },
      { text: "Nepravidelné slovesá", to: "/irregular-verbs" },
    ],
  },
});
function closeMenu(text) {
  console.log(text);
}
</script>


