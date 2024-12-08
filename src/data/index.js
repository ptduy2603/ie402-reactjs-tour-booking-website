import {
  faHouse,
  faLocationDot,
  faNewspaper,
  faAddressCard,
  faBlog,
  faCircleQuestion,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const navigationTabs = [
  {
    title: "trang chủ",
    icon: faHouse,
    path: "/",
  },
  {
    title: "tours",
    icon: faLocationDot,
    path: "/tours",
  },
  {
    title: "giới thiệu",
    icon: faAddressCard,
    path: "/about",
  },
  {
    title: "tin tức",
    icon: faNewspaper,
    path: "/news",
  },
  {
    title: "blogs",
    icon: faBlog,
    path: "/blogs",
  },
  {
    title: "FAQ",
    icon: faCircleQuestion,
    path: "/faq",
  },
  {
    title: "liên hệ",
    icon: faPhone,
    path: "/contact",
  },
];
