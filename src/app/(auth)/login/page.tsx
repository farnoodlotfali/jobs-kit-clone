import { Metadata } from "next";

import LoginScreen from "@/components/screens/login";

export const metadata: Metadata = {
  title: "جابزکیت -ورود",
};

const Login = () => {
  return <LoginScreen />;
};

export default Login;
