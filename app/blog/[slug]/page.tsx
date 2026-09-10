import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailPage from "@/pages/BlogDetailPage";
import { site, BlogPost } from "@/data";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetail({ params }: PageProps) {
    const { slug } = await params;
    const blogs = site.blog.blogs;
    const blog = blogs.find((b) => b.id === slug);

    if (!blog) {
        notFound();
    }
    return (
        <main>
            <PageTopSection title="Blog Detail" subTitle="Blog Detail" />
            <BlogDetailPage data={blog} blog={blog} />
        </main>
    );
}