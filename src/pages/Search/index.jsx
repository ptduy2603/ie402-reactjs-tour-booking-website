import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCalendarCheck } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const index = () => {
  const [filterRating, setFilterRating] = useState("");
  const [filterDistance, setFilterDistance] = useState("");
  const [filterSort, setFilterSort] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startPoint, setStartPoint] = useState("");

  const tours = [
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

  const [searchedTours, setSearchedTours] = useState(tours);
  useEffect(() => {}, [searchedTours]);
  const filteredTours = searchedTours.filter((tour) => {
    const isRatingMatch =
      filterRating === "" ? true : tour.rating === parseInt(filterRating);

    const isDistanceMatch =
      filterDistance === "" ? true : tour.distance === parseInt(filterDistance);

    return isRatingMatch && isDistanceMatch;
  });

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (value === "") {
      setSearchedTours(tours);
      setFilterRating("");
      setFilterDistance("");
      setFilterSort("");
    }
  };

  const handleSearch = () => {
    if (!destination) {
      alert("Vui lòng nhập điểm đến!");
      return;
    }

    const n = filteredTours.filter((tour) =>
      tour.title.toLowerCase().includes(destination.toLowerCase())
    );

    setSearchedTours(n);
  };

  const sortedTours = filteredTours.sort((a, b) => {
    switch (filterSort) {
      case "name_asc":
        return a.title.localeCompare(b.title);
      case "name_desc":
        return b.title.localeCompare(a.title);
      case "price_asc":
        return (
          parseInt(a.priceDiscounted.replace("đ", "").replace(".", "").trim()) -
          parseInt(b.priceDiscounted.replace("đ", "").replace(".", "").trim())
        );
      case "price_desc":
        return (
          parseInt(b.priceDiscounted.replace("đ", "").replace(".", "").trim()) -
          parseInt(a.priceDiscounted.replace("đ", "").replace(".", "").trim())
        );
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="text-base flex items-start gap-2 text-gray-500 mb-4">
        <Link to={"/"}>Trang chủ</Link> /{" "}
        <span className="font-semibold text-blue-600">Kết quả tìm kiếm</span>
      </div>

      <h2 className="text-4xl font-semibold text-center mb-6">
        CÓ {tours.length} KẾT QUẢ TÌM KIẾM PHÙ HỢP
      </h2>
      <div className="flex justify-center items-center bg-white-100">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg ">
          <div className="flex items-center relative gap-2 w-fit border-r-2">
            <label htmlFor="destination" className="absolute left-3">
              <MdOutlineLocationOn className="text-gray-500" size={30} />
            </label>
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              className="pl-12 pr-3 py-8 border-2 ml-2.5 border-gray-300 rounded-md "
            />
          </div>
          <button className="flex border-2 px-3 py-3 rounded-md border-gray-300 items-center gap-3">
            <TbCalendarCheck className="text-gray-500" size={30} />
            <div className="flex flex-col items-start">
              <p className="text-gray-500 font-semibold">Ngày khởi hành</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Chọn ngày khởi hành"
                className="w-fit border-none border-gray-300 rounded-md focus:outline-none"
                dateFormat="dd/MM/yyyy"
                popperPlacement="top-start"
              />
            </div>
          </button>
          {/* <button className="border-2 border-gray-300 rounded-md flex gap-2 items-center">
            <FaRegPaperPlane className="text-gray-500 ml-4" size={20} />
            <div className="flex flex-col gap-2 p-2 items-start">
              <p className="text-gray-500 font-semibold">Khởi hành từ :</p>
              <select
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                className=" border-none border-gray-300 text-gray-400 rounded-md focus:outline-none"
              >
                <option value="">tất cả</option>
                <option value="HaNoi">Hà Nội</option>
                <option value="HoChiMinh">Hồ Chí Minh</option>
                <option value="DaNang">Đà Nẵng</option>
              </select>
            </div>
          </button> */}
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-3xl font-medium text-white  px-20 py-8 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Tìm
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="mb-4 flex flex-col gap-3">
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="border p-2"
          >
            <option value="">Đánh giá</option>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} sao
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex flex-col gap-3">
          <select
            value={filterDistance}
            onChange={(e) => setFilterDistance(e.target.value)}
            className="border p-2"
          >
            <option value="">Chọn quãng đường</option>
            {[3, 4, 5, 6, 7, 8].map((distance) => (
              <option key={distance} value={distance}>
                {distance}km
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <h3 className="font-semibold">Sắp xếp theo</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="sort"
                value="name_asc"
                onChange={(e) => setFilterSort(e.target.value)}
              />
              Tên A-Z
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="sort"
                value="name_desc"
                onChange={(e) => setFilterSort(e.target.value)}
              />
              Tên Z-A
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="sort"
                value="price_asc"
                onChange={(e) => setFilterSort(e.target.value)}
              />
              Giá tăng dần
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="sort"
                value="price_desc"
                onChange={(e) => setFilterSort(e.target.value)}
              />
              Giá giảm dần
            </label>
          </div>
        </div>
      </div>
      {sortedTours.length > 0 ? (
        <Card tours={sortedTours} />
      ) : (
        <div>Không có tour nào</div>
      )}
    </div>
  );
};

export default index;
