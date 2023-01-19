import { readFile } from "fs/promises";
import Link from "next/link";
import path from "path";

function BlogPage(props) {


    function getBlogsList(pBlogs) {
        let listEle = null;
        if (pBlogs && pBlogs.length) listEle =
            <ul>
                {
                    pBlogs.map((b, i) =>
                        <li key={b.id} >
                            <Link href={`/blog/${b.id}`}>{b.title}</Link >
                        </li>
                    )
                }
            </ul>
        return listEle;
    }

    return (
        <div>
            <h1>Blogs</h1>
            {getBlogsList(props.blogs)}
            <Link href="/" > {'<-- Back to Home'}</Link>
        </div>
    );
}

export async function getStaticProps(ctx) { 
    console.log("(Re-)Generating...");
    let res = {};
    const filePath = path.join(process.cwd(), 'data', 'dummy_blogs.json');
    const jsonData = await readFile(filePath);
    const data = JSON.parse(jsonData);
    res.props = {
        blogs: data,
        revalidate: 1000
    }
    return res;
}

export default BlogPage;