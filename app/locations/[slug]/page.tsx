import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import LocationDetailPage from "@/pages/LocationDetailPage";
import data from "@/data/data.json";
import { LocationDataWrapper } from "@/types";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const { locationsData } = data as { locationsData: LocationDataWrapper };

export default async function LocationDetail({ params }: PageProps) {
    const { slug } = await params;
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
            <LocationDetailPage location={location} />
        </main>
    );
}
