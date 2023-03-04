<template>
  <div>
    <ChatWindow :settings="settings" />
  </div>
</template>

<script setup>
import ChatWindow from "@/components/chat/ChatWindow.vue";

let localitems = JSON.parse(localStorage.getItem("customWords"));
let myMessage = {};
if (localitems === null) {
  myMessage = {
    text: "Nemáš žiadne vlastné slovíčka.::Pridaj si vlastne slovíčka a ja ťa ich vyskúšam.",
    color: "basic",
    buttons: [
      { type: "appLink", text: "Pridať slovíčka", url: "/edit-custom-words" },
    ],
    conversation: true,
    form: null,
  };
} else {
  let count = localitems.length;
  myMessage = {
    text:
      "Počet vlastných slovíčok: " +
      count +
      ".::Ja ti napíšem slovenské slovíčko a ty ho preložíš.",
    color: "basic",
    buttons: [
      { type: "message", text: "Začať" },
      { type: "appLink", text: "Upraviť slovíčka", url: "/edit-custom-words" },
    ],
    conversation: true,
    form: null,
  };
}
const settings = {
  sourceType: "local",
  url: "",
  startMessage: myMessage,
};
</script>

