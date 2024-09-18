"use client"
import { Table } from "antd";
import { columns } from "./column";
import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import Loading from "./components/loading/pages";
import { useTranslation } from "react-i18next";

const ListPost = () => {
  const { data, loading, error, fetchPosts } = usePosts();
    console.log(error);
  const { t } = useTranslation();
    
  useEffect(() => {
    fetchPosts("posts", "GET");
  }, []);

  return (
    <>
      <section>
      <h1 className="my-4 text-[40px] font-medium">{t("posts.title_list")}</h1>;
        <div>
          <Table columns={columns} dataSource={data?.posts} />
        </div>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default ListPost;
