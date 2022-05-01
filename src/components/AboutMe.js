import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="h-full pt-20">
      <section className="my-services text-center">
        <h2
          className="text-3xl text-center font-bold tracking-wide
          pb-4 text-primary_1 pt-4"
        >
          What I do
        </h2>
        <div className="text-center text-neutral-50 px-8">
          <div className="mt-4">
            <h3 className="text-2xl">Design + Development</h3>
            <p className="">
              Frontend developer shooting for the stars, devoted to web
              development and a open mindset for implementing new ideas and
              concepts that make web designs stand out. My engineering
              background provides a strong analytical mindset to tackle any
              obstacle I came up with.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl">Stack</h3>
            <ul>
              <li>HTML, Javascript, ES6, CSS3</li>
              <li>Responsive design with React, Context API, Hooks</li>
              <li>
                Third party libraries like Redux, React Router, Framer Motion,
                TailwindCSS, SASS
              </li>
              <li>SSR, static web pages with Next.js</li>
              <li>REST API integration</li>
              <li>Unit tests (Jest) and version control (GIT)</li>
            </ul>
          </div>

          <div className="mt-4"></div>
        </div>
        <Link href="/projects">
          <h2
            className="mt-10 mb-12 inline-block bg-primary_1 py-1 px-3 uppercase 
           w-32 text-center shadow-md tracking-wide text-slate-700 border-2 
          border-transparent hover:cursor-pointer rounded-sm scale-100 hover:scale-110 transition-all"
          >
            My Work
          </h2>
        </Link>
      </section>
    </div>
  );
};

export default AboutMe;
