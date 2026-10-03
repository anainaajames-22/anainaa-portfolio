"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const skills = [
  { name: "EXPERIENTIAL MARKETING", lines: ["EXPERIENTIAL", "MARKETING"], tone: "red" },
  { name: "BRAND PARTNERSHIPS", lines: ["BRAND", "PARTNERSHIPS"], tone: "cream" },
  { name: "EVENT PRODUCTION", lines: ["EVENT", "PRODUCTION"], tone: "red" },
  { name: "CONTENT & COMMUNICATIONS", lines: ["CONTENT &", "COMMUNICATIONS"], tone: "cream", compact: true },
  { name: "SOCIAL MEDIA STRATEGY", lines: ["SOCIAL MEDIA", "STRATEGY"], tone: "red" },
  { name: "COMMUNITY BUILDING", lines: ["COMMUNITY", "BUILDING"], tone: "red" },
  { name: "IP DEVELOPMENT", lines: ["IP", "DEVELOPMENT"], tone: "red" },
  { name: "PR", lines: ["PR"], tone: "cream" },
  { name: "NEGOTIATION", lines: ["NEGOTIATION"], tone: "cream" },
  { name: "SOCIAL LISTENING", lines: ["SOCIAL", "LISTENING"], tone: "cream" },
  { name: "STORYTELLING", lines: ["STORYTELLING"], tone: "red", compact: true },
  { name: "MEMBER MANAGEMENT", lines: ["MEMBER", "MANAGEMENT"], tone: "cream" },
];

function PuzzlePatternContent({ mobile = false }: { mobile?: boolean }) {
  return (
    <g className="puzzle-seams">
      {mobile ? (
        <>
          <path d="M0 600h250v-24h48v24h302M0 1200h115v24h48v-24h437M0 1800h250v-24h48v24h302M0 2400h115v24h48v-24h437M0 3000h250v-24h48v24h302" />
          <path d="M600 0v210h26v48h-26v318M600 600v342h-26v48h26v162M600 1200v210h26v48h-26v318M600 1800v342h-26v48h26v162M600 2400v210h26v48h-26v318M600 3000v342h-26v48h26v210" />
        </>
      ) : (
        <>
          <path d="M0 225h116v-23h42v23h218v24h42v-24h214v-23h42v23h218v24h42v-24h266M0 450h220v24h42v-24h276v-23h42v23h240v24h42v-24h338M0 675h116v-23h42v23h218v24h42v-24h214v-23h42v23h218v24h42v-24h266" />
          <path d="M400 0v78h24v42h-24v180h-22v42h22v183h24v42h-24v153h-22v42h22v138M800 0v168h-24v42h24v180h22v42h-22v180h-24v42h24v153h22v42h-22v51" />
        </>
      )}
    </g>
  );
}

export default function SkillsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`skills-grid${hasEntered ? " is-revealed" : ""}`}
      ref={gridRef}
    >
      {skills.map((skill, index) => (
        <button
          className={`skill-cell${activeSkill === index ? " is-active" : ""}`}
          key={skill.name}
          data-tone={skill.tone}
          type="button"
          aria-label={skill.name}
          aria-pressed={activeSkill === index}
          onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          style={{
            "--skill-delay": `${index * 25}ms`,
            "--desktop-x": `${-((index % 3) * 100)}%`,
            "--desktop-y": `${-(Math.floor(index / 3) * 100)}%`,
            "--mobile-x": `${-((index % 2) * 100)}%`,
            "--mobile-y": `${-(Math.floor(index / 2) * 100)}%`,
          } as CSSProperties}
        >
          <span className="skill-tile-inner">
            <span className="skill-tile-face skill-tile-front" aria-hidden="true">
              <svg className="skill-pattern-crop is-desktop" viewBox="0 0 1200 900" preserveAspectRatio="none">
                <PuzzlePatternContent />
              </svg>
              <svg className="skill-pattern-crop is-mobile" viewBox="0 0 1200 3600" preserveAspectRatio="none">
                <PuzzlePatternContent mobile />
              </svg>
            </span>
            <span className="skill-tile-face skill-tile-back" aria-hidden="true">
              <span
                className={`skill-name${skill.compact ? " is-compact" : ""}`}
              >
                {skill.lines.map((line) => <span key={line}>{line}</span>)}
              </span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}