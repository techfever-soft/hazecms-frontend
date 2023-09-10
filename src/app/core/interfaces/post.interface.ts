export interface HazePost {
  id: number | string;
  name: string;
  slug: string;
  categoryId: number | string;
  content: string;
  tags: string;
  createdAt: Date | string;
  publishedAt: Date | string;
}

export interface HazePostCategory {
  id: number | string;
  name: string;
}
