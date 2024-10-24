import PageHeader from "@/components/Common/PageHeader/PageHeader";
import TermsContent from "@/components/Terms/TermsContent";


export default function Terms() {
  return (
    <main>
      <PageHeader
        title="Terms &amp; Conditions"
        currentPage="Terms & conditions"
        description=""
      />
      <TermsContent />
    </main>
  );
}
