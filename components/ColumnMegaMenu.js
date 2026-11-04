import Link from "next/link";
import Image from "next/image";

/*
  Desktop column mega menu, shared by Industries, Our Services and Company: three
  columns of cards on a grey panel, an optional "Explore all" link, and an
  optional promo aside with the AI banner. Data comes from menuData.js
  (INDUSTRY_MENU, SERVICE_MENU, COMPANY_MENU).
  Card options: `links` lists sub-pages under the card (Manufacturing);
  `inlineLinks` replaces the description with a row of links (Migration);
  a card without `href` isn't a link itself.
  Show/hide on hover comes from the existing .dropdown.megamenu rules.
*/
const CardBody = ({ item }) => (
  <>
    <span className="ind-mega-icon">
      <i className={`bi ${item.icon}`}></i>
    </span>
    <span className="ind-mega-text">
      <span className="ind-mega-name">{item.title}</span>
      {item.inlineLinks ? (
        <span className="ind-mega-inline">
          {item.inlineLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.title}
            </Link>
          ))}
        </span>
      ) : (
        <span className="ind-mega-desc">{item.desc}</span>
      )}
    </span>
  </>
);

const MenuCard = ({ item }) => (
  <div className="ind-mega-item">
    {item.href ? (
      <Link className="ind-mega-card" href={item.href}>
        <CardBody item={item} />
        <i className="bi bi-chevron-right ind-mega-chevron"></i>
      </Link>
    ) : (
      <div className="ind-mega-card ind-mega-card-static">
        <CardBody item={item} />
      </div>
    )}
    {item.links && (
      <ul className="ind-mega-sublinks ind-mega-sublinks--two">
        {item.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>
              <i className={`bi ${l.icon}`}></i>
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const ColumnMegaMenu = ({ menu }) => {
  const { columns, overview, promo } = menu;

  return (
    <div className={`megamenu-list ind-mega${promo ? "" : " ind-mega-no-aside"}`}>
      <div className="ind-mega-main">
        {columns.map((col, i) => (
          <div className="ind-mega-col" key={i}>
            {col.map((item) => (
              <MenuCard key={item.href || item.title} item={item} />
            ))}
            {overview && i === columns.length - 1 && (
              <Link className="ind-mega-all" href={overview.href}>
                {overview.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {promo && (
        <div className="ind-mega-aside">
          <div className="ind-mega-promo">
            <span className="ind-mega-promo-title">{promo.title}</span>
            <p className="ind-mega-promo-desc">{promo.desc}</p>
            <Link className="ind-mega-promo-cta" href={promo.href}>
              {promo.cta}
            </Link>
          </div>
          <Link className="ind-mega-banner" href="/products/dynamics-365-copilot/">
            <Image src="/img/menu--ss.png" width={706} height={180} alt="menu--ss" sizes="280px" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ColumnMegaMenu;
