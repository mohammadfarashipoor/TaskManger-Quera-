import { resetPassword } from "@/containers/auth/action";
import { useAppDispatch } from "@/lib/hook";
import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaForgotPage } from "@/validation/validationSchema";
interface ForgotData {
  email: string;
}

function ForgotPage() {
  const dispatch = useAppDispatch();
  const onSubmit = (data: ForgotData) => {
    const { email } = data;
    dispatch(resetPassword({ email }));
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: " 50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FormContainer onSubmit={onSubmit} schema={schemaForgotPage}>
          <OutBox
            className="w-[640px] p-6 gap-8 flex flex-col ju"
            title="فراموشی رمز عبور"
          >
            <InputText label="ایمیل خود را وارد کنید" name="email"></InputText>
            <Button type="submit" isBold>
              دریافت ایمیل بازیابی رمز عبور
            </Button>
            <Text textColor="brandPrimary" textSize="boldS">
              بازگشت
            </Text>
          </OutBox>
        </FormContainer>
      </div>
    </>
  );
}

export default ForgotPage;
