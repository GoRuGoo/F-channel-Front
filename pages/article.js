import Header from "@/components/layouts/Header";
import Link from "next/link";

export default function Article({ articleList }) {
  const reverseArticleList = articleList.reverse();
  return (
    <>
      <Header />
      <div className="mx-auto my-10 w-11/12 rounded-2xl border-4  border-black ">
        <h2 className="ml-10  rounded-3xl bg-chgreen pt-10">
          <span
            className="rounded-2xl bg-blue-400 py-2 px-3 text-3xl font-bold text-white
    "
          >
            落単者のスレッド
          </span>
        </h2>
        <ol className="ml-28 mt-20 list-decimal text-4xl italic text-chblue">
          {reverseArticleList.map((article) => (
            <li className="my-10">
              {article.title}【{article.modified.slice(0, -9)}】
            </li>
          ))}
        </ol>
        <h3 className="mr-10 mb-5 text-right text-2xl text-chblue ">
          <Link href={"/article/post"}>新規スレッド作成はこちら</Link>
        </h3>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/article");
  const articleList = await res.json();

  return {
    props: {
      articleList,
    },
  };
}

//title
//nicknamae
//kosen_name
//level
//content
