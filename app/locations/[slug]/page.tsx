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

const { locationData } = data as { locationData: LocationDataWrapper };

export default async function LocationDetail({ params }: PageProps) {
    const { slug } = await params;
    const location = locationData.locationsData.find(
        (l) => l.slug === slug || l.name.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!location) {
        notFound();
    }

    return (
        <main>
            <PageTopSection
                title={location.detail?.title ? `${location.detail.title} Service Area` : `${location.name} Location`}
                subTitle="Location Detail"
            />
            <LocationDetailPage location={location} />
        </main>
    );
}
