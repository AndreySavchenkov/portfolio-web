"use client";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

export enum TagsEnum {
  ALL = "All",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
}

const projectsData = [
  {
    id: 1,
    title: "test title frontend",
    description: "test description",
    image: "/images/about-image.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: [TagsEnum.ALL, TagsEnum.FRONTEND],
  },
  {
    id: 1,
    title: "test title backend",
    description: "test description2",
    image: "/images/about-image.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: [TagsEnum.ALL, TagsEnum.BACKEND],
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState<TagsEnum>(TagsEnum.ALL);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          tag={TagsEnum.ALL}
          isSelected={tag === TagsEnum.ALL}
          onClick={setTag}
        />
        <ProjectTag
          tag={TagsEnum.FRONTEND}
          isSelected={tag === TagsEnum.FRONTEND}
          onClick={setTag}
        />
        <ProjectTag
          tag={TagsEnum.BACKEND}
          isSelected={tag === TagsEnum.BACKEND}
          onClick={setTag}
        />
      </div>
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
