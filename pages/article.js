export default function Article({ articleList }) {
  return (
    <ul>
      {articleList.map((article) => (
        <>
          <h1>{article.title}</h1>
          <p>{article.nickname}</p>
          <p>{article.kosen_name}</p>
          <p>{article.level}</p>
          <p>{article.content}</p>
        </>
      ))}
    </ul>
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
