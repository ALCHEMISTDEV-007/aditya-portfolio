export const githubProfile = "https://github.com/ALCHEMISTDEV-007";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  className: string;
  mark: string;
  note: string;
  href: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    number: "02",
    name: "GitHub Wrapped",
    category: "DATA / VISUALIZATION",
    description: "A year-in-review for GitHub activity, bringing commits, language stats and contribution streaks into one personal report.",
    tags: ["Python", "GitHub API", "Data Viz"],
    className: "project-wrapped",
    mark: "↗",
    note: "A YEAR, IN COMMITS",
    href: `${githubProfile}/github-wrapped`,
  },
  {
    number: "03",
    name: "Royalty Chain",
    category: "BLOCKCHAIN / MUSIC",
    description: "A decentralized music royalty system for digital creators, pairing Solidity smart contracts with a React front end.",
    tags: ["Solidity", "Ethereum", "React", "Smart Contracts"],
    className: "project-chain",
    mark: "◇",
    note: "CREATORS, PAID FAIRLY",
    href: `${githubProfile}/royalty-chain`,
  },
  {
    number: "04",
    name: "Terminal Survivor",
    category: "SYSTEMS / PLAY",
    description: "A playable terminal wave-shooter with enemy AI, score tracking and progressive difficulty.",
    tags: ["Python", "Terminal", "Game"],
    className: "project-terminal",
    mark: "$_",
    note: "EVERY INPUT COUNTS",
    href: `${githubProfile}/terminal-survivor`,
  },
];
