type commentType = {
  _id: string; // comment _id
  text: string;
  user: {
    _id: string; // user _id
    username: string;
    firstname: string;
    email: string;
  };
  task: string;
  createdAt: string;
};
