import path from 'path';
import fs from 'fs/promises';
import Link from "next/link";
import { useRouter } from "next/router";

function SingleBlogPage(props) {
    console.log('SingleBlogPage');

    const { description, title, tags } = props.blog || {};
    const router = useRouter();

    console.log(props.blog);

    return (
        !props.blog
            ? <p>Loading...</p>
            : <div style={{ padding: '1rem 2rem' }}>
                <h2>{title || 'Blog TItle'}</h2>
                <p>{description}</p>
                <Link href="/blog" > {'<-- Back to Blogs'}</Link>
            </div>
    );
}

async function getBlogsData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy_blogs.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export async function getStaticProps(ctx) {
    let res = { props: { blog: null } }
    const { bid } = ctx.params;
    if (!+bid) {
        res.redirect = {
            destination: '/blog',
            permanent: false
        };
        return res;
    }
    const blogs = await getBlogsData();
    const foundBlog = blogs.find(b => b.id === +bid);
    if (!foundBlog) {
        res.notFound = true;
        return res;
    }
    res.props.blog = foundBlog;
    console.log(foundBlog);
    return res;
}

export async function getStaticPaths() {
    // const blogs = await getBlogsData(); // the idea was to map the ids
    const validPaths = [...Array(3)].map((_, i) => ({ params: { bid: String(i + 1) } }));
    let res = {
        paths: [...validPaths],
        fallback: true
    }
    return res;
};

export default SingleBlogPage;