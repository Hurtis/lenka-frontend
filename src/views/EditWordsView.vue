<template>
  <div class="py-8 mx-auto max-w-7xl px-6 lg:px-8">
    <h3 class="font-bold mb-5">Pridaj si vlastné slovičko</h3>
    <form @submit.prevent="addNewWord()">
      <div class="overflow-hidden shadow sm:rounded-md mb-4">
        <div class="bg-white p-6 pb-8">
          <div class="grid grid-cols-10 gap-3">
            <div class="col-span-10 sm:col-span-4">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
                >Anglicky</label
              >
              <input
                v-model="en"
                type="text"
                class="mt-1 px-1 py-1.5 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div class="col-span-10 sm:col-span-4">
              <label class="block text-sm font-medium text-gray-700"
                >Slovensky</label
              >
              <input
                v-model="sk"
                type="text"
                class="mt-1 px-1 py-1.5 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div
              class="pt-2 col-span-10 sm:col-span-2 flex flex-col justify-end"
            >
              <button
                type="submit"
                class="py-2 px-2 w-full block bg-sky-500 hover:bg-sky-600 rounded-md shadow-sm text-center sm:text-sm text-white"
              >
                Pridať
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <WordsTable
      v-if="custom.words.length > 0"
      :myWords="custom.words"
      @delete="deleteWord($event)"
    />
  </div>
</template>

<script setup>
import WordsTable from "@/components/ui/WordsTable.vue";
import { reactive, ref, onMounted } from "vue";
let en = ref("");
let sk = ref("");

let custom = reactive({
  words: [],
});
function addNewWord() {
  if (sk.value !== "" && en.value !== "") {
    custom.words.push({
      en: en.value,
      sk: sk.value,
    });
  }
  sk = ref("");
  en = ref("");
  updateStorage();
}
function deleteWord(index) {
  custom.words.splice(index, 1);
  updateStorage();
}
function updateStorage() {
  localStorage.setItem("customWords", JSON.stringify(custom.words));
}
function getData() {
  let data = JSON.parse(localStorage.getItem("customWords"));
  if (data !== null) {
    custom.words = data;
  }
}
onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
</style>