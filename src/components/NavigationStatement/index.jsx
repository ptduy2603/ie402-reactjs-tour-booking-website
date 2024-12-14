import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavigationStatement.module.scss";

function NavigationStatement({ question, statement, link }) {
  return (
    <>
      <p className={styles.wrapper}>
        <span className={styles.question}>{question}</span>
        <Link to={link}>{statement}</Link>
      </p>
    </>
  );
}

NavigationStatement.propTypes = {
  question: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavigationStatement;
