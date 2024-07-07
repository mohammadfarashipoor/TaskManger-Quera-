import FormContainer from "../FormContainer";
import InputText from "@/ui/atom/InputText";

function WorkSpaceInput() {
  return (
    <FormContainer className="w-full">
      <InputText name="workspace" label="نام ورک اسپیس" />
    </FormContainer>
  );
}

export default WorkSpaceInput;
