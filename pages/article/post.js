import Header from "@/components/layouts/Header";

export default function Post() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitData = {
      title: event.target.title.value,
      nickname: event.target.nickname.value,
      kosenname: event.target.kosenname.value,
      level: parseInt(event.target.level.value),
      content: event.target.content.value,
    };
    const JSONdata = JSON.stringify(submitData);
    const endpoint = "http://localhost:8080/article/post";
    const optinos = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    await fetch(endpoint, optinos, { mode: "cors" }).then(() => {
      location = "http://localhost:3000/article/";
      alert("スレッド立ち上げに成功！単位も青春も失った、な！");
    });
  };

  return (
    <>
      <Header />
      <div className="my-10 mx-auto w-11/12 rounded-2xl border-4 border-black">
        <h2
          className="bg-chgr ml-10 rounded-3xl
        pt-10"
        >
          <span className="rounded-2xl bg-blue-400 py-2 px-3 text-3xl font-bold text-white">
            新規スレッド
          </span>
        </h2>
        <div>
          <form
            className="item-center my-16 mx-auto flex w-6/12 flex-col "
            onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="tex">
              スレッドタイトル
            </label>
            <input type={"text"} id="title" name="title" required />
            <label htmlFor="nickname">ニックネーム</label>
            <input type={"text"} id="nickname" name="nickname" required />
            <label htmlFor="kosenname">高専名</label>
            <input type={"text"} id="kosenname" name="kosenname" required />
            <label htmlFor="level">やばさレベル</label>
            <input
              type={"number"}
              id="level"
              name="level"
              min={"0"}
              max={"10"}
              required
            />
            <label htmlFor="content">内容</label>
            <input type={"text"} id="content" name="content" required />
            <button
              type="submit"
              className="mt-10 rounded-2xl bg-blue-400 p-3 text-xl font-bold text-white
              "
            >
              送信！
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
