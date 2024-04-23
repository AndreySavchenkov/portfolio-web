"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

enum TabsEnum {
  SKILLS = "skills",
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

const TAB_DATA = [
  {
    title: "Skills",
    id: TabsEnum.SKILLS,
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: TabsEnum.EDUCATION,
    content: (
      <ul className="list-disc pl-2">
        <li>IT Incubator</li>
        <li>RS School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: TabsEnum.EXPERIENCE,
    content: (
      <ul className="list-disc pl-2">
        <li>Purrweb</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.SKILLS);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: TabsEnum) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with some knowledge backend developing I
            am a frontend developer with some knowledge backend developing I am
            a frontend developer with some knowledge backend developing I am a
            frontend developer with some knowledge backend developing I am a
            frontend developer with some knowledge backend developing I am a
            frontend developer with some knowledge backend developing
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange(TabsEnum.SKILLS)}
              active={tab === TabsEnum.SKILLS}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(TabsEnum.EDUCATION)}
              active={tab === TabsEnum.EDUCATION}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(TabsEnum.EXPERIENCE)}
              active={tab === TabsEnum.EXPERIENCE}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
