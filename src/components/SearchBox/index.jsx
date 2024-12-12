import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  // apply debounce for real-time searching

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          spellCheck="false"
          className={styles["search_input"]}
          autoComplete="false"
          id="search"
          placeholder="Enter your tour..."
        />
        <button className={styles["search_btn"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export default SearchBox;
