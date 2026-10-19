import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/ImplementationStepper.module.css';

/**
 * Dark stepper section: auto-advancing step tabs with one large panel on
 * desktop/tablet, and a swipe carousel with dots on phones.
 *
 *   <ImplementationStepper
 *     id="bc-step"               // prefix for tab/panel ids (unique per page)
 *     title="..."                // section h2
 *     intro={<>...</>}           // optional paragraph under the heading
 *     steps={[{ title, text, icon: 'bi-…' }]}
 *     note="..."                 // optional text under the panel
 *     ctaLabel="..."             // optional; opens the contact modal
 *   />
 *
 * Every step's text is rendered in the HTML; only the active one is shown.
 */
const ImplementationStepper = ({ id, title, intro, steps, note, ctaLabel }) => {
  const [activeStep, setActiveStep] = useState(0);
  const trackRef = useRef(null);

  // Phones: keep the dots in sync with whichever panel is snapped into view.
  const slideWidth = (track) =>
    track.firstElementChild.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);

  const handleSwipe = () => {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth) return;
    const index = Math.min(Math.round(track.scrollLeft / slideWidth(track)), steps.length - 1);
    if (index !== activeStep) setActiveStep(index);
  };

  const goToSlide = (i) => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: i * slideWidth(track), behavior: 'smooth' });
  };

  return (
    <section className={styles['impl-stepper-section']}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className={`${styles['impl-stepper-head']} text-center`}>
              <h2>{title}</h2>
              {intro && <p>{intro}</p>}
            </div>
          </div>
        </div>
        <div className={styles['impl-stepper']} style={{ '--steps': steps.length }}>
          <div className={styles['impl-stepper__tabs']} role="tablist" aria-label={title}>
            {steps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={activeStep === i}
                aria-controls={`${id}-panel-${i}`}
                className={`${styles['impl-stepper__tab']}${activeStep === i ? ' is-active' : ''}${i < activeStep ? ' is-done' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <span className={styles['impl-stepper__bar']}>
                  {activeStep === i && (
                    <span
                      key={`fill-${i}`}
                      className={styles['impl-stepper__fill']}
                      onAnimationEnd={() => setActiveStep((i + 1) % steps.length)}
                    ></span>
                  )}
                </span>
                <span className={styles['impl-stepper__label']}>
                  <small>{String(i + 1).padStart(2, '0')}</small> {step.title}
                </span>
              </button>
            ))}
          </div>
          <div className={styles['impl-stepper__track']} ref={trackRef} onScroll={handleSwipe}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                role="tabpanel"
                id={`${id}-panel-${i}`}
                aria-labelledby={`${id}-tab-${i}`}
                className={`${styles['impl-stepper__panel']}${activeStep === i ? ' is-active' : ''}`}
              >
                <span className={styles['impl-stepper__icon']}><i className={`bi ${step.icon}`} aria-hidden="true"></i></span>
                <div className={styles['impl-stepper__content']}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className={styles['impl-stepper__num']} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          {/* Phones only: position dots for the swipe track */}
          <div className={styles['impl-stepper__dots']}>
            {steps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                aria-label={step.title}
                aria-current={activeStep === i ? 'step' : undefined}
                className={activeStep === i ? 'is-active' : ''}
                onClick={() => goToSlide(i)}
              ></button>
            ))}
          </div>
        </div>
        {(note || ctaLabel) && (
          <div className={`${styles['impl-stepper-foot']} text-center`}>
            {note && <p>{note}</p>}
            {ctaLabel && (
              <Link href="#exampleModal" data-bs-toggle="modal" className={styles['impl-stepper-cta']}>
                {ctaLabel} <span><i className="bi bi-arrow-right"></i></span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImplementationStepper;
