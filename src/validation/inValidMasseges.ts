export const inValidMsgLogin = {
  username: { min: "نام کاربری باید وارد شود" },
  password: { min: "پسورد باید وارد شود" },
};

export const inValidMsgRegister = {
  username: { min: "نام کاربری باید وارد شود" },
  email: {
    min: "ایمیل باید وارد شود",
    pattern: "فرمت ایمیل وارد شده صحیح نیست",
  },
  password: {
    min: "پسورد باید حداقل ۸ کاراکتر داشته باشد",
    matches: "پسورد باید شامل حداقل یک حرف بزرگ، یک حرف کوچک و یک عدد باشد",
  },
  checkBox: { message: "شما باید شرایط را بپذیرید" },
};

export const inValidMsgForgot = {
  email: { email: " ایمیل را درست وارد کنید" },
};
