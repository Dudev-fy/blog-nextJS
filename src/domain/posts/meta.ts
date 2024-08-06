export type PaginationMeta = {
  start: number;
  limit: number;
  total: number;
};

export type PostMeta = {
  pagination: PaginationMeta;
};
