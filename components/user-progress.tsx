import Link from "next/link";
import Image from "next/image";

import { courses } from "@/db/schema";
import { Button } from "./ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
}

export const UserProgress = ({
  activeCourse,
  points,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
      <Button variant="ghost">
        <Image
          src={activeCourse.imageSrc}
          alt={activeCourse.title}
          className="rounded-md border"
          width={32}
          height={32}
        />
      </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            height={28}
            width={28}
            alt="Points"
            className="mr-0"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
        </Button>
      </Link>
    </div>
  );
};