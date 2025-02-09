import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";

import benefitOneImg from "/images/hero3.webp";
import benefitTwoImg from "/images/hero2.webp";

const benefitOne = {
  title: "My strong point",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Hard working",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: FaceSmileIcon as React.ComponentType,
    },
    {
      title: "Self Improvement",
      desc: "Always find a better solution.",
      icon: ChartBarSquareIcon as React.ComponentType,
    },
    {
      title: "Team player",
      desc: `"I can do. We can done."`,
      icon: CursorArrowRaysIcon as React.ComponentType,
    },
  ],
};

const benefitTwo = {
  title: "More about Hard skill ",
  desc: "Ability in HTML, CSS, JavaScript, and modern frameworks like React . Skilled in responsive design, cross-browser compatibility and version control (Git).Understanding of UI/UX principles, ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "HTML",
      desc: "Structures web content using elements like headings, paragraphs, and links.",
      icon: DiHtml5 as React.ComponentType,
    },
    {
      title: "CSS",
      desc: "Styles web pages with colors, layouts, fonts, and responsive designs. with Tailwind V4.0",
      icon: DiCss3 as React.ComponentType,
    },
    {
      title: "Java Script & Type script",
      desc: " static typing will improving code reliability and maintainability ",
      icon: DiJavascript1 as React.ComponentType,
    },
    {
      title: "React",
      desc: "Builds dynamic user interfaces using reusable components and virtual DOM.",
      icon: DiReact as React.ComponentType,
    },
  ],
};

export { benefitOne, benefitTwo };
