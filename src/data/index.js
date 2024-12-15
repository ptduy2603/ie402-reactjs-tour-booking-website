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

// mock data for tour render testing
export const mockTour = {
  roads: [
    {
      Name: "road dinh doc lap - cho ben thanh",
      description: "Đường đi từ Dinh Độc Lập đến Chợ Bến Thành",
      symbol: {
        color: [235, 21, 57],
      },
      paths: [
        [106.69452231450045, 10.77612602972707],
        [106.69474427666117, 10.775926767882806],
        [106.69605621411841, 10.774748916766491],
        [106.69613634511225, 10.774820059624044],
        [106.69617758407587, 10.774854642951546],
        [106.69712702478745, 10.773993971659255],
        [106.69763932670952, 10.773156722259634],
      ],
    },
    {
      Name: "road cho ben thanh - bao tang my thuat",
      description: "Đường đi từ Chợ Bến Thành đến Bảo tàng mỹ thuật TP.HCM",
      symbol: {
        color: [29, 93, 222],
      },
      paths: [
        [106.69763932670952, 10.773156722259634],
        [106.69600138513465, 10.772114354182376],
        [106.69529549802414, 10.771657222327113],
        [106.69550997976462, 10.771198455488873],
        [106.69597123808764, 10.771178975333918],
        [106.69647622488415, 10.771150077946704],
        [106.69655115909848, 10.771185814487252],
        [106.69669930769268, 10.77118498738552],
        [106.69792748840052, 10.771714271518382],
        [106.69805486655426, 10.771785125162348],
        [106.69818076273984, 10.771842929304388],
        [106.69825621526901, 10.771881670837796],
        [106.6983697062379, 10.77192778239021],
        [106.69841530379111, 10.7719490266387],
        [106.6984790062552, 10.771966977204134],
        [106.69850616362146, 10.7719722470947],
        [106.6987914836059, 10.771773143977788],
        [106.69882299956183, 10.771733455085938],
        [106.69884672743487, 10.771667534501164],
        [106.69888142851367, 10.771536116444645],
        [106.69898368773127, 10.771204771416015],
        [106.6990279441804, 10.771040745610877],
        [106.69930157267693, 10.770456289068925],
        [106.69951480829332, 10.770109133083201],
      ],
    },
  ],
  locations: [
    {
      Name: "Dinh Độc Lập",
      Content:
        "Dinh Độc Lập là một tòa dinh thự tại Thành phố Hồ Chí Minh, từng là nơi ở và làm việc của Tổng thống Việt Nam Cộng hòa trước Sự kiện 30 tháng 4 năm 1975.",
      longitude: 106.69532597137638,
      latitude: 10.77702321487456,
      symbolURL: "https://cdn-icons-png.flaticon.com/512/984/984038.png",
    },
    {
      Name: "Chợ Bến Thành",
      Content:
        "Chợ Bến Thành là một ngôi chợ nằm tại quận 1, Thành phố Hồ Chí Minh. Chợ được khởi công xây dựng từ năm 1912, hình ảnh đồng hồ ở cửa nam của ngôi chợ này được xem là biểu tượng không chính thức của Thành phố Hồ Chí Minh.",
      longitude: 106.69798404050957,
      latitude: 10.772579421442781,
      symbolURL: "https://cdn-icons-png.flaticon.com/512/1198/1198352.png",
    },
    {
      Name: "Bảo tàng mỹ thuật",
      Content:
        "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh tọa lạc tại số 97 Phó Đức Chính, Quận 1, Thành phố Hồ Chí Minh, Việt Nam; được thành lập năm 1987 và đi vào hoạt động năm 1991. Tòa nhà bao gồm 3 tầng, trưng bày các tác phẩm hội họa, điêu khắc, cổ vật có giá trị mỹ thuật cao.",
      longitude: 106.69918684361534,
      latitude: 10.769971148964832,
      symbolURL: "https://cdn-icons-png.flaticon.com/512/5389/5389807.png",
    },
  ],
  centerPoint: {
    longitude: 106.69712702478745,
    latitude: 10.773993971659255,
  },
  zoomVal: 16,
  images: [
    {
      id: 1,
      url: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/16/dinh-doc-lap-1-1545.jpg",
      // caption or not
    },
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKCqEEqh2oojP5FVbNZAOfC-RXeQCEWJ8bw&s",
    },
    {
      id: 1,
      url: "https://cdn3.ivivu.com/2022/10/Bao-tang-My-thuat-TP-HCM-ivivu.jpg",
    },
  ],
};

export const tourList = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    title: "Dinh độc lập - Miếu Bà - Chợ Bình Tây ",
    priceOriginal: "6.200.000đ",
    priceDiscounted: "5.900.000đ",
    distance: 5,
    rating: 4,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    title: "Dinh độc lập - Chợ bến thành - Bảo tàng mỹ thuật",
    priceOriginal: "6.500.000đ",
    priceDiscounted: "6.000.000đ",
    distance: 6,
    rating: 4.5,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    title: "Nhà thờ Đức Bà - Nhà hát thành phố HCM - Bảo tàng lịch sử VN",
    priceOriginal: "6.500.000đ",
    priceDiscounted: "6.300.000đ",
    distance: 6,
    rating: 3,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200",
    title: "Thảo cầm viên - phố đi bộ - Khu phố Tây bùi viện",
    priceOriginal: "6.500.000đ",
    priceDiscounted: "6.300.000đ",
    distance: 3,
    rating: 5,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200",
    title: "Bảo tàng lịch sử - Đường sách nguyễn văn bình - Dinh độc lập",
    priceOriginal: "6.500.000đ",
    priceDiscounted: "6.300.000đ",
    distance: 7,
    rating: 4,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300x200",
    title: "Bến nhà rồng - bến bạch đằng - bảo tàng chiến dịch HCM",
    priceOriginal: "6.500.000đ",
    priceDiscounted: "6.300.000đ",
    distance: 8,
    rating: 5,
  },
];
