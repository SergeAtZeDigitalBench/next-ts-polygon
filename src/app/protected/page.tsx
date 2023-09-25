import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProtectedPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        Hi, {session.user?.name || session.user?.email || "Guest"} !
      </h1>
      <p className="font-semibold text-center">
        You will see this only if you are authenticated
      </p>
    </div>
  );
};

export default ProtectedPage;
