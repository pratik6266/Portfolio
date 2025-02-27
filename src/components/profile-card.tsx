import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";

interface Prop {
  title: string;
  href?: string;
  icon: JSX.Element;
  description: string[];
  tags: readonly string[];
  link?: string;
  image?: string;
  iconClassName?: string;
}

export function ProfileCard({
  title,
  href,
  icon,
  description,
  tags,
  image,
  iconClassName,
}: Prop) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <CardHeader className="px-2">
        <div className="space-y-1">
          <Link target="_blank" href={href || '#'}>
            <CardTitle className="mt-1 flex gap-1 group items-center text-base">
              <span className={cn("transition-colors ease-in-out", iconClassName)}>
                {icon}
              </span>
              <div className="group-hover:text-blue-500 transition-colors ease-in-out">
                {title}
              </div>
            </CardTitle>
          </Link>
          <ul className=" list-disc ml-5">
            {
              description.map((dec, index) => {
                return (
                  <li key={index}>
                    {dec}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
