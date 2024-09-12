"use client";
import { Button, Form, Input } from "antd";
import Loading from "../loading/pages";

const FormPost = ({
  formName,
  loading,
  onFinish,
  initialValues,
}: {
  formName: string;
  loading: boolean;
  onFinish: (value: any) => void;
  initialValues?: any;
}) => {
  return (
    <>
      <Loading loading={loading} />
      <section>
        <h1 className="my-4 text-[40px] font-medium">{formName}</h1>
        <div>
          <Form
            name="form-post"
            onFinish={onFinish}
            layout="vertical"
            initialValues={initialValues}
          >
            <Form.Item label="Name" name="Name ">
              <Input className="h-[40px]" />
            </Form.Item>
            <Form.Item label="Name" name="Name ">
              <Input className="h-[40px]" />
            </Form.Item>
            <Form.Item label="Name" name="Name ">
              <Input className="h-[40px]" />
            </Form.Item>
            <Form.Item className="text-end">
              <Button
                type="primary"
                className="w-[150px] h-[40px] text-base"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default FormPost;
