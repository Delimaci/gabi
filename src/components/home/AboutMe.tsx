const AboutMe = () => {
  return (
    <section className="w-full max-w-2xl ">
      <h2 className="text-3xl text-white font-semibold mb-4">About Me</h2>
      <p className="text-base font-normal  leading-8 mb-10">
        I am currently a data engineer in the healthcare sector. I have recently
        graduated with a First-Class Honours in Bachelor&apos;s of Science in
        Computer Science. My primary technologies I have been working with are:
      </p>
      <ul className="flex flex-wrap gap-2 md:justify-between">
        <li className="flex items-center mb-2 hover:shadow-[0_0_5px_#ED9FBE,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#ED9FBE] mr-2">➔</span> Python
        </li>
        <li className="flex items-center mb-2 hover:shadow-[0_0_5px_#9F86C1,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#9F86C1] mr-2">➔</span> Kotlin
        </li>
        <li className="flex items-center mb-2 hover:shadow-[0_0_5px_#ED9FBE,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#ED9FBE] mr-2">➔</span> C#
        </li>
        <li className="flex items-center mb-2   hover:shadow-[0_0_5px_#9F86C1,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#9F86C1] mr-2">➔</span> TypeScript
        </li>
        <li className="flex items-center mb-2 hover:shadow-[0_0_5px_#ED9FBE,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#ED9FBE] mr-2">➔</span> JavaScript
        </li>
        <li className="flex items-center mb-2 hover:shadow-[0_0_5px_#9F86C1,0_0_15px_#9F86C1] p-2 transition-shadow duration-300 cursor-default rounded-full">
          <span className="text-[#9F86C1] mr-2">➔</span> NextJS
        </li>
      </ul>
      <p className="text-base font-normal  leading-8 mt-4">
        Outside of work, I enjoy following the advancements of science, and
        creating my own applications. Whether in Python, Nextjs, or both.
      </p>
    </section>
  );
};

export default AboutMe;
