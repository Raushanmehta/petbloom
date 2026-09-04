import PageTopSection from "@/components/common/PageTopSection";
import TeamSection from "@/sections/home/TeamSection";

export default function TeamPage() {
    return (
        <main>
            <PageTopSection title="Our Team" subTitle="Our Team" />
            <TeamSection />
        </main>
    );
}