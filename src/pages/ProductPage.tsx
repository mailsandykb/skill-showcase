import DetailPageLayout from "@/components/DetailPageLayout";

const items = [

  {
    role: "Product Consultant",
    company: "Ronav Series",
    period: "Apr 2025 – Jun 2025",
    link: "http://ronavseries.com/",
    bullets: [
      "Developed the product website using Wix, establishing the brand's digital presence.",
      "Grew the product line from 1 product to 3 products with 5 items in each product line in a single quarter.",
      "Ran field and digital marketing experiments as part of GTM strategy and created marketing materials and messaging.",
    ],
    results: ["1→3 product lines", "GTM strategy & execution"],
  },
  {
    role: "Product Ideation – AI Travel Assistant Prototype",
    company: "TripMeister",
    period: "Jul 2025 – Oct 2025",
    link: "https://tripmeister.in/",
    bullets: [
      "Developed an AI-powered travel assistant product idea and built a working prototype.",
      "Presented the concept to a crowd of 300 people, demonstrating the product's value proposition and AI capabilities.",
    ],
    results: ["Presented to 300 people", "AI-powered prototype"],
  },
  {
    role: "Product Developer – Leadership Skill App Prototype",
    company: "ElevAIte Now",
    period: "Jul 2025 – Oct 2025",
    link: "https://elevaite-now.com/",
    bullets: [
      "Developed a leadership skill development app leveraging AI to provide personalized learning paths.",
      "Built end-to-end product from concept to deployment, covering UX, development, and launch.",
    ],
    results: ["Full product lifecycle", "AI-driven learning paths"],
  },
  {
    role: "Product Developer – Productivity App prototype",
    company: "me.com",
    period: "Jul 2025 – Oct 2025",
    link: "https://elevaite-now.com/",
    bullets: [
      "Developed a prototype for a personal productivity app which stores schedule, family, expenses, education, device details and allows natural language queries to provide information back",
      "Built end-to-end product from concept to deployment, covering UX, development",
    ],
    results: ["Full product lifecycle", "AI-driven learning paths"],
  },
  {
    role: "Product Ideation – Kala Sangam - LinkedIn for artists",
    company: "Kalasangam",
    period: "Jul 2025 – Oct 2025",
    link: "https://kalasangam.net/",
    bullets: [
      "Developed an AI-powered portfolio & Skills builder for performing artists "
    ],
    results: ["Presented to 300 people", "AI-powered prototype"],
  },
  {
    role: "Data Science Tool Evaluation Panel",
    company: "WalmartLabs",
    bullets: [
      "Contributed to an enterprise-level decision as part of the Data Science Tool Evaluation Panel for citizen data scientist tools.",
      "Performed comparative analysis of Dataiku, DataRobot, and H2O platforms across 73 capabilities in 2 weeks.",
    ],
    results: ["73 capabilities analyzed", "Enterprise decision input", "2-week turnaround"],
  },
];

const ProductPage = () => {
  return (
    <DetailPageLayout
      title="Product"
      subtitle="Strategy & Execution"
      items={items}
    />
  );
};

export default ProductPage;
