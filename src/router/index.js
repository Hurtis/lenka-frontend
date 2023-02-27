import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VerbsView from "../views/VerbsView.vue";
import PrepView from "../views/PrepView.vue";
import EditWordsView from "../views/EditWordsView.vue";
import CustomView from "../views/CustomView.vue";
import WordsView from "../views/WordsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/words",
      name: "words",
      component: WordsView,
    },
    {
      path: "/irregular-verbs",
      name: "irregular-verbs",
      component: VerbsView,
    },
    {
      path: "/prepositions",
      name: "prepositions",
      component: PrepView,
    },
    {
      path: "/edit-custom-words",
      name: "edit-custom-words",
      component: EditWordsView,
    },
    {
      path: "/custom-words",
      name: "custom-words",
      component: CustomView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
