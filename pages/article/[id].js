import Header from "@/components/layouts/Header";
import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";

// export async function getServerSideProps() {
//   const rounter = useRouter();
//   const id = rounter.query;
//   const jsondata = await fetch("http://localhost:8080/article" + { id }).then(
//     (r) => r.json()
//   );
//   return {
//     props: { jsondata },
//   };
// }

export default function Test({ data }) {
  return <h1>{data.title}</h1>;
}

export async function getServerSideProps({ query }) {
  const endpoint = `http://localhost:8080/article/${query.id}`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data } };
}
