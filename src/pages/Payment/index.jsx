import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link } from "react-router-dom";

const cart = [
  {
    tourName: "tour2",
    tourDescription: "[Chợ Bến Thành - Dinh Độc Lập - Bến Nhà Rồng]",
    tourPrice: 1000000,
    thumbnailIMG:
      "https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw",
    person: 2,
  },
];

function PaymentPage() {
  const [totalItem, settotalItem] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [totalPrice, settotalPrice] = useState(0);
  const [couponValue, setcouponValue] = useState(0);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  useEffect(() => {
    settotalItem(cart.length);
  }, []);

  return (
    <div className="inner">
      <div className="w-full h-full flex flex-col md:flex-row py-4 gap-10 mt-20">
        {/* Main Section */}
        <div className="w-full md:w-2/3 h-full flex flex-col items-center shadow-xl py-5">
          {/* Main Left Section */}
          <div className="pt-4 pb-10">
            <h1 className="font-bold text-4xl md:text-6xl text-blue-400">
              SG Tour
            </h1>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row justify-around">
            <div className="w-full h-full flex flex-col p-5">
              <h2 className="font-bold text-2xl md:text-4xl">
                Thông tin đặt tour
              </h2>
              <div className="mt-10">
                <Box
                  component="form"
                  sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
                  noValidate
                  autoComplete="off"
                  className="flex flex-col font-bold gap-5"
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="abcxyz@gmail.com"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Họ và tên"
                    variant="outlined"
                    type="text"
                    placeholder="Tên của bạn là gì ?"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                    type="tel"
                    placeholder="0xxxxxxxxx"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Ghi chú"
                    multiline
                    rows={4}
                    placeholder="Ghi chú bạn muốn gửi gắm..."
                  />
                </Box>
              </div>
            </div>
            {/* Main Right Section */}
            <div className="w-full h-full flex flex-col p-5">
              <div className="pb-5">
                <h2 className="font-bold text-2xl md:text-4xl">Thanh toán</h2>
              </div>
              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="cash"
                      control={
                        <Radio
                          checked={selectedValue === "cash"}
                          onChange={handleChange}
                        />
                      }
                      label="Thanh toán trực tiếp khi bắt đầu tour"
                    />
                    <FormControlLabel
                      value="atm"
                      control={
                        <Radio
                          checked={selectedValue === "atm"}
                          onChange={handleChange}
                        />
                      }
                      label="Thanh toán bằng thẻ ngân hàng"
                    />
                    <FormControlLabel
                      value="qrCode"
                      control={
                        <Radio
                          checked={selectedValue === "qrCode"}
                          onChange={handleChange}
                        />
                      }
                      label="Thanh toán bằng mã QR"
                    />
                    <FormControlLabel
                      value="momo"
                      control={
                        <Radio
                          checked={selectedValue === "momo"}
                          onChange={handleChange}
                        />
                      }
                      label="Thanh toán qua Momo"
                    >
                      <Accordion expanded={selectedValue === "momo"}>
                        <AccordionSummary
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <div className="w-full h-full">
                            <img
                              src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220630163212-637922035327290078.jpg"
                              alt="MomoPay"
                            />
                          </div>
                        </AccordionSummary>
                      </Accordion>
                    </FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        {/* Side Section */}
        <div className="w-full md:w-1/3 h-full flex flex-col shadow-xl px-5">
          {/* Cart Section */}
          <div className="w-full pt-10">
            <h2 className="font-bold text-2xl md:text-4xl">
              Đơn hàng ({totalItem} sản phẩm)
            </h2>
            <div className="py-5">Sản phẩm trong giỏ hàng hiển thị ở đây</div>
          </div>
          {/* Pay Section */}
          <div className="w-full h-full flex flex-col gap-10">
            <div className="w-full flex flex-row justify-between pt-5">
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Nhập mã giảm giá"
              />
              <Button variant="outlined">Áp dụng</Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <p>Tổng chi phí</p>
                <p>{totalPrice} VNĐ</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>Giảm giá</p>
                <p>{couponValue} VNĐ</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold">Tổng thanh toán</p>
              <p>{totalPrice - couponValue} VNĐ</p>
            </div>
            <div className="flex flex-row justify-between pb-10">
              <Link
                to={"/cart"}
                className="font-bold text-blue-400 hover:opacity-70"
              >
                Quay về giỏ hàng
              </Link>
              <Button variant="contained" size="large">
                Đặt tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
