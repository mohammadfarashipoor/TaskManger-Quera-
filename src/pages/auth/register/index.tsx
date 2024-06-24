import { useState } from "react";
import CheckBox from "@/ui/atom/CheckBox";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaRegister } from "@/validation/validationSchema";
import { Button } from "@/ui/atom/Button";

interface RegisterData {
  userName: string;
  email: string;
  password: string;
  ceckbox: boolean;
}

function RegisterPage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (data: RegisterData) => {
    console.log("data", data);
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <OutBox
        title="ثبت‌نام در کوئرا تسک منیجر"
        className="w-[540px] flex flex-col justify-between"
      >
        <FormContainer onSubmit={handleSubmit} schema={schemaRegister}>
          <InputText name="username" label="نام کاربری" />
          <InputText name="email" label="ایمیل" />
          <InputText name="password" label="رمز عبور" type="password" />

          <CheckBox
            labelText=" را می‌پذیرم."
            acceptedTerms={acceptedTerms}
            onChange={handleCheckboxChange}
            terms={<span className="underline"> قوانین و مقررات</span>}
            classNameLabel="mb-1"
          />
          <Button type="submit" isBold>
            ثبت‌نام
          </Button>
        </FormContainer>
      </OutBox>
    </div>
  );
}

export default RegisterPage;
