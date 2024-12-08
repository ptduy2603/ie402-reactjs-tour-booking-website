import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

import styles from "./Header.module.scss";
import { navigationTabs } from "../../data";
import SearchBox from "../SearchBox";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const isAuthenticated = true; // replace with auth state from redux
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleRenderNavigation = () => {
    return navigationTabs.map((tab) => (
      <li key={tab?.path} className={styles["nav_item"]}>
        <NavLink
          onClick={() => {
            if (isOpenDrawer) setIsOpenDrawer(false);
          }}
          to={tab?.path}
          className={({ isActive }) =>
            isActive
              ? classnames(styles.active, styles["nav_link"])
              : styles["nav_link"]
          }
        >
          {tab?.icon && <FontAwesomeIcon icon={tab?.icon} />}
          {tab?.title}
        </NavLink>
      </li>
    ));
  };

  return (
    <header className={styles.header}>
      <div className={styles["header_top"]}>
        <div className="inner h-full">
          <div className="h-full flex items-center justify-between">
            <div className="h-full">
              <Link to="/">
                {/* need a website'logo here */}
                <img src="#" alt="Logo" loading="lazy" />
              </Link>
            </div>
            <SearchBox />
            <div className={styles["header_options"]}>
              <div className={styles.user}>
                {isAuthenticated ? (
                  <>
                    <div>Thông báo</div>
                    <div>Giỏ hàng</div>
                  </>
                ) : (
                  <>
                    <Link>Đăng nhập</Link>
                    <Link>Đăng ký</Link>
                  </>
                )}
              </div>
              <button
                className={styles["menu-btn"]}
                data-drawer-target="drawer"
                data-drawer-show="drawer"
                aria-controls="drawer"
                onClick={() => setIsOpenDrawer(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["header_bottom"]}>
        <nav className={styles.navigation} role="navigation">
          <div className="inner h-full">
            <ul className="h-full w-full flex justify-center items-center">
              {handleRenderNavigation()}
            </ul>
          </div>
        </nav>
      </div>

      {isOpenDrawer && (
        <div className={styles.drawer}>
          <div
            className={styles.overlay}
            onClick={() => setIsOpenDrawer(false)}
          ></div>
          <ul className={styles.menu}>
            {handleRenderNavigation()}
            {isAuthenticated ? (
              <>
                <li className={styles["nav_item"]}>Giỏ hàng</li>
                <div>Tài khoản</div>
                <div>Đăng xuất</div>
              </>
            ) : (
              <>
                <div>Đăng nhập</div>
                <div>Đăng ký</div>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
