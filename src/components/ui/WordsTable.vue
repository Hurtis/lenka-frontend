<template>
  <div>
    <h3 class="font-bold mb-5">Tvoje slovíčka</h3>
    <div class="rounded-md shadow overflow-auto">
      <table class="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th
              class="border-y font-medium p-3 text-gray-700 text-left bg-gray-300 shadow-sm"
            >
              Anglicky
            </th>
            <th
              class="border-y font-medium p-3 text-gray-700 text-left bg-gray-300 shadow-sm"
            >
              Slovensky
            </th>
            <th
              class="border-y font-medium p-3 text-gray-700 text-left bg-gray-300 shadow-sm"
            >
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in myWords" :key="index">
            <td class="border-b border-slate-100 p-3 text-gray-700 bg-white">
              {{ row.en }}
            </td>
            <td class="border-b border-slate-100 p-3 text-gray-700 bg-white">
              {{ row.sk }}
            </td>
            <td
              class="border-b border-slate-100 p-3 text-gray-700 bg-white text-right"
            >
              <button @click="deleteIrem(index)" class="align-middle">
                <XMarkIcon class="h-4 w-4 text-gray-700" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
const { myWords } = defineProps(["myWords"]);
const emit = defineEmits(["delete"]);
function deleteIrem(index) {
  emit("delete", index);
}
</script>


