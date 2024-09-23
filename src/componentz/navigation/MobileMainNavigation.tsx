import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

const MobileMainNavigation = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="text-3xl font-semibold">
              Shadcn Practice
            </SheetTitle>
          </SheetHeader>
          <Link to={"/"}>
            <h6 className="text-2xl">Home</h6>
          </Link>
          <Link to={"/new-blog"}>
            <h4 className="text-2xl">NewBlog</h4>
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMainNavigation;
