import { z, ZodSchema, ZodTypeAny } from "zod";

const zodResolver = <T extends ZodTypeAny>(schema: ZodSchema<T>) => {
  const validationSchema: Record<
    string,
    { validate: (value: any) => true | string }
  > = {};

  Object.keys(schema.shape).forEach((key) => {
    validationSchema[key] = {
      validate: (value: any) => {
        try {
          schema.shape[key].parse(value);
          return true;
        } catch (error) {
          return (error as any).errors[0].message;
        }
      },
    };
  });

  return validationSchema;
};

export default zodResolver;
