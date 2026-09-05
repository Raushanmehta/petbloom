import PageTopSection from "@/components/common/PageTopSection";
import LocationSection from "@/sections/home/LocationSection";

export default function LocationsPage() {
    return (
        <main>
            <PageTopSection title="Our Locations" subTitle="Our Locations" />
            <LocationSection />
        </main>
    );
}