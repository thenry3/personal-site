import awslogo from "./aws.png";
import vclalogo from "./vcla.png";
import dblogo from "./db.png";
import slampic from "./slam.png";
import drugpic from "./drug.jpg";
import tongitspic from "./tongits.png";
import huntjobspic from "./huntjobs.svg";
import learnpic from "./learn.png";

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
      "<em> Simulataneous Location and Mapping (SLAM). <em> Generates 3D scene by plotting points in free space triangulated by features extracted from MP4's.",
    link: "https://github.com/thenry3/3D-Mapping-from-Video/",
  },
  {
    title: "Tongits",
    pic: tongitspic,
    desc:
      "Android implementation of the Filipino card game, Tongits. Published on Google Play Store with <em> over 12,000 downloads.",
    link:
      "https://play.google.com/store/apps/details?id=com.creativelabs.tongits&hl=en_US/",
  },
  {
    title: "Drug Decider",
    pic: drugpic,
    desc:
      "Website to help predict a patient's treatment response to anti-psychotics based on PANSS scores. In collaboration with the <em> UCLA David Geffen School of Medicine.",
    link: "https://drugdecider.org/",
  },
  {
    title: "learnPIC",
    pic: learnpic,
    desc:
      "Android app that detects objects in a given picture and translate the English words generated to any language of the user's choosing.",
    link: "https://github.com/thenry3/learnPIC/",
  },
  {
    title: "Hunt Jobs CLI",
    pic: huntjobspic,
    desc:
      "Command line tool that searches for job postings quickly and compiles them for you in any format. <em> Available to download for macOS and Windows.",
    link: "https://github.com/thenry3/Hunt-Jobs/",
  },
];
