<template>
  <div>
    <ChatWindow :settings="settings" />
  </div>
</template>

<script setup>
import ChatWindow from '@/components/chat/ChatWindow.vue'
const settings = {
  sourceType: 'server',
  url: 'https://lenka.hurtis.sk/api/aslike.php',
  startMessage: ''
}
</script>
