import React, { useState } from "react";
import SvgIcon from "@/ui/atom/SvgIcon";
import { FieldError, useFormContext } from "react-hook-form";

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface CheckBoxProps {
  labelText?: string;
  classNameLabel?: string;
  terms?: React.ReactNode;
  onTermsClick?: () => void;
}

const CheckBox = ({
  labelText = "",
  classNameLabel = "",
  terms,
  onTermsClick,
}: CheckBoxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isChecked, setIsChecked] = useState(false);

  let errorMessage: string | undefined;
  if (errors["checkBox"]) {
    if (typeof errors["checkBox"] === "string") {
      errorMessage = errors["checkBox"];
    } else if ((errors["checkBox"] as FieldError)?.message) {
      errorMessage = (errors["checkBox"] as FieldError).message;
    }
  }

  const handleChange: ChangeHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex gap-2 ml-auto cursor-pointer items-center">
      <input
        type="checkbox"
        id="checkbox"
        className="peer sr-only"
        {...register("checkBox")}
        onChange={handleChange}
      />
      <div className="flex flex-col">
        <label
          htmlFor="checkbox"
          className={`cursor-pointer ${classNameLabel}`}
          onClick={onTermsClick}
        >
          <span className="relative inline-block w-5 h-5 border-2 border-gray-300 rounded">
            {isChecked && (
              <SvgIcon
                name="accept"
                width="15"
                height="15"
                className="absolute w-4 h-4 ml-auto block text-brand-primary top-0 left-0"
              />
            )}
          </span>
          {terms && <span>{terms}</span>}
          <span>{labelText}</span>
        </label>
        {errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
