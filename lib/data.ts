import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CogitoXInfor from "../public/cogitoxinfor.png";
import Firepaaraad from "../public/firepaaraad.png";
import MMIOving5 from "../public/mmioving5.png";


export const links = [
  {
    name: "Hjem",
    hash: "#home",
  },
  {
    name: "Om",
    hash: "#about",
  },
  {
    name: "Prosjekter",
    hash: "#projects",
  },
  {
    name: "Ferdigheter",
    hash: "#skills",
  },
  {
    name: "Erfaring",
    hash: "#experience",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Informatikk, bachelor",
    location: "Trondheim, Norge",
    description:
      "Jeg studerer informatikk ved NTNU Gløshaugen. Her lærer jeg om programmering, algoritmer, databaser og webutvikling.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
  {
    title: "Vekter",
    location: "Trondheim, Norge",
    description:
      "Jeg jobber som vekter på deltid i utelivsbransjen. Jeg har ansvar for sikkerheten til gjestene og at de har det bra.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Nå",
  },
  {
    title: "AI Intern / Prosjektleder",
    location: "Trondheim, Norge",
    description:
      "Jeg har også ansvar for å lede et team med medstudenter i et prosjekt kalt Cogito x Infor. Cogito er en studentorganisasjon som jobber med AI-prosjekter. I et sammarbeid med Infor, verdens tredje største selskap for forretningssystemer, jobber vi med å implementere AI i praksis.",
    icon: React.createElement(FaReact),
    date: "2024 - Nå",
  },
] as const;

export const projectsData = [
  {
    title: "Cogito x Infor",
    description:
      "Som prosjektleder for Cogito-teamet på 7, utvikler vi en anbefalingsmodell for Infor for å foreslå produkter til kunder basert på tidligere kjøp.",
    tags: ["Maskinlæring","Python", "ERP-systemer", "Prosjektledelse"],
    imageUrl: CogitoXInfor,
  },
  {
    title: "Fire på rad med AI",
    description:
      "Sammen med en medstudent har jeg laget en AI-modell som spiller fire på rad. Modellen bruker en Monte Carlo-tre-søkning for å finne den beste trekket. Spillet er laget med Java og JavaFX.",
    tags: ["Java", "JavaFX", "Maskinlæring"],
    imageUrl: Firepaaraad,
  },
  {
    title: "EcoCampus",
    description:
      "I et gruppeprosjekt har vi laget en figma-prototype for en bærekraftig campus-app. Appen skal hjelpe studenter og ansatte med å ta bærekraftige valg i hverdagen.",
    tags: ["Figma", "Brukertesting", "Design Prinsipper"],
    imageUrl: MMIOving5,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "Java",
  "Figma", 
  "JavaFX"
] as const;