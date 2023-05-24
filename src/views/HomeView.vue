<template>
  <div class="bg-white pt-24 sm:pt-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <img
          src="@/assets/img/bot-avatar.jpg"
          alt="chatbot-lenka"
          class="w-20 h-20 mb-5 rounded-full lg:mx-auto border border-gray-400"
        />

        <h2 class="text-base font-semibold leading-7 text-sky-500">Chatbot Lenka</h2>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Virtuálna učiteľka angličtiny.
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Chatbot Lenka je dokonalý spoločník pre tých, ktorí sa učia angličtinu. Ponúka testovanie
          slovíčok a&nbsp;anglickej gramatiky. Je objektívna a&nbsp;vždy k&nbsp;dispozícii, takže sa
          môžeš učiť vlastným tempom.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-center mb-12 pb-6"
        >
          S čím viem pomôcť
        </h2>

        <dl
          class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500"
              >
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-5">
        <p class="mt-5 mb-5 text-center text-sm leading-6 text-slate-500">© 2023 Hurtis.sk</p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import {
  BookOpenIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  ListBulletIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Slovná zásoba',
    description: 'Nechaj sa vyskúšať základné anglické slová z\u00A0rôznych oblastí života.',
    icon: BookOpenIcon
  },
  {
    name: 'Vlastné slová',
    description:
      'Vytvor si vlastný zoznam slov ktoré si chceš zopakovať. Lenka ťa ich rada vyskúša.',
    icon: BookmarkIcon
  },
  {
    name: 'Predložky',
    description:
      'Požiť správnu predložku nie je vždy jednoduché. Otestuj sa, či ich používaš správne.',
    icon: EllipsisHorizontalIcon
  },
  {
    name: 'Nepravidelné slovesá',
    description:
      'Nepravidelné slovesá sú základ anglickej gramatiky. Lenka overí ako dobre ich poznáš.',
    icon: ListBulletIcon
  }
]
</script>
