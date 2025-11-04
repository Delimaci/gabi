import Navbar from "@/components/Navbar";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import { FaEnvelope } from "react-icons/fa";
import PetProjects from "@/components/home/PetProjects";
// import Cinnamon from "@/components/python/Cinnamon";

export default function Home() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="vGIrbnxgP14aKX74bPNwJvPzoUm1Uk_YeZo1WnMSgxI"
      />
      <Navbar />
      <div className=" flex flex-col items-center p-8 sm:p-20   text-gray-100">
        {/* Header Section */}
        {/* About Section */}
        <section className="w-full  3xl:min-h-[80rem] max-w-2xl justify-center content-center ">
          <header className="flex flex-col items-center  text-center gap-4 mb-7">
            <h1 className="text-5xl text-white md:text-6xl font-bold  ">
              Hello, I&apos;m Gabi
            </h1>
            <pre className="text-lg mx-auto text-center font-mono whitespace-pre-wrap mt-6 wave-animation">
              {`
⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀
  `}
            </pre>

            <h1 className="text-xl  md:text-2xl mt-10 font-bold  ">
              I like building things.
            </h1>

            {/* <Cinnamon /> */}
          </header>
          <p className="text-base font-normal text-center leading-8">
            I&apos;m a data engineer based in the United Kingdom with a passion
            for developing and maintaining high-impact, complex applications. I
            am captivated by the latest advancements in scientific inquiry,
            closely following pioneering research that reshapes the boundaries
            of human knowledge.
          </p>

          <div className="mx-auto text-center mt-10 justify-center">
            <a href="mailto:gabidev.contact@gmail.com">
              <button className="flex items-center mx-auto text-center p-6 px-10 border-[0.1rem] rounded-xl text-[#ED9FBE] font-bold border-[#ED9FBE] hover:shadow-[0_0_10px_#ED9FBE,0_0_15px_#de6c99] transition-shadow duration-100">
                <FaEnvelope className="mr-2" />{" "}
                {/* Add margin to the right of the icon */}
                <h1 className="font-extrabold">Contact</h1>
              </button>
            </a>
          </div>
        </section>
        <section id="about" className="mt-32">
          <AboutMe />
        </section>
        <section id="experience" className="mt-0 md:mt-0">
          <Experience />
        </section>
        <section id="projects" className="mt-0 md:mt-0">
          <Projects />
        </section>
        {/* <section id="pet-projects" className="mt-0 md:mt-0">
          <PetProjects />
        </section> */}
        {/* Projects Section */}
        {/* <section className="w-full max-w-2xl mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg">Project 1</h3>
            <p>A brief description of your project and technologies used.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-medium text-lg">Project 2</h3>
            <p>A brief description of your project and technologies used.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
        </div>
      </section> */}
        {/* Contact Section */}
        {/* <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-base">
          Feel free to reach out to me for collaboration or just to say hi!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-500 hover:underline"
        >
          your.email@example.com
        </a>
      </section> */}

        <footer className="mt-20 text-sm text-gray-400">
          © 2024 made by Gabi. All rights reserved.
        </footer>
      </div>
    </>
  );
}
