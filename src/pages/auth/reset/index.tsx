import { resetPassword } from "@/containers/auth/action";
import { useAppDispatch } from "@/lib/hook";
import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaReset } from "@/validation/validationSchema";
interface ResetData {
  password: string;
  confirm: string;
}
function ResetPage() {
  const dispatch = useAppDispatch();
  const onSubmit = (data: ResetData) => {
    const { password, confirm } = data;
    dispatch(resetPassword({ password, password1: confirm }));
  };
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FormContainer onSubmit={onSubmit} schema={schemaReset}>
          <OutBox
            className="w-[640px] p-6 gap-8 flex flex-col ju"
            title="تغییر رمز عبور"
          >
            <InputText
              label="رمز عبور جدید را وارد کنید"
              name="password"
              type="password"
            ></InputText>
            <InputText
              label="تکرار رمز عبور"
              name="confirm"
              type="password"
            ></InputText>
            <Button type="submit" isBold>
              اعمال تغییرات
            </Button>
          </OutBox>
        </FormContainer>
      </div>
    </>
  );
}

export default ResetPage;
