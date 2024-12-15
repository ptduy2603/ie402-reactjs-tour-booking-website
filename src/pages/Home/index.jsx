import styles from "./Home.module.scss";

import { useState } from "react";
import locationIcon from "/images/location_icon.svg";
import calendarIcon from "/images/calender_icon.svg";
import planeIcon from "/images/plane_icon.svg";
import Button from "../../components/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classNames from "classnames";
import Card from "../../components/Card";

import React from "react";

function HomePage() {
  const [startDate, setStartDate] = useState(new Date());

  const tourData = [
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
    {
      id: 7,
      image: "https://via.placeholder.com/300x200",
      title: "Bến nhà rồng - bến bạch đằng - bảo tàng chiến dịch HCM",
      priceOriginal: "6.500.000đ",
      priceDiscounted: "6.300.000đ",
      distance: 8,
      rating: 5,
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300x200",
      title: "Bến nhà rồng - bến bạch đằng - bảo tàng chiến dịch HCM",
      priceOriginal: "6.500.000đ",
      priceDiscounted: "6.300.000đ",
      distance: 8,
      rating: 5,
    },
  ];

  const tourDataQ1 = [
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
    {
      id: 7,
      image: "https://via.placeholder.com/300x200",
      title: "Bến nhà rồng - bến bạch đằng - bảo tàng chiến dịch HCM",
      priceOriginal: "6.500.000đ",
      priceDiscounted: "6.300.000đ",
      distance: 8,
      rating: 5,
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300x200",
      title: "Bến nhà rồng - bến bạch đằng - bảo tàng chiến dịch HCM",
      priceOriginal: "6.500.000đ",
      priceDiscounted: "6.300.000đ",
      distance: 8,
      rating: 5,
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={"/images/banner.png"}
            alt="anh_phong_canh"
            className="relative w-full"
          />
          <div className="inner">
            <div className="relative">
              <div className={styles.content}>
                <h2 className={styles.title}>Đặt Tour du lịch!</h2>
                <p className={styles.subTitle}>
                  Hơn 300 tours du lịch ở Việt Nam và Quốc Tế
                </p>

                <div className={styles.wrapper}>
                  <div className={styles.inputFieldWrapper}>
                    <img src={locationIcon} className="w-9 h-9" />
                    <input
                      type="text"
                      placeholder="Bạn muốn đi đâu?"
                      className={styles.textFiled}
                    />
                  </div>

                  <div
                    className={classNames(
                      "flex justify-between w-full flex-row gap-3",
                      styles.flexWrapper
                    )}
                  >
                    <div className={styles.inputFieldWrapper2}>
                      <img src={calendarIcon} className="w-9 h-9" />
                      <div className="flex flex-col">
                        <p>Ngày khởi hành</p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Chọn ngày khởi hành"
                          className="border-none focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className={styles.inputFieldWrapper2}>
                      <img src={planeIcon} className="w-9 h-9" />
                      <div className="w-full pr-4">
                        <p>Khởi hành từ</p>
                        <select className="focus:outline-none border-0 w-full">
                          <option value="">Tất Cả</option>
                          <option>Thủ Đức</option>
                          <option>Quận 1</option>
                          <option>Quận 2</option>
                          <option>Quận 3</option>
                          <option>Quận 10</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      classNames={styles.button}
                      variant={"primary"}
                      content="Tìm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center border-b-[0.5px] border-[#dee2e6]">
              <div className="flex flex-row cursor-pointer flex-1 px-8 py-10 gap-5">
                <img src="/images/best-price.png" alt="" className="w-24" />
                <div className="flex flex-col item gap-3">
                  <h3 className="hover:text-[--primary-color] text-2xl font-medium">
                    Đảm bảo giá tốt nhất
                  </h3>
                  <p className="text-[#888] text-xl w-[100%] text-justify leading-[1.3]">
                    Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt
                    nhất, những chương trình khuyến mãi hấp dẫn nhất
                  </p>
                </div>
              </div>

              <div className="flex flex-row cursor-pointer flex-1 px-8 py-10 gap-5 border-x-[0.5px] border-[#dee2e6]">
                <img src="/images/best-price.png" alt="" className="w-24" />
                <div className="flex flex-col item gap-3">
                  <h3 className="hover:text-[--primary-color] text-2xl font-medium">
                    Dịch vụ tin cậy - Giá trị đích thực
                  </h3>
                  <p className="text-[#888] text-xl w-[100%] text-justify leading-[1.3]">
                    Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách
                    hàng nhanh và chính xác nhất với dịch vụ tin cậy, giá trị
                    đích thực.
                  </p>
                </div>
              </div>

              <div className="flex flex-row cursor-pointer flex-1 px-8 py-10 gap-5">
                <img src="/images/best-price.png" alt="" className="w-24" />
                <div className="flex flex-col item gap-3">
                  <h3 className="hover:text-[--primary-color] text-2xl font-medium">
                    Đảm bảo chất lượng
                  </h3>
                  <p className="text-[#888] text-xl w-[100%] text-justify leading-[1.3]">
                    Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định
                    kỳ để đảm bảo chất lượng tốt nhất của dịch vụ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames(styles.listTour)}>
          <div className="inner pt-10">
            <div className="flex flex-col gap-11">
              <div className="dealTour">
                <center className="mb-10">
                  <h2 className="text-4xl font-semibold text-[#ff5722] cursor-pointer hover:text-[--primary-color]">
                    TOUR GIỜ CHÓT{" "}
                    <span className="text-black hover:text-[--primary-color]">
                      GIÁ TỐT
                    </span>
                  </h2>
                  <p className="text-[#888] mt-2">
                    Cùng SGTravel điểm qua một vài địa điểm du lịch trong nước
                    thu hút du khách nhất nhé!
                  </p>
                </center>

                {<Card tours={tourData} />}

                <div className="mt-10 flex justify-between gap-4">
                  <img
                    className="w-[49%]"
                    src="/images/banner-home1.png"
                    alt="banner-quang-cao-tour"
                  />
                  <img
                    className="w-[49%]"
                    src="/images/banner-home2.png"
                    alt="banner-quang-cao-tour"
                  />
                </div>
              </div>

              <div className="tour-q1">
                <center className="mb-10">
                  <h2 className="text-4xl font-semibold cursor-pointer hover:text-[--primary-color]">
                    TOUR QUẬN 1
                  </h2>
                  <p className="text-[#888] mt-2">
                    Cùng SGTravel điểm qua một vài địa điểm du lịch tại quận 1 nhé
                  </p>
                </center>

                {<Card tours={tourDataQ1} />}
              </div>

              <div className="">
                <center className="mb-10">
                  <h2 className="text-4xl font-semibold cursor-pointer hover:text-[--primary-color]">
                  ĐIỂM ĐẾN YÊU THÍCH
                  </h2>
                  <p className="text-[#888] mt-2">
                    Các điểm đến yêu thích của khách hàng tại SGTravel
                  </p>
                </center>
                
                <div className="">
                    <img src="/images/favorite-1.png" alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
