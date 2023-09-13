import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <HandMetal />
        </Link>
        {session?.user ? (
          <UserAccountNav />
        ) : (
          <Link className={buttonVariants()} href={"/sign-in"}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
