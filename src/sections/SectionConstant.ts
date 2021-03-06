import SocialLogo from "./SocialLogo";

const AboutTextBlock1: string =
  "It's a great opportunity to network, meet new people, and build your connnections";
const AboutTextBlock2: string =
  "Whether you are starting out or finishing your degree, RowdyHacks has something for everyone";
const AboutTextBlock3: string =
  "We believe that inclusion and diversity bring forth the most creative ideas, so we welcome all disciplines and backgrounds";

const MissionTitle: string = "TRACKS";

const MissionText: Array<string> = [
  "We have three different tracks at RowdyHacks 2020 you can tailor your project towards.",
  "For our hackers who create projects that mainly focus on the topics of Cybersecurity.",
  "First time coders with no technical experience have the opportunity to learn coding basics and be able to compete against other first time hackers for prizes. This track is specifically for people who have never coded before!",
  "If you already have an idea in mind and it doesn't fall under our Cyber or Learners Tracks, our General Track is for you!"
];

const FAQQuestions: Array<string> = [
  "What is a hackathon?",
  "How much does it cost to participate?",
  "What if I don't know how to code?",
  "How big are the teams?",
  "What should my project be?",
  "Can I work on previous projects?",
  "What if I'm not a UTSA student?",
  "What should I bring?",
  "What if this FAQ didn't answer my question?"
];

const FAQAnswers: Array<any> = [
  "A hackathon is a 24 hour event where teams collaborate on a project to create social impact, satisfy company challenges, and innovate new solutions. At RowdyHacks, mentors will be willing to assist you on your quest to creating your project.",
  "RowdyHacks is absolutely FREE thanks to our awesome partners. You don't have to worry about a thing -- we'll provide the food, t-shirts, snacks, and prizes.",
  "No worries! RowdyHacks is for everyone from all coding and non-coding backgrounds! We will have plenty of mentors and peers to help you learn throughout the event.",
  "Teams can consist of up to 4 students! We encourage hackers to participate as part of a team. Don't have a team? No worries, we will have an opportunity before the event for you to meet other hackers and form teams!",
  "Anything! You can make a new social media website, a simple weather app, a sentimental analysis tool for tweets...anything in your wildest imagination, you can create. Your team can come prepared with an idea or come up with one on the spot.",
  "No, all projects must be built from scratch. However, you can start brainstorming your ideas prior to the event. Any team found working on previous projects will be automatically disqualified.",
  "No problem! RowdyHacks is open to ANY college/university student over 18 years old. We're so excited to see students from all over collaborating and innovating together at this year's event.",
  "Any hardware you plan on using for the project -- your laptop, charger, portable mouse, phone, Raspberry Pi, VR headset, robots, etc. You might also want to bring a change of clothes and toiletries.",
  ". We will get back to you and give you the best support."
];

const LocationText: string =
  "RowdyHacks will be held at UTSA's Main Campus at the HEB Ballrooms in the UTSA Student Union.";

const SocialMediaText: string =
  "For live updates and announcements, follow us on social media!";

const FooterText: string =
  "RowdyHacks is hosted by Roadrunners from UTSA. If you're interested in becoming a partner, please e-mail ";

const socialLogos: Array<SocialLogo> = [
  {
    link: "https://twitter.com/rowdyhacks",
    src: "twitter",
    altName: "Twitter"
  },
  {
    link: "https://facebook.com/rowdyhacks",
    src: "facebook",
    altName: "Facebook"
  },
  {
    link: "https://www.linkedin.com/company/51637167",
    src: "linkedin",
    altName: "Linkedin"
  },
  {
    link: "https://www.instagram.com/rowdyhacks",
    src: "instagram",
    altName: "Instagram"
  }
];

export {
  AboutTextBlock1,
  AboutTextBlock2,
  AboutTextBlock3,
  MissionTitle,
  MissionText,
  FAQQuestions,
  FAQAnswers,
  LocationText,
  SocialMediaText,
  FooterText,
  socialLogos
};
