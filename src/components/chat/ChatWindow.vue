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
      <div v-if="data.score.all > 0" class="score">
        skóre: {{ data.score.success }}/{{ data.score.all }}
      </div>
    </div>
    <ChatForm
      @formSent="createUserMessage($event)"
      :settings="data.form"
      v-if="data.form !== null"
    />
  </div>
</template>

<script setup>
import ChatMessage from '@/components/chat/ChatMessage.vue'
import SuggestButtons from '@/components/chat/SuggestButtons.vue'
import ChatForm from '@/components/chat/ChatForm.vue'
import { useFetchLocal } from '@/composable/useFetchLocal.js'
import { ref, onMounted } from 'vue'
const { settings } = defineProps(['settings'])
const data = ref({
  messages: [],
  conversation: false,
  typing: false,
  form: null,
  menu: false,
  score: {
    success: 0,
    all: 0
  }
})
const errorMsg = {
  text: 'Niečo sa pokazilo. Skús mi napísať neskôr.',
  conversation: false,
  buttons: [],
  color: ['wrong'],
  form: false
}
function createUserMessage(userMessage) {
  data.value.messages.push({
    text: userMessage,
    direction: 'user',
    buttons: [],
    color: ''
  })
  const unifiedUserMessage = unifieString(userMessage)

  if (settings.sourceType === 'server') {
    fetchServerData(unifiedUserMessage)
  }
  if (settings.sourceType === 'local') {
    const localData = useFetchLocal(unifiedUserMessage)
    createBotMessage(localData)
  }
}

function createBotMessage(botMessage) {
  data.value.messages.push({
    text: botMessage.text,
    direction: 'bot',
    buttons: botMessage.buttons,
    color: botMessage.color
  })
  data.value.conversation = botMessage.conversation
  data.value.form = botMessage.form
  if (botMessage.correctAnswer < 2) {
    if (botMessage.correctAnswer === 1) {
      data.value.score.success++
      data.value.score.all++
    }
    if (botMessage.correctAnswer === 0) {
      data.value.score.all++
    }
  }
}

function unifieString(myString) {
  const unifiedString = myString.toLowerCase().trim()
  return unifiedString.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

async function fetchServerData(userText) {
  try {
    const question = { question: userText, conversation: data.conversation }
    const response = await fetch(settings.url, {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const serverData = await response.json()
    createBotMessage(serverData)
  } catch (error) {
    console.error('Error:', error)
    createBotMessage(errorMsg)
  }
}

onMounted(() => {
  if (settings.sourceType === 'server') {
    fetchServerData('start')
  } else if (settings.startMessage !== '') {
    createBotMessage(settings.startMessage)
  } else {
    createBotMessage(settings.errorMsg)
  }
})
</script>

<style lang="scss" scoped>
.chat-container {
  max-width: 640px;
  padding-top: 100px;
  .chat-panel {
    padding-bottom: 100px;
  }
  .score {
    color: #666;
    font-size: 14px;
    line-height: 20px;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
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
