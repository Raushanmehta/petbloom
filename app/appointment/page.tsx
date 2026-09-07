import PageTopSection from "@/components/common/PageTopSection";
import AppointmentSection from "@/sections/AppointmentSection";
import data from "@/data/data.json";
import { AppointmentDataWrapper } from "@/types/sections";

export default function AppointmentPage() {
    const pageData = (data as unknown as { appointmentData: AppointmentDataWrapper }).appointmentData;

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