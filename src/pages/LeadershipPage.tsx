import DetailPageLayout from "@/components/DetailPageLayout";

const items = [
  {
    role: "People Development & Club Leadership",
    company: "Walmart",
    bullets: [
      "Grew Walmart Toastmasters club from 8 members to 22 members as first VP-Membership of the club.",
      "Led area meeting of 80 people — received Director appreciation for creative content.",
      "Delivered 15-minute timed project presentation to VP — appreciated for time management and crisp content.",
      "Part of interview panel at Walmart for data engineering profiles.",
    ],
    results: ["8→22 members (2.75x growth)", "80-person area meeting", "VP presentation"],
  },
  {
    role: "AI Masterclass Speaker",
    company: "Multiple Venues",
    bullets: [
      "Conducted AI masterclasses and speaking assignments, sharing insights on applied AI, machine learning, and agentic systems.",
      "Conducted multiple 3-hour live AI workshops for TMBA batch at CMRIT college covering AI concepts and agent building with n8n and LangChain.",
    ],
    results: ["3-hour live masterclasses", "AI agent workshops"],
  },
  {
    role: "Technical Knowledge Sharing",
    company: "Walmart",
    bullets: [
      "\"Elephant & The Herd\" — presented a session on conceptual understanding of Hadoop ecosystem to the team during upskilling.",
      "\"IoT for Retail\" — presented a hack idea to the team within a month of joining Walmart.",
    ],
    results: ["Hadoop upskilling session", "IoT hack presentation"],
  },
  {
    role: "Training & Mentorship",
    company: "Accenture",
    bullets: [
      "Trained 20 people on Informatica during project ramp up.",
      "Accenture-accredited Informatica trainer — trained a class of 60 on RDBMS at VIT with student feedback of 4.71/5.",
    ],
    results: ["60 students trained", "4.71/5 feedback", "Accredited trainer"],
  },
  {
    role: "Recognitions",
    company: "Multiple Organizations",
    bullets: [
      "Propel Award — Accenture",
      "Spot Award — Duracell",
    ],
    results: ["Propel Award", "Spot Award"],
  },
];

const LeadershipPage = () => {
  return (
    <DetailPageLayout
      title="Leadership"
      subtitle="People & Growth"
      items={items}
    />
  );
};

export default LeadershipPage;
