import Image from "next/image";
import Link from "next/link";
import PageSeo from "../../components/PageSeo";

const locations = [
  {
    city: "Liverpool",
    href: "/location/microsoft-dynamics-partner-liverpool/",
    image: "/img/Microsoft-Dynamics-Partner-Liverpool.png",
  },
  {
    city: "Bristol",
    href: "/location/microsoft-dynamics-partner-bristol/",
    image: "/img/Microsoft-Dynamics-Partner-Liverpool.png",
  },
  {
    city: "Leeds",
    href: "/location/microsoft-dynamics-partner-leeds/",
    image: "/img/Microsoft-Dynamics-Partner-Leeds.png",
  },
  {
    city: "Edinburgh",
    href: "/location/microsoft-dynamics-partner-edinburgh/",
    image: "/img/Microsoft-Dynamics-Partner-Edinburgh.png",
  },
  {
    city: "Glasgow",
    href: "/location/microsoft-dynamics-partner-glasgow/",
    image: "/img/Microsoft-Dynamics-Partner-Glasgow.png",
  },
  {
    city: "Manchester",
    href: "/location/microsoft-dynamics-partner-manchester/",
    image: "/img/dynamics-365-partner-manchester.png",
  },
  {
    city: "Birmingham",
    href: "/location/microsoft-dynamics-partner-birmingham/",
    image: "/img/birmingham-bg.png",
  },
  {
    city: "Sheffield",
    href: "/location/microsoft-dynamics-partner-sheffield/",
    image: "/img/contact-us-pic.png",
  },
  {
    city: "Cardiff",
    href: "/location/microsoft-dynamics-partner-cardiff/",
    image: "/img/Cardiff-pic.png",
  },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
);

const Locations = () => {
  return (
    <>
      <PageSeo
        type="CollectionPage"
        title="Microsoft Dynamics 365 Partner By Location | Dynamics Square"
        description="Find a Microsoft CRM Solutions Partner or Microsoft Dynamics 365 partner by location like Leeds, Manchester, Liverpool, Bristol, Cardiff and much more."
        image="/img/Microsoft-Dynamics-Partner-Liverpool.png"
      />

      <main className="loc-page">
        {/* ==================== HERO ==================== */}
        <section className="loc-hero">
          <div className="loc-hero-shape" aria-hidden="true"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="loc-hero-content">
                  <h1>
                    Microsoft Dynamics 365
                    <br />
                    <span>Partner By Location</span>
                  </h1>
                  <h2>Choose your location, we are here to help!</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="loc-hero-media">
                  <Image
                    src="/img/Microsoft-Dynamics-Partner-Liverpool.png"
                    alt="Partner By Location"
                    width={768}
                    height={501}
                    priority={true}
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== LOCATIONS ==================== */}
        <section className="loc-list">
          <div className="container">
            <header className="loc-list-header">
              <h3>Partner By Location</h3>
            </header>

            <div className="loc-grid">
              {locations.map(({ city, href, image }) => (
                <Link key={href} href={href} className="loc-card">
                  <div className="loc-card-media">
                    <Image
                      src={image}
                      alt={`Microsoft Dynamics Partner ${city}`}
                      fill
                      sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                    />
                  </div>
                  <div className="loc-card-body">
                    <span className="loc-card-pin">
                      <PinIcon />
                    </span>
                    <h3>
                      Microsoft Dynamics
                      <br /> <strong>Partner {city}</strong>
                    </h3>
                    <span className="loc-card-cta">
                      Know More <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .loc-page {
          background: #ffffff;
          color: #1b1b1b;
          overflow: hidden;
        }

        /* ---------- Hero ---------- */
        .loc-hero {
          position: relative;
          overflow: hidden;
          padding: 140px 0 80px;
          background: linear-gradient(135deg, #f4f8ff 0%, #ffffff 55%, #eef5ff 100%);
        }

        .loc-hero-shape {
          position: absolute;
          top: -160px;
          right: -160px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(187, 43, 54, 0.1) 0%, rgba(187, 43, 54, 0) 70%);
          pointer-events: none;
        }

        .loc-hero-content {
          position: relative;
          z-index: 1;
        }

        .loc-hero-content h1 {
          margin: 0 0 20px;
          color: #111827;
          font-size: clamp(32px, 4.2vw, 54px) !important;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .loc-hero-content h1 span {
          color: var(--color-red);
        }

        .loc-hero-content h2 {
          position: relative;
          margin: 0;
          padding-left: 18px;
          color: #4b5563;
          font-size: clamp(18px, 1.6vw, 22px);
          font-weight: 500;
          line-height: 1.5;
        }

        .loc-hero-content h2::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 4px;
          border-radius: 4px;
          background: var(--color-red);
        }

        .loc-hero-media {
          position: relative;
          z-index: 1;
        }

        .loc-hero-media img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(29, 53, 87, 0.15);
        }

        /* ---------- Locations ---------- */
        .loc-list {
          padding: 90px 0 100px;
          background: #ffffff;
        }

        .loc-list-header {
          margin-bottom: 48px;
          text-align: center;
        }

        .loc-list-header h3 {
          position: relative;
          display: inline-block;
          margin: 0;
          padding-bottom: 16px;
          color: #111827;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
        }

        .loc-list-header h3::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 64px;
          height: 4px;
          border-radius: 4px;
          background: var(--color-red);
          transform: translateX(-50%);
        }

        .loc-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .loc-page .loc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e9f2;
          border-radius: 18px;
          background: #ffffff;
          color: inherit;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .loc-page .loc-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          width: 100%;
          height: 4px;
          background: var(--color-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .loc-page .loc-card:hover,
        .loc-page .loc-card:focus-visible {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 22px 45px rgba(29, 53, 87, 0.12);
        }

        .loc-page .loc-card:hover::before,
        .loc-page .loc-card:focus-visible::before {
          transform: scaleX(1);
        }

        .loc-card-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: linear-gradient(135deg, #f4f8ff 0%, #eef5ff 100%);
        }

        .loc-card-media img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .loc-card:hover .loc-card-media img {
          transform: scale(1.05);
        }

        .loc-card-body {
          position: relative;
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 16px;
          padding: 40px 26px 26px;
        }

        .loc-card-pin {
          position: absolute;
          top: -26px;
          left: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #ffffff;
          color: var(--color-red);
          box-shadow: 0 10px 24px rgba(29, 53, 87, 0.15);
          transition: background 0.3s ease, color 0.3s ease;
        }

        .loc-card:hover .loc-card-pin {
          background: var(--color-red);
          color: #ffffff;
        }

        .loc-card h3 {
          margin: 0;
          color: #6b7280;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.45;
        }

        .loc-card h3 strong {
          display: inline-block;
          margin-top: 2px;
          color: var(--color-blue);
          font-size: 22px;
          font-weight: 800;
        }

        .loc-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          color: var(--color-red);
          font-size: 15px;
          font-weight: 700;
        }

        .loc-card-cta svg {
          transition: transform 0.3s ease;
        }

        .loc-card:hover .loc-card-cta svg {
          transform: translateX(5px);
        }

        @media (max-width: 991px) {
          .loc-hero {
            padding: 110px 0 60px;
            text-align: center;
          }

          .loc-hero-content h2 {
            padding-left: 0;
          }

          .loc-hero-content h2::before {
            display: none;
          }

          .loc-hero-media {
            margin-top: 40px;
          }

          .loc-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 575px) {
          .loc-list {
            padding: 60px 0 70px;
          }

          .loc-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .loc-card-body {
            padding: 38px 20px 22px;
          }

          .loc-card-pin {
            left: 20px;
          }
        }
      `}</style>
    </>
  );
};
export default Locations;
