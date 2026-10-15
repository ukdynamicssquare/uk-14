// Shared styles for the /location/microsoft-dynamics-partner-* pages.
// Everything is scoped under .loc-detail so the existing markup (and copy)
// on those pages is restyled without touching any other page.
const LocationPageStyles = () => (
  <style jsx global>{`
    .loc-detail {
      background: #ffffff;
      color: #1b1b1b;
      overflow: hidden;
    }

    .loc-detail section {
      position: relative;
      padding: 90px 0;
    }

    .loc-detail .bg-shape:before,
    .loc-detail .hero:before,
    .loc-detail .hero-1:before {
      display: none;
    }

    .loc-detail .pad9x {
      padding: 0;
    }

    .loc-detail p {
      color: #4b5563;
      font-size: 16px;
      line-height: 1.75;
    }

    .loc-detail a {
      transition: color 0.25s ease;
    }

    .loc-detail p a,
    .loc-detail li a {
      color: var(--color-red);
      font-weight: 600;
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-size: 0 1px;
      background-position: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.3s ease;
    }

    .loc-detail p a:hover,
    .loc-detail li a:hover {
      background-size: 100% 1px;
    }

    /* ---------- Buttons ---------- */
    .loc-detail .btn-get-started {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      padding: 14px 30px;
      border-radius: 999px;
      font-size: 16px;
      font-weight: 700;
      box-shadow: 0 12px 28px rgba(187, 43, 54, 0.28) !important;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .loc-detail .btn-get-started:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 34px rgba(187, 43, 54, 0.36) !important;
    }

    /* ---------- Hero ---------- */
    .loc-detail .Solution-banner {
      padding: 140px 0 90px;
      background: linear-gradient(135deg, #f4f8ff 0%, #ffffff 55%, #eef5ff 100%);
    }

    .loc-detail .Solution-banner::after {
      content: "";
      position: absolute;
      top: -180px;
      right: -180px;
      width: 560px;
      height: 560px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(187, 43, 54, 0.1) 0%, rgba(187, 43, 54, 0) 70%);
      pointer-events: none;
    }

    .loc-detail .Solution-banner .container {
      position: relative;
      z-index: 1;
    }

    .loc-detail .Solution-banner h1 {
      margin: 0 0 22px;
      padding-top: 0;
      color: #111827;
      font-size: clamp(32px, 4.2vw, 54px) !important;
      font-weight: 800;
      line-height: 1.12;
      letter-spacing: -0.02em;
    }

    .loc-detail .Solution-banner p {
      position: relative;
      margin: 0 0 18px;
      padding: 0 0 0 18px;
      color: #4b5563;
      font-size: clamp(17px, 1.4vw, 19px);
      line-height: 1.65;
    }

    .loc-detail .Solution-banner p::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      bottom: 5px;
      width: 4px;
      border-radius: 4px;
      background: var(--color-red);
    }

    .loc-detail .Solution-banner img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 30px 60px rgba(29, 53, 87, 0.15);
    }

    /* ---------- Section headings ---------- */
    .loc-detail .section-header {
      max-width: 860px;
      margin: 0 auto 50px;
      padding-bottom: 0;
      text-align: center;
    }

    .loc-detail .section-header h2,
    .loc-detail .section-header h3 {
      position: relative;
      display: inline-block;
      margin: 0 0 18px;
      padding-bottom: 16px;
      color: #111827;
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 800;
      line-height: 1.2;
    }

    .loc-detail .section-header h2::after,
    .loc-detail .section-header h3::after {
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

    .loc-detail .section-header p {
      margin: 0 auto;
      color: #4b5563;
      font-size: 17px;
    }

    /* ---------- Content blocks ---------- */
    .loc-detail .bg-shape:nth-of-type(odd) {
      background: #f8fafc;
    }

    .loc-detail .commen-rit-info h2,
    .loc-detail .commen-rit-info h3 {
      position: relative;
      margin: 0 0 22px;
      padding-bottom: 14px;
      color: #111827;
      font-size: clamp(26px, 2.6vw, 34px);
      font-weight: 800;
      line-height: 1.25;
    }

    .loc-detail .commen-rit-info h2::after,
    .loc-detail .commen-rit-info h3::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 56px;
      height: 4px;
      border-radius: 4px;
      background: var(--color-red);
    }

    .loc-detail .commen-rit-info h5 {
      position: relative;
      margin: 26px 0 10px;
      padding-left: 16px;
      color: var(--color-blue);
      font-size: 19px;
      font-weight: 700;
    }

    .loc-detail .commen-rit-info h5::before {
      content: "";
      position: absolute;
      left: 0;
      top: 3px;
      bottom: 3px;
      width: 4px;
      border-radius: 4px;
      background: var(--color-red);
    }

    .loc-detail .commen-rit-info ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px 20px;
      margin: 22px 0 26px;
      padding: 0;
      list-style: none;
    }

    .loc-detail .commen-rit-info ul li {
      position: relative;
      padding: 14px 16px 14px 48px;
      border: 1px solid #e5e9f2;
      border-radius: 12px;
      background: #ffffff;
      color: #1f2937;
      font-weight: 600;
      line-height: 1.4;
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .loc-detail .commen-rit-info ul li::before {
      content: "";
      position: absolute;
      left: 16px;
      top: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--color-red);
      transform: translateY(-50%);
    }

    .loc-detail .commen-rit-info ul li::after {
      content: "";
      position: absolute;
      left: 23px;
      top: 50%;
      width: 6px;
      height: 10px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: translateY(-62%) rotate(45deg);
    }

    .loc-detail .commen-rit-info ul li:hover {
      border-color: rgba(187, 43, 54, 0.35);
      box-shadow: 0 10px 24px rgba(29, 53, 87, 0.08);
    }

    .loc-detail .commen-rit-info .cltt-actt {
      margin-top: 26px;
    }

    .loc-detail .commen-rit-info .cltt-actt a {
      display: inline-flex;
      align-items: center;
      padding: 12px 26px;
      border: 2px solid var(--color-red);
      border-radius: 999px;
      background: transparent;
      color: var(--color-red);
      font-weight: 700;
      text-decoration: none;
      transition: background 0.25s ease, color 0.25s ease;
    }

    .loc-detail .commen-rit-info .cltt-actt a:hover {
      background: var(--color-red);
      color: #ffffff;
    }

    .loc-detail .commen-lef-pic img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 24px 50px rgba(29, 53, 87, 0.14);
    }

    .loc-detail .col-lg-12.text-center.p-5 p {
      max-width: 900px;
      margin: 20px auto 0;
      padding: 26px 32px;
      border-left: 4px solid var(--color-red);
      border-radius: 14px;
      background: #ffffff;
      box-shadow: 0 14px 34px rgba(29, 53, 87, 0.08);
      color: #1f2937;
      text-align: left;
    }

    /* ---------- Side form ---------- */
    .loc-detail .common-side-form {
      padding: 10px;
      border: 1px solid #e5e9f2;
      border-radius: 20px;
      background: #ffffff;
      box-shadow: 0 24px 50px rgba(29, 53, 87, 0.12);
    }

    /* ---------- Accordions ---------- */
    .loc-detail .finace-acc > hr,
    .loc-detail .finace-acc .accordion > hr {
      display: none;
    }

    .loc-detail .finace-acc .accordion-item {
      margin-bottom: 14px;
      border: 1px solid #e5e9f2 !important;
      border-radius: 14px !important;
      background: #ffffff;
      overflow: hidden;
      transition: box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .loc-detail .finace-acc .accordion-item:hover {
      box-shadow: 0 12px 28px rgba(29, 53, 87, 0.08);
    }

    .loc-detail .finace-acc .accordion-header {
      margin: 0;
    }

    .loc-detail .finace-acc .accordion-header .accordion-button {
      padding: 20px 22px;
      background: transparent;
      box-shadow: none;
      color: #111827;
      font-size: 17px;
      font-weight: 700;
    }

    .loc-detail .finace-acc .accordion-button:not(.collapsed) {
      color: var(--color-red);
      background: rgba(187, 43, 54, 0.04);
    }

    .loc-detail .finace-acc .accordion-item:has(.accordion-button:not(.collapsed)) {
      border-color: rgba(187, 43, 54, 0.35) !important;
    }

    .loc-detail .finace-acc .accordion-button:focus {
      box-shadow: none;
    }

    .loc-detail .finace-acc .accordion-body {
      padding: 4px 22px 18px;
    }

    /* ---------- Call to action ---------- */
    .loc-detail .call-to-action-center {
      padding: 80px 0;
      background:
        radial-gradient(circle at 85% 20%, rgba(187, 43, 54, 0.35) 0%, rgba(187, 43, 54, 0) 45%),
        linear-gradient(135deg, #1d3557 0%, #14253d 100%);
    }

    .loc-detail .call-to-action-center .call-to-action-content h3 {
      margin-bottom: 16px;
      color: #ffffff;
      font-size: clamp(28px, 3.2vw, 42px);
      font-weight: 800;
    }

    .loc-detail .call-to-action-center .call-to-action-content p {
      margin-bottom: 18px;
      color: rgba(255, 255, 255, 0.82);
      font-size: 17px;
    }

    /* ---------- Feature grids ---------- */
    .loc-detail .style-grid-1,
    .loc-detail .content-inner-moil-1 {
      margin-bottom: 20px;
      padding: 26px;
      border: 1px solid #e5e9f2;
      border-radius: 16px;
      background: #ffffff;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .loc-detail .style-grid-1:hover,
    .loc-detail .content-inner-moil-1:hover {
      transform: translateY(-4px);
      border-color: transparent;
      box-shadow: 0 20px 40px rgba(29, 53, 87, 0.1);
    }

    .loc-detail .style-grid-1 h3,
    .loc-detail .content-inner-moil-1 h3 {
      color: #111827;
      font-size: 20px;
      font-weight: 800;
    }

    .loc-detail .style-grid-icons img {
      width: 64px;
      height: 64px;
      padding: 10px;
      border-radius: 14px;
      background: rgba(187, 43, 54, 0.06);
    }

    .loc-detail .content-inner-moil-1 .ext-bord {
      border-color: var(--color-red);
      background: rgba(187, 43, 54, 0.08);
    }

    .loc-detail .content-inner-moil-1 .ext-bord .bi {
      color: var(--color-red);
    }

    /* ---------- Partner reasons ---------- */
    .loc-detail .leads-sect {
      background: linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%);
    }

    .loc-detail .leads-sect .row > div:has(> .parten-more) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
      flex: 0 0 100%;
      max-width: 1100px;
    }

    .loc-detail .leads-sect .parten-more:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }

    .loc-detail .parten-more {
      position: relative;
      margin: 0;
      padding: 30px 28px 20px;
      border: 1px solid #e5e9f2;
      border-radius: 16px;
      background: #ffffff;
      box-shadow: none;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .loc-detail .parten-more::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: var(--color-red);
      transform: scaleY(0.35);
      transform-origin: top;
      transition: transform 0.35s ease;
    }

    .loc-detail .parten-more:hover {
      transform: translateY(-4px);
      border-color: transparent;
      box-shadow: 0 20px 40px rgba(29, 53, 87, 0.1);
    }

    .loc-detail .parten-more:hover::before {
      transform: scaleY(1);
    }

    .loc-detail .parten-more h3 {
      margin-bottom: 12px;
      color: #111827;
      font-size: 20px;
      font-weight: 800;
    }

    /* ---------- Responsive ---------- */
    @media (max-width: 991px) {
      .loc-detail section {
        padding: 64px 0;
      }

      .loc-detail .Solution-banner {
        padding: 110px 0 60px;
        text-align: center;
      }

      .loc-detail .Solution-banner p {
        padding-left: 0;
      }

      .loc-detail .Solution-banner p::before {
        display: none;
      }

      .loc-detail .Solution-banner img {
        margin-top: 40px;
      }

      .loc-detail .common-side-form,
      .loc-detail .commen-lef-pic {
        margin-top: 36px;
      }

      .loc-detail .leads-sect .row > div:has(> .parten-more) {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 575px) {
      .loc-detail section {
        padding: 52px 0;
      }

      .loc-detail .commen-rit-info ul {
        grid-template-columns: 1fr;
      }

      .loc-detail .col-lg-12.text-center.p-5 {
        padding: 0 12px !important;
      }

      .loc-detail .col-lg-12.text-center.p-5 p {
        padding: 20px;
      }

      .loc-detail .parten-more,
      .loc-detail .style-grid-1,
      .loc-detail .content-inner-moil-1 {
        padding: 22px 20px;
      }
    }
  `}</style>
);

export default LocationPageStyles;
