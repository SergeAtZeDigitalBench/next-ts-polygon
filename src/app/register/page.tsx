import RegisterForm from "@/components/RegisterForm";
import { registerUserAction } from "@/lib/serverActions";

const RegisterPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Register page
      </h1>
      <RegisterForm registerUserAction={registerUserAction} />
    </>
  );
};

export default RegisterPage;
