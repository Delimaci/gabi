const Projects = () => {
  return (
    <section className="w-full max-w-2xl mt-40 p-2">
      <h2 className="text-3xl font-semibold mb-4 text-white">Projects</h2>
      <p className="text-base font-normal leading-8 mb-6">
        My journey as a data Engineer has been filled with challenges and
        triumphs in the healthcare domain. Here are some of the key projects
        that have shaped my skills and understanding of technology:
      </p>
      <div className="space-y-0">
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4 rounded-t-lg">
          <div className="bg-[#ED9FBE] h-2 w-[1.3rem] md:w-[0.6rem] rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Dashboard Development</h3>
            <p className="text-base leading-6 mb-10">
              Collaborated on developing robust dashboard applications that help
              keep track of financial data.
            </p>
          </div>
        </div>
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4">
          <div className="bg-[#ED9FBE] h-2 w-[2rem] md:w-4 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Automations</h3>
            <p className="text-base leading-6 mb-10">
              I engineer highly-complex automations to reload tasks that would
              have taken a substantial amount of resources and optimise
              processes to be proven 90% faster.
            </p>
          </div>
        </div>
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4">
          <div className="bg-[#ED9FBE] h-2 w-[0.8rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Innovative AI Solutions</h3>
            <p className="text-base leading-6 mb-10">
              Began the development of a chatbot to help service desk.
            </p>
          </div>
        </div>
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4">
          <div className="bg-[#ED9FBE] h-2 w-[1.5rem] md:w-[0.7rem] rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Collaborative Projects</h3>
            <p className="text-base leading-6 mb-10">
              Worked in agile teams to create impactful solutions, sharing
              knowledge and pushing the boundaries of technology.
            </p>
          </div>
        </div>
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4 rounded-b-lg">
          <div className="bg-[#ED9FBE] h-2 w-[5rem] md:w-9  rounded-full mt-1 mr-2"></div>
          <div>
            <h3 className="font-semibold text-lg">Personal Projects</h3>
            <p className="text-base leading-6 mb-10">
              During my spare time, I enjoy learning new technologies. I have
              used backend technologies such as Postgres, Supabase to create
              full-stack applications, using NextJS with TypeScript for the
              frontend. Currently, I am delving into the world of python to not
              only further enhance my algorithmic and problem-solving skills,
              but to begin the development of a Python application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
