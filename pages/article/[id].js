import Header from "@/components/layouts/Header";
import { useRouter } from "next/router";

export default function Test({ data }) {
  const router = useRouter();
  const id = router.query.id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitData = {
      thredid: parseInt(id),
      nickname: event.target.nickname.value,
      content: event.target.content.value,
    };
    const JSONdata = JSON.stringify(submitData);
    const endpoint = "http://localhost:8080/article/thred";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    await fetch(endpoint, options, { mode: "cors" }).then(() => {
      location = "http://localhost:3000/article/" + id.toString();
      alert("コメント成功！こんなことしてる暇あるなら勉強しな！");
    });
  };

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
        <div>
          <h2>
            <span className="rounded-2xl bg-blue-400 py-2 px-3 text-xl font-bold text-white">
              新規コメント
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="my-5 ml-3 flex flex-col">
            <label htmlFor="nickname " className="font-bold">
              ニックネーム
            </label>
            <input type={"text"} id="nickname" name="nickname" required />
            <label htmlFor="content" className="font-bold">
              コメント
            </label>
            <input type={"text"} id="content" name="content" required />
            <button type="submit" className="pt-6">
              <span
                className=" rounded-xl bg-blue-400 py-2 px-3 text-2xl font-bold
            text-white"
              >
                送信
              </span>
            </button>
          </form>
        </div>
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
