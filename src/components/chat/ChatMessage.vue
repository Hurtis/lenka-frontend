<template>
  <div :class="'message-wrap mb-4 ' + message.direction">
    <div class="message-avatar shadow-md"></div>
    <div class="message-content">
      <div
        v-for="(content, index) in message.text.split('::')"
        :class="'px-6 py-4 mb-2 rounded-xl shadow-md message-text w-fit ' + message.color"
        :key="index"
      >
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const { message } = defineProps(['message'])
onMounted(() => {
  window.scrollTo(0, document.body.scrollHeight - 50)
})
</script>

<style lang="scss" scoped>
.message-wrap {
  display: flex;
  align-items: flex-start;
  .message-content {
    display: flex;
    flex-direction: column;
  }
  .message-more {
    cursor: pointer;
  }
}
.user.message-wrap {
  flex-direction: row-reverse;
}

.message-avatar {
  border-radius: 50%;
  border: 1px solid #999;
  width: 50px;
  min-width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
}

.bot.message-wrap {
  .message-avatar {
    background-image: url(@/assets/img/bot-avatar.jpg);
    margin-right: 10px;
  }
  .message-text {
    border: 1px solid #ededed;
    background-color: #fff;
    color: #333;
  }
  .message-text.wrong:first-of-type {
    border: 1px solid rgb(252 165 165);
    background-color: rgb(254 202 202);
    color: rgb(185 28 28);
  }
}
.user.message-wrap {
  .message-avatar {
    margin-left: 10px;
    background-image: url(@/assets/img/user-avatar.png);
  }
  .message-text {
    background-color: rgb(14 165 233);
    color: #fff;
  }
}
</style>
