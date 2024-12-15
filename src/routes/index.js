import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PaymentPage from "../pages/Payment";
import RegisterPage from "../pages/Register";
import TourDetailPage from "../pages/TourDetail";

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
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "tour/detail/:slug",
    component: TourDetailPage,
  },
];

export const privateRoutes = [
  {
    path: "/payment",
    component: PaymentPage,
  },
];
