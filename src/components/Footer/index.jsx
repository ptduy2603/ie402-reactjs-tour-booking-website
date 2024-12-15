import styles from "./Footer.module.scss";
import classnames from "classnames";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="inner py-5">
          <div className={styles.container}>
            <div className={styles.section}>
              <div>
                <img
                  className={styles.logo}
                  src="/images/logo.png"
                  alt="SGTravel logo"
                />
                <ul>
                  <li>
                    Điện thoại: <a href="tel:0786123456">0786123456</a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:sgtravel@gmail.com">sgtravel@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={classnames(styles.title, "mt-2")}>
                  Thông tin liên hệ
                </h3>
                <ul className="flex items-center content-center gap-2">
                  <li className="w-24 h-24 d-block">
                    <a href="#">
                      <img
                        className="w-full h-full"
                        src="/images/facebook.png"
                        alt="Logo facebook"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="w-24 h-24">
                    <a href="#">
                      <img
                        src="/images/youtube.png"
                        alt="Logo youtube"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li className="w-24 h-24">
                    <a href="#">
                      <img
                        src="/images/gmail.png"
                        alt="Logo gmail"
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.section}>
              <h3 className={styles.title}>SG Travel</h3>
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Tours</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className={styles.section}>
              <h3 className={styles.title}>Tour mới</h3>
              <ul>
                <li>
                  <a href="#">Tour khám phá thiên nhiên</a>
                </li>
                <li>
                  <a href="#">Tour lịch sử - văn hóa</a>
                </li>
                <li>
                  <a href="#">Tour nghỉ dưỡng</a>
                </li>
                <li>
                  <a href="#">Tour ẩm thực</a>
                </li>
              </ul>
            </div>
            <div className={styles.section}>
              <h3 className={styles.title}>Trợ giúp</h3>
              <ul>
                <li>
                  <a href="#">Tư vấn chọn tour</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Copyright &copy; 2024 | Bản quyền thuộc về SGTravel</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
