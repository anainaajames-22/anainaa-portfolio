"use client";

import Image from "next/image";
import { useState } from "react";
import MediaFrame from "./MediaFrame";

export default function CaseStudySections() {
  const [lifestyleStoryOpen, setLifestyleStoryOpen] = useState(false);
  const [digielleStoryOpen, setDigielleStoryOpen] = useState(false);

  return (
    <>
      <section className="lsa-section">
        <div className="lsa-header">
          <span>01 / FLAGSHIP COLLABORATION</span>
          <span>LIFESTYLE ASIA × THE QUORUM</span>
        </div>

        <div className="lsa-title">
          <h2>LIFESTYLE ASIA 50</h2>
        </div>

        <div className="lsa-content">
          <div className="lsa-headline">
            <h3>
              300 PEOPLE.
              <br />
              ONE VERY
              <br />
              FULL ROOM.
              <br />
              AND MY FIRST
              <br />
              BIG ONE.
            </h3>
          </div>

          <div className="lsa-copy">
            <p>
              Lifestyle Asia 50 was one of the first large-scale collaborations
              I handled with significant ownership at The Quorum.
            </p>

            <button
              className="story-toggle case-study-cta"
              type="button"
              aria-label={lifestyleStoryOpen ? "CLOSE STORY" : "VIEW STORY"}
              aria-expanded={lifestyleStoryOpen}
              aria-controls="lifestyle-story"
              onClick={() => setLifestyleStoryOpen(!lifestyleStoryOpen)}
            >
              <span>{lifestyleStoryOpen ? "CLOSE STORY" : "VIEW STORY"}</span>
              <span
                className={lifestyleStoryOpen ? "case-study-cta-close" : "case-study-cta-arrow"}
                aria-hidden="true"
              >
                {lifestyleStoryOpen ? "×" : "↗"}
              </span>
            </button>

            <div
              id="lifestyle-story"
              className={`story-reveal${lifestyleStoryOpen ? " is-open" : ""}`}
              aria-hidden={!lifestyleStoryOpen}
            >
              <div className="story-reveal-inner">
                <p>
                  I worked closely with the Lifestyle Asia team across ideation,
                  negotiations, production, logistics and the operational
                  back-and-forth required to bring roughly 300 people into the
                  Club for the launch.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="lsa-media">
          <div className="lsa-image-placeholder">
            <MediaFrame className="lsa-left-frame">
              <Image
                src="/lsa-01.JPG"
                alt="Lifestyle Asia 50 event crowd"
                width={1100}
                height={1500}
                sizes="(max-width: 800px) 100vw, 50vw"
                className="media-image"
              />
            </MediaFrame>
            <a
              href="https://www.instagram.com/reel/DS7D1_pjZgL/"
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-cta story-reel-cta"
              aria-label="VIEW REEL"
            >
              <span>VIEW REEL</span>
              <span className="case-study-cta-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
          <div className="lsa-image-placeholder">
            <MediaFrame className="lsa-right-frame">
              <Image
                src="/lsa-02.JPG"
                alt="Lifestyle Asia 50 editorial portrait"
                width={900}
                height={1200}
                sizes="(max-width: 800px) 100vw, 35vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
        </div>
      </section>

      <section className="digielle-section">
        <div className="digielle-header">
          <span>02 / FLAGSHIP COLLABORATION</span>
          <span>ELLE × THE QUORUM</span>
        </div>

        <div className="digielle-title">
          <h2>DIGIELLE INFLUENCER AWARDS</h2>
        </div>

        <div className="digielle-content">
          <div className="digielle-headline">
            <h3>
              NOT JUST A
              <br />
              VENUE
              <br />
              PARTNERSHIP.
            </h3>
          </div>

          <div className="digielle-copy">
            <p>
              ELLE approached The Quorum while exploring collaborations around a
              new property they were preparing to launch: the DigiELLE
              Influencer Awards.
            </p>

            <button
              className="story-toggle case-study-cta"
              type="button"
              aria-label={digielleStoryOpen ? "CLOSE STORY" : "VIEW STORY"}
              aria-expanded={digielleStoryOpen}
              aria-controls="digielle-story"
              onClick={() => setDigielleStoryOpen(!digielleStoryOpen)}
            >
              <span>{digielleStoryOpen ? "CLOSE STORY" : "VIEW STORY"}</span>
              <span
                className={digielleStoryOpen ? "case-study-cta-close" : "case-study-cta-arrow"}
                aria-hidden="true"
              >
                {digielleStoryOpen ? "×" : "↗"}
              </span>
            </button>

            <div
              id="digielle-story"
              className={`story-reveal${digielleStoryOpen ? " is-open" : ""}`}
              aria-hidden={!digielleStoryOpen}
            >
              <div className="story-reveal-inner">
                <p>
                  I saw a natural fit between the two brands and became the
                  primary point of contact from The Quorum&apos;s end, working
                  with the ELLE team from the earliest conversations through to
                  the launch.
                </p>

                <p>
                  My role moved across the partnership: ideation, negotiations,
                  barter deliverables, production possibilities, logistics,
                  brand integrations, communications, media and how The Quorum
                  would ultimately be represented alongside ELLE and its partner
                  brands.
                </p>

                <p>
                  The intention was never for The Quorum to simply provide the
                  room. We worked together to create something that felt right
                  for both worlds and considerably less like a conventional
                  awards night.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="digielle-proof">
          <span>FIRST COLLABORATION</span>
          <span>→</span>
          <span>NEXT ELLE EVENT LOCKED FOR MARCH 2027</span>
        </div>

        <div className="digielle-media">
          <div className="digielle-image-placeholder">
            <MediaFrame className="digielle-one-frame">
              <Image
                src="/digielle-01.JPG"
                alt="DigiELLE event detail"
                width={1200}
                height={1600}
                sizes="(max-width: 800px) 100vw, 58vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
          <div className="digielle-image-placeholder">
            <MediaFrame className="digielle-two-frame">
              <Image
                src="/digielle-02.JPG"
                alt="DigiELLE collaboration moment"
                width={900}
                height={1200}
                sizes="(max-width: 800px) 100vw, 25vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
          <div className="digielle-image-placeholder">
            <MediaFrame className="digielle-three-frame">
              <Image
                src="/digielle-03.JPG"
                alt="DigiELLE influencer award setup"
                width={1000}
                height={1200}
                sizes="(max-width: 800px) 100vw, 25vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
          <div className="digielle-image-placeholder">
            <MediaFrame className="digielle-four-frame">
              <Image
                src="/digielle-04.JPG"
                alt="DigiELLE event audience"
                width={1100}
                height={1200}
                sizes="(max-width: 800px) 100vw, 33vw"
                className="media-image"
              />
            </MediaFrame>
          </div>
        </div>
      </section>
    </>
  );
}