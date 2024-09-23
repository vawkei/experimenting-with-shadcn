import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { useNavigate } from "react-router-dom";


const NewBlog = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");


  const navigate = useNavigate();


  const onSubmitHandler =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredBody.trim().length === 0 ||
      enteredAuthor.trim().length === 0
    ) {
      return console.log("Inputs shouldn't be empty");
    };

    const blogData = {enteredTitle,enteredBody,enteredAuthor}

    try{
        const response = await fetch("http://localhost:8080/blogs",{
          method:"POST",
          body:JSON.stringify(blogData),
          headers:{"Content-Type":"application/json"},
        });

        if(!response.ok){
          throw new Error("Request Failed")
        };

        const data = await response.json();
        console.log(data);
        navigate("/");

    }catch(error){
      const message = error instanceof Error?error.message : "Something went wrong";
      console.log(message)
    }

  };

  return (
    <form className="w-full max-w-lg mx-auto mt-8" onSubmit={onSubmitHandler}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-red-500">Add A New Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <Label>Blog title:</Label>
            <Input
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
          </div>
          <div className="p-4">
            <Label>Blog body:</Label>
            {/* <Input
              value={enteredBody}
              onChange={(event) => setEnteredBody(event.target.value)}
            /> */}
            <Textarea
              value={enteredBody}
              onChange={(event) => setEnteredBody(event.target.value)}
            />
          </div>
          <div className="p-4">
            <Label>Blog author:</Label>
            <Input
              value={enteredAuthor}
              onChange={(event) => setEnteredAuthor(event.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="p-2 flex items-center justify-center">
          <Button className="bg-red-500">Add Blog</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default NewBlog;
