"use client";
import LoginForm from "@/components/LoginForm";
import  {Menu}  from "@/components/Menu";

export default function Home() {
  return (
    <body>
      <div id="home">
        <Menu />
      </div>
      <h1>Log In</h1>
      <LoginForm />
    </body>
  );
}