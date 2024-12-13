import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Search from "../search_page/index";
function SearchBox() {
  const [searchText, setSearchText] = useState("");
  // apply debounce for real-time searching

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["search_input"]}>
          <Search />
        </div>

        <button className={styles["search_btn"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export default SearchBox;
