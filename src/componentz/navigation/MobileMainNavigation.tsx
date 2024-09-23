import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import React from "react";

const MobileMainNavigation: React.FC<{
  isLoggedIn: boolean;
  onLogoutHandler: () => void;
}> = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <Sheet>
        <SheetTrigger> &#9776;</SheetTrigger>
        <SheetContent className="w-[400px] flex flex-col items-start justify-start">
          <SheetHeader>
            <SheetTitle className="text-3xl font-semibold">
              Shadcn Practice
            </SheetTitle>
          </SheetHeader>
          <SheetDescription className="flex flex-col items-start justify-start">
            <Link to={"/"}>
              <SheetTrigger className="text-2xl">Home</SheetTrigger>
            </Link>
            {isLoggedIn && (
              <Link to={"/new-blog"}>
                <SheetTrigger className="text-2xl">NewBlog</SheetTrigger>
              </Link>
            )}
            {isLoggedIn && (
              <SheetTrigger
                className="text-2xl bg-red-500 p-2 rounded-2xl cursor-pointer"
                onClick={props.onLogoutHandler}>
                Logout
              </SheetTrigger>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMainNavigation;
