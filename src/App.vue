<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/ui/TheHeader.vue";
</script>

