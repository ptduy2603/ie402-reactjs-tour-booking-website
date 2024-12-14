import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightFromBracket,
  faHeart,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.scss";
import { navigationTabs } from "../../data";
import SearchBox from "../SearchBox";
import Button from "../Button";
import { logout } from "../../redux/authSlice";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    // clear local storage
    setIsOpenDrawer(false);
    dispatch(logout());
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles["header_top"]}>
        <div className="inner h-full">
          <div className="h-full flex items-center justify-between">
            <div className={styles.logo}>
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="SGTravel logo"
                  loading="lazy"
                />
              </Link>
            </div>
            <SearchBox />
            <div className={styles["header_options"]}>
              <div className={styles.user}>
                {isAuthenticated ? (
                  <>
                    <Link
                      onClick={() => {
                        if (isOpenDrawer) setIsOpenDrawer(false);
                      }}
                      to={"/wishlist"}
                      className={styles["nav_link"]}
                    >
                      <img
                        src="/images/wishlist.png"
                        alt="SGTravel wishlist icon"
                        loading="lazy"
                      />
                      <span className={styles.badge}>2</span>
                    </Link>
                    <Link
                      onClick={() => {
                        if (isOpenDrawer) setIsOpenDrawer(false);
                      }}
                      to={"/notification"}
                      className={styles["nav_link"]}
                    >
                      <img
                        alt="SGTravel notification icon"
                        src="/images/notification.png"
                        loading="lazy"
                      />
                      <span className={styles.badge}>10</span>
                    </Link>
                    <Link to="/profile" className={styles.avatar}>
                      <img src="/images/default_avatar.png" alt="User avatar" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Button content="Đăng nhập" href="/login" />
                    <Button
                      content="Đăng ký"
                      href="/register"
                      variant="primary"
                    />
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
                <li className={styles["nav_item"]}>
                  <NavLink
                    onClick={() => {
                      if (isOpenDrawer) setIsOpenDrawer(false);
                    }}
                    to={"/wishlist"}
                    className={({ isActive }) =>
                      isActive
                        ? classnames(styles.active, styles["nav_link"])
                        : styles["nav_link"]
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    Yêu thích
                  </NavLink>
                </li>
                <li className={styles["nav_item"]}>
                  <NavLink
                    onClick={() => {
                      if (isOpenDrawer) setIsOpenDrawer(false);
                    }}
                    to={"/notification"}
                    className={({ isActive }) =>
                      isActive
                        ? classnames(styles.active, styles["nav_link"])
                        : styles["nav_link"]
                    }
                  >
                    {<FontAwesomeIcon icon={faBell} />}
                    Thông báo
                  </NavLink>
                </li>
                <li className={styles["nav_item"]}>
                  <NavLink
                    onClick={() => {
                      if (isOpenDrawer) setIsOpenDrawer(false);
                    }}
                    to={"/profile"}
                    className={({ isActive }) =>
                      isActive
                        ? classnames(styles.active, styles["nav_link"])
                        : styles["nav_link"]
                    }
                  >
                    <FontAwesomeIcon icon={faUser} />
                    Tài khoản
                  </NavLink>
                </li>
                <div className="mt-16 border-t border-gray-200 pt-10">
                  <Button
                    extraStyles={{ margin: "0 auto", width: "80%" }}
                    content="Đăng xuất"
                    variant="primary"
                    icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
                    onClick={handleLogout}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mt-16 border-t border-gray-200 pt-10">
                  <Button
                    extraStyles={{
                      width: "80%",
                      margin: "0 auto",
                      marginBottom: "16px",
                    }}
                    content="Đăng nhập"
                    onClick={() => setIsOpenDrawer(false)}
                    href="/login"
                    variant="outline"
                  />
                  <Button
                    extraStyles={{ width: "80%", margin: "0 auto" }}
                    content="Đăng ký"
                    onClick={() => setIsOpenDrawer(false)}
                    href="/register"
                    variant="primary"
                  />
                </div>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
