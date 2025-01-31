export type PostID = number;

export type AuthorAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCoverDataAttributes = PostCoverFormat & {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostCoverData = {
  id: number;
  attributes: PostCoverDataAttributes;
};

export type PostCover = {
  data: PostCoverData;
};

export type PostChildren = {
  type: 'text';
  text: string;
};

export type PostContent = {
  type: 'paragraph';
  children: PostChildren[];
};

export type PostAttributesData = {
  title: string;
  content: PostContent[];
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  createdAt: string;
  updated_at: string;
  cover: PostCover;
};

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

export type PostObject = {
  data: PostData[];
};
