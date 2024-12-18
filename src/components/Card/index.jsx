import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "~/utils";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  // random value of tour's distance in [10 - 30]
  const handleRandomTourDistance = () => Math.floor(Math.random() * 21 + 10);

  return (
    <Link
      to={`/tour/detail/${tour?.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      className="border block rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-100 hover:-translate-y-2 cursor-pointer"
    >
      <img
        src={tour?.thumbnailImg}
        alt={tour?.name}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold mb-2 line-clamp-2 overflow-hidden min-h-[3rem]">
          {tour?.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <span className="line-through text-gray-400 text-2xl">
            {convertPrice(tour?.price + 900000)}
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-2xl">
          <FontAwesomeIcon icon={faRoad} className="mr-2 text-gray-500" />
          <span>Quãng đường: </span>
          <span className="text-red-500">
            &nbsp;{handleRandomTourDistance()} km
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-base">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className={`text-lg ${
                index < 3 ? "text-yellow-500" : "text-gray-300"
              } mr-1`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-red-600 font-semibold text-3xl ml-2">
              {convertPrice(tour?.price)}
            </span>
          </div>
          <Button
            content="ĐẶT TOUR"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/payment/${tour?.id}`); // Điều hướng đến trang thanh toán
            }}
          />
        </div>
      </div>
    </Link>
  );
};

TourCard.propTypes = {
  tour: PropTypes.object.isRequired,
};

export default TourCard;
