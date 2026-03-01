import DetailPageLayout from "@/components/DetailPageLayout";

const items = [
  {
    role: "Volunteer Product Leaders Forum",
    company: "PLF",
    bullets: [
      "Helped organize a city wide annual conference product leaders drawing 150+ attendees -  I have added value across teams - from venue finalization to Speakers shortlist to field and digital marketing to draw attendees to the conference ensuring a successful conference"
    ],
    results: ["Organized Annual Conference - Convergence", "150+ attendees", "Speakers from top companies"],
  },
  {
    role: "AI Workshop Instructor",
    company: "CMRIT College – TMBA Batch",
    bullets: [
      "Conducted multiple 3-hour live AI workshops covering key concepts in AI along with agent building using tools like n8n and LangChain.",
      "Hands-on sessions on building AI agents, prompt engineering, and practical AI application development.",
      "Feedback score of 4 out of 5"
    ],
    results: ["3-hour live workshops", "n8n & LangChain", "Agent building"],
  },
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
