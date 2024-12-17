import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";

import styles from "./Home.module.scss";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { SERVER_URL } from "~/constants";

function HomePage() {
  const [startDate, setStartDate] = useState(new Date());
  const [tourList, setTourList] = useState([]);
  useEffect(() => {
    const fetchTourList = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/tours`);
        const data = await response.json();
        setTourList(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTourList();
  }, []);

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
                  Hơn 50 tours du lịch ở Thành phố Hồ Chí Minh
                </p>

                <div className={styles.wrapper}>
                  <div className={styles.inputFieldWrapper}>
                    <img src="/images/location_icon.svg" className="w-9 h-9" />
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
                      <img
                        src="/images/calender_icon.svg"
                        className="w-9 h-9"
                      />
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
                      <img src="/images/plane_icon.svg" className="w-9 h-9" />
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

        <div className={classNames('pb-20', styles.listTour)}>
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

                <div className="row">
                  {tourList.map((tour) => (
                    <div
                      className="col col-lg-4 col-md-6 col-sm-12"
                      key={tour?.id}
                    >
                      <Card tour={tour} />
                    </div>
                  ))}
                </div>

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
                    Cùng SGTravel điểm qua một vài địa điểm du lịch tại quận 1
                    nhé
                  </p>
                </center>

                <div className="row">
                  {tourList.map((tour) => (
                    <div
                      className="col col-lg-4 col-md-6 col-sm-12"
                      key={tour?.id}
                    >
                      <Card tour={tour} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <center className="mb-10">
                  <h2 className="text-4xl font-semibold cursor-pointer hover:text-[--primary-color]">
                    ĐIỂM ĐẾN YÊU THÍCH
                  </h2>
                  <p className="text-[#888] mt-2">
                    Các điểm đến yêu thích của khách hàng tại SGTravel
                  </p>
                </center>

                <div>
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
