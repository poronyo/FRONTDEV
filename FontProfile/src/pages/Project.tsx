import Container from "@/component/Shared/Main/Container";
import SectionTitle from "@/component/Shared/Main/SectionTitle";
import { useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  tools: {
    name: string;
    image: string;
  };
  image: string;
  featured?: boolean;
}

export default function Project() {
  useEffect(() => {
    document.title = "Project | Parinya";
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Pokédex Web Design",
      excerpt:
        "My  Fronted Development Learning Project using React typescript and tailwind with pokeAPI ",
      category: "Frontend Dev ",
      date: "Dec , 2024",
      tools: {
        name: "React Typescript",
        image: "/images/skill/React-icon.png",
      },
      image: "/images/blog/pokeindex_img.png",
      featured: true,
    },
    {
      id: 2,
      title: "Project Development Certificate",
      excerpt:
        "Certificated a first step in PMI (Project Management Institute) Learning fundamental of agile,water fall project development  ",
      category: "Project Development",
      date: "DEC, 2024",
      tools: {
        name: "PMI",
        image: "/images/skill/pmi_logo.svg",
      },
      image: "/images/blog/PMI_CERT.jpg",
    },
    {
      id: 3,
      title: "Human detection in Manufacturing ",
      excerpt:
        "Image processing Project in manufactuing using python to detect staff in specific area and automated send alarm to Line notification ",
      category: "Image processing",
      date: "Nov , 2024",
      tools: {
        name: "Python",
        image: "/images/skill/python.png",
      },
      image: "/images/blog/Image_processing_project.jpg",
    },
    {
      id: 4,
      title: "Mastering Tailwind CSS: Advanced Techniques Learning",
      excerpt:
        "Deep dive into advanced Tailwind CSS techniques and learn how to create custom designs efficiently.",
      category: "Design",
      date: "Aug, 2024",
      tools: {
        name: "Tailwind CSS",
        image: "/images/skill/tailwindLogo.png",
      },
      image: "/images/blog/TailwindPost.jpg",
    },
    {
      id: 5,
      title: " Modern Web Animation Learning",
      excerpt:
        "Discover how to create engaging web animations that enhance user experience without sacrificing performance.",
      category: "Design",
      date: "July, 2024",
      tools: {
        name: "Tailwind CSS",
        image: "/images/skill/tailwind.png",
      },
      image: "/images/blog/DesignPost.jpg",
    },

    {
      id: 6,
      title: "Machine Learning Professional Certication",
      excerpt:
        "Learning how to use Classification, Regression, Correlations, Feature Importance, Clustering and Association Rules  ",
      category: "Machine Learning",
      date: "Mar, 2024",
      tools: {
        name: "Python",
        image: "/images/skill/python.png",
      },
      image: "/images/blog/RapidMiner_Cert_ML.png",
    },
    {
      id: 7,
      title: "Data Engineering  Professional Certication",
      excerpt:
        "Learning how to use Data Access, Basic Transformations, Working with Multiple Data Sets, Pivot Tables, Routines and Simple Text Processing. ",
      category: "Machine Learning",
      date: "Mar , 2024",
      tools: {
        name: "Python",
        image: "/images/skill/python.png",
      },
      image: "/images/blog/RapidMiner_Cert_DE.png",
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Container>
        {/* Hero Section */}
        <div className="text-center">
          <SectionTitle
            preTitle="project"
            title="My hand on Experience  "
            align="center"
          >
            Stay up to date with my latest activities, Experience, and self
            improvement inspiration.
          </SectionTitle>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <div className="mt-12 overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="px-8 py-12">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={featuredPost.tools.image}
                      alt={featuredPost.tools.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {featuredPost.tools.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="pb-20">
          <SectionTitle
            preTitle="Latest Activity"
            title="Recent Expereince"
            align="center"
          >
            Check my latest project and experience about web development and
            Data analyst .
          </SectionTitle>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={post.tools.image}
                      alt={post.tools.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.tools.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
