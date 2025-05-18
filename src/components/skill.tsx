import React from "react";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";

interface SkillProps {
  id: number;
  skill: string;
}

const Skill = ({ id, skill }: SkillProps) => {
  const displayName =
    skill === "js"
      ? "JavaScript"
      : skill === "nextjs2"
      ? "Nextjs"
      : skill === "html5"
      ? "HTML"
      : skill === "css3"
      ? "CSS"
      : skill === "vscode"
      ? "VS Code"
      : skill.charAt(0).toUpperCase() + skill.slice(1);

  return (
    <Badge
      key={id}
      variant="secondary"
      className="flex items-center gap-2 rounded-md px-2 py-1 font-sans shadow-[0_0_0_1px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] dark:bg-grey-100 dark:text-white"
    >
      <StackIcon
        name={skill}
        className="h-5 w-5"
        // light // use light mode icon when in light theme
        // dark  // use dark mode icon when in dark theme
      />
      <span>{displayName}</span>
    </Badge>
  );
};

export default Skill;
