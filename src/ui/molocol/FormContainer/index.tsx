import zodResolver from "@/utils/zodResolver";
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
  const Resolver = async (data: any) => {
    const validationSchema = zodResolver(schema);
    const errors: Record<string, { message: string }> = {};

    for (const key in validationSchema) {
      const result = validationSchema[key].validate(data[key]);
      if (result !== true) {
        errors[key] = { message: result };
      }
    }

    return { values: data, errors };
  };
  const methods = useForm({
    resolver: Resolver,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormContainer;
