import Container from "../Shared/Main/Container";
import { useState, useEffect } from "react";
import { DiGithubBadge } from "react-icons/di";
const slides = [
  {
    id: 1,
    image: "./images/363437.jpg",
    alt: "Hero Illustration 1",
  },
  {
    id: 2,
    image: "/images/363455.jpg",
    alt: "Hero Illustration 2",
  },
  {
    id: 3,
    image: "/images/363456.jpg",
    alt: "Hero Illustration 3",
  },
  {
    id: 4,
    image: "/images/ProfileImage1.jpg",
    alt: "Hero Illustration 4",
  },
];

interface HeroProps {
  scrollToBenefits: () => void; // Function type with no parameters and no return value
}

export default function Hero({ scrollToBenefits }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setIsLoaded(true))
        .catch(console.error);
    };

    preloadImages();
  }, []);

  // Auto slide
  useEffect(() => {
    if (!isLoaded) return; // รอให้โหลดภาพเสร็จก่อน

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isLoaded]);

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl text-center font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-left lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {/* Modern Web Design for Startups & Indie Projects */}
              Welcome Visitored.
            </h1>
            <div className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-400 lg:text-xl xl:text-2xl">
              {/* WindReact is a modern web design & marketing website
              template for startups and indie projects. Its built with
              React 19 & Tailwind CSS 4.0 and its free to use. */}
              Take a look for a while,I hope you will enjoy my Profile Project
              and as you know this web have plenty of bug and nonsense UI, good
              tour.
            </div>
            <div className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-400 lg:text-xl xl:text-2xl">
              Parinya T.
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                onClick={scrollToBenefits}
                className="w-full sm:w-auto px-6 py-3 text-lg font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                {/* Get Started Now */}
                Start below
              </a>
              <a
                href="https://github.com/poronyo"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <DiGithubBadge className="w-7 h-7" />
                {/* View on Github */}
                &nbsp;ดูบน GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          {/* Image Slider */}
          <div className="relative h-[400px] sm:h-[500px] w-full">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width="800"
                  height="600"
                  className="object-contain w-full h-full rounded-md"
                />
              </div>
            ))}

            {/* Dots Indicator - ปรับปรุงขนาดและระยะห่าง */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 p-2 rounded-full transition-colors duration-300 relative
                    ${
                      index === currentSlide
                        ? "bg-indigo-600 dark:bg-indigo-400 scale-110"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                >
                  {/* เพิ่ม touch target ที่ใหญ่ขึ้น */}
                  <span className="absolute inset-0 -m-2" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-gray-300">
            An Engineer Looking forward to work with
            <span className="text-indigo-600 dark:text-indigo-400 px-2">
              !! YOUR !!
            </span>{" "}
            company
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="field-sizing-fixed w-30 h-1">
              <img
                src="/images/brands/KMITL.png"
                alt="KMITL logo"
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="pt-1">
              <img
                src="/images/brands/Growatt.png"
                alt="Growatt logo"
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="field-sizing-fixed w-20 h-1">
              <img
                src="/images/brands/BYD.png"
                alt="BYD logo"
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="field-sizing-fixed w-20 h-1">
              <img
                src="/images/brands/SYSlogo.png"
                alt="SYS logo"
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>

            {/* <div className="pt-2">
              <img
                src="/images/brands/sony.svg"
                alt="Sony logo"
                className="brightness-0 dark:invert opacity-30 hover:opacity-50 transition-opacity"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}
