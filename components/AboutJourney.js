import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "../styles/aboutJourney.module.css";

/*
  "Our Journey So Far" - built in code (SVG road + HTML pins) instead of a flat image.

  Desktop (>= 992px): the road draws itself while you scroll, a light travels along it, and each
  milestone drops in with its connector line and text. Scrolling back up plays everything in reverse.
  Below 992px (or with reduced motion) a plain static timeline is shown.

  To go back to the old image version, set USE_CODE_JOURNEY to false in pages/aboutus-new.js.
*/

const VB_W = 1781;
const VB_H = 883;

// Points the road passes through (in the 1781 x 883 space). Milestone pins sit exactly on some of them.
const ROAD_POINTS = [
  [-620, 1170], [-330, 990], [-130, 880], [-40, 830], [60, 770], [150, 722], [250, 725], [335, 748], [400, 700], [450, 630], [500, 540],
  [545, 485], [583, 468], [650, 455], [760, 492], [862, 522], [940, 510], [1000, 460], [1050, 405],
  [1088, 370], [1140, 342], [1200, 345], [1270, 395], [1335, 413], [1400, 378], [1450, 310],
  [1500, 225], [1560, 140], [1620, 105], [1700, 112], [1830, 165], [1960, 215], [2150, 275], [2400, 330],
];

// Catmull-Rom spline -> smooth cubic bezier path
const buildPath = (p) => {
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i += 1) {
    const p0 = p[i - 1] || p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return d;
};

const ROAD_D = buildPath(ROAD_POINTS);

const QUOTE =
  "We never aimed to work as just another technology provider. Our intention has always centred around careful understanding, honest guidance, and steady partnership.";

const Crown = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={s.crown}>
    <path d="M3 7l4.6 4.2L12 4l4.4 7.2L21 7l-1.8 12H4.8L3 7zm2.2 13.2h13.6V22H5.2v-1.8z" fill="currentColor" />
  </svg>
);

// dir: "up" = text above the pin, "down" = text below the road
// tx = text left offset from the pin centre, tw = text width,
// cl = connector line length, cx = line offset for "down" milestones; all in cqw (1cqw = 1% of the map width)
const milestones = [
  {
    year: "2011",
    x: 150,
    y: 722,
    dir: "up",
    icon: <i className="bi bi-briefcase-fill" />,
    text: "Our company began with a mission to simplify ERP complexity for businesses.",
    tx: -2.3,
    tw: 11,
    cl: 2.4,
  },
  {
    year: "2015",
    x: 583,
    y: 468,
    dir: "down",
    icon: <i className="bi bi-flag-fill" />,
    text: "We expanded across the UK, US, Canada, and Australia through a consistent demand for practical and reliable support.",
    tx: -1.35,
    cx: 0,
    tw: 15,
    cl: 2.4,
  },
  {
    year: "2023",
    x: 862,
    y: 522,
    dir: "up",
    icon: <Crown />,
    text: "We supported more than 500 customers with solutions designed around real-world needs.",
    tx: -5,
    tw: 13,
    cl: 2.2,
  },
  {
    year: "2024",
    x: 1088,
    y: 370,
    dir: "down",
    icon: <i className="bi bi-award-fill" />,
    text: "We reached a team strength of 150 certified experts across global offices.",
    tx: 0.15,
    cx: 0,
    tw: 13.5,
    cl: 3.4,
  },
  {
    year: "2025",
    x: 1335,
    y: 413,
    dir: "up",
    icon: <i className="bi bi-cpu-fill" />,
    text: "We stepped into a future shaped by AI led transformation and sustainability focussed progress.",
    tx: -9.8,
    tw: 14.3,
    cl: 2.2,
  },
];

const AboutJourney = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const stageRef = useRef(null);
  const roadRef = useRef(null);
  const maskRef = useRef(null);
  const travellerRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const sticky = stickyRef.current;
    const road = roadRef.current;
    const maskPath = maskRef.current;
    const traveller = travellerRef.current;
    if (!root || !stage || !track || !sticky || !road || !maskPath || !traveller) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      const length = road.getTotalLength();

      // where along the road (0-1) each milestone sits
      const SAMPLES = 900;
      const samples = [];
      for (let i = 0; i <= SAMPLES; i += 1) samples.push(road.getPointAtLength((length * i) / SAMPLES));
      // The road starts and ends off-screen. Only the part inside the visible area should use up scroll,
      // otherwise the first/last ~20% of the scroll distance would show nothing happening.
      const stageRect = stage.getBoundingClientRect();
      const scale = stageRect.width / VB_W;
      const xMin = -stageRect.left / scale;
      const xMax = VB_W + (window.innerWidth - stageRect.right) / scale;
      const yMax = VB_H + 28 / scale;
      const isVisible = (p) => p.x >= xMin && p.x <= xMax && p.y <= yMax;
      let first = samples.findIndex(isVisible);
      let last = samples.length - 1;
      while (last > 0 && !isVisible(samples[last])) last -= 1;
      if (first < 0 || last <= first) {
        first = 0;
        last = SAMPLES;
      }
      const visStart = first / SAMPLES;
      const visSpan = (last - first) / SAMPLES;
      // 0 = road enters the screen, 1 = road leaves it
      const toTime = (fraction) => Math.min(1, Math.max(0, (fraction - visStart) / visSpan));

      const fractions = milestones.map((m) => {
        let best = 0;
        let bestDist = Infinity;
        samples.forEach((p, i) => {
          const d = (p.x - m.x) ** 2 + (p.y - m.y) ** 2;
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        return toTime(best / SAMPLES);
      });

      const T = 8; // timeline length; the visible road takes all of it
      // the mask starts with the off-screen lead-in already drawn
      const hiddenOffset = length * (1 - visStart);
      gsap.set(maskPath, { strokeDasharray: length, strokeDashoffset: hiddenOffset });
      const start = samples[first];
      traveller.setAttribute("cx", start.x);
      traveller.setAttribute("cy", start.y);

      // tall track: the sticky map stays fixed while you scroll through the extra ~3 screens
      const sizeTrack = () => {
        track.style.minHeight = `${sticky.offsetHeight + Math.round(window.innerHeight * 3)}px`;
      };
      sizeTrack();
      ScrollTrigger.addEventListener("refreshInit", sizeTrack);

      // The timeline follows the scroll position with a little smoothing, so scrolling back up before the
      // road is finished rewinds it (pins and text are removed again). Once the hold ends (onLeave below)
      // the finished state is locked in.
      const follow = (progress) => {
        gsap.to(tl, { progress, duration: 0.8, ease: "power1.out", overwrite: true });
      };

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "none" },
        // The map is held on screen (CSS position: sticky inside a tall track) while the timeline plays,
        // so the whole animation finishes before the next section scrolls in.
        scrollTrigger: {
          trigger: track,
          // the sticky top (space kept clear for the fixed header) comes from CSS, so it can change per breakpoint
          start: () => `top ${parseFloat(getComputedStyle(sticky).top) || 0}px`,
          end: () => `bottom top+=${(parseFloat(getComputedStyle(sticky).top) || 0) + sticky.offsetHeight}`,
          // progress is driven only by scroll via follow(); without this GSAP's default "play" would auto-run the timeline
          toggleActions: "none none none none",
          onUpdate: (self) => follow(self.progress),
          invalidateOnRefresh: true,
          // While the map is held, scrolling up rewinds the animation. When the hold ends the timeline stays in
          // its finished state and the extra scroll space is removed, so scrolling back up neither re-holds nor reverses it.
          onLeave: (self) => {
            const distance = self.end - self.start;
            gsap.killTweensOf(tl);
            tl.progress(1);
            self.kill(); // does not touch the animation, which stays finished
            ScrollTrigger.removeEventListener("refreshInit", sizeTrack);
            track.style.minHeight = ""; // collapse the extra scroll space
            const y = Math.max(0, window.scrollY - distance); // keep the same content on screen
            if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true, force: true });
            else window.scrollTo(0, y);
            requestAnimationFrame(() => ScrollTrigger.refresh());
          },
        },
      });

      // 1. the road draws itself
      // (offset length*(1 - visStart - visSpan) is where the visible part ends; the rest is off-screen)
      tl.to(maskPath, { strokeDashoffset: length * (1 - visStart - visSpan), duration: T }, 0);
      tl.set(maskPath, { strokeDashoffset: 0 }, T);

      // 2. a glowing light travels along it
      const light = { p: visStart };
      tl.fromTo(traveller, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0);
      tl.to(
        light,
        {
          p: visStart + visSpan,
          duration: T,
          onUpdate: () => {
            const pt = road.getPointAtLength(light.p * length);
            traveller.setAttribute("cx", pt.x);
            traveller.setAttribute("cy", pt.y);
          },
        },
        0
      );
      tl.to(traveller, { opacity: 0, duration: 0.4 }, T - 0.4);

      // hold the finished timeline on screen for a moment before the pin releases
      tl.to({}, { duration: 0.8 }, T);

      // 3. heading
      tl.from(`.${s.title}`, { y: 40, opacity: 0, duration: 1 }, 0);

      // 3b. quote sits under the heading, so it comes in right after it
      tl.fromTo(`.${s.quote}`, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.4);

      // 4. each milestone: pin drops, connector grows, dot pops, text rises
      milestones.forEach((m, i) => {
        const el = root.querySelector(`[data-ms="${i}"]`);
        if (!el) return;
        const at = Math.max(0, fractions[i] * T - 0.5);
        const pin = el.querySelector("[data-pin]");
        const icon = el.querySelector("[data-icon]");
        const line = el.querySelector("[data-line]");
        const dot = el.querySelector("[data-dot]");
        const words = el.querySelectorAll("[data-text]");

        tl.fromTo(
          pin,
          { y: -170, scale: 0.3, opacity: 0, transformOrigin: "50% 100%" },
          { y: 0, scale: 1, opacity: 1, duration: 1, ease: "back.out(1.8)" },
          at
        );
        tl.fromTo(icon, { scale: 0, rotation: -140 }, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(2)" }, at + 0.55);
        tl.fromTo(
          line,
          { scaleY: 0, opacity: 1, transformOrigin: m.dir === "up" ? "50% 100%" : "50% 0%" },
          { scaleY: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
          at + 0.9
        );
        tl.fromTo(dot, { scale: 0, opacity: 1 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)" }, at + 1.4);
        tl.fromTo(
          words,
          { y: m.dir === "up" ? 26 : -26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: "power3.out" },
          at + 1.5
        );
      });

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", sizeTrack);
        track.style.minHeight = "";
        traveller.removeAttribute("cx");
        traveller.removeAttribute("cy");
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className={s.journey} aria-label="Our journey so far">
      <div ref={trackRef} className={s.track}>
        <div ref={stickyRef} className={s.sticky}>
      <div className={`container ${s.titleWrap}`}>
        <h2 className={s.title}>Our Journey So Far</h2>
        <blockquote className={s.quote}>
          <span className={s.quoteMark} aria-hidden="true">&ldquo;</span>
          <span className={s.quoteText}>{QUOTE}</span>
          <span className={`${s.quoteMark} ${s.quoteMarkEnd}`} aria-hidden="true">&rdquo;</span>
        </blockquote>
      </div>

      <div ref={stageRef} className={s.stage}>

        <svg
          className={s.road}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <mask id="journeyRoadMask" maskUnits="userSpaceOnUse" x="-1500" y="-500" width={VB_W + 3200} height={VB_H + 1200}>
              <path
                ref={maskRef}
                d={ROAD_D}
                fill="none"
                stroke="#fff"
                strokeWidth="170"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />
            </mask>
            <radialGradient id="journeyGlow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="45%" stopColor="#d9a6ee" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#9b5cc0" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g mask="url(#journeyRoadMask)">
            {/* soft ground shadow */}
            <path d={ROAD_D} fill="none" stroke="rgba(60,40,90,0.08)" strokeWidth="124" strokeLinejoin="round" transform="translate(0 6)" />
            {/* grey outer edge + thin white inner edge */}
            <path d={ROAD_D} fill="none" stroke="#b4b4b8" strokeWidth="116" strokeLinejoin="round" />
            <path d={ROAD_D} fill="none" stroke="#ffffff" strokeWidth="106" strokeLinejoin="round" />
            {/* asphalt */}
            <path ref={roadRef} d={ROAD_D} fill="none" stroke="#505052" strokeWidth="100" strokeLinejoin="round" />
            {/* centre dashes */}
            <path d={ROAD_D} fill="none" stroke="#ffffff" strokeWidth="4" strokeDasharray="24 34" strokeLinecap="round" />
          </g>

          {/* light that travels along the road while you scroll */}
          <circle ref={travellerRef} r="34" fill="url(#journeyGlow)" opacity="0" />
        </svg>

        {milestones.map((m, i) => (
          <div
            key={m.year}
            data-ms={i}
            className={`${s.milestone} ${m.dir === "up" ? s.up : s.down}`}
            style={{
              left: `${(m.x / VB_W) * 100}%`,
              top: `${(m.y / VB_H) * 100}%`,
              "--tx": `${m.tx}cqw`,
            "--cx": `${m.cx || 0}cqw`,
                "--tw": `${m.tw}cqw`,
              "--cl": `${m.cl}cqw`,
            }}
          >
            <div className={s.pin} data-pin>
              <svg viewBox="0 0 100 115" className={s.pinShape} aria-hidden="true">
                <defs>
                  <linearGradient id={`pinGrad${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b97bd8" />
                    <stop offset="100%" stopColor="#8646b0" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 0C22.4 0 0 22.4 0 50c0 26 34 52 50 65 16-13 50-39 50-65C100 22.4 77.6 0 50 0z"
                  fill={`url(#pinGrad${i})`}
                />
                <circle cx="50" cy="47" r="33" fill="#fff" />
              </svg>
              <span className={s.pinIcon} data-icon>
                {m.icon}
              </span>
            </div>
            <span className={s.line} data-line />
            <span className={s.dot} data-dot />
            <div className={s.text}>
              <h3 data-text>{m.year}</h3>
              <p data-text>{m.text}</p>
            </div>
          </div>
        ))}
      </div>

        </div>
      </div>

      {/* Small screens: simple vertical timeline */}
      <div className={`container ${s.mobileWrap}`}>
        <h2 className={s.mobileTitle}>Our Journey So Far</h2>
        <ol className={s.mobileList}>
          {milestones.map((m) => (
            <li key={m.year}>
              <span className={s.mobileIcon}>{m.icon}</span>
              <div>
                <h3>{m.year}</h3>
                <p>{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <blockquote className={s.mobileQuote}>{QUOTE}</blockquote>
      </div>
    </section>
  );
};

export default AboutJourney;
