import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useState } from "react";
import { convertPrice } from "~/utils";
import { useEffect } from "react";

export const PaymentTourCard = ({ item, setTotalPrice }) => {
  const [tickets, setTickets] = useState(1);
  useEffect(() => {
    setTotalPrice(item.price * tickets);
  }, [tickets, item.price, setTotalPrice]);

  const handleChange = (event) => {
    if (event == "-") {
      setTickets(tickets - 1);
      if (tickets == 1) setTickets(1);
    }
    else {
      setTickets(tickets + 1);
    }
  };
  return (
    <div className="flex flex-row">
      <div>
        <div>
          <img src={item.thumbnailImg} alt={item.name} />
        </div>
        <div>
          <Button variant="outlined" onClick={() => handleChange("-")}>
            -
          </Button>
          <p>{tickets}</p>
          <Button variant="outlined" onClick={() => handleChange("+")}>
            +
          </Button>
        </div>
      </div>
      <div>
        <h3>{item.name}</h3>
      </div>
      <div>
        <p>{convertPrice(item.price)} VNĐ</p>
      </div>
    </div>
  );
};
