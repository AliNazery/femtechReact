import Acheivement from "@/components/Acheivment/Acheivement";
import Photo from "@/components/Section/photo";
import Tittle from "@/components/Section/titles";
import Team from "@/components/Section/team";
import JoinOurTeam from "@/components/Section/joinOurTeam";
import PageHeader from "@/components/Common/PageHeader/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Fem Tech"
        currentPage="About"
        description="FemTech empowers women in tech, bridging education and job gaps through skill-building and opportunities, especially in regions like Afghanistan."
      />
      <Photo />
      <Tittle />
      <Acheivement />
      <Team />
      <JoinOurTeam />
    </>
  );
}
