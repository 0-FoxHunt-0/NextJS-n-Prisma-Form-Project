import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-8 flex justify-between items-center flex-col gap-2">
      <h1 className="text-4xl">Home</h1>
      <Link className={buttonVariants()} href={"/admin"}>
        Open My Admin
      </Link>
    </div>
  );
}
