export type CreateBlogParams = {
  header: string;
  body: string;
};

export type UpdateBlogParams = {
  header: string;
  body: string;
};

export type CreateUserParams = {
  username: string;
  password: string;
};

export type BlogCommentCreateParams = {
  body: string;
};
