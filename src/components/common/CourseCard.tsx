import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Book, User } from "../icons";
import Trophy from "../icons/Trophy";
import CustomButton from "./CustomButton";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import RatingBadge from "./RatingBadge";

type Props = {
  imageUrl: string;
  title: string;
  lessons: number;
  students: number;
  level: string;
  completed: number;
};

async function CourseCard({
  completed,
  imageUrl,
  lessons,
  level,
  students,
  title,
}: Props) {
  const t = await getTranslations("common");

  return (
    <Card className="bg-transparent! shadow-none!">
      <CardHeader>
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="rounded-sm w-full"
        />
      </CardHeader>

      <CardContent>
        <b className="font-semibold text-neutral-500 line-clamp-1">{title}</b>

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex items-center gap-2">
            <Book />
            <span className="text-sm text-neutral-600 font-medium">
              {t("lessons")} : {lessons}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User />
            <span className="text-sm text-neutral-600 font-medium">
              {t("students")} : {students}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Trophy />
            <span className="text-sm text-neutral-600 font-medium">
              {level}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <CustomButton>
          {t("startCourse")} <ChevronRight />
        </CustomButton>

        <RatingBadge value={completed} />
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
