import Container from "@/component/Shared/Main/Container";
import SectionTitle from "@/component/Shared/Main/SectionTitle";
import { useEffect } from "react";
import CountUp from "react-countup";
import { JSX } from "react";

import { FaPython, FaDatabase } from "react-icons/fa";
import { GiPowerGenerator, GiElectric, GiJerusalemCross } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { SiPostman, SiMysql, SiSiemens } from "react-icons/si";

interface CompanyValue {
  title: string;
  description: string;
  icons: JSX.Element[];
  image: string;
}

export default function Company() {
  useEffect(() => {
    document.title = "Company | Parinya";
  }, []);

  const companyValues: CompanyValue[] = [
    {
      title: "KMITL",
      description:
        "4 years in Electrical Engineering Bachelor degree 1 year as a Research assistance give me many valueable knowledge ad mindset as It is a good foundation for further development.  ",
      icons: [
        <GiPowerGenerator className="w-6 h-6" />,
        <GiElectric className="w-6 h-6" />,
        <FaPython className="w-6 h-6" />,
      ],
      image: "/images/brands/KMITL.png",
    },
    {
      title: "Growatt",
      description:
        "As a fresh graduate working in a startup company, this place gave me the opportunity to work on real-world projects with a many world-class team in several field from hardware design to server configure. Collaborating with experts across different domains also helped me refine my problem-solving skills and adopt industry-leading methodologies in engineering ",
      icons: [
        <MdElectricCar className="w-6 h-6" />,
        <SiPostman className="w-6 h-6" />,
        <RiPresentationFill className="w-6 h-6" />,
      ],
      image: "/images/brands/Growatt.png",
    },
    {
      title: "BYD",
      description:
        "A world-class company with a vast team gave me the opportunity to learn from excellent professionals around the world. Working in such an environment exposed me to advanced technologies and best practices in system optimization. ",
      icons: [
        <MdElectricCar className="w-6 h-6" />,

        <RiPresentationFill className="w-6 h-6" />,
      ],
      image: "/images/brands/BYD.png",
    },

    {
      title: "Saim Yamato Steel",
      description:
        "As an engineer responsible for machine analysis in my company, I have gained extensive experience in logical thinking, understanding machine behavior, and applying user experience principles. This has enabled me to create insightful reports that capture users' attention and develop intuitive dashboards simultaneously. ",
      icons: [
        <FaPython className="w-6 h-6" />,
        <GiJerusalemCross className="w-6 h-6" />,
        <FaDatabase className="w-6 h-6" />,
        <SiMysql className="w-6 h-6" />,
        <SiSiemens className="w-9 h-9" />,
        <SiPostman className="w-6 h-6" />,
      ],
      image: "/images/brands/SYSlogo.png",
    },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-center">
          <SectionTitle preTitle="About" title=" My Experience" align="center">
            We're a dynamic team of creative minds, developers, and marketers
            committed to transforming ideas into impactful digital experiences.
          </SectionTitle>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mt-16 text-center lg:grid-cols-4">
          <div className="flex flex-col">
            <dl>
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Years
              </dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={2025 - 1998} duration={20} />
              </dd>
            </dl>
          </div>
          <div className="flex flex-col">
            <dl>
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Companies
              </dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={4} duration={5} />
              </dd>
            </dl>
          </div>
          <div className="flex flex-col">
            <dl>
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Countries
              </dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={2} duration={4} />
              </dd>
            </dl>
          </div>
          <div className="flex flex-col">
            <dl>
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Projects
              </dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={30} duration={10} suffix="+" />
              </dd>
            </dl>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-10">
        <SectionTitle
          preTitle="Skill"
          title="My skill & Abilities"
          align="center"
        >
          What am I Learning in each company. These values shape everything I do
          and guide my decisions.
        </SectionTitle>

        <div className="grid gap-8 mt-12 md:grid-cols-3 max-w-screen-xl mx-auto">
          {companyValues.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
            >
              <div className="flex p-2 gap-3 ">
                <img
                  src={value.image}
                  alt="BYD logo"
                  className="mb-auto field-sizing-fixed w-40   hover:opacity-50 transition-opacity"
                />
                <div className="flex flex-wrap gap-3 ">
                  {value.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center  w-12 h-12 text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
