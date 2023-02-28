import Link from "next/link";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function login() {
    return (
        <div>
        <p>下の問題を解答しなさい。</p>
        <InlineMath
            math="E = mc^2"
            style={{ fontSize: '4em', color: 'red' }}
        />
        <p></p>
        <Link href="/other-page">
            <button>別のページに移動する1</button>
        </Link>
        <p></p>
        <Link href="/other-page">
            <button>別のページに移動する2</button>
        </Link>
        <p></p>
        <Link href="/other-page">
            <button>別のページに移動する3</button>
        </Link>
        </div>
    );
}