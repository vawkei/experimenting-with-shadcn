import React, { useEffect, useState } from "react";
import AuthForm from "../auth/AuthForm";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";

const Home: React.FC<{
  onIsLoggedInHandlerTrue1: () => void;
  isLoggedIn: boolean;
}> = (props) => {
  const isLoggedIn = props.isLoggedIn;

  interface Blogs {
    id: string;
    enteredTitle: string;
    enteredBody: string;
    enteredAuthor: string;
  }

  const [blogs, setBlogs] = useState<Blogs[]>([]);

  const fetchBlogs = async (): Promise<Blogs[]> => {
    try {
      const response = await fetch("http://localhost:8080/blogs");
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const responseBlogs = await response.json();
      setBlogs(responseBlogs);
      console.log(blogs);
      return blogs;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      console.log(message);
      return [];
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchBlogs();
    }
  }, [blogs]);

  return (
    <div>
      {!isLoggedIn && (
        <AuthForm onIsLoggedInHandlerTrue2={props.onIsLoggedInHandlerTrue1} />
      )}
      {isLoggedIn && (
        <ul className="flex-row items-center justify-center w-full max-w-4xl mt-6 mx-auto">
          {blogs.map((blog) => {
            return (
              <li key={blog.id} className="px-0 py-4">
                <Card>
                  <h2>
                    <CardTitle className="text-red-500 p-2"> {blog.enteredTitle}</CardTitle>
                  </h2>
                  <h5 >
                    <CardFooter className="p-2">{blog.enteredAuthor}</CardFooter>
                  </h5>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
