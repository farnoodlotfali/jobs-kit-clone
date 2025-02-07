"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Link as MuiLink, Typography } from "@mui/material";

import { FormInputs } from "@/components/form";
import { INPUT_TYPE } from "@/constants/inputTypes";
import { PAGE_URL } from "@/constants/pageUrl";
import { USER, USER_TOKEN } from "@/constants/storage";
import { useLogin } from "@/hooks/mutations";
import { useAppContext } from "@/hooks/useAppContext";
import AuthLayout from "@/layouts/authLayout";
import { FormInputTypes } from "@/types/inputTypes";

type Inputs = {
  identifier: string;
  password: string;
};

const LoginScreen = () => {
  const router = useRouter();
  const { setUser } = useAppContext();
  const { handleSubmit, control, reset } = useForm<Inputs>();

  const loginMutation = useLogin();

  const Inputs: FormInputTypes[] = [
    {
      type: INPUT_TYPE.TEXT,
      name: "identifier",
      label: "ایمیل یا شماره تلفن",
      control: control,
      rules: { required: "وارد کردن نام کاربری ضروری است" },
    },
    {
      type: INPUT_TYPE.PASSWORD,
      name: "password",
      label: "رمز عبور",
      control: control,
      rules: { required: "وارد کردن رمز عبور ضروری است" },
    },
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        Cookies.set(USER_TOKEN, res.token);
        setUser(res);
        Cookies.set(USER, JSON.stringify(res));
        router.replace(PAGE_URL.home);
        reset();
      },
    });
  };

  return (
    <AuthLayout title="سلام، خوش آمدید">
      <Box pt={40} px={16}>
        <Typography fontWeight={700} component="h4" fontSize={24}>
          ورود به جابزکیت
        </Typography>
        <Typography mt={4} mb={10} fontSize={14}>
          کاربر جدید؟{" "}
          <MuiLink
            fontWeight={700}
            component={Link}
            href={PAGE_URL.register}
            color="secondary"
            underline="hover"
            prefetch={false}
          >
            ایجاد حساب کاربری
          </MuiLink>
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <FormInputs inputs={Inputs} size={{ xs: 12 }} spacing={5} />

          <Button
            loading={loginMutation.isPending}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 5 }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default LoginScreen;
