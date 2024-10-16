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
