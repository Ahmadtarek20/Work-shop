export interface News {
  id?: number;
  title?: string;
  content?: string;
  sourceID?: number;
  urlToImage?: string;
  description?: string;
  publishedAt?: Date;
  showOnHomepage?: boolean;
}
