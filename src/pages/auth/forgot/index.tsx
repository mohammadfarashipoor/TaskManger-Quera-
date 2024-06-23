import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaForgotPage } from "@/validation/validationSchema";
function ForgotPage() {
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
        <FormContainer onSubmit={onsubmit} schema={schemaForgotPage}>
          <OutBox
            className="w-[640px] p-6 gap-8 flex flex-col ju"
            title="فراموشی رمز عبور"
          >
            <InputText
              label="ایمیل خود را وارد کنید"
              name="email"
            ></InputText>
            <Button type="submit" isBold isprimary>
              دریافت ایمیل بازیابی رمز عبور
            </Button>
            <Button type="button" isBold isprimary={false}>
              بازگشت
            </Button>
          </OutBox>
        </FormContainer>
      </div>
    </>
  );
}

export default ForgotPage;
