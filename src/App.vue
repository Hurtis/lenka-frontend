<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
//import NewHeader from "@/components/ui/NewHeader.vue";
import TheHeader from "@/components/ui/TheHeader.vue";
</script>

