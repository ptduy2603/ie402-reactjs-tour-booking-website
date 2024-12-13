import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PaymentPage from "../pages/Payment";
import SearchPage from "../pages/Search";

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
];

export const privateRoutes = [
  {
    path: "/payment",
    component: PaymentPage,
  },
];
