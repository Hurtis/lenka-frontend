import { ref } from "vue";
let actualLocalWord = ref("");
let actualLocalIndex = ref(0);
export function useFetchLocal(userText) {
  let text = "";
  let color = "basic";
  let correctAnswer = 2;
  if (userText === "zacat") {
    text = 'Prelož do angličtiny: "' + getNewLocalWord() + '".';
  } else if (userText === "neviem") {
    text =
      'Správna odpoveď je: "' +
      actualLocalWord.value +
      '".::Ďalšie slovo: "' +
      getNewLocalWord() +
      '".';
    color = "wrong";
    correctAnswer = 0;
  } else {
    if (userText === actualLocalWord.value) {
      text = 'Správe 👍, Ďalšie slovo: "' + getNewLocalWord() + '".';
      correctAnswer = 1;
      color = "basic";
    } else {
      text =
        "Žiaľ nie. správna odpoveď bola: " +
        actualLocalWord.value +
        '".::Ďalšie slovo: "' +
        getNewLocalWord() +
        '".';
      color = "wrong";
      correctAnswer = 0;
    }
  }

  let localMessage = {
    text: text,
    conversation: true,
    buttons: [
      { type: "message", text: "Neviem" },
      {
        type: "appLink",
        text: "Upraviť slovíčka",
        url: "/edit-custom-words",
      },
    ],
    color: color,
    form: { show: true, placeholder: "Napíš preklad ...", type: "text" },
    correctAnswer: correctAnswer,
  };
  function getNewLocalWord() {
    let items = JSON.parse(localStorage.getItem("customWords"));
    let item = items[actualLocalIndex.value];
    actualLocalIndex.value++;
    if (actualLocalIndex.value === items.length) {
      actualLocalIndex.value = 0;
    }
    actualLocalWord.value = item.en;
    return item.sk;
  }
  return localMessage;
}
