<template>
  <div class="chat-container mx-auto">
    <div class="chat-panel px-2">
      <ul>
        <li v-for="(message, index) in data.messages" :key="index">
          <Transition name="bounce" mode="out-in" appear>
            <ChatMessage :message="message" v-if="message.text !== null" />
          </Transition>
        </li>
      </ul>

      <SuggestButtons
        v-if="data.messages.length > 0"
        :buttons="data.messages[data.messages.length - 1].buttons"
        @sendChoice="createUserMessage($event)"
      />
    </div>
    <ChatForm
      @formSent="createUserMessage($event)"
      :settings="data.form"
      v-if="data.form !== null"
    />
  </div>
</template>

<script setup>
import ChatMessage from "@/components/chat/ChatMessage.vue";
import SuggestButtons from "@/components/chat/SuggestButtons.vue";
import ChatForm from "@/components/chat/ChatForm.vue";
import { reactive, onMounted } from "vue";
const { settings } = defineProps(["settings"]);
const data = reactive({
  messages: [],
  conversation: false,
  typing: false,
  form: null,
  menu: false,
});
const errorMsg = {
  text: "Niečo sa pokazilo. Skús mi napísať neskôr.",
  conversation: false,
  buttons: [],
  color: ["wrong"],
  form: false,
};
let localActualWord = "";
let localIndexWord = 0;
function createUserMessage(userMessage) {
  data.messages.push({
    text: userMessage,
    direction: "user",
    buttons: [],
    color: "",
  });
  if (settings.sourceType === "server") {
    fetchData(userMessage);
  }
  if (settings.sourceType === "local") {
    getLocalData(userMessage);
  }
}

function createBotMessage(botMessage) {
  data.messages.push({
    text: botMessage.text,
    direction: "bot",
    buttons: botMessage.buttons,
    color: botMessage.color,
  });
  data.conversation = botMessage.conversation;
  data.form = botMessage.form;
}
function unifieString(myString) {
  let unifiedData = myString.toLowerCase().trim();
  unifiedData = unifiedData.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return unifiedData;
}

function fetchData(myData) {
  let customerText = unifieString(myData);
  let question = { question: customerText, conversation: data.conversation };
  fetch(settings.url, {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      createBotMessage(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      createBotMessage(errorMsg);
    });
}

function getLocalData(userText) {
  let customerText = unifieString(userText);
  let text = "";
  let color = "basic";
  if (customerText === "zacat") {
    text = 'Prelož do angličtiny: "' + getNewLocalWord() + '".';
  } else if (customerText === "neviem") {
    text =
      'Správna odpoveď je: "' +
      localActualWord +
      '".::Ďalšie slovo: "' +
      getNewLocalWord() +
      '".';
    color = "wrong";
  } else {
    if (userText === localActualWord) {
      text = 'Správe 👍, Ďalšie slovo: "' + getNewLocalWord() + '".';
      color = "basic";
    } else {
      text =
        "Žiaľ nie. správna odpoveď bola: " +
        localActualWord +
        '".::Ďalšie slovo: "' +
        getNewLocalWord() +
        '".';
      color = "wrong";
    }
  }
  let localMessage = {
    text: text,
    conversation: true,
    buttons: [
      { type: "message", text: "Neviem" },
      { type: "appLink", text: "Upraviť slovíčka", url: "/edit-custom-words" },
    ],
    color: color,
    form: { show: true, placeholder: "Napíš preklad ...", type: "text" },
  };
  createBotMessage(localMessage);
}

function getNewLocalWord() {
  let items = JSON.parse(localStorage.getItem("customWords"));
  let item = items[localIndexWord];
  localIndexWord++;
  if (localIndexWord === items.length) {
    localIndexWord = 0;
  }
  //let item = items[Math.floor(Math.random() * items.length)];
  localActualWord = item.en;
  return item.sk;
}

onMounted(() => {
  if (settings.sourceType === "server") {
    fetchData("start");
  } else if (settings.startMessage !== "") {
    createBotMessage(settings.startMessage);
  } else {
    createBotMessage(settings.errorMsg);
  }
});
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>