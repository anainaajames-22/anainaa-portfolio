import Image from "next/image";
import CaseStudySections from "./CaseStudySections";
import MediaFrame from "./MediaFrame";
import PrivateMatterMedia from "./PrivateMatterMedia";
import MemberAdvisoryStory from "./MemberAdvisoryStory";
import DigitalTouchpoints from "./DigitalTouchpoints";
import ToolsOrbit from "./ToolsOrbit";
import BrandsMarquee from "./BrandsMarquee";
import OtherRoomsProjects from "./OtherRoomsProjects";
import SkillsGrid from "./SkillsGrid";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-top">
          <span>ANAINAA JAMES</span>
          <span>BOMBAY, INDIA</span>
        </div>

        <div className="hero-content">
          <h1>
            I PAY ATTENTION
            <br />
            TO THE BITS
            <br />
            AROUND THE BRIEF.
          </h1>
        </div>

        <div className="hero-bottom">
          <p>
            Bombay-based marketer, storyteller and occasional
            <br />
            collector of things worth noticing.
          </p>

          <span className="scroll">
            SCROLL TO SEE WHAT I MEAN ↓
          </span>
        </div>
      </section>
            <section className="about">
        <div className="about-label">THIS IS HOW I THINK.</div>

        <div className="about-grid">
          <h2>
            I LIKE BEING CLOSE TO
            <br />
            WHERE THINGS ARE
            <br />
            HAPPENING.
          </h2>

          <div className="about-copy">
            <p>
              The idea on paper is interesting. I&apos;m usually more curious
              about what happens next: who needs to come on board, how we talk
              about it, what makes someone want to show up, and all the small
              decisions that determine whether it actually works.
            </p>

            <p>
              That&apos;s probably why my work has moved quite naturally
              between marketing, content, partnerships, community and
              experiences.
            </p>

            <p>
              I like the thinking. I also like making the thinking real.
            </p>
          </div>
        </div>

        <div className="about-pillars">
          <div className="pillar">
            <h3>THE IDEA.</h3>
            <p>Good place to start.</p>
          </div>

          <div className="pillar">
            <h3>THE PEOPLE.</h3>
            <p>Usually where it gets interesting.</p>
          </div>

          <div className="pillar">
            <h3>THE DETAILS.</h3>
            <p>Usually where it goes right or wrong.</p>
          </div>

          <div className="pillar">
            <h3>THE ROOM.</h3>
            <p>Eventually, someone has to make it all happen.</p>
          </div>
        </div>
      </section>
            <section className="quorum-intro">
        <div className="quorum-transition">
          <span>THIS IS WHAT I&apos;VE BUILT.</span>
          <span className="quorum-arrow">↓</span>
        </div>

        <div className="quorum-title">
          <span className="quorum-label">THE QUORUM</span>

          <h2>
            WHERE THE IDEA
            <br />
            MEETS THE ROOM.
          </h2>

          <p>
            Marketing, partnerships, community, content and experiences.
            <br />
            Usually all at once.
          </p>
        </div>
      </section>
      <CaseStudySections />

      <section className="private-matter">

  <div className="private-matter-header">
    <span>ORIGINAL IP</span>
    <span>A QUORUM ORIGINAL</span>
  </div>

  <div className="private-matter-intro">
    <div>
      <span className="private-matter-label">A PRIVATE MATTER</span>

      <h2>
        NOT EVERY<wbr />THING
        <br className="private-matter-narrow-break" />
        {" "}STARTS
        <br />
        WITH AN EVENT.
      </h2>
    </div>

    <div className="private-matter-copy">
      <p>
        A Private Matter turns the lens towards some of the people who make
        up The Quorum community, getting to know the lives behind familiar
        faces and eventually asking a simple question: what does The Quorum
        mean to you?
      </p>

      <p>
        I&apos;ve worked across guest onboarding, interview coordination and the
        behind-the-scenes process of bringing those conversations together.
      </p>

      <p>
        Featured members have included Tisca Chopra and Atteev Anand in Bombay.
      </p>
    </div>
  </div>

  <PrivateMatterMedia />

</section>

<section className="mab-section">

  <div className="mab-header">
    <span>COMMUNITY</span>
    <span>MEMBER ADVISORY BOARD</span>
  </div>

  <div className="mab-content">

    <div className="mab-title">
      <span className="mab-label">THE QUORUM · BOMBAY</span>

      <h2>
        THE PEOPLE IN
        <br />
        THE ROOM SHOULD
        <br />
        HELP SHAPE IT.
      </h2>
    </div>

    <MemberAdvisoryStory />

  </div>

  <div className="mab-bottom">
    <span>LESS BROADCASTING.</span>
    <span>MORE LISTENING.</span>
  </div>

  <div className="mab-media">
    <div className="mab-image-placeholder">
      <MediaFrame className="mab-first-frame">
        <Image
          src="/mab-01.jpg"
          alt="Member Advisory Board community portrait"
          width={1200}
          height={1500}
          sizes="(max-width: 800px) 100vw, 58vw"
          className="media-image"
        />
      </MediaFrame>
    </div>
    <div className="mab-image-placeholder">
      <MediaFrame className="mab-second-frame">
        <Image
          src="/mab-02.jpg"
          alt="Member Advisory Board discussion moment"
          width={900}
          height={1100}
          sizes="(max-width: 800px) 100vw, 30vw"
          className="media-image"
        />
      </MediaFrame>
    </div>
  </div>

</section>
<section className="digital-section">
  <div className="digital-header">
    <span>DIGITAL / CONTENT / COMMUNICATIONS</span>
    <span>THE QUORUM · BOMBAY</span>
  </div>

  <div className="digital-main">
    <div className="digital-title">
      <h2>
        THE ROOM IS
        <br />
        ONLY HALF
        <br />
        THE JOB.
      </h2>
    </div>

    <div className="digital-copy">
      <p>
        An experience can be brilliant, but someone still has to make people
        want to come, decide how we talk about it, capture it properly and make
        sure its life doesn&apos;t end when everyone goes home.
      </p>

      <p>
        Across The Quorum Bombay, I work on the communications and digital
        layer around our programming, from pre-event messaging and social
        content to collaborator amplification, influencer outreach, capture
        and post-event storytelling.
      </p>
    </div>
  </div>

  <div className="digital-stats">
    <div className="digital-stat">
      <span className="digital-number">40K → 85K+</span>
      <span className="digital-label">
        THE QUORUM BOMBAY PAGE GROWTH
        <br />
        DURING MY TENURE
      </span>
    </div>

    <div className="digital-stat">
      <span className="digital-number">12–15</span>
      <span className="digital-label">
        EVENTS MARKETED
        <br />
        EACH MONTH
      </span>
    </div>
  </div>

  <DigitalTouchpoints />
</section>
<section className="other-rooms-section">
  <div className="other-rooms-header">
    <span>OTHER WORK</span>
    <span>OTHER ROOMS</span>
  </div>

  <div className="other-rooms-intro">
    <h2>
      OTHER WORK.
      <br />
      OTHER ROOMS.
    </h2>
  </div>

  <OtherRoomsProjects />
</section>
<section className="before-section">
  <div className="before-header">
    <span>EARLIER WORK</span>
  </div>

  <div className="before-title">
    <h2>BEFORE THE QUORUM.</h2>
  </div>

  <div className="before-list">

    <div className="before-item">
      <div className="before-company">
        <span className="before-number">01</span>
        <h3>ZOO MEDIA NETWORKS</h3>
      </div>

      <div className="before-role">
        FOUNDER&apos;S OFFICE · 2024–25
      </div>

      <p>
        Founder personal branding and thought-leadership across LinkedIn and
        Instagram, alongside podcast IP development and digital content around
        the launch of Secret Party.
      </p>
    </div>

    <div className="before-item">
      <div className="before-company">
        <span className="before-number">02</span>
        <h3>MANTRA EVENTS &amp; PROMOTION</h3>
      </div>

      <div className="before-role">
        CREATIVES · 2024
      </div>

      <p>
        Event concepts, copy and visual assets across client campaigns and
        experiential activations.
      </p>
    </div>

    <div className="before-item">
      <div className="before-company">
        <span className="before-number">03</span>
        <h3>SLURRP / HINDUSTAN TIMES</h3>
      </div>

      <div className="before-role">
        CONTENT · 2023
      </div>

      <p>
        Food and gastronomy writing for Hindustan Times&apos; culinary
        vertical.
      </p>
    </div>

  </div>
</section>
<section className="skills-section">
  <div className="skills-header">
    <span>WHAT I WORK ACROSS</span>
    <span>SKILLS / CAPABILITIES</span>
  </div>

  <SkillsGrid />
</section>

<section className="tools-section">
  <div className="tools-topline">
    <span>TOOLS</span>
    <span>WHAT I WORK WITH</span>
  </div>

  <div className="tools-content">
    <div className="tools-heading">
      <h2>THE TOOLS<br />BEHIND THE WORK.</h2>
    </div>

    <ToolsOrbit />
  </div>
</section>
<section className="outside-section">

  <div className="outside-intro">
    <div className="outside-title">
      <h2>OUTSIDE THE BRIEF.</h2>
      <span>STORYTELLING</span>
      <p>
        I COLLECT PLACES<br />
        IN MORE WAYS THAN ONE.
      </p>
    </div>

    <div className="outside-copy">
      <p>
        Sometimes it&apos;s a photograph. Sometimes it&apos;s a page of writing.<br />
        Sometimes it&apos;s far too many clips on my camera roll.
      </p>

      <p>
        Travel is where a lot of my curiosity outside work ends up.
      </p>
    </div>
  </div>


  <article className="travel-feature saigon-feature">
    <div className="travel-image saigon-image">
      <MediaFrame className="travel-frame saigon-frame">
        <Image
          src="/saigon.JPG"
          alt="Saigon street photography"
          width={1200}
          height={1500}
          sizes="(max-width: 800px) 100vw, 70vw"
          className="media-image"
        />
      </MediaFrame>
    </div>

    <div className="travel-info">
      <h3>SAIGON, VIETNAM</h3>
      <p>Photography + writing</p>

      <a
        href="https://drive.google.com/drive/folders/1Ri9xvk8SrcNGg-ope5afcCj3JTBEcrCw?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="case-study-cta travel-project-cta"
      >
        <span>VIEW PROJECT</span>
        <span className="case-study-cta-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </article>


  <div className="travel-secondary">

    <article className="travel-small rajasthan-project">
      <div className="travel-image rajasthan-image">
        <MediaFrame className="travel-frame rajasthan-frame">
          <Image
            src="/rajasthan.jpg"
            alt="Rajasthan travel photography"
            width={1200}
            height={1600}
            sizes="(max-width: 800px) 100vw, 40vw"
            className="media-image"
          />
        </MediaFrame>
      </div>

      <div className="travel-info">
        <h3>RAJASTHAN, INDIA</h3>
        <p>Photography</p>

        <a
          href="https://drive.google.com/file/d/1pqJ7uCZBgDg2aKapmGg1IN08vKNHaVp6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-cta travel-project-cta"
        >
          <span>VIEW PROJECT</span>
          <span className="case-study-cta-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>


    <article className="travel-small phuket-project">
      <div className="travel-image phuket-image">
        <MediaFrame className="travel-frame phuket-frame">
          <Image
            src="/phuket.jpeg"
            alt="Phuket travel photography"
            width={1200}
            height={1500}
            sizes="(max-width: 800px) 100vw, 40vw"
            className="media-image"
          />
        </MediaFrame>
      </div>

      <div className="travel-info">
        <h3>PHUKET, THAILAND</h3>
        <p>Photography</p>

        <a
          href="https://drive.google.com/file/d/1mFJwHVL36jPci6gULbODa6FlJJSqIwgI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-cta travel-project-cta"
        >
          <span>VIEW PROJECT</span>
          <span className="case-study-cta-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>

  </div>

</section>
<section className="ballet-section">

  <div className="ballet-intro">
    <span>BEFORE THE DECKS, DEADLINES<br />AND VERY FULL ROOMS.</span>
    <h2>THERE WAS BALLET.</h2>
  </div>

  <div className="ballet-story">

    <div className="ballet-image">
      <MediaFrame className="ballet-frame">
        <Image
          src="/ballet.jpeg"
          alt="Classical ballet portrait"
          width={1100}
          height={1500}
          sizes="(max-width: 800px) 100vw, 50vw"
          className="media-image"
          style={{ objectPosition: "center 18%" }}
        />
      </MediaFrame>
    </div>

    <div className="ballet-copy">
      <h3>YES, THAT&apos;S ME.</h3>

      <p>
        I trained in classical ballet for close to a decade, using the Russian
        Vaganova method.
      </p>

      <p>
        Long before I knew anything about marketing, it taught me what it means
        to repeat something until the smallest detail feels effortless.
      </p>

      <p>
        The preparation nobody sees. Knowing your part while staying aware of
        everyone around you. Understanding that what looks effortless usually
        isn&apos;t.
      </p>
    </div>

  </div>

  <div className="ballet-end">
    <span>SOME OF IT STILL SHOWS UP IN HOW I WORK.</span>
  </div>

</section>
<BrandsMarquee />
{/* LET&apos;S TALK */}
<section className="contact-section">

  <div className="contact-top">
    <span>LET&apos;S TALK</span>
    <span>ANAINAA JAMES · BOMBAY</span>
  </div>

  <div className="contact-main">

    <div className="contact-left">
      <h2>REACH OUT.</h2>

      <p>
        About work. An idea. A place worth travelling to.
        <br />
        Or whatever brought you this far down the page.
      </p>

      <a href="mailto:anainaajames@gmail.com" className="email-link">
        anainaajames@gmail.com
      </a>

      <a
        href="/anainaa-james-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-link"
      >
        DOWNLOAD CV ↗
      </a>
    </div>

   <div className="contact-art">
      <Image
        src="/reaching-hands.png"
        alt="Reaching hands artwork"
        width={1200}
        height={700}
        className="reaching-hands"
      />
    </div>
  </div>

  <div className="contact-bottom">
    <span>MADE WITH CURIOSITY.</span>
    <span>© 2026 ANAINAA JAMES</span>
  </div>

</section>
    </main>
  );
}