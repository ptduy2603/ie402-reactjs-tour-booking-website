import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const index = ({ tours }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          onClick={() => navigate(`/detail/${tour.id}`)}
          className="border rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-100 hover:-translate-y-2 cursor-pointer"
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4 flex flex-col gap-3">
            <h3 className="text-2xl font-semibold mb-2 line-clamp-2">
              {tour.title}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <span className="line-through text-gray-400 text-2xl">
                {tour.priceOriginal}
              </span>
            </div>
            <div className="flex items-center text-gray-600 text-2xl">
              <FontAwesomeIcon icon={faRoad} className="mr-2 text-gray-500" />
              <span>Quãng đường: </span>
              <span className="text-red-500">&nbsp;{tour.distance}km</span>
            </div>
            <div className="flex items-center text-gray-600 text-base">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  className={`text-lg ${
                    index < tour.rating ? "text-yellow-500" : "text-gray-300"
                  } mr-1`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-red-600 font-semibold text-3xl ml-2">
                  {tour.priceDiscounted}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn chặn sự kiện click lan đến card
                  navigate(`/payment/${tour.id}`); // Điều hướng đến trang thanh toán
                }}
                className="bg-orange-500 text-white px-4 py-1 rounded text-2xl hover:bg-orange-600"
              >
                ĐẶT TOUR
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
