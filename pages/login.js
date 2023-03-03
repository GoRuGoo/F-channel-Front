import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Header from "@/components/layouts/Header";
import Link from "next/link";

export default function Login() {
  // return (
  //   <InlineMath math="\int \left( 5x^{4}-3x^{2}+\dfrac{3\sqrt{x}}{2}\right) dx" />
  // );
  return (
    <>
      <Header />
      <div
        className="mx-auto my-10 w-11/12 rounded-2xl border-4 border-black bg-chgray
      "
      >
        <h2 className="my-5 flex justify-center rounded-3xl ">
          <span className="rounded-2xl bg-blue-400 py-2  px-6 text-3xl font-bold   text-white">
            ログインしてね！
          </span>
        </h2>
        <div className="my-6">
          <h2 className="flex justify-center">
            <span className="text-2xl">問.次の不定積分を解け。</span>
          </h2>
          <h2 className="my-6 flex justify-center">
            <span className="text-3xl">
              <InlineMath math="\int \left( 5x^{4}-3x^{2}+\dfrac{3\sqrt{x}}{2}\right) dx" />
            </span>
          </h2>
          <div className="mx-auto inline justify-center">
            <h2 className="text-center text-2xl">こたえ</h2>
            <ul className=" mt-5 mr-4  flex justify-center">
              <li className="mx-5 rounded-2xl bg-blue-600 py-2 px-3 text-xl font-bold text-white hover:bg-blue-800">
                <Link href={"/article"}>
                  <span>
                    <InlineMath math="x^{5}-x^{3}+\sqrt{x^{3}}+C" />
                  </span>
                </Link>
              </li>
              <li className="mx-5 rounded-2xl bg-blue-600 py-2 px-3 text-xl font-bold text-white hover:bg-blue-800">
                <Link href={"/bad"}>
                  <span>
                    <InlineMath math="\left(3x^{2}-5x+2\right)+C" />
                  </span>
                </Link>
              </li>
              <li className="mx-5 rounded-2xl bg-blue-600 py-2 px-3 text-xl font-bold text-white hover:bg-blue-800">
                <Link href={"/bad"}>
                  <span>
                    <InlineMath math="\log \left| 3x-1\right| +C" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
