import { FaBus } from "react-icons/fa";
import { LuCalendar1, LuCalendarClock } from "react-icons/lu";
import MapComponent from "~/components/MapComponent";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import Card from "~/components/Card";
import ImageSlider from "~/components/ImageSlider";
import styles from "./TourDetail.module.scss";
import { useEffect, useState } from "react";
import { SERVER_URL } from "~/constants";
import { useParams } from "react-router-dom";
import { convertPrice } from "~/utils";
import AppLoading from "~/components/Apploading";
import GoToTopButton from "~/components/GoToTopButton";

const TourDetailPage = () => {
  const { id } = useParams();
  const [tourDetail, setTourDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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

    const fetchTour = async () => {
      try {
        setIsLoading(true);
        // fetch tour's detail from API
        const response = await fetch(`${SERVER_URL}/tours/tour/${id}`);
        const data = await response.json();
        setTourDetail(data.data.tourDetail);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTour();
    fetchTourList();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className="flex justify-center items-center h-96 bg-white">
            <AppLoading />
          </div>
        ) : (
          <div className="inner py-6">
            <div className={styles.breadcrumb}>
              <Link to="/" className="flex items-center gap-1">
                Trang chủ
              </Link>
              /<Link to="/tours">Tours</Link>/<span>{tourDetail.name}</span>
            </div>

            <section className={classNames("row", styles["tour_content"])}>
              <div className="col col-lg-8 col-md-9 col-sm-12 col-sm-order-2">
                <div className="bg-white shadow-lg p-4 flex flex-col gap-4 rounded">
                  <div className="w-full">
                    <ImageSlider images={tourDetail.images} />
                    <div className="my-1 py-2">
                      <h2 className={styles.title}>Chương trình tour</h2>
                      <ul className="pl-6 mb-4">
                        {tourDetail.routes.map((route, index) => (
                          <li key={index}>
                            Chặng {index + 1}: {route.description}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Map Section */}
                    <div className={styles.map}>
                      <h2 className={styles.title}>Bản đồ tour</h2>
                      <div className={styles["map-wrapper"]}>
                        <MapComponent
                          roads={tourDetail?.routes}
                          locations={tourDetail?.locations}
                          centerPoint={tourDetail?.centerPoint}
                          zoomVal={tourDetail?.zoomVal ?? 16}
                        />
                      </div>
                    </div>

                    <div className="my-1 py-2">
                      <h2 className={styles.title}>Chính sách tour</h2>
                      <ul>
                        <li>
                          Vé trẻ em:
                          <ul className="pl-6 mt-2">
                            <li>Trẻ em dưới 2 tuổi: thu 300.000đ.</li>
                            <li>
                              Trẻ em từ 2 đến dưới 6 tuổi: mua 100% VMB người
                              lớn. Gia đình tự lo cho bé ăn ngủ và tự trả phí
                              tham quan (nếu có).
                            </li>
                            <li>
                              Hai người lớn chỉ được kèm 1 trẻ em dưới 6 tuổi.
                              Từ trẻ thứ 2 trở lên, mỗi em phải đóng bằng giá
                              trẻ em từ 6 đến 11 tuổi.
                            </li>
                            <li>
                              Trẻ em từ 6 - 11 tuổi: tiêu chuẩn gồm VMB, ăn uống
                              và tham quan theo chương trình.
                            </li>
                            <li>
                              Trẻ em trên 11 tuổi: áp dụng giá và các tiêu chuẩn
                              dịch vụ như người lớn.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Giá tour bao gồm:
                          <ul className="pl-6 mt-2">
                            <li>
                              Chi phí xe máy lạnh phục vụ theo chương trình.
                            </li>
                            <li>Chi phí ăn uống theo chương trình.</li>
                            <li>Chi phí tham quan và tàu thuyền.</li>
                            <li>Chi phí Hướng dẫn viên tiếng Việt.</li>
                            <li>Quà tặng: Nón, nước suối, khăn lạnh</li>
                          </ul>
                        </li>
                        <li>
                          Giá tour không bao gồm:
                          <ul className="pl-6 mt-2">
                            <li>
                              Chi phí tham quan - ăn uống ngoài chương trình,
                              giặt ủi, điện thoại và các chi phí cá nhân khác.
                            </li>
                            <li>
                              Chi phí phụ thu người nước ngoài, phụ thu phòng
                              đơn (nếu có).
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="my-1 py-2">
                      <h2 className={styles.title}>Điều kiện & Quy định</h2>
                      <p>
                        Các điều kiện hủy tour và quy định khác được áp dụng
                        theo chính sách của công ty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-3 col-sm-12 col-sm-order-1">
                <aside className={styles.sidebar}>
                  <h1 className="text-4xl font-bold mb-4">{tourDetail.name}</h1>
                  <p className="text-gray-500 line-through text-2xl">
                    {convertPrice(tourDetail.price + 900000)}đ
                  </p>
                  <p className="text-red-600 font-bold text-3xl">
                    Giá mới:{" "}
                    <span className="text-black">
                      {convertPrice(tourDetail.price)}đ
                    </span>
                  </p>
                  <div className="bg-red-100 text-red-600 text-lg font-medium px-2 py-1 rounded-md inline-block mt-2">
                    Tiết kiệm -15%
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <span className="flex flex-row justify-center material-icons text-5xl text-orange-500 mr-2">
                        <FaBus />
                      </span>
                      <p className="text-2xl text-gray-700">
                        Di chuyển: Di chuyển bằng Ô tô
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-5xl text-blue-500 mr-2">
                        <LuCalendar1 />
                      </span>
                      <p className="text-2xl text-gray-700">
                        Lịch khởi hành: Thứ 2 hàng tuần
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-5xl text-green-500 mr-2">
                        <LuCalendarClock />
                      </span>
                      <p className="text-2xl text-gray-700">
                        Thời gian: 7h30 - 8h30
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4 justify-between">
                    <Button
                      content="Đặt Tour"
                      extraStyles={{ flex: 1, minWidth: "unset" }}
                      variant="primary"
                    />
                    <Button
                      content="Yêu cầu đặt"
                      extraStyles={{ flex: 1, minWidth: "unset" }}
                      variant="outline"
                    />
                  </div>
                </aside>
              </div>
            </section>

            {/* Similar Tours Section (Thay bằng Component)*/}
            <section className={styles["related-product-section"]}>
              <h2 className={styles["section_heading"]}>Các tour tương tự</h2>
              <div className="row mt-4">
                {tourList.map((tour) => (
                  <div
                    className="col col-lg-4 col-md-6 col-sm-12"
                    key={tour?.id}
                  >
                    <Card tour={tour} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
      <GoToTopButton />
    </>
  );
};

export default TourDetailPage;
