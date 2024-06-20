import InputText from "@/ui/atom/InputText";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaLogin } from "@/validation/validationSchema";
interface LoginData {
  username: string;
  password: string;
}
function LoginPage() {
  const onSubmit = (data: LoginData) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={onSubmit} schema={schemaLogin}>
      <InputText name="username" label="username" />
      <InputText name="password" label="password" type="password" />
      <button type="submit">Submit</button>
    </FormContainer>
  );
}

export default LoginPage;
