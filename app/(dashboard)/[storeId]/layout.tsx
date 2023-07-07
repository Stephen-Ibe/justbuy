import prismadb from "@/lib/prisma.db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { storeId: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  return (
    <>
      <h1>NavBar</h1>
      {children}
    </>
  );
};

export default DashboardLayout;
