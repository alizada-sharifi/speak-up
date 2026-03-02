import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function CourseCardSkeleton() {
  return (
    <Card className="bg-transparent! shadow-none!">
      <CardHeader>
        <Skeleton className="w-full h-57.5" />
      </CardHeader>

      <CardContent>
        <Skeleton className="w-full h-6" />

        <div className="grid grid-cols-3 gap-3 mt-4">
          <Skeleton className="h-3" />
          <Skeleton />
          <Skeleton />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3">
        <Skeleton className="w-1/2 h-10" />

        <Skeleton className="size-12.5 rounded-full" />
      </CardFooter>
    </Card>
  );
}

export default CourseCardSkeleton;
