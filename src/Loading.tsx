import { Skeleton } from "./components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";

const Loading = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {"123456789".split("").map((i) => {
        return (
          <div key={i}>
            <Card>
              <CardHeader>
                <Skeleton className="w-12 h-12 rounded-full" />
                <Skeleton className="h-6 flex-grow" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 flex-grow mt-4" />
                <Skeleton className="h-4 flex-grow mt-4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-28" />
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
