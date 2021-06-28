import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import UserCart from "./pages/UserCart.vue";
import ShopAdmin from "./pages/ShopAdmin.vue";
import NotFound from "./components/ui/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/cart", component: UserCart },
    { path: "/admin", component: ShopAdmin },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
