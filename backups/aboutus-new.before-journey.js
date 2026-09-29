import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/about.module.css";

const team = [
  { img: "/img/aboutus-new/team-gourav-goyal-new.png", name: "Gourav Goyal", role: "Co-Founder, Dynamics Square", quote: "Nurturing people and investing in their capabilities to build a resilient organisation." },
  { img: "/img/aboutus-new/team-manish-goyal-new.png", name: "Manish Goyal", role: "Co-Founder, Dynamics Square", quote: "As a tech company, we believe technology is meant to simplify, not complicate." },
  { img: "/img/aboutus-new/team-felton-lean-new.png", name: "Dr. Felton Lean", role: "The People Person", quote: "Helping employees and organisations achieve more through learning and development." },
  { img: "/img/aboutus-new/team-nitesh-sharma-new.png", name: "Nitesh Sharma", role: "Head of Business Development", quote: "Every business has a story, and I learn about it before supporting its transformation." },
  { img: "/img/aboutus-new/team-nitesh-sharma-new.png", name: "Balaji Ravindran", role: "Solution Architect", quote: "Every successful implementation begins with listening before launching." },
];

const techGroups = [
  {
    title: "AI-Enabled ERP",
    desc: "Run your entire business with connected ERP",
    headerIcon: "/img/aboutus-new/tech-erp-icon.png",
    items: [
      { icon: "/img/menu-icons/dynamics-365-businesscentral.svg", label: "Business Central", href: "/products/dynamics-365-business-central/" },
      { icon: "/img/menu-icons/dynamics-365-commerce.svg", label: "Commerce", href: "/products/microsoft-dynamics-365-commerce/" },
      { icon: "/img/menu-icons/dynamics-365-finance.svg", label: "Finance", href: "/products/microsoft-dynamics-365-finance/" },
      { icon: "/img/menu-icons/dynamics-365-project-management.svg", label: "Project Operations", href: "/products/dynamics-365-project-operations/" },
      { icon: "/img/menu-icons/dynamics-365-supplychainmanagement.svg", label: "Supply Chain Management", href: "/products/dynamics-365-supply-chain-management/" },
    ],
  },
  {
    title: "AI-Enabled CRM",
    desc: "Build lasting customer relationships",
    headerIcon: "/img/aboutus-new/tech-crm-icon.png",
    items: [
      { icon: "/img/menu-icons/dynamics-365-sales.svg", label: "Sales", href: "/products/microsoft-dynamics-365-sales/" },
      { icon: "/img/menu-icons/customer-insights-scalable-logo.svg", label: "Customer Insights", href: "/products/microsoft-dynamics-365/" },
      { icon: "/img/menu-icons/dynamics-365-fieldservice.svg", label: "Field Service", href: "/products/microsoft-dynamics-365-field-service/" },
      { icon: "/img/menu-icons/dynamics-365-customer-service.svg", label: "Customer Service", href: "/products/microsoft-dynamics-365-customer-service/" },
    ],
  },
  {
    title: "Analytics",
    desc: "Unify your data. Turns insight into actions",
    headerIcon: "/img/aboutus-new/tech-analytics-icon.png",
    items: [
      { icon: "/img/menu-icons/microsoft-fabric.png", label: "Microsoft Fabric", href: "/ai-solutions/microsoft-fabric/" },
      { icon: "/img/menu-icons/power-bi.svg", label: "Power BI", href: "/products/microsoft-power-bi/" },
      { icon: "/img/menu-icons/power-automate.svg", label: "Power Automate", href: "/products/microsoft-power-automate/" },
      { icon: "/img/menu-icons/power-apps.svg", label: "Power Apps", href: "/products/microsoft-power-apps/" },
      { icon: "/img/menu-icons/copilate-small.png", label: "Copilot Studio", href: "/products/dynamics-365-copilot/" },
    ],
  },
  {
    title: "AI",
    desc: "Accelerate innovation with trusted AI",
    headerIcon: "/img/aboutus-new/tech-ai-icon.png",
    items: [
      { icon: "/img/menu-icons/azure.svg", label: "Azure AI", href: "/products/microsoft-dynamics-365-ai/" },
      { icon: "/img/menu-icons/copilate-small.png", label: "Copilot for Dynamics 365", href: "/products/dynamics-365-copilot/" },
    ],
  },
  {
    title: "IoT",
    desc: "Connect your physical world to unlock new possibilities",
    headerIcon: "/img/aboutus-new/tech-iot-icon.png",
    items: [{ icon: "/img/menu-icons/iot-hub.svg", label: "Azure IoT", href: "/products/azure-iot-internet-of-things/" }],
  },
  {
    title: "Mixed Reality",
    desc: "Bring new dimensions to productivity",
    headerIcon: "/img/aboutus-new/tech-mixed-reality-icon.png",
    items: [{ icon: "/img/menu-icons/mixed-Reality-icons.svg", label: "Dynamics 365 Mixed Reality", href: "/products/microsoft-dynamics-365/mixed-reality/" }],
  },
];

const services = [
  { icon: "/img/aboutus-new/forum.png", title: "Advisory and Consulting", text: "We study your business, industry, and goals first, then build guidance that is practical and easy for your team to act on." },
  { icon: "/img/aboutus-new/settings_b_roll.png", title: "Dynamics 365 Implementation", text: "We keep every stage of implementation consistent through detailed scoping, configuration, data migration, and testing, explaining each step clearly so your team stays confident throughout." },
  { icon: "/img/aboutus-new/emoji_objects.png", title: "Solutioning", text: "We study your workflows and customer journeys closely, so the systems we design deliver real efficiency and room to scale." },
  { icon: "/img/aboutus-new/cloud_upload.png", title: "Upgrade", text: "Our upgrade services combine careful planning, structured communication, and minimal disruption to your day-to-day operations." },
  { icon: "/img/aboutus-new/co_present.png", title: "Training", text: "Our training programmes are role-based and hands-on, built to leave your team genuinely confident and comfortable working in the system." },
  { icon: "/img/aboutus-new/simulation.png", title: "Dedicated Support", text: "Support stays proactive and responsive, delivered by people who understand your business. Every interaction stays human." },
];

const methodologies = [
  {
    title: "Agile",
    icon: "/img/aboutus-new/method-agile-icon.png",
    description:
      "Built for businesses whose requirements evolve as the project progresses. We work in short, focused sprints, so you see working functionality early and can adjust direction based on real feedback as the project unfolds.",
  },
  {
    title: "Sure Step",
    icon: "/img/aboutus-new/method-surestep-icon.png",
    description:
      "Best suited to organisations with clearly defined, stable requirements from the outset. This structured, phase-based methodology gives you predictable milestones and tight control over scope, budget, and timeline.",
  },
  {
    title: "Success by Design",
    icon: "/img/aboutus-new/method-success-icon.png",
    description:
      "Microsoft's own framework for Dynamics 365 cloud implementations. We use this approach when a project calls for strict alignment with Microsoft's recommended architecture, environment strategy, and application lifecycle management practices from day one.",
  },
];

const choices = [
  { title: "Certified Microsoft Partner", text: "500+ projects powered by certified Dynamics 365 experts." },
  { title: "Rich Industry Experience", text: "We carry 14 of experience across 12 different industries." },
  { title: "Agile Global Teams", text: "Onsite and offshore teams work together to support your operations." },
  { title: "Deep Knowledge Across NAV and AX", text: "Our experience dates back to early NAV and AX systems." },
  { title: "Value-Driven Approach", text: "Our hybrid model supports cost efficiency with steady personal attention." },
  { title: "Structured Solution Architecture", text: "Our architects question, analyse, and recommend before they deploy any system." },
  { title: "Full 360-Degree Dynamics Expertise", text: "We bring ERP, CRM, ISVs, and Power Platform under one partner." },
  { title: "Strong Client Relationships", text: "Clients stay with us for more than 5 years on average." },
];

const locations = [
    {
        name: "Canada",
        url: "/canada",
        className: "canada",
        flag: "/images/canada-flag.png",
    },
    {
        name: "USA",
        url: "/usa",
        className: "usa",
        flag: "/images/usa-flag.png",
    },
    {
        name: "United Kingdom",
        url: "/uk",
        className: "uk",
        flag: "/images/uk-flag.png",
    },
    {
        name: "Netherlands",
        url: "/netherlands",
        className: "netherlands",
        flag: "/images/netherlands-flag.png",
    },
    {
        name: "India",
        url: "/india",
        className: "india",
        flag: "/images/india-flag.png",
    },
    {
        name: "Singapore",
        url: "/singapore",
        className: "singapore",
        flag: "/images/singapore-flag.png",
    },
    {
        name: "Australia",
        url: "/australia",
        className: "australia",
        flag: "/images/australia-flag.png",
    },
];


const AboutUsNew = () => {
  const mapRef = useRef(null);
  const [mapIn, setMapIn] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setMapIn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setMapIn(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pageRef = useRef(null);

  // Modern GSAP motion: masked headline reveals, split-line text, clip-path image
  // wipes, parallax, magnetic buttons, card tilt and a scroll progress bar.
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    gsap.defaults({ force3D: true });
    const mm = gsap.matchMedia();

    // desktop / tablet only: no GSAP, smooth scroll or progress bar on phones
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const cls = (name) => `.${styles[name]}`;
      const all = (sel) => gsap.utils.toArray(sel, root);
      const trig = (el, start = "top 78%") => ({
        trigger: el,
        start,
        toggleActions: "play none none reverse", // scrolling back up plays the animation in reverse
      });
      const EXPO = "power4.out"; // softer than expo, so the motion does not feel rushed
      const SLOW = 1.7; // global speed factor: raise to slow all animations down, lower to speed up

      // ---------- Smooth scrolling (Lenis) ----------
      const lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        // let modals (contact form) scroll natively
        prevent: (node) => !!node.closest && !!node.closest(".modal"),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // ---------- Scroll progress bar ----------
      const bar = document.createElement("div");
      Object.assign(bar.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "3px",
        background: "linear-gradient(90deg,#984b6e,#9b5cc0,#60518c)",
        transformOrigin: "0 50%",
        transform: "scaleX(0)",
        zIndex: "99999",
        pointerEvents: "none",
      });
      document.body.appendChild(bar);
      gsap.to(bar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      // ---------- Headline: masked rise (works with gradient text) ----------
      const headline = (el, delay = 0, onLoad = false) =>
        gsap.fromTo(
          el,
          { yPercent: 60, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.3 * SLOW,
            ease: EXPO,
            delay,
            scrollTrigger: onLoad ? undefined : trig(el, "top 78%"),
          }
        );

      // ---------- Paragraph: soft rise + fade ----------
      // (kept as one block: splitting into masked lines cut off text and wrapped single words)
      const lines = (el, onLoad = false, delay = 0) =>
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 1.1 * SLOW,
          ease: EXPO,
          delay,
          scrollTrigger: onLoad ? undefined : trig(el, "top 78%"),
        });

      // ---------- Image: clip-path wipe with a slow zoom settle ----------
      const imageWipe = (el, from = "inset(0 0 100% 0)", start = "top 78%") =>
        gsap.fromTo(
          el,
          { clipPath: from, scale: 1.08 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.5 * SLOW,
            ease: "expo.inOut",
            scrollTrigger: trig(el, start),
          }
        );

      // ---------- Parallax on scroll ----------
      const parallax = (el, amount = 60, trigger = el) =>
        gsap.fromTo(
          el,
          { y: amount },
          {
            y: -amount,
            ease: "none",
            scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );

      // ---------- Group reveal (cards etc.) ----------
      const stagger = (sel, from = {}, each = 0.1, start = "top 78%") => {
        const items = all(sel);
        if (!items.length) return;
        const hidden = { opacity: 0, y: 70, ...from };
        gsap.set(items, hidden);
        ScrollTrigger.batch(items, {
          start,
          onLeaveBack: (batch) =>
            gsap.to(batch, {
              ...hidden,
              duration: 0.7,
              ease: "power2.inOut",
              stagger: { each: 0.05, from: "end" },
              overwrite: true,
            }),
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 1.2 * SLOW,
              ease: EXPO,
              stagger: each * SLOW,
              overwrite: true,
            }),
        });
      };

      const fade = (sel, from = {}, start) =>
        all(sel).forEach((el) =>
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1.1 * SLOW,
            ease: EXPO,
            ...from,
            scrollTrigger: trig(el, start),
          })
        );

      // ================= HERO (on load) =================
      const eyebrow = root.querySelector(cls("eyebrow"));
      const heroTitle = root.querySelector(cls("heroTitle"));
      const heroImg = root.querySelector(`${cls("heroImageWrap")} img`);
      if (eyebrow) gsap.from(eyebrow, { y: 20, opacity: 0, duration: 0.9 * SLOW, ease: EXPO });
      if (heroTitle) headline(heroTitle, 0.15, true);
      all(`${cls("heroText")}, ${cls("heroSubText")}`).forEach((p, i) => lines(p, true, (0.55 + i * 0.15) * SLOW));
      if (heroImg) {
        gsap.from(heroImg, { y: 90, opacity: 0, scale: 0.92, duration: 1.6 * SLOW, delay: 0.5 * SLOW, ease: EXPO });
        gsap.to(heroImg, {
          y: -50,
          ease: "none",
          scrollTrigger: { trigger: cls("hero"), start: "top top", end: "bottom top", scrub: 1 },
        });
      }

      // ================= PARTNER STRIP =================
      all(`${cls("partnerSection")} h3`).forEach((h) => headline(h));
      all(`${cls("partnerSection")} > .container p`).forEach((p) => lines(p));
      stagger(`${cls("statRow")} > div`, { y: 40 }, 0.15);
      all(`${cls("statRow")} h4`).forEach((h) => {
        // remember the real value so a re-run (React StrictMode) never reads "0+"
        const original = h.dataset.count || h.textContent;
        h.dataset.count = original;
        const m = original.match(/^(\d+)(.*)$/);
        if (!m) return;
        const end = parseInt(m[1], 10);
        const suffix = m[2];
        const counter = { v: 0 };
        h.textContent = `0${suffix}`;
        gsap.to(counter, {
          v: end,
          duration: 2.2 * SLOW,
          ease: "power3.out",
          scrollTrigger: trig(h, "top 78%"),
          onUpdate: () => {
            h.textContent = `${Math.round(counter.v)}${suffix}`;
          },
        });
      });
      all(cls("partnerBadge")).forEach((b) => {
        gsap.from(b, {
          scale: 0.6,
          rotation: -12,
          opacity: 0,
          duration: 1.6 * SLOW,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: trig(b),
        });
      });

      // ================= MISSION & VISION =================
      all(`${cls("trustedSection")} h2`).forEach((h) => headline(h));
      all(`${cls("trustedSection")} > .container > .row > div > p, ${cls("trustedSection")} > .container p:not(.x)`)
        .filter((p) => !p.closest(cls("mvCard")))
        .forEach((p) => lines(p));
      stagger(cls("mvCard"), { y: 80, rotation: 2 }, 0.2);

      // ================= JOURNEY =================
      all(`${cls("journeyImageWrap")} img`).forEach((img) => gsap.from(img, { opacity: 0, y: 60, duration: 1.4 * SLOW, ease: EXPO, scrollTrigger: trig(img, "top 78%") }));
      all(cls("journeyHeading")).forEach((h) => headline(h, 0.5 * SLOW));
      all(cls("journeyQuote")).forEach((q) => fade(q, { y: 40, delay: 0.9 * SLOW }, "top 78%"));

      // ================= TEAM =================
      all(`${cls("teamSection")} h2`).forEach((h) => headline(h));
      all(`${cls("teamSection")} > .container > p`).forEach((p) => lines(p));
      stagger(cls("teamCard"), { y: 90, scale: 0.92 }, 0.12, "top 78%");
      fade(cls("teamCallout"), { y: 40 });

      // ================= TECH GRID =================
      all(`${cls("techSection")} h2`).forEach((h) => headline(h));
      stagger(cls("techCard"), { y: 80 }, 0.18);
      stagger(cls("techItem"), { y: 20, scale: 0.9 }, 0.05, "top 78%");

      // ================= WHAT WE DELIVER =================
      all(`${cls("deliverSection")} h2`).forEach((h) => headline(h));
      all(`${cls("deliverSection")} > .container > .row > div > p`).forEach((p) => lines(p));
      stagger(`${cls("deliverSection")} h5, ${cls("deliverSection")} li`, { y: 24 }, 0.07, "top 78%");
      all(cls("ringWrap")).forEach((wrap) => {
        gsap.from(wrap, {
          scale: 0.5,
          rotation: -40,
          opacity: 0,
          duration: 1.8 * SLOW,
          ease: "expo.out",
          scrollTrigger: trig(wrap, "top 78%"),
        });
        const img = wrap.querySelector("img");
        if (img) {
          gsap.to(img, { y: -16, duration: 3.2 * SLOW, ease: "sine.inOut", repeat: -1, yoyo: true });
          gsap.to(img, {
            rotation: 6,
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
        }
      });

      // ================= CTA BANNERS =================
      all(cls("ctaBanner")).forEach((banner) => {
        const h2 = banner.querySelector("h2");
        const p = banner.querySelector("p");
        const btn = banner.querySelector("a");
        const photo = banner.querySelector(cls("ctaBannerPhoto"));
        if (h2) headline(h2);
        if (p) lines(p);
        if (btn) {
          gsap.from(btn, {
            y: 30,
            opacity: 0,
            scale: 0.85,
            duration: 1.2 * SLOW,
            delay: 0.5 * SLOW,
            ease: "back.out(1.8)",
            scrollTrigger: trig(banner, "top 78%"),
          });
        }
        if (photo) {
          gsap.from(photo, {
            xPercent: 20,
            opacity: 0,
            duration: 1.6 * SLOW,
            ease: EXPO,
            scrollTrigger: trig(banner, "top 78%"),
          });
        }
      });

      // ================= METHODOLOGY =================
      all(`${cls("aboutMethodologyTitle")}`).forEach((h) => headline(h));
      all(`${cls("aboutMethodologyContent")} p`).forEach((p) => lines(p));
      stagger(cls("aboutMethodologyArrow"), { y: 0, x: -60 }, 0.2);
      stagger(`${cls("aboutMethodologyCards")} > div`, { y: 90 }, 0.2);
      all(cls("aboutMethodologyIconImg")).forEach((icon) =>
        gsap.from(icon, {
          scale: 0,
          rotation: -120,
          duration: 1.2 * SLOW,
          ease: "back.out(2.2)",
          scrollTrigger: trig(icon, "top 78%"),
        })
      );
      fade(cls("aboutMethodologyBottom"), { y: 40 });

      // ---------- Methodology connector borders: drawn while scrolling (scrubbed, reverses on scroll up) ----------
      const FULL = "inset(-60px -60px -60px -60px)";
      const DOWN = "inset(-60px -60px 100% -60px)"; // hidden -> reveals top to bottom
      const RIGHT_TO_LEFT = "inset(-60px -60px -60px 100%)";
      const LEFT_TO_RIGHT = "inset(-60px 100% -60px -60px)";
      const draw = (tl, sel, from, at, duration = 1) =>
        all(sel).forEach((el) => tl.fromTo(el, { clipPath: from }, { clipPath: FULL, duration, ease: "none" }, at));

      const topConn = root.querySelector(cls("aboutMethodologyTopConnector"));
      if (topConn) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: topConn, start: "top 95%", end: "top 45%", scrub: 1 },
        });
        draw(tl, cls("aboutMethodologyTopVertical"), DOWN, 0, 1);
        draw(tl, cls("aboutMethodologyTopLineThree"), RIGHT_TO_LEFT, 1, 1);
        draw(tl, cls("aboutMethodologyTopLineTwo"), RIGHT_TO_LEFT, 2, 1);
        draw(tl, cls("aboutMethodologyTopLineOne"), RIGHT_TO_LEFT, 3, 1);
      }

      const bottomConn = root.querySelector(cls("aboutMethodologyBottomConnector"));
      if (bottomConn) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: bottomConn, start: "top 92%", end: "top 45%", scrub: 1 },
        });
        draw(tl, cls("aboutMethodologyBottomVerticalThree"), DOWN, 0, 0.6);
        draw(tl, cls("aboutMethodologyBottomVerticalTwo"), DOWN, 0.6, 0.6);
        draw(tl, cls("aboutMethodologyBottomLine"), RIGHT_TO_LEFT, 1.2, 1.4);
        draw(tl, cls("aboutMethodologyBottomVertical"), DOWN, 2.6, 0.7);
        all(cls("aboutMethodologyBottomCheck")).forEach((el) =>
          tl.fromTo(el, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, 3.3)
        );
      }

      // ================= SERVICES =================
      all(`${cls("servicesSection")} h2`).forEach((h) => headline(h));
      all(`${cls("servicesSection")} > .container > .row:first-child p`).forEach((p) => lines(p));
      stagger(cls("serviceCard"), { y: 60 }, 0.12);
      all(cls("serviceIconImg")).forEach((icon) =>
        gsap.from(icon, {
          scale: 0,
          rotation: 90,
          duration: 1 * SLOW,
          ease: "back.out(2.4)",
          scrollTrigger: trig(icon, "top 78%"),
        })
      );

      // ================= PREFERRED CHOICE =================
      all(`${cls("choiceHead")} h2`).forEach((h) => headline(h));
      all(`${cls("choiceHead")} p`).forEach((p) => lines(p));
      stagger(cls("choiceCard"), { y: 40 }, 0.09, "top 78%");
      all(`${cls("choiceImageWrap")} img`).forEach((img) => {
        imageWipe(img, "inset(0 0 0 100%)", "top 78%");
      });

      // ================= GLOBAL PRESENCE =================
      all(`${cls("globalPresence")} h2`).forEach((h) => headline(h));
      all(`${cls("globalPresence")} p`).forEach((p) => lines(p));
      all(cls("globalMap")).forEach((map) =>
        gsap.from(map, {
          opacity: 0,
          duration: 1.4 * SLOW,
          ease: EXPO,
          scrollTrigger: trig(map, "top 78%"),
        })
      );

      // ================= HOVER: magnetic buttons + card tilt (mouse devices only) =================
      const cleanups = [];
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        all(cls("btnRed")).forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
          const move = (e) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.5);
          };
          const leave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
          };
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", move);
            btn.removeEventListener("mouseleave", leave);
          });
        });

        all(`${cls("mvCard")}, ${cls("techCard")}, ${cls("aboutMethodologyCard")}`).forEach((card) => {
          const move = (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, {
              rotationY: px * 8,
              rotationX: -py * 8,
              transformPerspective: 900,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });
          };
          const leave = () =>
            gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.9, ease: "power3.out", overwrite: "auto" });
          card.addEventListener("mousemove", move);
          card.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", leave);
          });
        });
      }

      // Keep trigger positions correct when the layout height changes
      // (Swiper, fonts and lazy images can shift sections after the first measurement)
      let refreshTimer;
      const scheduleRefresh = () => {
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
      };
      let ro;
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(scheduleRefresh);
        ro.observe(root);
      }
      [600, 1800].forEach((ms) => setTimeout(scheduleRefresh, ms));

      // Recalculate trigger positions once images/fonts have loaded
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

      return () => {
        window.removeEventListener("load", refresh);
        clearTimeout(refreshTimer);
        if (ro) ro.disconnect();
        gsap.ticker.remove(tick);
        lenis.destroy();
        cleanups.forEach((fn) => fn());
        all(`${cls("statRow")} h4`).forEach((h) => {
          if (h.dataset.count) h.textContent = h.dataset.count;
        });
        bar.remove();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <Head>
        <title>About Dynamics Square | Dynamics 365 Business Central Partner</title>
        <meta
          name="description"
          content="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>About Us</span>
          <h1 className={styles.heroTitle}>
            Transforming Businesses with Trusted Microsoft Technology &amp; AI Solutions
          </h1>
          <p className={styles.heroText}>
            Dynamics Square helps organisations solve real operational challenges through Microsoft cloud
            technology and intelligent automation, making businesses more agile, more resilient, and ready to
            compete on their own terms.
          </p>
          <p className={styles.heroSubText}>
            We build the kind of partnership that earns trust project after project, year after year.
          </p>
          <div className={styles.heroImageWrap}>
            <Image
              src="/img/aboutus-new-00.png"
              alt="Dynamics Square team"
              width={1920}
              height={808}
              priority
            />
          </div>
        </div>
      </section>

      {/* Microsoft Solutions Partner */}
      <section className={styles.partnerSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className={styles.statrpadding}>
                <h3>We&apos;re a Microsoft Solutions Partner</h3>
              <p>
                Since 2011, Dynamics Square has held to one belief: Trust. It is the foundation every business
                relationship is built on. As a Microsoft Solutions Partner, we are trusted by 500+ global clients
                for reliable, well-executed Dynamics 365 implementations. Our team of 150+ certified consultants
                with deep industry expertise delivers cloud technology, AI-powered automation, hands-on training,
                and consistent support that drives measurable growth for every organisation we work with.
              </p>
              <div className={styles.statRow}>
                <div>
                  <h4>500+</h4>
                  <span>Clients Worldwide</span>
                </div>
                <div>
                  <h4>150+</h4>
                  <span>Certified Professionals</span>
                </div>
                <div>
                  <h4>14+</h4>
                  <span>Years of Experience</span>
                </div>
              </div>
              </div>
            </div>
             <div className="col-lg-1"></div>
            <div className="col-lg-3 mt-4 mt-lg-0">
              <div className={styles.partnerBadge}>
                <Image
                  src="/img/aboutus-new/partner-badge.png"
                  alt="Dynamics Square - Microsoft Solutions Partner"
                  width={330}
                  height={400}
                />
              </div>
            </div>
             <div className="col-lg-1"></div>
          </div>
        </div>
      </section>

      {/* Trusted / Mission Vision */}
      <section className={styles.trustedSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2>Your Trusted Microsoft Solutions Partner in the UK</h2>
              <p>
                Relationships are built on one commodity that never loses its value: trust. Our motto has stayed
                the same since day one: become the most preferred technology partner in global IT infrastructure by
                building relationships that are strong enough to carry businesses through real change.
              </p>
              <p>
                Trust builds gradually, through every honest conversation, every commitment kept, and every problem
                solved without excuses. That is the standard we hold ourselves to on every engagement, in the UK
                and everywhere else we operate.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.mvCard}>
                    <h5>
                      <Image src="/img/aboutus-new-03.png" alt="Mission" width={32} height={32} /> Mission
                    </h5>
                    <p>
                      To empower every business we work with to achieve more and meet the demands of a changing
                      market, through Microsoft Business Applications such as Dynamics 365 Business Central,
                      Finance, Sales, and Supply Chain Management, hosted on Microsoft Azure, a secure and
                      enterprise-grade cloud platform.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.mvCard}>
                    <h5>
                       <Image src="/img/aboutus-new-04.png" alt="Vision" width={32} height={32} /> Vision
                    </h5>
                    <p>
                      To simplify and automate business processes, sharpen customer experience, and turn scattered
                      data into meaningful insight by integrating Microsoft Fabric, AI, and Microsoft Copilot into
                      everyday operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className={styles.journeySection}>
        <div className="container-fluid g-0">
          <div className={styles.journeyImageWrap}>
            <Image
              src="/img/aboutus-new-05.png"
              alt="Our Journey So Far - Dynamics Square timeline from 2011 to 2025"
              width={1920}
              height={900}
              sizes="100vw"
            />
            <div className={`container ${styles.journeyOverlay}`}>
              <h2 className={styles.journeyHeading}>Our Journey So Far</h2>
              <blockquote className={styles.journeyQuote}>
                <span className={styles.journeyQuoteMark} aria-hidden="true">&ldquo;</span>
                We never aimed to work as just another technology provider. Our intention has always
                centred around careful understanding, honest guidance, and steady partnership.
                <span className={styles.journeyQuoteMark} aria-hidden="true">&rdquo;</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2>Meet the People Behind Dynamics Square</h2>
          <p>
            Dynamics Square is led by a team of experienced professionals who show up for our clients long after
            the contract is signed. Every one of them carries the same belief: technology only earns trust when the
            people behind it do the work it deserves.
          </p>
          <div className={styles.teamSlider}>
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className={styles.teamCard}>
                    <div className={styles.imgWrap}>
                      {member.img ? (
                        <Image src={member.img} alt={member.name} fill sizes="238px" />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 bg-light">
                          <i className="bi bi-person-circle" style={{ fontSize: "60px", color: "#7a3fa0" }}></i>
                        </div>
                      )}
                    </div>
                    <div className={styles.teamMeta}>
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                    </div>
                    <p className={styles.quote}>{member.quote}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.teamCallout}>
            <div>
              <h5>Dynamics Square Has a Team That Truly Cares</h5>
              <p>
                Behind every solution stands a group of people who invest fully in the success of your business.
                Our team includes support engineers who lead with empathy, industry-specific consultants, NAV, BC,
                and AX specialists, and solution architects who focus on solving problems that matter. That
                commitment holds on every project, whatever its size.
              </p>
            </div>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
              Speak To Our Expert Today <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech grid */}
      <section className={styles.techSection}>
        <div className="container">
          <h2>Accelerating Your Digital Transformation Journey</h2>
          <div className="row g-3">
            {[0, 1, 2].map((col) => (
              <div className="col-md-6 col-lg-4 d-flex flex-column gap-3" key={col}>
                {[techGroups[col], techGroups[col + 3]].map((group) => (
                  <div className={styles.techCard} key={group.title}>
                    <div className={styles.techCardHead}>
                      <div>
                        <h5>{group.title}</h5>
                        <p>{group.desc}</p>
                      </div>
                      {group.headerIcon ? (
                        <Image
                          src={group.headerIcon}
                          alt=""
                          width={44}
                          height={44}
                          aria-hidden="true"
                          className={styles.techHeaderIcon}
                        />
                      ) : null}
                    </div>
                    <div className={styles.techItemsGrid}>
                      {group.items.map((item, idx) => {
                        const isLastOdd = group.items.length % 2 === 1 && idx === group.items.length - 1;
                        return (
                          <Link
                            href={item.href}
                            key={item.label}
                            className={`${styles.techItem} ${isLastOdd ? styles.techItemFull : ""}`}
                          >
                            <Image src={item.icon} alt={item.label} width={28} height={28} />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className={styles.deliverSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>What We Deliver</h2>
              <h5>Complete Microsoft Business Solutions</h5>
              <p>
                We provide a wide ecosystem of solutions that bring structure into business operations. Our
                delivery covers:
              </p>
              <ul>
                <li>Dynamics 365 ERP and CRM</li>
                <li>Power Platform, including Power Apps and Power BI</li>
                <li>Azure cloud services</li>
                <li>Microsoft 365, covering communication and collaboration</li>
                <li>ISV integrations across industries</li>
                <li>Copilot AI features for productivity and planning</li>
              </ul>
              <p>
                Each service forms one part of a larger structure that supports business stability and growth. We
                guide clients through planning, setup, development, deployment, and support, giving each
                organisation a clear path forward.
              </p>
              <Link href="/products/dynamics-365-business-central/" className={styles.btnRed}>
                Learn What Business Central Is <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className={styles.ringWrap}>
                <Image
                  src="/img/aboutus-new/deliver-ring.png"
                  alt="Dynamics Square solution ring: Power Platform, Azure Cloud, Microsoft 365, ISV Integrations, Copilot AI, Dynamics 365"
                  width={566}
                  height={634}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className={styles.ctaBanner}>
        <Image
          src="/img/aboutus-new/Mask%20group.png"
          alt=""
          width={863}
          height={424}
          className={styles.ctaBannerPhoto}
          aria-hidden="true"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <h2>Start Your Journey with Dynamics Square</h2>
              <p>You deserve a partner who listens, guides, builds, and stays with you throughout your journey.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
                Talk to Our Experts <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className={styles.aboutMethodology}>
        <div className="container">
          <div className={`row align-items-center ${styles.aboutMethodologyIntro}`}>
            <div className="col-lg-6">
              <div className={styles.aboutMethodologyContent}>
                <h2 className={styles.aboutMethodologyTitle}>
                  How Do We Implement:
                  <span> Our Methodology</span>
                </h2>
                <p className={styles.aboutMethodologyIntroText}>
                  The right implementation method depends on your requirements, your timeline, and how your
                  organisation operates. We match the method to your business.
                </p>
                <p>
                  Before we recommend a methodology, we study your business model, the complexity of your
                  requirements, and how much flexibility your project timeline allows for. We work across three
                  proven implementation methodologies and choose the one that fits your situation.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.aboutMethodologyArrows}>
                <div className={`${styles.aboutMethodologyArrow} ${styles.aboutMethodologyArrowOne}`} />
                <div className={`${styles.aboutMethodologyArrow} ${styles.aboutMethodologyArrowTwo}`} />
                <div className={`${styles.aboutMethodologyArrow} ${styles.aboutMethodologyArrowThree}`} />
                <div className={`${styles.aboutMethodologyArrow} ${styles.aboutMethodologyArrowFour}`}>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutMethodologyTopConnector}>
            <div className={styles.aboutMethodologyTopVertical}></div>
            <div className={`${styles.aboutMethodologyTopLine} ${styles.aboutMethodologyTopLineOne}`}>
              <span></span>
            </div>
            <div className={`${styles.aboutMethodologyTopLine} ${styles.aboutMethodologyTopLineTwo}`}>
              <span></span>
            </div>
            <div className={`${styles.aboutMethodologyTopLine} ${styles.aboutMethodologyTopLineThree}`}>
              <span></span>
            </div>
          </div>

          <div className={`row ${styles.aboutMethodologyCards}`}>
            {methodologies.map((item, index) => (
              <div className="col-lg-4 d-flex" key={item.title}>
                <div className={styles.aboutMethodologyCard}>
                  <div
                    className={`${styles.aboutMethodologyIcon} ${styles[`aboutMethodologyIcon${index + 1}`]}`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className={styles.aboutMethodologyIconImg}
                    />

                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.aboutMethodologyBottomConnector}>
            <div className={styles.aboutMethodologyBottomLine}></div>
            <div className={styles.aboutMethodologyBottomVertical}></div>
            <div className={styles.aboutMethodologyBottomVerticalTwo}></div>
            <div className={styles.aboutMethodologyBottomVerticalThree}></div>
            <div className={styles.aboutMethodologyBottomCheck}>✓</div>
          </div>

          <div className={`row align-items-center ${styles.aboutMethodologyBottom}`}>
            <div className="col-lg-7">
              <div className={styles.aboutMethodologyDescription}>
                We walk you through which methodology fits your situation before the project begins, and we
                explain the reasoning in plain terms, so your team understands exactly what to expect at each
                stage.
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.aboutMethodologyButtonWrapper}>
                <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
                  Speak To Our Expert Today <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Services That Support Every Stage of Your Growth</h2>
              <p>We take a consultative approach that studies your business, your industry, and your goals before recommending anything. The guidance you get is practical, structured, and built for your team to actually use.</p>
            </div>
          </div>
          <div className="row">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className={styles.serviceCard}>
                  <Image src={s.icon} alt="" width={48} height={48} className={styles.serviceIconImg} />
                  <h5>{s.title}</h5>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section className={styles.ctaBanner}>
        <Image
          src="/img/aboutus-new/cta-bg-2.png"
          alt=""
          width={820}
          height={330}
          className={styles.ctaBannerPhoto}
          aria-hidden="true"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <h2>Start Your Journey with Dynamics Square</h2>
              <p>
                You deserve a partner who listens, guides, builds, and stays with you well past go-live. That is
                the standard we set for ourselves, and it is the standard we invite you to hold us to.
              </p>
              <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
                Talk to Our Experts <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preferred choice */}
      <section className={styles.choiceSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-1 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className={styles.choiceHead}>
                    <h2>What Makes Dynamics Square a Preferred Choice</h2>
                    <p>Businesses across sectors choose Dynamics Square for reasons that go beyond price.</p>
                  </div>
                </div>
                {choices.map((c) => (
                  <div className="col-sm-6 d-flex" key={c.title}>
                    <div className={styles.choiceCard}>
                      <div className={styles.choiceCardBody}>
                        <h3><span><i className="bi bi-check2"></i></span>{c.title}</h3>
                        <p>{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-12">
                  <Link href="/contact-us" className={styles.btnRed}>
                    Let&apos;s Get You Started <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-2 align-self-center">
              <div className={styles.choiceImageWrap}>
                <Image src="/img/n-016.png" alt="Dynamics Square team celebrating" width={401} height={455} className={styles.choiceImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence worldwide */}
      <section className={styles.globalPresence}>
  <div className="container">
    <h2>Our Presence Worldwide</h2>
    <p>Delivering Microsoft-led transformation across border, helping businesses grow globally.</p>
  </div>
  <div className="container px-0">

    <div ref={mapRef} className={`${styles.globalMap} ${mapIn ? styles.mapIn : ""}`}>

      {/* Canada */}
      <a
        href="/canada"
        className={`${styles.locationPin} ${styles.canada}`}
        aria-label="Canada"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-canada.png"
              alt="Canada"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>Canada</span>
      </a>


      {/* USA */}
      <a
        href="/usa"
        className={`${styles.locationPin} ${styles.usa}`}
        aria-label="USA"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-usa.png"
              alt="USA"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>USA</span>
      </a>


      {/* UK */}
      <a
        href="/uk"
        className={`${styles.locationPin} ${styles.uk}`}
        aria-label="United Kingdom"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-uk.png"
              alt="United Kingdom"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>United Kingdom</span>
      </a>


      {/* Netherlands */}
      <a
        href="/netherlands"
        className={`${styles.locationPin} ${styles.netherlands}`}
        aria-label="Netherlands"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-netherlands.png"
              alt="Netherlands"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>Netherlands</span>
      </a>


      {/* India */}
      <a
        href="/india"
        className={`${styles.locationPin} ${styles.india}`}
        aria-label="India"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-india.png"
              alt="India"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>India</span>
      </a>


      {/* Singapore */}
      <a
        href="/singapore"
        className={`${styles.locationPin} ${styles.singapore}`}
        aria-label="Singapore"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-singapore.png"
              alt="Singapore"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>Singapore</span>
      </a>


      {/* Australia */}
      <a
        href="/australia"
        className={`${styles.locationPin} ${styles.australia}`}
        aria-label="Australia"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-australia.png"
              alt="Australia"
            />
          </div>
        </div>
      <span className={styles.locationLabel}>Australia</span>
      </a>

    </div>
  </div>
</section>




    </div>
  );
};

export default AboutUsNew;
