import awslogo from "./aws.png";
import vclalogo from "./vcla.png";
import dblogo from "./db.png";

export var experiences = [
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    startdate: new Date(2020, 5),
    enddate: new Date(2020, 8),
    bullets: ["Will contribute in AWS Cryptography"],
    logo: awslogo,
  },
  {
    company: "UCLA VCLA",
    title: "Research Intern",
    startdate: new Date(2020, 3),
    enddate: null,
    bullets: [
      "Developing Social LSTM Model in Autonomous Simulations for path prediction and planning",
    ],
    logo: vclalogo,
  },
  {
    company: "Daily Bruin",
    title: "Lead Software Developer",
    startdate: new Date(2019, 3),
    enddate: null,
    bullets: [
      "Built database infrastructure and optimized database querying in API endpoints for multiple projects",
      "Constructed customizable components for the Daily Bruin Lux library, resulting in faster website development",
      "Increased number of average users by 10% by improving mobile user experience in new interactive flat pages",
    ],
    logo: dblogo,
  },
];
