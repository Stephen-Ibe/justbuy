import prismadb from "@/lib/prisma.db";
import { FC } from "react";

type TDashboardProps = {
  params: { storeId: string };
};

const Dashboard: FC<TDashboardProps> = async ({ params }: TDashboardProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default Dashboard;
