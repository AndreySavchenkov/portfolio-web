"use client";

import { TagsEnum } from "./ProjectsSection";

type Props = {
  tag: TagsEnum;
  onClick: (tag: TagsEnum) => void;
  isSelected: boolean;
};

function ProjectTag({ tag, onClick, isSelected }: Props) {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default ProjectTag;
