import { useEffect, useRef } from "react";

// Client intro card used on case study pages: logo + key facts on the left, story on the right.
// Falls back to a text wordmark when no logo is given or the image fails to load.
const CaseStudyClientCard = ({ clientName, logo, meta = [], eyebrow = "Client Story", title, children }) => {
  const logoRef = useRef(null);

  const showWordmark = () => {
    const img = logoRef.current;
    if (!img) return;
    img.style.display = "none";
    img.nextElementSibling.style.display = "block";
  };

  // onError can fire before hydration, so re-check once mounted
  useEffect(() => {
    const img = logoRef.current;
    if (img && img.complete && img.naturalWidth === 0) showWordmark();
  }, []);

  return (
    <div className="crux-client-card">
      <div className="crux-client-brand">
        <div className="crux-client-logo">
          {logo && (
            <img ref={logoRef} src={logo} alt={`${clientName} logo`} onError={showWordmark} />
          )}
          <span className="crux-client-wordmark" style={logo ? undefined : { display: "block" }}>
            {clientName}
          </span>
        </div>
        {meta.length > 0 && (
          <ul className="crux-client-meta">
            {meta.map(({ icon, label }) => (
              <li key={label}><i className={`bi ${icon}`}></i> {label}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="crux-client-body">
        <span className="crux-client-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default CaseStudyClientCard;
