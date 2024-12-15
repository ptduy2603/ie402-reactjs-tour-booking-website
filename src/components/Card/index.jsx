import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "~/components/Button";

const TourCard = ({ tour }) => {
  return (
    <Link
      to={`/detail/${tour.id}`}
      className="border rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-100 hover:-translate-y-2 cursor-pointer"
    >
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold mb-2 line-clamp-2 overflow-hidden min-h-[3rem]">
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
          <Button
            content="ĐẶT TOUR"
            variant="primary"
            classNames="bg-orange-500 text-white px-4 py-1 rounded text-2xl hover:bg-orange-600"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn chặn sự kiện click lan đến card
              navigate(`/payment/${tour.id}`); // Điều hướng đến trang thanh toán
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
