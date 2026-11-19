import Link from "next/link";
import { SOLUTION_PANELS } from "./menuData";

/*
  Landing page body for one Solution mega-menu tab. Each page passes its own
  `items` (same links as the menu tab, but page-specific copy); without them
  it falls back to the menu's SOLUTION_PANELS entries.
*/
const SolutionTabLanding = ({ panelId, heading, title, intro, items: pageItems }) => {
  const items = pageItems || SOLUTION_PANELS[panelId] || [];

  return (
    <>
      <div className="solution-new-banner-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="solution-new-banner-one-content">
                <h1>{heading}</h1>
                {title && <span className="large-heading">{title}</span>}
                {intro && <p>{intro}</p>}
                <div className="text-center">
                  <Link href="/contact-us/" className="btn-get-started scrollto">
                    <span>Talk to an Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-graya py-5">
        <div className="container">
          <div className="row g-4">
            {items.map((item) => (
              <div className="col-lg-3 col-md-6 d-flex" key={item.href}>
                <Link
                  href={item.href}
                  className="indut-icon-card-one solution-tab-card text-decoration-none w-100"
                >
                  <img src={item.img} alt={item.alt || item.title} width={48} height={48} />
                  <h4>{item.title}</h4>
                  {item.tag && <span className="solution-tab-card__tag">{item.tag}</span>}
                  <p>{item.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(.solution-tab-card) {
          display: block;
          transition: transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease;
        }
        :global(.solution-tab-card__tag) {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #984b6e;
          margin-bottom: 8px;
        }
        :global(.solution-tab-card img) {
          object-fit: contain;
        }
        :global(.solution-tab-card:hover) {
          transform: translateY(-10px);
          background-color: #fff;
          box-shadow: 0 20px 40px 0 rgba(87, 108, 188, 0.25);
        }
        :global(.solution-tab-card:hover h4) {
          color: #984b6e;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.solution-tab-card) {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default SolutionTabLanding;
