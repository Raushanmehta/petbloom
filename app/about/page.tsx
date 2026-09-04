import PageTopSection from "@/components/common/PageTopSection"
import AboutSection from "@/sections/home/AboutSection"
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection"
import MissionVisionSection from "@/sections/MissionVisionSection"

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" subTitle="About Us" />
            <AboutSection />
            <WhyChooseUsSection />
            <MissionVisionSection />
        </main>
    )
}