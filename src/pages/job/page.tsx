import PageHeader from "@/components/Common/PageHeader/PageHeader";
import JoinOurTeam from "@/components/Section/joinOurTeam";

export default function Job() {
  return (
    <>
      <PageHeader
        title={"Join Our Team"}
        currentPage={"Job"}
        description={"Fem Tech Welcome Potential Team Member"}
      />
      <div className="mt-[-120px]">
        <JoinOurTeam />
      </div>
    </>
  );
}
