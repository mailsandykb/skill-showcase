import DetailPageLayout from "@/components/DetailPageLayout";

const items = [
  {
    role: "AI Consultant",
    company: "Delightloop.com",
    period: "Nov 2025 - Present",
    link: "https://delightloop.com",
    bullets: [
      "Built an AI call agent that calls up qualified leads and nudges them to signup for events and flags the action items from the call",
      "Setup AWS system (BEDROCK AGENTCORE & ECS Containers) including CICD via github actions for delightloop agent work effort",
      "Developed a chatbot named delightBot to add users to a marketing campaign directly via telegram chats using n8n",
      "Developed gift recommender AI agents using Langgraph to generate hyper-personalized gifts and messaging for B2B customers.",
      "Architected a multi-channel outreach agentic AI planner that does Discover, Outreach, Nudge, Accept workflow and coordinated with vendor partners to implement the system.",
    ],
    results: ["Langgraph agents", "Multi-channel AI planner", "B2B personalization"],
  },

  {
    role: "Full Stack Data Scientist",
    company: "WalmartLabs",
    period: "Jul 2021 – Apr 2025",
    bullets: [
      "Recommendation System: Developed an RFM score based recommendation system to recommend items for the category page",
      "Recommendation System: Developed and scaled an association rules–based recommendation system for the Bought Also Bought feature using FPGrowth and PySpark.",
      "Regression: Led and developed DS module for estimating delivery duration for Walmart MX Marketplace orders using XGBoost and LightGBM.",
      "Time Series: Scaled a time series forecasting solution using fbprophet from PoC to 5 countries with single platform architecture.",
      "MLOPS: Developed MLOPS maturity dashboard on Looker, improving maturity score from 1 to 3 on a 5-point scale.",
    ],
    results: ["2.2% conversion lift & $1.1M annualized GMV - FP growth", "5-country scale for Time series algo", "MLOPS score improvement 1→3"],
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
