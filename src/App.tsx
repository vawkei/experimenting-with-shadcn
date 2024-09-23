import { Routes, Route } from "react-router-dom";
import MainNavigation from "./componentz/navigation/MainNavigation";
import Home from "./componentz/home/Home";
import NewBlog from "./componentz/blog/Blog";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // console.log(isLoggedIn)

  // usually i am not to do this:prop drilling, but will do so for this dummy project.
  const isLoggedInHandlerTrue = () => {
    setIsLoggedIn(true);
  };

  const isLoggedInHandlerFalse = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      <MainNavigation
        isLoggedIn={isLoggedIn}
        onIsLoggedInHandlerFalse={isLoggedInHandlerFalse}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onIsLoggedInHandlerTrue1={isLoggedInHandlerTrue}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        {isLoggedIn && <Route path="/new-blog" element={<NewBlog />} />}
      </Routes>
    </main>
  );
}

export default App;
