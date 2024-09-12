"use client";
import usePosts from "@/app/hooks/usePosts";
import FormPost from "../components/Form";

const UpdatePost = () => {
  const { loading, error, fetchPosts } = usePosts();
  console.log(error);
  const onFinish = (value: any) => {
    fetchPosts("posts", "PUT", value);
  };

  return (
    <>
      <FormPost formName="Update Post" loading={loading} onFinish={onFinish} />
    </>
  );
};

export default UpdatePost;
