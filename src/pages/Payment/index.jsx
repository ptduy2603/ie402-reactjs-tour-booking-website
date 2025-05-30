import * as React from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "~/constants";
import styles from "../TourDetail/TourDetail.module.scss";
import AppLoading from "~/components/Apploading";
import { PaymentTourCard } from "~/components/PaymentTourCard";
import { convertPrice } from "~/utils";
import Modal from "@mui/material/Modal";

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
  const id = useParams();
  const navigate = useNavigate();
  const [totalItem, settotalItem] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponValue, setcouponValue] = useState(0);
  const [couponCode, setcouponCode] = useState("");
  const [isAppliedCouppon, setisAppliedCouppon] = useState(false);
  const [tourDetail, setTourDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleApply = () => {
    setisAppliedCouppon(true);
  };

  const handleChangeCouponCode = (event) => {
    setcouponCode(event.target.value);
    if (event.target.value == "") setisAppliedCouppon(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchTour = async () => {
      try {
        setIsLoading(true);
        // fetch tour's detail from API
        const response = await fetch(`${SERVER_URL}/tours/tour/${id.id}`);
        const data = await response.json();
        setTourDetail(data.data.tourDetail);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTour();
    settotalItem(cart.length);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-96 bg-white">
          <AppLoading />
        </div>
      ) : (
        <div className="inner">
          <div className="w-full h-full flex flex-col md:flex-row py-4 gap-10 mt-8">
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
                    <h2 className="font-bold text-2xl md:text-4xl">
                      Thanh toán
                    </h2>
                  </div>
                  <div>
                    <FormControl className="text-4xl">
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
                          label={
                            <span className="text-2xl">
                              Thanh toán trực tiếp khi bắt đầu tour
                            </span>
                          }
                        />
                        <FormControlLabel
                          value="atm"
                          control={
                            <Radio
                              checked={selectedValue === "atm"}
                              onChange={handleChange}
                            />
                          }
                          label={
                            <span className="text-2xl"> Thanh toán bằng thẻ ngân hàng</span>}
                        />
                        <FormControlLabel
                          value="qrCode"
                          control={
                            <Radio
                              checked={selectedValue === "qrCode"}
                              onChange={handleChange}
                            />
                          }
                          label={
                            <span className="text-2xl"> Thanh toán bằng mã QR</span>}
                        />
                        <FormControlLabel
                          value="momo"
                          control={
                            <Radio
                              checked={selectedValue === "momo"}
                              onChange={handleChange}
                            />
                          }
                          label={
                            <span className="text-2xl"> Thanh toán qua Momo</span>}
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
                <div className="py-5">
                  <PaymentTourCard
                    item={tourDetail}
                    setTotalPrice={setTotalPrice}
                  />
                </div>
              </div>
              {/* Pay Section */}
              <div className="w-full h-full flex flex-col gap-10">
                <div className="w-full flex flex-row justify-between pt-5">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="Nhập mã giảm giá"
                    value={couponCode}
                    onChange={handleChangeCouponCode}
                  />
                  <Button
                    variant={isAppliedCouppon ? "contained" : "outlined"}
                    disabled={!couponCode.trim()}
                    onClick={handleApply}
                    color={isAppliedCouppon ? "success" : ""}
                  >
                    Áp dụng
                  </Button>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row justify-between">
                    <p>Tổng chi phí</p>
                    <p>{convertPrice(totalPrice)} VNĐ</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Giảm giá</p>
                    <p>{convertPrice(couponValue)} VNĐ</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Tổng thanh toán</p>
                  <p>{convertPrice(totalPrice - couponValue)} VNĐ</p>
                </div>
                <div className="flex flex-row justify-between pb-10">
                  <Link
                    to={"/cart"}
                    className="font-bold text-blue-400 hover:opacity-70"
                  >
                    Quay về giỏ hàng
                  </Link>
                  <Button
                    variant="contained"
                    size="large "
                    onClick={handleOpen}
                  >
                    <span className="text-2xl">Đặt tour</span>
                  </Button>
                  <Modal open={open} onClose={handleClose}>
                    <Box className="w-1/3 shadow-lg rounded-md p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      <div className="w-full flex flex-col gap-10">
                        <p className="font-bold text-4xl text-blue-400">
                          Đặt tour thành công !!!
                        </p>
                        <p>
                          Nhấn nút "Đồng ý" hoặc click ra ngoài để về trang
                          chủ...
                        </p>
                        <div className="w-full flex flex-row justify-end">
                          <Button
                            variant="contained"
                            size="large"
                            onClick={handleClose}
                          >
                            Đồng ý
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
