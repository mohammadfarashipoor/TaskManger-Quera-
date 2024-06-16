import Input from "@/ui/atom/Input";

function RegisterPage() {
  return (
    <div>
      <Input type="text" label="نام کاربری" name="user" id="user" />
      <Input type="email" label="ایمیل" name="email" id="email" />
      <Input type="password" label="رمز عبور" name="password" id="password" />
      <Input type="checkbox" label="قوانین و مقررات را می پذیرم." name="checkbox" id="checkbox" />
    </div>
  );
}

export default RegisterPage;
