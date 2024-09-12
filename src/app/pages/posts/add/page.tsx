"use client";
import usePosts from "@/app/hooks/usePosts";
import FormPost from "../components/Form";

const AddPost = () => {
  const { loading, error, fetchPosts } = usePosts();
  console.log(error);
  const onFinish = (value: any) => {
    fetchPosts("posts", "POST", value);
  };

  return (
    <>
      <FormPost formName="Add Post" loading={loading} onFinish={onFinish} />
    </>
  );
};

export default AddPost;
