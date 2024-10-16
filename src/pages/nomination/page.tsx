import PageHeader from '@/components/Common/PageHeader/PageHeader'
import NominationCards from '@/components/NominationCards/NominationCards';

export default function Nomination() {
  return (
    <>
      <PageHeader
        title="Nomination"
        currentPage="Nomination"
        description="Recognize and celebrate women making a difference in technology. Nominate those who inspire innovation, leadership, and change in the tech world."
          />
          <NominationCards/>
    </>
  );
}
