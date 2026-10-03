"use client";

import Image from "next/image";
import { useState } from "react";
import MediaFrame from "./MediaFrame";

const touchpoints = [
  {
    title: "EVENT COMMUNICATIONS",
    description:
      "Taking programming from announcement to attendance through member communications, collaborator coordination and the details around how each event is presented before, during and after it happens.",
    media: "/event-comms.jpg",
    alt: "Event communications creative and messaging",
  },
  {
    title: "DIGITAL TOUCHPOINTS",
    description:
      "Extending the life of programming beyond the room through social content, event capture, collaborator amplification and the digital storytelling that follows.",
    media: "/digital-touchpoints.JPG",
    alt: "Digital touchpoints campaign visuals",
  },
  {
    title: "PHYSICAL TOUCHPOINTS",
    description:
      "Thinking about the brand in the things members actually encounter, from menus and coasters to signage, event collateral and the smaller details around the Club.",
    media: "/physical-touchpoints.jpg",
    alt: "Physical touchpoints and event materials",
  },
];

export default function DigitalTouchpoints() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = touchpoints[selectedIndex];

  return (
    <>
      <div className="digital-touchpoints" role="group" aria-label="Digital touchpoints">
        {touchpoints.map((touchpoint, index) => (
          <button
            className={`digital-touchpoint${selectedIndex === index ? " is-selected" : ""}`}
            type="button"
            key={touchpoint.title}
            aria-pressed={selectedIndex === index}
            aria-controls="digital-touchpoint-content"
            onClick={() => setSelectedIndex(index)}
          >
            {touchpoint.title}
          </button>
        ))}
      </div>

      <div className="digital-touchpoint-display">
        <div
          key={selected.title}
          id="digital-touchpoint-content"
          className="digital-touchpoint-panel"
          role="region"
          aria-label={`${selected.title} details`}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="digital-touchpoint-description">{selected.description}</p>
          <div className="digital-touchpoint-media">
            <MediaFrame className="digital-touchpoint-frame">
              <Image
                src={selected.media}
                alt={selected.alt}
                width={selected.title === "PHYSICAL TOUCHPOINTS" ? 1200 : 1000}
                height={selected.title === "PHYSICAL TOUCHPOINTS" ? 1400 : 1200}
                sizes="(max-width: 800px) 100vw, 60vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
        </div>
      </div>
    </>
  );
}
