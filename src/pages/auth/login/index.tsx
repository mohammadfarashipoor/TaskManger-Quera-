import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { Link } from "react-router-dom";

function LoginPage() {
  const submitHandler = () => {
    console.log("clicked");
  };
  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div>
      <FormContainer onSubmit={submitHandler} schema>
        <OutBox
          className="w-[640px] h-[429px] px-8"
          title="به کوئرا تسک منیجر خوش برگشتی"
        >
          <InputText name="user" label="نام کاربری" classNames="mb-4" />
          <InputText name="password" label="رمز عبور" classNames="mb-2" />
          <Link to='/forgot' className="flex underline">رمز عبور خود را فراموش کرده اید؟</Link>
          <Button className="mt-6" onClick={clickHandler} isBold>ورود</Button>
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
