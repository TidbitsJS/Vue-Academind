import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // { path: "/teams", component: TeamsList, alias: "/" }, // alias to redirect
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("Users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    { path: "/teams/:teamId", component: TeamMembers, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior: function(to, from, savedPosition) {
    console.log("Scroll behavior", to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  console.log("Global router", to, from);

  if (to.meta.needsAuth) {
    console.log("Needs auth!");
  }

  next();

  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } });
  // }
  // next(false); // to cancel next navigation
});

router.afterEach((to, from) => {
  console.log("Global afterEach");
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount("#app");
