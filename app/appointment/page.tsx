import PageTopSection from "@/components/common/PageTopSection";
import AppointmentSection from "@/sections/AppointmentSection";
import { site } from "@/data";

export default function AppointmentPage() {
    const pageData = site.appointment;

    return (
        <main>
            <PageTopSection
                title={pageData.pageData.titleColored || "Appointment"}
                subTitle={pageData.pageData.badgeText || "Appointment"}
            />
            <AppointmentSection data={pageData.appointment} />
        </main>
    );
}