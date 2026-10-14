import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";

// Bordered internal-link cards shown near the end of a page.
const RelatedLinks = ({ title = "Learn More", links, documents }) => (
  <section className={styles.related}>
    <div className="container">
      <h2 className={styles.relatedTitle}>{title}</h2>
      <div className={styles.linkGrid}>
        {links.map((l) => (
          <Link href={l.href} className={styles.linkCard} key={l.href + l.title}>
            <i className={`bi ${l.icon || "bi-link-45deg"}`} aria-hidden="true"></i>
            <span>{l.title}</span>
            <i className={`bi bi-arrow-right ${styles.relatedArrow}`} aria-hidden="true"></i>
          </Link>
        ))}
        {documents && documents.map((d) => (
          <a href={d.href} target="_blank" rel="noopener" className={styles.linkCard} key={d.href}>
            <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i>
            <span>{d.title}</span>
            <i className={`bi bi-download ${styles.relatedArrow}`} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedLinks;
