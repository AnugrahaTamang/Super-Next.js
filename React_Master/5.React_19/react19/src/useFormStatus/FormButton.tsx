import React from "react";
import { useFormStatus } from "react-dom";
const FormButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button type="submit" disabled={pending}>
      {pending ? "submitting...." : "Submit"}
    </button>
  );
};

export default FormButton;
