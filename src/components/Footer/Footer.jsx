import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerDesc}>
        See the code for all my assignments here:{' '}
        <a
          className={styles.footerLink}
          href="https://github.com/Coffee-2-Go"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coffee-2-Go
        </a>
      </p>
    </footer>
  );
};
