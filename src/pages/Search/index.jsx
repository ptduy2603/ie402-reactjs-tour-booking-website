import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TourCard from "~/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { tourList } from "~/data";
import Button from "~/components/Button";

const SearchPage = () => {
  const search = useLocation().search;
  const URLSearch = new URLSearchParams(search);
  const searchQuery = URLSearch.getAll("q");
  const [filterRating, setFilterRating] = useState("");
  const [filterDistance, setFilterDistance] = useState("");
  const [filterSort, setFilterSort] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  // const [startPoint, setStartPoint] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const [searchedTours, setSearchedTours] = useState([]);

  // There was a problem with this useEffect that makes the site re-render infinitely
  // useEffect(() => {
  //   const matchingTours = tourList?.filter((tour) =>
  //     tour.title.toLowerCase().includes(searchQuery.toString().toLowerCase())
  //   );
  //   if (matchingTours.length > 0) {
  //     setSearchedTours(matchingTours);
  //   }
  // }, [search, searchQuery]);

  const filteredTours = searchedTours.filter((tour) => {
    const isRatingMatch =
      filterRating === "" ? true : tour.rating === parseInt(filterRating);

    // const isDistanceMatch =
    //   filterDistance === "" ? true : tour.distance === parseInt(filterDistance);

    return isRatingMatch;
  });

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (value === "") {
      setSearchedTours(searchedTours);
      setFilterRating("");
      setFilterDistance("");
      setFilterSort("");
      setSuggestion([]);
    } else {
      const n = searchedTours.filter((tour) =>
        tour.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestion(n);
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

  // const handleSuggestionClick = (title) => {
  //   setDestination(title);
  //   setSearchedTours(searchedTours.filter((tour) => tour.title === title));
  //   setSuggestion([]);
  // };

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
      case "distance_asc":
        return parseInt(a.distance) - parseInt(b.distance);
      case "distance_desc":
        return parseInt(b.distance) - parseInt(a.distance);
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-screen-xl inner mx-auto p-4">
      <div className="mb-20 mt-10">
        <h2 className="text-4xl font-semibold text-center mb-6">
          CÓ {searchedTours?.length} KẾT QUẢ TÌM KIẾM PHÙ HỢP
        </h2>
        <div className="flex justify-center items-center bg-white-100">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg ">
            <button className="flex border-2 items-center relative w-fit border-r-2">
              <label htmlFor="destination" className="pl-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500"
                  size="lg"
                />
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Bạn muốn đi đâu?"
                  id="destination"
                  value={destination}
                  onChange={handleDestinationChange}
                  className="pr-3 py-8 focus:outline-none ml-2.5 border-gray-300 rounded-md "
                />
                {/* {suggestion.length > 0 && (
                <ul className="bg-white z-50 -left-16 w-96 absolute rounded-md shadow-md">
                  {suggestion.map((tour) => (
                    <li
                      key={tour.id}
                      onClick={() => handleSuggestionClick(tour.title)}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      {tour.title}
                    </li>
                  ))}
                </ul>
              )} */}
              </div>
            </button>

            <button className="flex border-2 px-3 py-3 rounded-md border-gray-300 items-center gap-3">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-gray-500"
                size="lg"
              />
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
            <Button
              content="Tìm"
              variant="primary"
              classNames="bg-orange-500 text-3xl font-medium text-white  px-20 py-8 rounded-md hover:bg-orange-600 transition duration-300"
              onClick={handleSearch}
            />
            {/* <Button
              content="Làm mới"
              variant="primary"
              classNames="bg-blue-500 text-xl font-medium text-white px-10 py-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => {
                // Xóa query parameters và làm mới trang
                window.history.replaceState(null, "", "/search");
                window.location.reload();
              }}
            /> */}
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
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort"
                  value="distance_asc"
                  onChange={(e) => setFilterSort(e.target.value)}
                />
                Quãng đường tăng dần
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="sort"
                  value="distance_desc"
                  onChange={(e) => setFilterSort(e.target.value)}
                />
                Quãng đường giảm dần
              </label>
            </div>
          </div>
        </div>
        {tourList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tourList.map((tour) => (
              <TourCard key={tour?.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div>Không có tour nào</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
