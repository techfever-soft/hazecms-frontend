import { SafeHtml } from "@angular/platform-browser";

export interface HazePost {
  id: number | string;
  name: string;
  slug: string;
  categoryId: number | string;
  content: string;
  tags: string;
  published: boolean;
  createdAt: Date | string;
  publishedAt: Date | string;
  updatedAt: Date | string;
}

export interface HazePostCategory {
  id: number | string;
  name: string;
}
