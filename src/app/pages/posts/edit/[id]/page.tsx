"use client";
import usePosts from "@/app/hooks/usePosts";
import FormPost from "../../components/Form";
import { useTranslation } from "react-i18next";

const UpdatePost = () => {
  const { loading, error, fetchPosts } = usePosts();
  console.log(error);

  const onFinish = (value: any) => {
    fetchPosts("posts", "PUT", value);
  };

  const { t } = useTranslation();

  return (
    <>
      <FormPost
        formName={t("posts.title_edit")}
        loading={loading}
        onFinish={onFinish}
      />
    </>
  );
};

export default UpdatePost;
