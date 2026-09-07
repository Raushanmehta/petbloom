import PageTopSection from "@/components/common/PageTopSection";
import FaqSection from "@/sections/home/FaqSection";

export default function FaqsPage() {
    return (
        <div>
            <PageTopSection title="Faqs" subTitle="Faqs" />
            <FaqSection />
        </div>
    );
}