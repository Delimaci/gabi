import React from "react";

const Experience = () => {
  return (
    <section className="w-full max-w-2xl mt-40">
      <h2 className="text-3xl font-semibold mb-4 text-white">Experience</h2>
      <p className="text-base font-normal leading-8 mb-6">
        I am currently a data engineer in healthcare 🏥
      </p>
      <div className="space-y-0">
        {/* Graduate Data Engineer */}
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4 bg-none rounded-t-lg p-4 transition-all duration-300">
          <div className="bg-[#ED9FBE] h-2 w-5 md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">Healthcare</h3>
            <p className="text-base leading-6">Graduate Data Engineer</p>
            <p className="text-sm text-gray-300">2024 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Design, build, and maintain ETL pipelines using SQL, Oracle, and
                Qlik load scripts across a large, complex healthcare system.
              </li>
              <li>
                Develop predictive and analytical dashboards in Qlik Sense to
                support financial modelling, planning, and operational
                decision-making.
              </li>
              <li>
                Automate multi-step data refresh workflows and reporting cycles
                using SQL Developer, task scheduling, and Python scripting.
              </li>
              <li>
                Optimise data models and refresh performance through incremental
                loading, query tuning, and data warehouse structuring.
              </li>
              <li>
                Collaborate with finance and clinical stakeholders to translate
                analytical requirements into scalable data products.
              </li>
            </ul>
          </div>
        </div>

        {/* Trainee Data Engineer */}
        <div className="flex items-start border-l-4 border-[#ED9FBE] pl-4 bg-none p-4 transition-all duration-300 mt-4">
          <div className="bg-[#ED9FBE] h-2 w-5 md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">Healthcare</h3>
            <p className="text-base leading-6">Trainee Data Engineer</p>
            <p className="text-sm text-gray-300">2019 - 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Supported development and maintenance of reporting systems and
                dashboards.
              </li>
              <li>
                Learned ETL workflows, data architecture, and SQL performance
                tuning.
              </li>
              <li>
                Assisted in migration and integration of data across internal
                platforms.
              </li>
            </ul>
          </div>
        </div>

        {/* DEPOT */}
        <div className="flex items-start border-l-4 border-[#c5c2c9] pl-4 bg-none p-4 transition-all duration-300">
          <div className="bg-[#c5c2c9] h-2 w-[0.6rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">DEPOT</h3>
            <p className="text-base leading-6">Bartender @ DEPOT</p>
            <p className="text-sm text-gray-300">2023 - 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Bartended at large-scale events & festivals.</li>
            </ul>
          </div>
        </div>

        {/* McDonald's */}
        <div className="flex items-start border-l-4 border-[#c5c2c9] pl-4 bg-none p-4 transition-all duration-300">
          <div className="bg-[#c5c2c9] h-2 w-[0.8rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">McDonald&apos;s</h3>
            <p className="text-base leading-6">Team Member @ McDonald&apos;s</p>
            <p className="text-sm text-gray-300">2017 - 2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Delivered service in a fast-paced environment.</li>
            </ul>
          </div>
        </div>

        {/* Golf Club */}
        <div className="flex items-start border-l-4 border-[#c5c2c9] pl-4 bg-none rounded-b-lg p-4 transition-all duration-300">
          <div className="bg-[#c5c2c9] h-2 w-[1.3rem] md:w-2 rounded-full mt-1 mr-2"></div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg">Golf Club</h3>
            <p className="text-base leading-6">Waitress @ Golf Club</p>
            <p className="text-sm text-gray-300">2016 - 2017</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Provided food service and customer support.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
