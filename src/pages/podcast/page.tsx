import PageHeader from '@/components/Common/PageHeader/PageHeader'
import PodcastCard from '@/components/Podcast/PodcastCard'


export default function Podcast() {{}
  return (
    <>
      <PageHeader
        title="Podcast"
        currentPage="Podcast"
        description="Tune in to inspiring conversations with tech leaders, innovators, and mentors. Explore episodes focused on empowering women in technology through career growth, leadership, and groundbreaking innovations."
      />
      <PodcastCard />
    </>
  );
}
