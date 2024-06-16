import Input from "@/ui/atom/Input";

function ResetPage() {
  return (
    <div>
      <Input type="password" label="رمز عبور جدید را وارد کنید" name="newPassword" id="newPassword" />
      <Input type="password" label="تکرار رمز عبور" name="rePassword" id="rePassword" />
    </div>
  );
}

export default ResetPage;
