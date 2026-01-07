import React from 'react'

/**
 * Single-file CircularRing component for Next.js
 * - Includes CSS via styled-jsx inside the component (no external CSS file required)
 * - Props:
 *    - size (number) default 520
 *    - thickness (number) default 84
 *    - segments (array) default set of 7 sample segments (label, color, icon)
 *    - onSegmentClick(index, segment) optional click handler
 *
 * Usage:
 * import CircularRing from '../components/CircularRing'
 * <CircularRing />
 *
 * Replace icons with images by setting segment.icon to an SVG/emoji/string, or update rendering.
 */

function polarToCartesian(cx, cy, radius, angleDeg) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  }
}

function describeArc(cx, cy, outerR, innerR, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle)
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle)
  const startInner = polarToCartesian(cx, cy, innerR, endAngle)
  const endInner = polarToCartesian(cx, cy, innerR, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${startInner.x} ${startInner.y}`,
    'Z',
  ].join(' ')
}

const DEFAULT_SEGMENTS = [
  { label: 'Power Platform', color: '#b983ff', icon: '⚡' },
  { label: 'Azure Cloud', color: '#7fc8ff', icon: '☁️' },
  { label: 'Microsoft 365', color: '#c6a3ff', icon: '📂' },
  { label: 'ISV Integrations', color: '#84d6ff', icon: '🔗' },
  { label: 'Copilot AI', color: '#efb4ff', icon: '🤖' },
  { label: 'Dynamics 365', color: '#bdb4ff', icon: '💼' },
  { label: 'Power Center', color: '#d8bfff', icon: 'D' },
]

export default function CircularRing({
  size = 520,
  thickness = 84,
  segments = DEFAULT_SEGMENTS,
  onSegmentClick,
}) {
  const cx = size / 2
  const cy = size / 2
  const padding = 12
  const outerR = size / 2 - padding
  const innerR = outerR - thickness
  const segmentCount = Math.max(3, segments.length)
  const arcSize = 360 / segmentCount
  const gapDeg = 4
  const actualArc = arcSize - gapDeg

  return (
    <div className="circular-wrapper" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Segmented circular ring"
      >
        <defs>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feOffset dx="0" dy="2" result="offset" />
            <feMerge>
              <feMergeNode in="offset" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="segments-group" filter="url(#softShadow)">
          {segments.map((seg, i) => {
            const startAngle = i * arcSize + gapDeg / 2
            const endAngle = startAngle + actualArc
            const d = describeArc(cx, cy, outerR, innerR, startAngle, endAngle)
            const midAngle = startAngle + actualArc / 2
            const midPointOutside = polarToCartesian(cx, cy, outerR + 32, midAngle)
            const id = `seg-${i}`

            return (
              <g key={i} className="segment-wrap">
                <path
                  d={d}
                  className="segment-path"
                  id={id}
                  fill={seg.color || '#caa'}
                  data-label={seg.label}
                  onClick={() => onSegmentClick && onSegmentClick(i, seg)}
                  aria-label={seg.label}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSegmentClick && onSegmentClick(i, seg)
                    }
                  }}
                />
                <g
                  className="segment-icon"
                  transform={`translate(${midPointOutside.x}, ${midPointOutside.y})`}
                  aria-hidden="true"
                >
                  <circle r="22" fill="#fff" className="icon-bg" />
                  <text
                    x="0"
                    y="7"
                    textAnchor="middle"
                    fontSize="14"
                    style={{ fontFamily: 'Segoe UI, Arial', fill: '#222' }}
                  >
                    {seg.icon}
                  </text>
                </g>
              </g>
            )
          })}
        </g>

        <g className="center-group" aria-hidden="true">
          <circle cx={cx} cy={cy} r={innerR - 6} className="center-fill" />
          <text
            x={cx}
            y={cy + 8}
            textAnchor="middle"
            fontSize="44"
            style={{ fontFamily: 'Segoe UI, Arial', fill: '#7bdcff' }}
          >
            D
          </text>
        </g>
      </svg>

      <style jsx>{`
        .circular-wrapper {
          display: inline-block;
          position: relative;
        }

        svg {
          display: block;
        }

        /* segment path styles */
        .segment-path {
          transition: transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1), filter 220ms,
            opacity 220ms;
          transform-origin: center;
          transform-box: fill-box; /* important for SVG transforms */
          stroke: rgba(255, 255, 255, 0.18);
          stroke-width: 2;
          filter: drop-shadow(0 8px 16px rgba(21, 17, 38, 0.12));
        }

        .segment-path:hover,
        .segment-path:focus {
          transform: scale(1.08);
          filter: drop-shadow(0 14px 34px rgba(21, 17, 38, 0.18));
          opacity: 0.98;
          outline: none;
        }

        .segment-path:active {
          transform: scale(1.04);
        }

        .segment-icon .icon-bg {
          stroke: rgba(0, 0, 0, 0.06);
          stroke-width: 1;
        }

        .center-fill {
          fill: #0f1720;
          stroke: rgba(255, 255, 255, 0.03);
          stroke-width: 1;
          filter: drop-shadow(0 8px 24px rgba(6, 8, 16, 0.24));
        }

        /* accessibility: visible focus ring for keyboard users */
        .segment-path:focus {
          stroke: rgba(255, 255, 255, 0.35);
          stroke-width: 3;
        }

        /* responsive shrink on small screens */
        @media (max-width: 768px) {
          .circular-wrapper {
            transform: scale(0.82);
            transform-origin: center;
          }
        }
      `}</style>
    </div>
  )
}