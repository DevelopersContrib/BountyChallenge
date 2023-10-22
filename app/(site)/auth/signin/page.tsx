import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - BountyChallenge",
  description: "Login to your BountyChallenge account",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
    <Signin />
    </>
  );
};

export default SigninPage;
