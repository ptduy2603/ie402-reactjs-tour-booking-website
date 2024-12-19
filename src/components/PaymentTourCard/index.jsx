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
    } else {
      setTickets(tickets + 1);
    }
  };
  return (
    <div className="w-full p-5 shadow-lg rounded-sm">
      <div className="font-bold text-2xl">
        <h3>{item.name}</h3>
      </div>
      <div className="py-3 w-full flex flex-row items-center justify-between">
        <div className="md:w-[180px] rounded-md overflow-hidden">
          <img src={item.thumbnailImg} alt={item.name} />
        </div>
        <div className="text-blue-500 font-bold">
          <p>{convertPrice(item.price)} VNĐ</p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <p>Số lượng vé:</p>
        <div className="py-3 h-full flex flex-row justify-center gap-10">
          <Button
            variant="contained"
            size="small"
            onClick={() => handleChange("-")}
          >
            <p className="font-bold text-2xl">-</p>
          </Button>
          <p>{tickets}</p>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleChange("+")}
          >
            <p className="font-bold text-2xl">+</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
