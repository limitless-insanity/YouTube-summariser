export interface UserSummary {
  id: string;
  user_id: string;
  youtube_url: string;
  summary: string | null;
  created_at: string;
  status: 'pending' | 'completed' | 'error';
}