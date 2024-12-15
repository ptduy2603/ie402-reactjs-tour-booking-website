import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PaymentPage from "../pages/Payment";
import RegisterPage from "../pages/Register";
import TourDetailPage from "../pages/TourDetail";
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
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/detail",
    component: TourDetailPage,
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
