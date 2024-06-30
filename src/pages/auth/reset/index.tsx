import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaReset } from "@/validation/validationSchema";

function ResetPage() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FormContainer onSubmit={onsubmit} schema={schemaReset}>
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
