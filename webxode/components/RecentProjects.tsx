"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading uppercase font-montserrat tracking-wide">
        Our <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap p-4 gap-20 mt-[10%]">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] space-y-10"
          >
            <PinContainer title="" href="">
              {/* Image Container */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                ></div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={400}
                  height={400}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Project Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Project Description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              {/* Icons and Button Section */}
              <div className="flex items-center justify-between mt-7 mb-3 w-full flex-wrap gap-4">
                {/* Icon List */}
                <div className="flex items-center flex-wrap gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Button Section */}
                <div className="flex flex-wrap gap-3">
                  {/* Live Site Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition duration-200"
                  >
                    Check Live Site
                    <FaLocationArrow className="ml-2" />
                  </a>

                  {/* Case Study Button */}
                  <a
                    href={item.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition duration-200"
                  >
                    Case Study
                    <FaLocationArrow className="ml-2" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
