import Header from "@/components/layouts/Header";

export default function Article({ articleList }) {
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
          {articleList.map((article) => (
            <li className="my-10">{article.title}</li>
          ))}
        </ol>
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
