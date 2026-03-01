import DetailPageLayout from "@/components/DetailPageLayout";

const items = [
  {
    role: "Full Stack Data Scientist",
    company: "WalmartLabs",
    period: "Jul 2021 – Present",
    bullets: [
      "Led and developed DS module for estimating delivery duration for Walmart MX Marketplace orders using XGBoost and LightGBM.",
      "Scaled a time series forecasting solution using fbprophet from PoC to 5 countries with single platform architecture.",
      "Developed MLOPS maturity dashboard on Looker, improving maturity score from 1 to 3 on a 5-point scale.",
    ],
    results: ["5-country scale", "MLOPS score 1→3", "fbprophet at scale"],
  },
  {
    role: "AI Consultant",
    company: "Delightloop.com",
    link: "https://delightloop.com",
    bullets: [
      "Developed gift recommender AI agents using Langgraph to generate hyper-personalized gifts and messaging for B2B customers.",
      "Architected a multi-channel outreach agentic AI planner and coordinated with vendor partners to implement the system.",
    ],
    results: ["Langgraph agents", "Multi-channel AI planner", "B2B personalization"],
  },
  {
    role: "Data Engineering Lead",
    company: "WalmartLabs",
    period: "Aug 2015 – Jul 2021",
    bullets: [
      "Saved £125,000 by scaling a third-party promo optimization solution on in-house Hadoop Data Lake in 2 months.",
      "Contributed to enterprise Data Science Tool Evaluation — comparative analysis of Dataiku, DataRobot, H2O across 73 capabilities.",
      "Delivered 60% reduction in job run time (reports on Tuesdays instead of Fridays). NULL value reduction from 66% to 18%.",
      "Evolved project web stack from tightly coupled Flask+HTML to loosely coupled Flask+React codebase.",
      "Scaled R PoC code to 46 departments using Hive streaming on Hadoop data lake.",
      "Reduced SAP HANA view load time from 450 seconds to 16–20 seconds via push-down filter strategy.",
    ],
    results: ["£125K saved", "60% faster jobs", "NULL 66%→18%", "HANA 450s→16s", "46 dept scale"],
  },
  {
    role: "AI Workshop Instructor",
    company: "CMRIT College – TMBA Batch",
    bullets: [
      "Conducted multiple 3-hour live AI workshops covering key concepts in AI along with agent building using tools like n8n and LangChain.",
      "Hands-on sessions on building AI agents, prompt engineering, and practical AI application development.",
    ],
    results: ["3-hour live workshops", "n8n & LangChain", "Agent building"],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    period: "Jul 2010 – Jul 2015",
    bullets: [
      "Development & support of Informatica and Datastage data pipelines.",
      "Saved 30 minutes of daily job run time using round robin partitioning on Informatica.",
      "Eliminated 20 min/day of manual effort by automating metric collection for daily flows.",
      "Eliminated 4 hours/month of manual effort by automating anomaly correction in source files.",
      "Received 7/7 client feedback on most parameters during UAT at delivery centre in Sweden.",
    ],
    results: ["7/7 client feedback", "30 min/day saved", "4 hrs/month automated"],
  },
  {
    role: "Published Author",
    company: "Walmart Global Tech Blog",
    link: "https://medium.com/walmartglobaltech/automated-input-data-distribution-in-a-multinode-workflow-c9df421da25e",
    bullets: [
      "Published technical blog on 'Automated Input Data Distribution in ML Workflow' on Walmart Global Tech Medium publication.",
    ],
    results: ["Technical blog published"],
  },
];

const TechnologyPage = () => {
  return (
    <DetailPageLayout
      title="Technology"
      subtitle="Engineering & Data Science"
      items={items}
    />
  );
};

export default TechnologyPage;
