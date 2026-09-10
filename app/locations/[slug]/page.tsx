import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import LocationDetailPage from "@/pages/LocationDetailPage";
import { site } from "@/data";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function LocationDetail({ params }: PageProps) {
    const { slug } = await params;
    const locationsData = site.locations;
    const location = locationsData.locations.find(
        (l) => l.slug === slug || l.name.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!location) {
        notFound();
    }

    return (
        <main>
            <PageTopSection
                title={location.name}
                subTitle="Location Detail"
            />
            <LocationDetailPage data={location} location={location} />
        </main>
    );
}
