import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import data from "@/data/data.json";
import { ServicesDataWrapper } from "@/types";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const { servicesData } = data as { servicesData: ServicesDataWrapper };

export default async function ServiceDetail({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData.services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title={service.title} subTitle="service" />
            <ServiceDetailPage service={service} />
        </main>
    );
}