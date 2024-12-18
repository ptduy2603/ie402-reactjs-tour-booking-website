import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PaymentPage from "../pages/Payment";
import RegisterPage from "../pages/Register";
import TourDetailPage from "../pages/TourDetail";
import SearchPage from "../pages/Search";
import AboutPage from "../pages/About";

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
    path: "tour/detail/:id",
    component: TourDetailPage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/payment",
    component: PaymentPage,
  },
];

export const privateRoutes = [
  {
    path: "/payment",
    component: PaymentPage,
  },
];
