import Link from "next/link";

export default function Bad() {
  return (
    <>
      <h1 className="text-5xl">だから単位落とすんだよ...</h1>
      <Link href={"/login"}>戻る</Link>
    </>
  );
}
