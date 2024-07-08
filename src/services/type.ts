type createTaskBody = {
  name: string;
  description: string;
  priority: number;
  attachment: string;
  thumbnail: string;
  order: number;
};
type userTaskBody = {
  user: {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    thumbnail: string;
  };
};
type createCommentBody = {
  author: number;
  attachment: string;
  text: string;
};
