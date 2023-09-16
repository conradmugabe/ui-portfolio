const colors = {
  reaction: {
    bg: "bg-results-summary-light-red/5",
    text: "text-results-summary-light-red",
  },
  memory: {
    bg: "bg-results-summary-orangey-yellow/5",
    text: "text-results-summary-orangey-yellow",
  },
  verbal: {
    bg: "bg-results-summary-Green-teal/5",
    text: "text-results-summary-Green-teal",
  },
  visual: {
    bg: "bg-results-summary-Cobalt-blue/5",
    text: "text-results-summary-Cobalt-blue",
  },
};
export const resultsSummary = [
  {
    name: "Reaction",
    score: 80,
    total: 100,
    icon: "/results-summary/images/icon-reaction.svg",
    className: colors.reaction,
  },
  {
    name: "Memory",
    score: 92,
    total: 100,
    icon: "/results-summary/images/icon-memory.svg",
    className: colors.memory,
  },
  {
    name: "Verbal",
    score: 61,
    total: 100,
    icon: "/results-summary/images/icon-verbal.svg",
    className: colors.verbal,
  },
  {
    name: "Visual",
    score: 72,
    total: 100,
    icon: "/results-summary/images/icon-visual.svg",
    className: colors.visual,
  },
];
