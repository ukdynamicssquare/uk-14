import { useEffect, useState } from "react";
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

const SectionNav = ({ sections, active, navTop, ctaLabel = "Book a Free Consultation" }) => (
  <nav className={styles.sectionNav} style={{ top: navTop }} aria-label="On this page">
    <div className="container">
      <div className={styles.sectionNavInner}>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? styles.navActive : undefined} aria-current={active === s.id ? "true" : undefined}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href="#exampleModal" data-bs-toggle="modal" className={styles.navCta}>
          {ctaLabel} <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  </nav>
);

export default SectionNav;
