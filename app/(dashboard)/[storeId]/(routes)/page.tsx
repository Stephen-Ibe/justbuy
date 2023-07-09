import prismadb from "@/lib/prisma.db";

type TDashboardProps = {
  params: { storeId: string };
};

const Dashboard = async ({ params }: TDashboardProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default Dashboard;
