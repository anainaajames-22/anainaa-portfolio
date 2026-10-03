"use client";

import { useState } from "react";

export default function MemberAdvisoryStory() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <div className="mab-copy">
      <p>
        The Member Advisory Board gives members a more active voice in the
        direction of the Club.
      </p>

      <button
        className="story-toggle case-study-cta"
        type="button"
        aria-label={storyOpen ? "CLOSE STORY" : "VIEW STORY"}
        aria-expanded={storyOpen}
        aria-controls="mab-story"
        onClick={() => setStoryOpen(!storyOpen)}
      >
        <span>{storyOpen ? "CLOSE STORY" : "VIEW STORY"}</span>
        <span
          className={storyOpen ? "case-study-cta-close" : "case-study-cta-arrow"}
          aria-hidden="true"
        >
          {storyOpen ? "×" : "↗"}
        </span>
      </button>

      <div
        id="mab-story"
        className={`story-reveal${storyOpen ? " is-open" : ""}`}
        aria-hidden={!storyOpen}
      >
        <div className="story-reveal-inner">
          <p>
            I manage the Bombay chapter&apos;s MAB, bringing members together,
            facilitating the relationship between the community and the team,
            and helping turn conversations, feedback and perspectives into
            things we can actually act on.
          </p>

          <p>
            It&apos;s a different side of my role. Less about broadcasting
            something to an audience, and more about listening to one.
          </p>
        </div>
      </div>
    </div>
  );
}