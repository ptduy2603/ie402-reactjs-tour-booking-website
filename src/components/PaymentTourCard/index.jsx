import PropTypes from "prop-types";
import Button from "@mui/material/Button";

PaymentTourCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnailIMG: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export const PaymentTourCard = ({ item }) => {
  const [tickets, setTickets] = useState(1);
  const handleChange = (event) => {
    if (event.target.value == "-") setTickets(tickets--);
    else setTickets(tickets++);
  };
  return (
    <div className="flex flex-row">
      <div>
        <div>
          <img src={item.thumbnailIMG} alt={item.name} />
        </div>
        <div>
          <Button variant="outlined" onClick={handleChange(e)}>
            -
          </Button>
          <p>{tickets}</p>
          <Button variant="outlined" onClick={handleChange(e)}>
            +
          </Button>
        </div>
      </div>
      <div>
        <h3>{item.name}</h3>
      </div>
      <div>
        <p>{item.price} VNĐ</p>
      </div>
    </div>
  );
};
