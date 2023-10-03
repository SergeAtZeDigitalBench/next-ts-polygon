import AuthForm from "@/components/AuthForm";
import { registerUserAction } from "@/lib/serverActions";
import { IPageProps } from "@/types";

const RegisterPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Register page
      </h1>
      <AuthForm registerUserAction={registerUserAction} />
    </>
  );
};

export default RegisterPage;
