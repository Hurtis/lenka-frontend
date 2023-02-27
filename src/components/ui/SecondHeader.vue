<template>
  <header class="bg-white shadow fixed w-full top-16">
    <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between">
        <div class="">
          <h1 class="py-2 text-md font-semibold tracking-tight text-gray-900">
            Vlastné slovíčka: {{ count }}
          </h1>
        </div>
        <div class="">
          <RouterLink
            to="/add-custom-words"
            class="py-2 px-4 w-full block bg-sky-500 hover:bg-sky-600 rounded-md shadow-sm text-center sm:text-sm text-white"
            >Pridať slovíčko</RouterLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { count } = defineProps(["count"]);
</script>

