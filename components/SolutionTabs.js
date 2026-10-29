import React, { useState } from 'react';
import styles from '../styles/SolutionTabs.module.css';

/**
 * "Which Dynamics 365 solution?" section: one large tab per solution over a
 * wide panel (description on the left, numbered "choose it when" points on
 * the right). On phones the tabs are hidden and every solution is shown.
 *
 *   <SolutionTabs
 *     id="dist-sol"                    // prefix for tab/panel ids
 *     sectionClassName="pd-con-69"     // extra template classes for the section
 *     title="..."                      // section h2
 *     intro={<>...</>}                 // or an array, one paragraph each
 *     outro={<>...</>}                 // optional paragraph after the panels
 *     solutions={[{
 *       title, desc, when, items: [...],
 *       logos: [{ src, alt }],         // one or more product icons
 *     }]}
 *   />
 *
 * Every solution's text is rendered in the HTML; only the active one is shown
 * on larger screens.
 */
const SolutionTabs = ({ id, sectionClassName = '', title, intro, outro, solutions }) => {
  const [active, setActive] = useState(0);
  const introParas = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <section className={`${sectionClassName} ${styles['sol-tabs-section']}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="supprt-header-new-one">
              <h2>{title}</h2>
              {introParas.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${styles['sol-tabs__nav']}${solutions.length === 4 ? ` ${styles['sol-tabs__nav--four']}` : ''}`}
          role="tablist"
          aria-label={title}
        >
          {solutions.map((sol, i) => (
            <button
              key={sol.title}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`${id}-panel-${i}`}
              className={`${styles['sol-tabs__tab']}${active === i ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles['sol-tabs__tab-logo']}>
                {sol.logos.map((logo) => (
                  <img key={logo.src} src={logo.src} alt={`${logo.alt} logo`} width={96} height={96} loading="lazy" decoding="async" />
                ))}
              </span>
              <span>{sol.title}</span>
            </button>
          ))}
        </div>
        <div className={styles['sol-tabs__panels']}>
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              role="tabpanel"
              id={`${id}-panel-${i}`}
              aria-labelledby={`${id}-tab-${i}`}
              className={`${styles['sol-tabs__panel']}${active === i ? ' is-active' : ''}`}
            >
              <div className={styles['sol-tabs__intro']}>
                <span className={styles['sol-tabs__logo']}>
                  {sol.logos.map((logo) => (
                    <img key={logo.src} src={logo.src} alt={logo.alt} width={96} height={96} loading="lazy" decoding="async" />
                  ))}
                </span>
                <h4>{sol.title}</h4>
                <p>{sol.desc}</p>
              </div>
              <div className={styles['sol-tabs__points']}>
                <p className={styles['sol-tabs__when']}><b>{sol.when}</b></p>
                <ol>
                  {sol.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
        {outro && <p className={styles['sol-tabs__outro']}>{outro}</p>}
      </div>
    </section>
  );
};

export default SolutionTabs;
