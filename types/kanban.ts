export type CardId = string;
export type ColumnId = "todo" | "progress" | "done";

export interface AssignedUser {
  id: string;
  name: string;
  avatar: string;
  color: string;
}

export interface Card {
  id: CardId;
  title: string;
  description?: string;
  priority?: 'low' | 'high';
  status?: 'completed';
  image?: boolean;
  assigned: AssignedUser[];
  comments: number;
  files: number;
}

export interface Column {
  id: string;
  title: string;
  color: string;
  count: number;
  cards: Card[];
}

export interface BoardState {
  columns: Column[];
}
