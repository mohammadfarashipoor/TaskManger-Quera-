import { Button } from "@/ui/atom/Button";
import { ColorInformation } from "../Box";
import InputText from "@/ui/atom/InputText";
import FormContainer from "../FormContainer";

function NewProjectModal() {
  function handleCreateProject() {}
  return (
    <ColorInformation
      toggle={() => {
        console.log("");
      }}
      isBackIcon={false}
      isOpen={true}
      title={"ساخت پروژه جدید"}
      height={"auto"}
    >
      <FormContainer className="w-full">
        <InputText label="نام پروژه" name="nameproject" />
      </FormContainer>
      <Button className="w-full mt-3 " onclick={handleCreateProject}>
        ادامه
      </Button>
    </ColorInformation>
  );
}

export default NewProjectModal;
