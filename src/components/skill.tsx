import StackIcon from "tech-stack-icons"
import { Badge } from "@/components/ui/badge"

interface SkillProps {
  id: number
  skill: string
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
              : skill === "vitejs"
              ? "Vite"
              : skill.charAt(0).toUpperCase() + skill.slice(1)

  return (
    <div className="relative group">
      <Badge
        key={id}
        variant="secondary"
        className="flex items-center justify-center rounded-full p-2 font-sans shadow-[0_0_0_1px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] dark:bg-grey-100 dark:text-white cursor-pointer transition-all duration-300 ease-out group-hover:scale-125 group-hover:shadow-lg group-hover:z-10 relative"
      >
        <StackIcon name={skill} className="h-5 w-5 transition-transform duration-300" />
      </Badge>

      {/* Tooltip that appears above on hover */}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
        {displayName}
        {/* Arrow pointing down */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
      </span>
    </div>
  )
}

export default Skill
