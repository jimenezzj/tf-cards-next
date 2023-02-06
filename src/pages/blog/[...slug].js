import Link from "next/link";
import { useRouter } from "next/router";

function AnySingleBlogPage(props) {
    
    const router = useRouter();
    
    // console.log(router.query);

    return (
        <div style={{ padding: '1rem 2rem' }}>
            <h2>{'Blog TItle'}</h2>
            <p></p>
            <Link href="/blog" > {'<-- Back to Blogs'}</Link>
        </div>
    );
}

export default AnySingleBlogPage;