import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center align-middle items-center space-y-3">
      <Skeleton className="h-[350px] w-[250px] rounded-md">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-[255px] w-[230px] rounded-md mt-3" />
          <Skeleton className="h-[25px] w-[230px] rounded-md" />
          <Skeleton className="h-[25px] w-[200px] rounded-md" />
        </div>
      </Skeleton>
    </div>
  );
}
