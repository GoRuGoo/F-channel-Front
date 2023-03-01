import Header from "@/components/layouts/Header";

export default function Test({ data }) {
  return (
    <>
      <Header />
      <div className="mx-auto my-10 w-11/12 rounded-2xl border-4 border-black bg-chgray px-7 py-10">
        <h2>
          <span className="text-5xl font-black text-red-600">{data.title}</span>
        </h2>
        <ul className="my-10 ml-7  list-decimal text-2xl">
          <li className="font-bold">
            名前：
            <span className="font-bold text-green-700">
              {data.nickname}
            </span>{" "}
            {data.created}
          </li>
          <dd className="my-2">{data.content}</dd>
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const endpoint = `http://localhost:8080/article/${query.id}`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data } };
}
