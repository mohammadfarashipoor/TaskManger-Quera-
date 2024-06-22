import { Button } from "@/ui/atom";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";

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
          <InputText name="password" label="رمز عبور" classNames="mb-4" />
          <Button onClick={clickHandler}>ورود</Button>
        </OutBox>
      </FormContainer>
    </div>
  );
}

export default LoginPage;
