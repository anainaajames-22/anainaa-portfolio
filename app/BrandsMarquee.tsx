const firstRow = [
  "ELLE",
  "LIFESTYLE ASIA",
  "THE WEEK",
  "BANDHAN BANK",
  "MADDOCK FILMS",
  "TRAVEL + LEISURE",
  "ZOO MEDIA",
  "HINDUSTAN TIMES",
  "CHALTA HAI COMEDY",
  "IBTIDA",
  "MOMMY NETWORK",
];

const secondRow = [
  "NETWORKING NOW",
  "NUHER",
  "THE CORE",
  "HARPERCOLLINS",
  "HARPER’S BAZAAR",
  "AUSTRALIA MACADAMIA",
  "VERCELLI",
  "INHERINTEREST",
  "VIVA LA VINO",
  "NEW SOUND",
  "THE PRINT",
];

function BrandGroup({ names, duplicate = false }: { names: string[]; duplicate?: boolean }) {
  return (
    <ul className="brand-marquee-group" aria-hidden={duplicate || undefined}>
      {names.map((name, index) => (
        <li className="brand-marquee-name" key={`${name}-${index}`}>
          <span>{name}</span>
          <span className="brand-marquee-separator" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

function BrandTrack({ names, direction }: { names: string[]; direction: "left" | "right" }) {
  return (
    <div className={`brand-marquee-row brand-marquee-${direction}`}>
      <div className="brand-marquee-track">
        <BrandGroup names={names} />
        <BrandGroup names={names} duplicate />
      </div>
    </div>
  );
}

export default function BrandsMarquee() {
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <div className="brands-heading">
        <span className="brands-label">BRANDS / COLLABORATORS</span>
        <h2 id="brands-title">
          A FEW NAMES I&apos;VE
          <br />
          WORKED WITH &amp; ALONGSIDE.
        </h2>
      </div>

      <div className="brands-marquees">
        <BrandTrack names={firstRow} direction="left" />
        <BrandTrack names={secondRow} direction="right" />
      </div>
    </section>
  );
}
