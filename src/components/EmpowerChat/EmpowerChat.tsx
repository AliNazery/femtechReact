import SectionTitle from "@/components/Common/Title/SectionTitle";
import UpcomingChats from "./UpcomingChats";
import PastChats from "./PastChats";
import ResourcesTools from "./ResourcesTools";

export default function EmpowerChat() {
  return (
    <section className="py-16 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          category="EMPOWERING WOMEN"
          title="Empowering Women Through Conversations"
          description="Join our live Empower Chat sessions, featuring expert speakers, engaging discussions, and networking opportunities, designed to inspire and elevate women in tech."
        />
      </div>
      <UpcomingChats />
      <PastChats />
      <ResourcesTools />
    </section>
  );
}
