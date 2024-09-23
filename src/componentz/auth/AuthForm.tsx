import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm:React.FC<{onIsLoggedInHandlerTrue2:()=>void}> = (props) => {
  const [enteredEmail, setEnteredName] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const enteredEmailInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };


  const navigate = useNavigate();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation:
    if(!enteredEmail || !enteredPassword){
        return console.log("Inputs shouldn't be empty")
    };
    const formData = {email:enteredEmail,password:enteredPassword};
    console.log(formData);
    props.onIsLoggedInHandlerTrue2(); //this is to set isLoggedIn to true;

    navigate("/");

    setEnteredName("");
    setEnteredPassword("")
  };

  return (
    // <Card className="flex items-center justify-between w-full mx-auto max-w-4xl mt-4 p-4"></Card>
    <form className="w-full max-w-lg mx-auto mt-8 " onSubmit={onSubmitHandler}>
      <Card className="p-4">
        <CardHeader className="text-center">
          <CardTitle>Login/Signin</CardTitle>
          <CardDescription>Use this to login or signin</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="email">Your email address</Label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={enteredEmail}
              onChange={enteredEmailInputHandler}
            />
          </div>
          <div className="mt-8">
            <Label htmlFor="password">Your password</Label>
            <Input
              type="password"
              placeholder="Password"
              name="email"
            //   required
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AuthForm;
