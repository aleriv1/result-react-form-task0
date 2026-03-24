import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schema";
import FormRegistrationView from "./FormRegistrationView";

function FormRegistrationContainer() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const submitButtonRef = useRef(null);

  const checkFocus = async () => {
    const isFormValid = await trigger();
    if (isFormValid) {
      submitButtonRef.current?.focus();
    }
  };

  const registerWithFocus = (name) => {
    const registered = register(name);
    return {
      ...registered,
      onChange: async (e) => {
        await registered.onChange(e);
        await checkFocus();
      },
    };
  };

  const onSubmit = (data) => {
    console.log("Smart/Dumb Data:", data);
  };

  return (
    <FormRegistrationView
      register={registerWithFocus}
      errors={errors}
      touchedFields={touchedFields}
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
      submitButtonRef={submitButtonRef}
    />
  );
}

export default FormRegistrationContainer;
