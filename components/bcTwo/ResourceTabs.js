import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import BlogFinanaceCard from "../BlogFinanaceCard";

// Tabbed resources (case studies, e-books, podcasts, videos, blogs).
// Every static panel stays in the HTML (hidden) so the links are crawlable.
// ids must not contain spaces (aria-controls / aria-labelledby)
const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ResourceTabs = ({ id = "resources", title, intro, tabs }) => {
  const [active, setActive] = useState(tabs[0].label);

  return (
    <section id={id} className={`${styles.block} ${styles.anchor}`}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-9 ${styles.introCol}`}>
            <h2 className={styles.h2}>{title}</h2>
            <p>{intro}</p>
          </div>
        </div>

        <div className={styles.resTabs} role="tablist" aria-label={title}>
          {tabs.map((t) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              id={`${id}-tab-${slug(t.label)}`}
              aria-selected={active === t.label}
              aria-controls={`${id}-panel-${slug(t.label)}`}
              className={`${styles.resTab} ${active === t.label ? styles.resTabActive : ""}`}
              onClick={() => setActive(t.label)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tabs.map((t) => (
          <div
            key={t.label}
            id={`${id}-panel-${slug(t.label)}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${slug(t.label)}`}
            className={`${styles.resPanel}${active === t.label ? "" : " d-none"}`}
          >
            {t.blogCategory ? (
              // blog posts are fetched client side, so only mount when opened
              active === t.label && <BlogFinanaceCard categorySlug={t.blogCategory} />
            ) : (
              <div className={styles.resGrid}>
                {t.items.map((item) => {
                  const body = (
                    <>
                      <div className={styles.resThumb}>
                        <Image src={item.img} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1199px) 50vw, 380px" />
                        {item.external && <i className="bi bi-play-circle-fill" aria-hidden="true"></i>}
                      </div>
                      <div className={styles.resBody}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <span className={styles.caseMore}>{item.cta} <i className="bi bi-arrow-right"></i></span>
                      </div>
                    </>
                  );
                  return item.external ? (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.resCard}>{body}</a>
                  ) : (
                    <Link key={item.href} href={item.href} className={styles.resCard}>{body}</Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceTabs;
