import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaLogin } from "@/validation/validationSchema";
import { Link } from "react-router-dom";
interface LoginData {
  username: string;
  password: string;
}

function LoginPage() {

  const onSubmit = (data:LoginData) => {
    console.log("data" , data);
  };

  return (
    <div>
      <FormContainer onSubmit={onSubmit} schema={schemaLogin}>
        <OutBox
          className="w-[640px] h-[429px] px-8"
          title="به کوئرا تسک منیجر خوش برگشتی"
        >
          <InputText name="username" label="نام کاربری" classNames="mb-4" />
          <InputText type="password" name="password" label="رمز عبور" classNames="mb-2" />
          <Link to='/forgot' className="flex underline">رمز عبور خود را فراموش کرده اید؟</Link>
          <Button className="mt-6" type="submit" isBold>ورود</Button>
          <div className="mt-4">
            <Text>
            ثبت نام نکرده ای؟
            <Link className="text-brand-primary ms-2" to="/register">ثبت نام</Link>
          </Text>
          </div>
          
        </OutBox>
      </FormContainer>
    </div>
  );
}

export default LoginPage;
