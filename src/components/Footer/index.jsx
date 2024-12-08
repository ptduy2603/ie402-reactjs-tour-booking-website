import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="inner h-full">
          <div className="text-center">This is footer</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
