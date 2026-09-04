import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailPage from "@/pages/ServiceDetailPage";

export default function ServiceDetail() {
    return (
        <main>
            <PageTopSection title="Service Detail" subTitle="service" />
            <ServiceDetailPage />
        </main>
    )
}