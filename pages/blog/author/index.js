import Head from "next/head";
import TimerModal from "../../../components/TimerModal";
import { BlogService } from "../../../helpers/blogApi";
import { BACKEND_URL } from "../../../helpers/blogClient";
import Link from "next/link";
const SITE_URL = "https://www.dynamicsstream.co.uk"; const PAGE_URL = `${SITE_URL}/blog/author/`;
export async function getStaticProps() {
  const authorsRaw = await BlogService.getAuthors();
  let authorslistRaw = [];
  if (Array.isArray(authorsRaw)) {
    authorslistRaw = authorsRaw;
  } else if (authorsRaw?.data && Array.isArray(authorsRaw.data)) {
    authorslistRaw = authorsRaw.data;
  }

  const authorslist = authorslistRaw.map(a => ({
    name: a.name || "",
    slug: a.authorSlug || "",
    profile_photo_path: a.avatarUrl || a.profile_photo_path || "/img/default-author.png"
  }));

  return { 
    props: { authorslist },
    revalidate: 60
  };
}

function AuthorsList({ authorslist }) {
  return (
    <div>
      <Head>
        {/* Basic SEO */}
        <title>Blog Authors | Dynamics Square</title>

        <meta
          name="description"
          content="Meet the authors and experts behind Dynamics Square. Explore insights, guides, news and articles from our experienced authors."
        />

        <meta
          name="keywords"
          content="Dynamics Square authors, blog authors, Microsoft Dynamics authors, Business Central authors, Dynamics 365 authors, ERP experts"
        />

        <meta name="author" content="Dynamics Square" />

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Canonical */}
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Blog Authors | Dynamics Square"
        />

        <meta
          property="og:description"
          content="Meet the authors and experts behind Dynamics Square. Explore insights, guides, news and articles from our experienced authors."
        />

        <meta property="og:url" content={PAGE_URL} />

        <meta property="og:site_name" content="Dynamics Square" />

        <meta
          property="og:image"
          content={`${SITE_URL}/img/d360-banner.png`}
        />

        <meta
          property="og:image:alt"
          content="Dynamics Square Blog Authors"
        />

        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Blog Authors | Dynamics Square"
        />

        <meta
          name="twitter:description"
          content="Meet the authors and experts behind Dynamics Square."
        />

        <meta
          name="twitter:image"
          content={`${SITE_URL}/img/d360-banner.png`}
        />
      </Head>

        <div className="authors-page">

        {/* ================= HERO ================= */}

        <section className="authors-hero">
          <div className="container">

            {/* Breadcrumb */}
            <nav
              className="authors-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>

              <span>/</span>

              <Link href="/blog/">Blog</Link>

              <span>/</span>

              <span aria-current="page">Authors</span>
            </nav>

            {/* Hero Content */}
            <div className="authors-hero-content">

              <span className="authors-eyebrow">
                Dynamics Square BLOG
              </span>

              <h1>Meet Our Authors</h1>

              <p>
                Discover insights, expert advice and the latest industry
                updates from the experienced professionals behind
                Dynamics Square.
              </p>

            </div>
          </div>
        </section>

        {/* ================= AUTHORS ================= */}

        <section className="authors-section">
          <div className="container">

            {/* Section Header */}
            <div className="authors-section-header">

              <div>
                <span className="section-label">
                  OUR EXPERTS
                </span>

                <h2>Our Authors</h2>
              </div>

              {authorslist?.length > 0 && (
                <span className="authors-count">
                  {authorslist.length}{" "}
                  {authorslist.length === 1
                    ? "Author"
                    : "Authors"}
                </span>
              )}

            </div>

            {/* Authors */}
            {authorslist?.length > 0 ? (
              <div className="authors-grid">

                {authorslist.map((author) => {

                  const imageUrl =
                    author.profile_photo_path?.startsWith("http")
                      ? author.profile_photo_path
                      : `${BACKEND_URL}${author.profile_photo_path}`;

                  return (
                    <Link
                      key={author.slug || author.name}
                      href={`/blog/author/${author.slug}/`}
                      className="author-card"
                      aria-label={`View articles by ${author.name}`}
                    >

                      {/* Image */}
                      <div className="author-card-image">

                        <img
                          src={imageUrl}
                          alt={`${author.name} - Dynamics Square author`}
                          loading="lazy"
                          decoding="async"
                        />

                      </div>

                      {/* Content */}
                      <div className="author-card-content">

                        <h3>{author.name}</h3>

                        <span className="author-card-link">
                          View articles
                          <span className="arrow">
                            →
                          </span>
                        </span>

                      </div>

                    </Link>
                  );
                })}

              </div>
            ) : (
              <div className="authors-empty">

                <h3>No authors found</h3>

                <p>
                  We couldn't find any authors at the moment.
                </p>

              </div>
            )}

          </div>
        </section>

        <TimerModal />

        {/* ================= PAGE CSS ================= */}

        <style jsx global>{`
          /* =====================================
             PAGE
          ===================================== */

          .authors-page {
            min-height: 100vh;
            background: #f7f9fc;
          }

          /* =====================================
             HERO
          ===================================== */

          .authors-hero {
            position: relative;
            padding: 30px 0 80px;
            background: linear-gradient(
              135deg,
              #f3f8ff 0%,
              #ffffff 55%,
              #edf5ff 100%
            );
            overflow: hidden;
          }

          .authors-hero::before {
            content: "";
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: rgba(23, 105, 224, 0.06);
            right: -160px;
            top: -200px;
          }

          .authors-hero::after {
            content: "";
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: rgba(23, 105, 224, 0.04);
            left: -100px;
            bottom: -130px;
          }

          /* =====================================
             BREADCRUMB
          ===================================== */

          .authors-breadcrumb {
            position: relative;
            z-index: 2;

            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;

            margin-bottom: 65px;

            font-size: 14px;
            color: #8a94a6;
          }

          .authors-breadcrumb a {
            color: #596579;
            text-decoration: none;
            transition: color 0.25s ease;
          }

          .authors-breadcrumb a:hover {
            color: #5c4f82;
          }

          .authors-breadcrumb span {
            color: #a8b0bd;
          }

          /* =====================================
             HERO CONTENT
          ===================================== */

          .authors-hero-content {
            position: relative;
            z-index: 2;
            max-width: 760px;
          }

          .authors-eyebrow {
            display: inline-block;

            margin-bottom: 15px;

            color: #5c4f82;

            font-size: 13px;
            font-weight: 700;

            letter-spacing: 1.8px;
          }

          .authors-hero h1 {
            margin: 0 0 20px;

            color: #111827;

            font-size: clamp(40px, 5vw, 62px);
            line-height: 1.08;
            font-weight: 700;
          }

          .authors-hero p {
            max-width: 680px;

            margin: 0;

            color: #667085;

            font-size: 18px;
            line-height: 1.7;
          }

          /* =====================================
             AUTHORS SECTION
          ===================================== */

          .authors-section {
            padding: 80px 0 100px;
          }

          .authors-section-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            margin-bottom: 38px;
          }

          .section-label {
            display: block;

            margin-bottom: 10px;

            color: #5c4f82;

            font-size: 12px;
            font-weight: 700;

            letter-spacing: 1.6px;
          }

          .authors-section-header h2 {
            margin: 0;

            color: #111827;

            font-size: 36px;
            line-height: 1.2;
            font-weight: 700;
          }

          /* =====================================
             COUNT
          ===================================== */

          .authors-count {
            display: inline-flex;
            align-items: center;

            padding: 9px 17px;

            border: 1px solid #dce9ff;
            border-radius: 50px;

            background: #f0f6ff;

            color: #5c4f82;

            font-size: 14px;
            font-weight: 600;
          }

          /* =====================================
             GRID
          ===================================== */

          .authors-grid {
            display: grid;

            grid-template-columns: repeat(4, 1fr);

            gap: 28px;
          }

          /* =====================================
             AUTHOR CARD
          ===================================== */

          .author-card {
            display: block;

            height: 100%;

            overflow: hidden;

            background: #ffffff;

            border: 1px solid #e6ebf2;
            border-radius: 18px;

            text-decoration: none;

            box-shadow:
              0 5px 20px rgba(16, 24, 40, 0.05);

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .author-card:hover {
            transform: translateY(-8px);

            border-color: #d5e4ff;

            box-shadow:
              0 18px 45px rgba(16, 24, 40, 0.12);
          }

          /* =====================================
             IMAGE
          ===================================== */

          .author-card-image {
            position: relative;

            width: 100%;
            height: 280px;

            overflow: hidden;

            background: #edf2f7;
          }

          .author-card-image::after {
            content: "";

            position: absolute;
            inset: 0;

            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.15),
              transparent 45%
            );

            pointer-events: none;
          }

          .author-card-image img {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;

            transition: transform 0.45s ease;
          }

          .author-card:hover
            .author-card-image img {
            transform: scale(1.07);
          }

          /* =====================================
             CARD CONTENT
          ===================================== */

          .author-card-content {
            padding: 22px 22px 24px;
          }

          .author-card-content h3 {
            margin: 0 0 13px;

            color: #172033;

            font-size: 20px;
            line-height: 1.35;
            font-weight: 650;
          }

          .author-card-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: #5c4f82;

            font-size: 14px;
            font-weight: 600;

            transition: gap 0.25s ease;
          }

          .author-card:hover
            .author-card-link {
            gap: 13px;
          }

          .arrow {
            font-size: 18px;
            line-height: 1;
          }

          /* =====================================
             EMPTY STATE
          ===================================== */

          .authors-empty {
            padding: 70px 20px;

            text-align: center;

            background: #ffffff;

            border: 1px solid #e6ebf2;
            border-radius: 18px;
          }

          .authors-empty h3 {
            margin: 0 0 10px;

            color: #111827;

            font-size: 24px;
          }

          .authors-empty p {
            margin: 0;

            color: #667085;

            font-size: 15px;
          }

          /* =====================================
             LARGE TABLET
          ===================================== */

          @media (max-width: 1199px) {

            .authors-grid {
              grid-template-columns: repeat(3, 1fr);
            }

          }

          /* =====================================
             TABLET
          ===================================== */

          @media (max-width: 991px) {

            .authors-hero {
              padding-bottom: 65px;
            }

            .authors-breadcrumb {
              margin-bottom: 50px;
            }

            .authors-section {
              padding: 65px 0 80px;
            }

            .authors-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 22px;
            }

            .author-card-image {
              height: 270px;
            }

          }

          /* =====================================
             MOBILE
          ===================================== */

          @media (max-width: 767px) {

            .authors-hero {
              padding: 25px 0 55px;
            }

            .authors-breadcrumb {
              margin-bottom: 40px;
              font-size: 13px;
            }

            .authors-hero h1 {
              font-size: 40px;
            }

            .authors-hero p {
              font-size: 16px;
              line-height: 1.65;
            }

            .authors-section {
              padding: 50px 0 70px;
            }

            .authors-section-header {
              align-items: flex-start;
              flex-direction: column;
              gap: 15px;

              margin-bottom: 28px;
            }

            .authors-section-header h2 {
              font-size: 30px;
            }

            .authors-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .author-card-image {
              height: 300px;
            }

          }

          /* =====================================
             SMALL MOBILE
          ===================================== */

          @media (max-width: 575px) {

            .authors-hero h1 {
              font-size: 34px;
            }

            .authors-hero p {
              font-size: 15px;
            }

            .author-card-image {
              height: 280px;
            }

            .author-card-content {
              padding: 20px;
            }

          }
        `}</style>
      </div>
      <TimerModal />
    </div>
  );
}

export default AuthorsList;
