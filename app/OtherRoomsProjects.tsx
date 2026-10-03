"use client";

import Image from "next/image";
import { useState } from "react";
import MediaFrame from "./MediaFrame";

const projects = [
  {
    number: "01",
    title: "THE WEEK SALON",
    partner: "THE WEEK × BANDHAN BANK × THE QUORUM",
    headline: "THREE WORLDS, ONE ROOM.",
    story: [
      "Bandhan Bank was looking to create an experience for its HNI clientele. THE WEEK had its established Salon conversation format, while Priyanka Khanna’s connection to The Quorum through the Member Advisory Board created another piece of the puzzle.",
      "I helped bring the partnership together and negotiated it from The Quorum’s end, then worked across communications, media, F&B and logistics to carry it through.",
    ],
    media: "/week-salon.jpg",
    alt: "The Week salon event at The Quorum",
  },
  {
    number: "02",
    title: "COCKTAIL 2",
    partner: "MADDOCK FILMS × THE QUORUM",
    headline: "SOMETIMES THE RIGHT ROOM IS THE IDEA.",
    story: [
      "Maddock Films was looking for a fresh setting for the Cocktail 2 music launch. We brought it to The Quorum.",
      "My role centred on making the collaboration work from our end, coordinating with the Maddock team and bringing the requirements of a large entertainment launch into the Club.",
    ],
    media: "/cocktail-2.jpg",
    alt: "Cocktail 2 music launch in The Quorum",
    href: "https://www.instagram.com/reel/DZtsVXBoPf9/",
  },
  {
    number: "03",
    title: "TRAVEL + LEISURE EDITOR’S ROUNDTABLE",
    partner: "TRAVEL + LEISURE × THE QUORUM",
    headline: "ONE OF MY FIRST FEW ROOMS.",
    story: [
      "One of the first few events I handled at The Quorum, the Travel + Leisure Editor’s Roundtable brought together some of the industry’s leading voices for an intimate conversation hosted by then Editor-in-Chief Akshita M. Bhanj Deo.",
      "With Gauri Devidayal, Saloni Kukreja, Chef Niyati Rao of Bombay Daak, Chef Ali Akbar Baldiwala of Slink & Bardot, Pawan Shahri of Chrome Asia Hospitality and others around the table, I worked across coordination, communications and on-ground execution to bring the evening together.",
    ],
    media: "/travel-leisure.jpg",
    alt: "Travel and Leisure editorial roundtable at The Quorum",
    href: "https://www.instagram.com/reel/DLzu7YfRhBZ/",
  },
  {
    number: "04",
    title: "ELLE IMPACT",
    partner: "ELLE × THE QUORUM",
    headline: "A ROOM BUILT AROUND WOMEN AND THEIR PERSPECTIVES.",
    story: [
      "ELLE Impact brought a women-led series of conversations to The Quorum, with panels spanning culture, conscious living and leadership.",
      "I coordinated the collaboration from The Quorum’s end, working across the ELLE team, speakers, communications, production and on-ground requirements to bring the afternoon together.",
    ],
    media: "/elle-impact.jpg",
    alt: "ELLE Impact event in The Quorum",
  },
];

export default function OtherRoomsProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const selectedProject = projects[selectedIndex];

  function selectProject(index: number) {
    setSelectedIndex(index);
    setExpandedIndex(index);
  }

  function toggleStory(index: number) {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      setExpandedIndex(index);
      return;
    }

    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="other-rooms-grid">
      <div className="other-rooms-list">
        {projects.map((project, index) => {
          const isSelected = selectedIndex === index;
          const isExpanded = expandedIndex === index;

          return (
            <article className="other-room-item" key={project.number}>
              <span className="other-room-number">{project.number}</span>
              <h3>
                <button
                  className={`other-room-title-button${isSelected ? " is-selected" : ""}`}
                  type="button"
                  aria-pressed={isSelected}
                  aria-controls="other-rooms-media"
                  onClick={() => selectProject(index)}
                >
                  {project.title}
                </button>
              </h3>
              <span className="other-room-partner">{project.partner}</span>

              <button
                className="other-room-story case-study-cta"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`other-room-story-${project.number}`}
                onClick={() => toggleStory(index)}
              >
                <span>{isExpanded ? "CLOSE STORY" : "VIEW STORY"}</span>
                <span
                  className={isExpanded ? "case-study-cta-close" : "case-study-cta-arrow"}
                  aria-hidden="true"
                >
                  {isExpanded ? "×" : "↗"}
                </span>
              </button>

              <div
                id={`other-room-story-${project.number}`}
                className={`other-room-details${isExpanded ? " is-open" : ""}`}
                aria-hidden={!isExpanded}
              >
                <div className="other-room-details-inner">
                  <p className="other-room-headline">{project.headline}</p>
                  {project.story.map((paragraph) => (
                    <p className="other-room-copy" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="other-rooms-visual">
        <div className="other-rooms-image-placeholder">
          <div
            key={selectedProject.number}
            id="other-rooms-media"
            className="other-rooms-media-content"
            role="region"
            aria-label={`${selectedProject.title} media`}
            aria-live="polite"
            aria-atomic="true"
          >
            <MediaFrame className="other-rooms-frame">
              <Image
                src={selectedProject.media}
                alt={selectedProject.alt}
                width={selectedProject.title === "COCKTAIL 2" ? 900 : 1100}
                height={selectedProject.title === "COCKTAIL 2" ? 1200 : 1400}
                sizes="(max-width: 800px) 100vw, 60vw"
                className="media-image"
              />
            </MediaFrame>
            {selectedProject.href && (
              <a
                className="case-study-cta other-rooms-media-link"
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VIEW REEL"
              >
                <span>VIEW REEL</span>
                <span className="case-study-cta-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}