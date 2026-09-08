import PageTopSection from "@/components/common/PageTopSection";
import MissionVisionSection from "@/sections/MissionVisionSection";

export default function MissionVisionPage() {
    return (
        <main>
            <PageTopSection title="Our Mission & Vision" subTitle="Our Mission & Vision" />
            <MissionVisionSection isPage={true} />
        </main>
    );
}