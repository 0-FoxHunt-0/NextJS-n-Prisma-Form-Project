import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2>Admin page - welcome back {session?.user.username}</h2>;
  }

  return <div>Please login to see this admin page</div>;
};

export default Admin;
