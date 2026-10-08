import { useState } from "react";
import styles from "../../styles/bcVsSapTwo.module.css";

// Accordion with "Load More". Items past visibleCount stay in the HTML
// (hidden) so every answer is crawlable.
const FaqList = ({ items, initialCount = 5, step = 3 }) => {
  const [openFaq, setOpenFaq] = useState(items[0].id);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  return (
    <>
      <div className={styles.faqList}>
        {items.map((faq, i) => {
          const open = openFaq === faq.id;
          return (
            <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}${i < visibleCount ? "" : " d-none"}`} key={faq.id}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${faq.id}`}
                  onClick={() => setOpenFaq(open ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </h3>
              <div id={`faq-${faq.id}`} className={styles.faqPanel} role="region">
                <div className={styles.faqPanelInner}>
                  <div className={styles.faqBody} dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {visibleCount < items.length && (
        <div className="text-center mt-4">
          <button className="btn faq-btn-l btn-get-started" onClick={() => setVisibleCount((prev) => prev + step)}>
            Load More <i className="bi bi-chevron-down"></i>
          </button>
        </div>
      )}
    </>
  );
};

export const faqSchema = (items) => ({
  "@type": "FAQPage",
  "mainEntity": items.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
    },
  })),
});

export default FaqList;
