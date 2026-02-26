"use client";

import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) {
        return message.error(data.message || "Ошибка регистрации");
      }

      message.success("Пользователь создан");
      router.push("/login");
    } catch (err) {
      console.error(err);
      message.error("Серверная ошибка");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Имя" name="name" rules={[{ required: true }]}> 
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Зарегистрироваться
      </Button>
    </Form>
  );
}