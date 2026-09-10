import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import TeamDetailPage from "@/pages/TeamDetailPage";
import { site } from "@/data";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function TeamDetail({ params }: PageProps) {
    const { slug } = await params;
    const teamData = site.team;
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
            <TeamDetailPage data={team} team={team} />
        </main>
    );
}