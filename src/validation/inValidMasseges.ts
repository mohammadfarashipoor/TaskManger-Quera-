
export const inValidMsgLogin = {
  username: { min: "نام کاربری باید وارد شود" },
  password: { min: "پسورد باید وارد شود" },
};
export const inValidMsgForgot = {
  email: { email: " ایمیل را درست وارد کنید" },
};

export const inValidMsgPersonalInfo = {
  firstName: { min: "نام باید وارد شود" },
  lastName: { min: "نام خانوادگی باید وارد شود" },
  phone: { length: "شماره همراه باید وارد شود" },
};
export const inValidMsgReset = {
  password: { min: "پسورد باید دارای حداقل ۵ کارکتر باشد" },
  confirm: { min: "پسورد باید دارای حداقل ۵ کارکتر باشد" },
};
