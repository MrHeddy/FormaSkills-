"use client";
import { Menu } from "@/components/Menu";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <body>
      <div id="home">
        <Menu />
      </div>
      <h1>Sign UP</h1>
      <div>
      {/* <form action="/formations/" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Sign Up" />
        </form> */}
        <RegisterForm />
        </div>
    </body>
  );
}