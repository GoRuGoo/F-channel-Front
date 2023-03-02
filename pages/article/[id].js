import Header from "@/components/layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Test({ data, dataThred }) {
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
    const endpoint = "http://localhost:8080/article/thred/post";
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
            <span className="font-bold text-green-700">{data.nickname}</span>
            <span className="ml-6">{data.created.slice(0, -9)}</span>
          </li>
          <dd className="m-3">{data.content}</dd>
          {dataThred.map((comment) => (
            <>
              <li className="font-bold">
                名前：{" "}
                <span className="font-bold text-green-700">
                  {comment.nickname}
                </span>
                <span className="ml-6">{comment.created.slice(0, -9)}</span>
              </li>
              <dd className="m-3">{comment.content}</dd>
            </>
          ))}
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
        <div>
          <Link href={"http://localhost:3000/article"}>
            <span>←一覧へ戻る</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const endpoint = `http://localhost:8080/article/${query.id}`;
  const endpointThred = `http://localhost:8080/article/thred/${query.id}`;
  const res = await fetch(endpoint);
  const resThred = await fetch(endpointThred);
  const data = await res.json(resThred);
  const dataThred = await resThred.json();
  return { props: { data, dataThred } };
}
