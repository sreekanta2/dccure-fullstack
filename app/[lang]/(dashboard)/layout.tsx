import { getDictionary } from "@/app/dictionaries";
import { authOptions } from "@/lib/auth";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import { getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";

const layout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: any };
}) => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session?.user?.email) {
    redirect("/auth/login");
  }

  const trans = await getDictionary(lang);

  return (
    <DashBoardLayoutProvider trans={trans}>{children}</DashBoardLayoutProvider>
  );
};

export default layout;
