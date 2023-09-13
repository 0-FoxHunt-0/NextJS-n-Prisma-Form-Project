import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";

const NavBar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <HandMetal />
        </Link>
        <Link className={buttonVariants()} href={"/sign-in"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
