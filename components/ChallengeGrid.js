import React from 'react';
import styles from '../styles/ChallengeGrid.module.css';

/**
 * "Challenges in ..." section: heading and intro side by side, then a
 * numbered three-column card grid (two columns on tablets, one on phones).
 *
 *   <ChallengeGrid
 *     title="..."                      // section h2
 *     intro={<>...</>}
 *     items={[{ icon, title, text }]}  // icon is an image path
 *   />
 */
const ChallengeGrid = ({ title, intro, items }) => (
  <section className={styles['chg-section']}>
    <div className="container">
      <div className={`row align-items-end ${styles['chg-head']}`}>
        <div className="col-lg-5">
          <div className="supprt-header-new-one">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="col-lg-7">
          {intro && <p className={styles['chg-intro']}>{intro}</p>}
        </div>
      </div>
      <div className={styles['chg-grid']}>
        {items.map((item, i) => (
          <div key={item.title} className={styles['chg-card']}>
            <div className={styles['chg-card__top']}>
              <span className={styles['chg-card__icon']}>
                <img src={item.icon} alt={item.title} width={40} height={40} loading="lazy" decoding="async" />
              </span>
              <span className={styles['chg-card__num']} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengeGrid;
