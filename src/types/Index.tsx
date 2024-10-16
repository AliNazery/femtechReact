export type PostType = {
  id: number;
  thumbnail: string;
  title: string;
  user_id: number;
  created_at: string;
};

export type StudyhubType = {
  id: number;
  thumbnail: string;
  title: string;
  media_url: string;
  description: string;
};

export type StoryType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  content: string
};


export type SpeakerType = {
  id: number;
  profile: string;
  firstname: string;
  lastname: string;
  created_at: string
};

export type PaginationType = {
  currentPage: number;
  lastPage: number
  pageRoute: string
};

export type SectionTitleType = {
  category: string;
  title: string;
  description: string;
};


export type JobType = {
  title: string;
  description: string;
  location: string
};