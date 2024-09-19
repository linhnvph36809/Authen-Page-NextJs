"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import "antd/dist/reset.css";
import useAuth from "@/app/hooks/useAuth";
import { handlerGetCookie } from "./cookies";

const Login = () => {
  const { t } = useTranslation();
  const { handlerLogin } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const token = handlerGetCookie("accessToken");
    if (token) {
      router.push("/pages/home");
    }
  }, [router]);

  return (
    <section className="w-[200px] h-[100vh] mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-[50px] font-medium text-center mb-6">
          {t("login_message.title")}
        </h1>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handlerLogin}
        >
          <Form.Item
            label={<div>{t("login_message.label_username")}</div>}
            name="username"
          >
            <Input className="w-[250px] h-[40px] bg-white" />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              className="w-[150px] h-[35px]"
              htmlType="submit"
            >
              {t("login_message.btn_message")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
