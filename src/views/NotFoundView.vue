<template>
  <main class="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-sky-500">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Stránka neexistuje.
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Požadovanú stránku sa nepodarilo nájsť.<br />Je možné, že zadaná adresa je nesprávna alebo
        stránka už neexistuje.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          to="/"
          class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Domov</RouterLink
        >
      </div>
    </div>
  </main>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
