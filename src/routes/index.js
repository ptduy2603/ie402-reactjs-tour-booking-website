import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PaymentPage from "../pages/Payment";

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: "/payment",
    component: PaymentPage,
  },
];
