import Input from "@/ui/atom/Input";

function LoginPage() {
  return (
    <div>
      <Input type="text" label="نام کاربری" name="user" id="user" />
      <Input type="password" label="رمز عبور" name="password" id="password" />
    </div>
  );
}

export default LoginPage;
