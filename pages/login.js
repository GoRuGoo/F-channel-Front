import Link from "next/link";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function login() {
    return (
        <div>
            <InlineMath class="my-class">
                \int_0^\infty x^2 dx
            </InlineMath>
        </div>
    );
}