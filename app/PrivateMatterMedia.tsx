"use client";

import Image from "next/image";
import { useState } from "react";
import MediaFrame from "./MediaFrame";

const chapters = [
  {
    number: "01",
    title: "THE IDEA",
    media: "/private-matter-idea.jpg",
    alt: "A Private Matter idea chapter",
  },
  {
    number: "02",
    title: "THE PERSON",
    media: "/private-matter-people-new.jpg",
    alt: "A Private Matter person chapter",
  },
  {
    number: "03",
    title: "THE CONVERSATION",
    media: "/private-matter-conversation.jpg",
    alt: "A Private Matter conversation chapter",
    href: "https://drive.google.com/drive/folders/1oRA9aYUeTcA4gu7RHajfoVU80BR39JUS?usp=drive_link",
  },
  {
    number: "04",
    title: "THE STORY",
    media: "/private-matter-story-new.jpg",
    alt: "A Private Matter story chapter",
  },
];

export default function PrivateMatterMedia() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const activeChapter = chapters[selectedChapter];

  return (
    <>
      <div
        className="private-matter-stages"
        role="group"
        aria-label="A Private Matter chapters"
      >
        {chapters.map((chapter, index) => (
          <button
            className={`private-stage${selectedChapter === index ? " is-selected" : ""}`}
            type="button"
            key={chapter.number}
            aria-pressed={selectedChapter === index}
            aria-controls="private-matter-selected-media"
            onClick={() => setSelectedChapter(index)}
          >
            <span className="private-stage-number">{chapter.number}</span>
            <span className="private-stage-title">{chapter.title}</span>
          </button>
        ))}
      </div>

      <div className="private-matter-media">
        <div
          key={activeChapter.number}
          id="private-matter-selected-media"
          className="private-matter-media-content"
          role="region"
          aria-label={`${activeChapter.title} media`}
          aria-live="polite"
          aria-atomic="true"
        >
          <MediaFrame className="private-matter-frame">
            <Image
              src={activeChapter.media}
              alt={activeChapter.alt}
              width={activeChapter.title === "THE CONVERSATION" ? 1000 : 900}
              height={activeChapter.title === "THE CONVERSATION" ? 1300 : 1200}
              sizes="(max-width: 800px) 100vw, 80vw"
              className="media-image"
              style={{ objectPosition: activeChapter.title === "THE PERSON" ? "center top" : "center center" }}
            />
          </MediaFrame>
          {activeChapter.href && (
            <a
              className="case-study-cta private-matter-media-link"
              href={activeChapter.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VIEW CONVERSATION"
            >
              <span>VIEW CONVERSATION</span>
              <span className="case-study-cta-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}