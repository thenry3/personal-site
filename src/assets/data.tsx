import awslogo from "./aws.png";
import vclalogo from "./vcla.png";
import dblogo from "./db.png";
import slampic from "./slam.png";
import drugpic from "./drug.jpg";

export var experiences = [
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    startdate: new Date(2020, 5),
    enddate: new Date(2020, 8),
    bullets: ["Will contribute in AWS Cryptography"],
    logo: awslogo,
    link: "https://aws.amazon.com/",
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
    link: "https://vcla.stat.ucla.edu/",
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
    link: "https://dailybruin.com/",
  },
];

export var projs = [
  {
    title: "SLAM Tool",
    pic: slampic,
    desc:
      "Simulataneous Location and Mapping (SLAM). Generates 3D scene by plotting points in free space triangulated by features extracted from MP4's.",
    link: "https://github.com/thenry3/3D-Mapping-from-Video/",
  },
  {
    title: "Drug Decider",
    pic: drugpic,
    desc:
      "Website to help predict a patient's treatment response to anti-psychotics. In collaboration with the UCLA David Geffen School of Medicine.",
    link: "https://drugdecider.org/",
  },
];
