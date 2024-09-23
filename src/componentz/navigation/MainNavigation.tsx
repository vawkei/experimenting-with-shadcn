import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import MobileMainNavigation from "./MobileMainNavigation";

const MainNavigation: React.FC<{
  isLoggedIn: boolean;
  onIsLoggedInHandlerFalse: () => void;
}> = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div className="">
      <div className="sm:hidden">
        <MobileMainNavigation
          isLoggedIn={isLoggedIn}
          onLogoutHandler={props.onIsLoggedInHandlerFalse}
        />
      </div>
      <Card className="hidden  sm:flex items-center justify-between w-full mx-auto max-w-4xl mt-4 p-4">
        <h2 className="text-3xl font-semibold">Shadcn Practice</h2>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center  gap-4">
            <NavigationMenuItem>
              <Link to={"/"}>
                <h6 className="text-2xl">Home</h6>
              </Link>
            </NavigationMenuItem>
            {isLoggedIn && (
              <NavigationMenuItem className="bg-red-500 p-2 rounded-2xl">
                <Link to={"/new-blog"}>
                  <h4 className="text-2xl">NewBlog</h4>
                </Link>
              </NavigationMenuItem>
            )}
            {isLoggedIn && (
              <h6
                className="text-2xl bg-red-500 p-2 rounded-2xl cursor-pointer"
                onClick={props.onIsLoggedInHandlerFalse}>
                Logout
              </h6>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </Card>
    </div>
  );
};

export default MainNavigation;

// original without shadcn:
// const MainNavigation = () => {
//   return (
//     <Card className="flex items-center justify-between w-full mx-auto max-w-4xl mt-4 p-4">
//       <h2 className="text-3xl font-semibold">Shadcn Practice</h2>

//       <nav>
//         <ul className="flex items-center  gap-4">
//           <li>
//             <Link to={"/"}><h6 className="text-2xl">Home</h6></Link>
//           </li>
//           <li className="bg-red-500 p-2 rounded-2xl">
//             <Link to={"/new-blog"}><h4 className="text-2xl">NewBlog</h4></Link>
//           </li>
//         </ul>
//       </nav>
//     </Card>
//   );
// };

// export default MainNavigation;
