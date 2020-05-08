import awslogo from "./exps/aws.png";
import vclalogo from "./exps/vcla.png";
import dblogo from "./exps/db.png";
import slampic from "./projs/slam.png";
import drugpic from "./projs/drug.jpg";
import tongitspic from "./projs/tongits.png";
import huntjobspic from "./projs/huntjobs.svg";
import learnpic from "./projs/learn.png";
import covidpic from "./projs/covid.png";

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
    title: "Covid Stories",
    pic: covidpic,
    desc:
      "Platform built under the Daily Bruin at UCLA to allow students globally to share their stories and experiences during the COVID-19 pandemic.",
    link: "https://covidstories.dailybruin.com/",
  },
  {
    title: "Hunt Jobs CLI",
    pic: huntjobspic,
    desc:
      "Command line tool that searches for job postings quickly and compiles them for you in any format. <em> Available to download for macOS and Windows.",
    link: "https://github.com/thenry3/Hunt-Jobs/",
  },
];

export var videos = {
  "How to make Avocado Smoothies!!":
    "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avoc Smoothies!!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado othies!!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado Smoos!!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado Smoothi": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado Smoothie": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado Smoothies": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avocado Smoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to makeocado Smoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How toe Avocado Smoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "Howo make Avocado Smoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make Avodo Smoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
  "How to make AvocadSmoothies!": "https://www.youtube.com/embed/2PhrqDwZOLs",
};
