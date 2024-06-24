import React, { useState } from "react";
import SvgIcon from "@/ui/atom/SvgIcon";
import { FieldError, useFormContext } from "react-hook-form";
import { OutBox } from "@/ui/molocol/Box";

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface CheckBoxProps {
  acceptedTerms?: boolean;
  terms?: React.ReactNode;
  onChange?: ChangeHandler;
  labelText?: string;
  classNameLabel?: string;
}

const CheckBox = ({
  // acceptedTerms,
  onChange,
  labelText = "",
  classNameLabel = "",
  terms,
}: CheckBoxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [modalOpen, setModalOpen] = useState(false);

  const handleLabelClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange: ChangeHandler = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  let errorMessage: string | undefined;
  if (errors["checkBox"]) {
    if (typeof errors["checkBox"] === "string") {
      errorMessage = errors["checkBox"];
    } else if ((errors["checkBox"] as FieldError)?.message) {
      errorMessage = (errors["checkBox"] as FieldError).message;
    }
  }
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
          onClick={handleLabelClick} // Open modal on label click
        >
          <span className="relative inline-block w-5 h-5 border-2 border-gray-300 rounded checked:border-brand-primary checked:bg-brand-secondary">
            <SvgIcon
              name="accept"
              width="15"
              height="15"
              className="absolute w-4 h-4 ml-auto hidden peer-checked:block text-brand-primary"
            />
          </span>
          {terms && <span>{terms}</span>}
          <span>{labelText}</span>
        </label>
        {/* {errors["checkBox"] && typeof errors["checkBox"] === "object" && (
          <span className="text-red-500 text-sm">
            {errors["checkBox"].message}
          </span>
        )} */}
        {errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
      <OutBox
        isOpen={modalOpen}
        toggle={handleCloseModal}
        title="قوانین و مقررات"
        className="w-[800px] h-[509px]"
      >
        <p>fdfdgdf</p>
      </OutBox>
    </div>
  );
};

export default CheckBox;
