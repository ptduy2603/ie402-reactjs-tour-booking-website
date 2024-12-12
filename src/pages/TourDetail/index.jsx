import { FaBus } from "react-icons/fa";
import { LuCalendar1, LuCalendarClock } from "react-icons/lu";

const TourDetailPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Main Content */}
      <main className="flex flex-col md:flex-row p-4 gap-4">
        {/* Tour Detail Section */}
        <section className="md:w-2/3 bg-white shadow-lg p-4 flex flex-col md:flex-row gap-4">
          {/* Tour Details */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Tour Image"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">Chương trình tour</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Ngày 1: Hà Nội - Ninh Bình</li>
              <li>Ngày 2: Ninh Bình - Hạ Long</li>
              <li>Ngày 3: Hạ Long - Cát Bà</li>
              <li>Ngày 4: Cát Bà - Hải Phòng - TP HCM</li>
            </ul>

            {/* Map Section */}
            <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md py-4 my-5">
              <h3 className="text-3xl font-bold mb-2">Bản đồ tour</h3>
              <div className="h-64 bg-blue-200 flex items-center justify-center text-gray-700 font-bold text-lg">
                Map here
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-2">Chính sách tour</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Vé trẻ em:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Trẻ em dưới 2 tuổi: thu 300.000đ. Gia đình tự lo cho bé ăn
                    ngủ.
                  </li>
                  <li>
                    Trẻ em từ 2 đến dưới 6 tuổi: mua 100% VMB người lớn. Gia
                    đình tự lo cho bé ăn ngủ và tự trả phí tham quan (nếu có).
                  </li>
                  <li>
                    Hai người lớn chỉ được kèm 1 trẻ em dưới 6 tuổi. Từ trẻ thứ
                    2 trở lên, mỗi em phải đóng bằng giá trẻ em từ 6 đến 11
                    tuổi.
                  </li>
                  <li>
                    Trẻ em từ 6 - 11 tuổi: tiêu chuẩn gồm VMB, ăn uống và tham
                    quan theo chương trình, ngủ chung giường với phụ huynh.
                  </li>
                  <li>
                    Trẻ em trên 11 tuổi: áp dụng giá và các tiêu chuẩn dịch vụ
                    như người lớn.
                  </li>
                </ul>
              </li>
              <li>
                Giá tour bao gồm:
                <ul className="list-disc pl-6 mt-2">
                  <li>Chi phí xe máy lạnh phục vụ theo chương trình.</li>
                  <li>Vé máy bay khứ hồi.</li>
                  <li>Chi phí khách sạn theo tiêu chuẩn 2 khách/phòng.</li>
                  <li>Chi phí ăn uống theo chương trình.</li>
                  <li>Chi phí tham quan và tàu thuyền.</li>
                  <li>Chi phí Hướng dẫn viên tiếng Việt.</li>
                  <li>Quà tặng: Nón, nước suối, khăn lạnh, viết.</li>
                </ul>
              </li>
              <li>
                Giá tour không bao gồm:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Chi phí tham quan - ăn uống ngoài chương trình, giặt ủi,
                    điện thoại và các chi phí cá nhân khác.
                  </li>
                  <li>
                    Chi phí phụ thu người nước ngoài, phụ thu phòng đơn (nếu
                    có).
                  </li>
                </ul>
              </li>
            </ul>
            <div className="my-5 py-5">
              <h3 className="text-3xl font-bold">Điều kiện & Quy định</h3>
              <p className="text-gray-600">
                Các điều kiện hủy tour và quy định khác được áp dụng theo chính
                sách của công ty.
              </p>
            </div>
          </div>
        </section>

        {/* Side Section */}
        <aside className="md:w-1/3 bg-gray-100 shadow-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương
          </h1>
          <p className="text-gray-500 line-through text-2xl">7.500.000đ</p>
          <p className="text-red-600 font-bold text-3xl">
            Giá mới: <span className="text-black">6.400.000đ</span>
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
              <p className="text-2xl text-gray-700">Thời gian: 4 ngày 3 đêm</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-around">
            <button className="w-full bg-blue-600 text-white text-3xl font-medium  py-5 rounded-lg hover:bg-blue-700">
              Đặt tour
            </button>
            <button className="w-full bg-gray-200 text-gray-800 text-3xl font-medium  py-5 rounded-lg hover:bg-gray-300">
              Yêu cầu đặt
            </button>
          </div>
        </aside>
      </main>

      {/* Similar Tours Section (Thay bằng Component)*/}
      <section className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Các tour tương tự</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tour Card */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={`https://via.placeholder.com/400x200?text=Tour+$
                    {index + 1}
                  `}
                  alt={`Tour ${index + 1}`}
                  className="w-full h-auto rounded mb-2"
                />
                <h3 className="text-lg font-bold">Tour Campuchia 4N3Đ</h3>
                <p className="text-red-500 font-bold text-lg">3.979.000đ</p>
                <button className="bg-blue-500 text-white text-base py-1 px-2 rounded hover:bg-blue-600 mt-2">
                  Đặt Tour
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Minute Sale Section (Thay bằng Component)*/}
      <section className="bg-yellow-50 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Tour giờ chót giá tốt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={`https://via.placeholder.com/400x200?text=Sale+$
                    {index + 1}
                  `}
                  alt={`Sale ${index + 1}`}
                  className="w-full h-auto rounded mb-2"
                />
                <h3 className="text-lg font-bold">Tour Nha Trang 3N2Đ</h3>
                <p className="text-red-500 font-bold text-lg">2.000.000đ</p>
                <button className="bg-yellow-500 text-white text-base py-1 px-2 rounded hover:bg-yellow-600 mt-2">
                  Đặt Tour
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetailPage;
