import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";

// Tracks which section is in view and how far down the (scroll-fixed) site
// header reaches, so the sticky section nav can sit just under it.
export const useSectionNav = (sections) => {
  const [active, setActive] = useState(sections[0].id);
  const [navTop, setNavTop] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const header = document.getElementById("header");
      const bottom = header && header.classList.contains("fixed-top") ? header.getBoundingClientRect().bottom : 0;
      setNavTop(Math.max(0, Math.round(bottom)));

      const offset = window.innerHeight * 0.35;
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return { active, navTop };
};

const SectionNav = ({ sections, active, navTop, ctaLabel = "Book a Free Consultation" }) => {
  const listRef = useRef(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  // show the arrow/fade on whichever side still has hidden links
  const measure = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return undefined;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // keep the active link visible (horizontal scroll only, never the page)
  useEffect(() => {
    const el = listRef.current;
    const link = el && el.querySelector(`a[href="#${active}"]`);
    if (!link) return;
    const start = link.offsetLeft;
    const end = start + link.offsetWidth;
    if (start < el.scrollLeft + 40) el.scrollTo({ left: Math.max(0, start - 40), behavior: "smooth" });
    else if (end > el.scrollLeft + el.clientWidth - 40) el.scrollTo({ left: end - el.clientWidth + 40, behavior: "smooth" });
  }, [active]);

  const nudge = (dir) => {
    const el = listRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <nav className={styles.sectionNav} style={{ top: navTop }} aria-label="On this page">
      <div className="container">
        <div className={styles.sectionNavInner}>
          <div className={`${styles.navScroller} ${edges.left ? styles.navFadeLeft : ""} ${edges.right ? styles.navFadeRight : ""}`}>
            {edges.left && (
              <button type="button" className={`${styles.navArrow} ${styles.navArrowLeft}`} onClick={() => nudge(-1)} aria-label="Scroll section links left">
                <i className="bi bi-chevron-left"></i>
              </button>
            )}
            <ul ref={listRef}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? styles.navActive : undefined} aria-current={active === s.id ? "true" : undefined}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            {edges.right && (
              <button type="button" className={`${styles.navArrow} ${styles.navArrowRight}`} onClick={() => nudge(1)} aria-label="Scroll section links right">
                <i className="bi bi-chevron-right"></i>
              </button>
            )}
          </div>
          <Link href="#exampleModal" data-bs-toggle="modal" className={styles.navCta}>
            {ctaLabel} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
