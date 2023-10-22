import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - BountyChallenge",
  description: "Sign up for your BountyChallenge account",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
