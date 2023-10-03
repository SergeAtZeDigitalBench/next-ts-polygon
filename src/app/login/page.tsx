import AuthForm from "@/components/AuthForm";
import { IPageProps } from "@/types";

const LoginPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Login Page</h1>
      <AuthForm />
    </>
  );
};

export default LoginPage;
