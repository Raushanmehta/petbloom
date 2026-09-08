import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailPage from "@/pages/BlogDetailPage";
import allData from "@/data/data.json";
import { BlogPost } from "@/types/sections";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetail({ params }: PageProps) {
    const { slug } = await params;
    const blogs = allData.blogData.blogs as unknown as BlogPost[];
    const blog = blogs.find((b) => b.id === slug);

    if (!blog) {
        notFound();
    }
    return (
        <main>
            <PageTopSection title="Blog Detail" subTitle="Blog Detail" />
            <BlogDetailPage blog={blog} />
        </main>
    );
}