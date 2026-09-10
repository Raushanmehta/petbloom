import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import { site } from "@/data";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServiceDetail({ params }: PageProps) {
    const { slug } = await params;
    const servicesData = site.services;
    const service = servicesData.services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title={service.title} subTitle="service" />
            <ServiceDetailPage data={service} service={service} />
        </main>
    );
}