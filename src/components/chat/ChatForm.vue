<template>
  <form @submit.prevent="formSubmited()" class="form">
    <input
      v-model="myText"
      class="textarea"
      :type="settings.type"
      :placeholder="settings.placeholder"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
const { settings } = defineProps(["settings"]);
const emit = defineEmits(["formSent"]);
const myText = ref("");
function formSubmited() {
  if (myText.value != "") {
    emit("formSent", myText.value);
    myText.value = "";
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 99;
  background-color: #fff;
  border: none;
  border: 1px solid #ddd;
  outline: 0;
  padding-left: 15px;
  padding-right: 15px;
  color: #000;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  position: fixed;
}
@media (min-width: 768px) {
  .form {
    margin-top: 100px;
  }
  .textarea {
    position: static;
  }
}
</style>