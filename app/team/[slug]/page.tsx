import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import TeamDetailPage from "@/pages/TeamDetailPage";
import data from "@/data/data.json";
import { TeamDataWrapper } from "@/types";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const { teamData } = data as { teamData: TeamDataWrapper };

export default async function TeamDetail({ params }: PageProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug).toLowerCase();
    const team = teamData.teams.find(
        (t) =>
            t.slug?.toLowerCase() === decodedSlug ||
            t.id === decodedSlug ||
            t.name.toLowerCase().replace(/\s+/g, "-") === decodedSlug
    );

    if (!team) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title={team.name} subTitle={team.role} />
            <TeamDetailPage team={team} />
        </main>
    );
}