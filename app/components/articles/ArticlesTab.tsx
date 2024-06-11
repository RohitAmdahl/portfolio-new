import Link from "next/link";
// import { blogs } from "../../helpers/blog";
import Image from "next/image";

export const blogs = [
  {
    id: 1,
    title: "JavaScript Functional Programming",

    description: "My Thoughts on JavaScript Functional Programming!",

    link: "https://www.linkedin.com/pulse/javascript-functional-programming-rohit-kumar-amdahl-vp9rf/",
    alt: "a picture of a laptop keyboard, with a random code written on it",
  },
  {
    id: 2,
    title: "Coding Confidence",

    description:
      "In the world of Frontend development, we love what we do, but becoming a good developer isn't easy. It takes time and effort, and everyone starts somewhere.",

    link: "https://www.linkedin.com/pulse/coding-confidence-rohit-kumar-amdahl-mfg4f/",
    alt: "a person coding in the dark room only computer is able to see, because of the computer light screening",
  },
  {
    id: 3,
    title: "Naming Things Is Hard",

    description:
      "Ever struggled with naming functions or figuring out the perfect project structure in JavaScript, TypeScript, React, or any?",

    link: "https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/",
    alt: "a picture of a laptop keyboard, with a random code written on it",
  },
  {
    id: 4,
    title: "WEB Accessibility",
    description:
      "Web Accessibility is crucial, yet often overlooked. As developers and designers, it's our responsibility to ensure that our digital products are inclusive and accessible to everyone.",

    link: "https://www.linkedin.com/pulse/web-accessibility-rohit-kumar-amdahl-dhr0f/",
    alt: "a picture of a laptop keyboard a black keyboard, computer is on table with a white screen, laptop is attached with extra keyboard for easy to Accessible for blind person",
  },
];
export default function BlogsTab() {
  return (
    <section className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 bg-secondary text-textColor px-3 py-3 ">
      {blogs.map((blog) => {
        const { id, title, description, link } = blog;

        return (
          <div key={id} className="w-full mx-auto">
            <div className="max-w-sm container mx-auto p-4  border-2 border-primary rounded-xl m-2">
              <div>
                <p className="font-roboto text-md font-bold py-2">{title}</p>
              </div>
              <p className="font-roboto text-sm"> {description}</p>
              <div className="flex justify-between items-center p-2"></div>
              <Link
                className=" underline hover:text-pink-100 transition duration-100 py-2 text-lg font-semibold text-link"
                href={link}
                target="_blank"
                title="Read More"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
