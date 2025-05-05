import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.sass";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.media}>
          <a className={`${styles.fa} ${styles.faYoutube}`} href="https://www.youtube.com/@CookieRunKingdom"><FaYoutube /></a>
          <a className={`${styles.fa} ${styles.faFacebook}`} href="https://www.facebook.com/CRKingdomEN/"><FaFacebook /></a>
          <a className={`${styles.fa} ${styles.faTwitter}`} href="https://twitter.com/CRKingdomEN"><FaTwitter /></a>
          <a className={`${styles.fa} ${styles.faInstagram}`} href="https://www.instagram.com/cookierunkingdom/"><FaInstagram /></a>
        </div>
        <div className={styles.buttons}>
          <button className={styles.Terns}>Terms of Service</button>
          <button className={styles.Terns}>Privacy Policy</button>
          <button className={styles.Terns}>FAQ & Support</button>
        </div>
        <div className={styles.Corp}>
          <div className={styles.text}>
            <p>This is a wiki site about</p>
            <p>the game "Cookie run Kingdom"</p>
            <p>All rights are with Devsisters Corp</p>
          </div>
          <p className={styles.NameComp}>DEVSISTERS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
