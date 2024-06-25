import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

interface FormContainerProps {
  onSubmit: any;
  children: React.ReactNode;
  schema: any;
}

const FormContainer: React.FC<FormContainerProps> = ({
  onSubmit,
  children,
  schema,
}) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormContainer;
