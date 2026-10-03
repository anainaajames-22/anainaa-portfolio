"use client";

import { Icon } from "@iconify/react";
import boxicons from "@iconify-json/bxl/icons.json";
import {
  faFigma,
  faGoogle,
  faGoogleDrive,
  faHtml5,
  faMailchimp,
  faMicrosoft,
  faNotion,
  faOpenai,
} from "@fortawesome/free-brands-svg-icons";
import type { CSSProperties } from "react";

const orbitTools = [
  { name: "CANVA", mark: "canva" },
  { name: "FIGMA", mark: faFigma },
  { name: "CHATGPT", mark: faOpenai },
  { name: "GOOGLE WORKSPACE", mark: faGoogleDrive },
  { name: "GOOGLE SITES", mark: faGoogle },
  { name: "HTML5", mark: faHtml5 },
  { name: "MAILCHIMP", mark: faMailchimp },
  { name: "MICROSOFT OFFICE", mark: faMicrosoft },
  { name: "NOTION", mark: faNotion },
] as const;

function BrandMark({ mark }: { mark: (typeof orbitTools)[number]["mark"] }) {
  if (mark === "canva") {
    const canva = boxicons.icons.canva;
    return (
      <Icon
        className="tools-brand-mark"
        icon={{ width: 24, height: 24, ...canva }}
        aria-hidden="true"
      />
    );
  }

  const [width, height, , , pathData] = mark.icon;
  const paths = Array.isArray(pathData) ? pathData : [pathData];

  return (
    <svg
      className="tools-brand-mark"
      viewBox={`0 0 ${width} ${height}`}
      focusable="false"
      aria-hidden="true"
    >
      {paths.map((path, index) => <path d={path} key={index} />)}
    </svg>
  );
}

export default function ToolsOrbit() {
  return (
    <div className="tools-orbit">
      <div className="tools-orbit-track" aria-hidden="true" />
      <span className="tools-orbit-registration" aria-hidden="true" />

      {orbitTools.map((tool, index) => (
        <span
          className="tools-orbit-item"
          key={tool.name}
          role="img"
          aria-label={tool.name}
          style={{
            "--orbit-position": `${(index * 100) / orbitTools.length}%`,
          } as CSSProperties}
        >
          <BrandMark mark={tool.mark} />
          <span className="tools-orbit-name">{tool.name}</span>
        </span>
      ))}

      <div className="tools-centre">
        <span>TOOLS I USE</span>
        <strong>TO MAKE<br />THINGS HAPPEN.</strong>
      </div>
    </div>
  );
}
