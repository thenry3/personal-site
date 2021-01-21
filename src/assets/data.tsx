import teslalogo from "./exps/tesla.png";
import awslogo from "./exps/aws.png";
import slampic from "./projs/slam.png";
import drugpic from "./projs/drug.jpg";
import tongitspic from "./projs/tongits.png";
import huntjobspic from "./projs/huntjobs.svg";
import learnpic from "./projs/learn.png";
import covidpic from "./projs/covid.png";
import snaplogo from "./exps/snap.png";
import nurologo from "./exps/nuro.png";
import twosigmalogo from "./exps/twosigma.png";

export var experiences = [
  {
    company: "Snap Inc.",
    title: "Software Engineer Intern",
    startdate: new Date(2021, 9),
    enddate: null,
    bullets: ["spooky ghost"],
    logo: snaplogo,
    link: "https://www.snap.com",
  },
  {
    company: "Two Sigma",
    title: "Software Engineer Intern",
    startdate: new Date(2021, 6),
    enddate: null,
    bullets: ["money printer goes brrr"],
    logo: twosigmalogo,
    link: "https://www.twosigma.com",
  },
  {
    company: "Nuro",
    title: "Software Engineer Intern",
    startdate: new Date(2021, 3),
    enddate: null,
    bullets: ["cute autonomous cars"],
    logo: nurologo,
    link: "https://nuro.ai",
  },
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    startdate: new Date(2020, 8),
    enddate: new Date(2020, 11),
    bullets: ["fancy cars"],
    logo: teslalogo,
    link: "https://www.tesla.com",
  },
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    startdate: new Date(2020, 5),
    enddate: new Date(2020, 8),
    bullets: ["pretty clouds"],
    logo: awslogo,
    link: "https://aws.amazon.com/",
  },
];

export var projs = [
  {
    title: "SLAM tool",
    pic: slampic,
    desc:
      "<em> Simulataneous Location and Mapping (SLAM). <em> Generates 3D scene by plotting points in free space triangulated by features extracted from MP4's.",
    link: "https://github.com/thenry3/3D-Mapping-from-Video/",
  },
  {
    title: "tongits",
    pic: tongitspic,
    desc:
      "Android implementation of the Filipino card game, Tongits. Published on Google Play Store with <em> over 12,000 downloads.",
    link:
      "https://play.google.com/store/apps/details?id=com.creativelabs.tongits&hl=en_US/",
  },
  {
    title: "drug decider",
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
    title: "covid stories",
    pic: covidpic,
    desc:
      "Platform built under the Daily Bruin at UCLA to allow students globally to share their stories and experiences during the COVID-19 pandemic.",
    link: "https://covidstories.dailybruin.com/",
  },
  {
    title: "hunt jobs CLI",
    pic: huntjobspic,
    desc:
      "Command line tool that searches for job postings quickly and compiles them for you in any format. <em> Available to download for macOS and Windows.",
    link: "https://github.com/thenry3/Hunt-Jobs/",
  },
];
