import { ColorInformation } from "../Box";
import { Button } from "@/ui/atom/Button";
import { useState } from "react";
import WorkSpaceInput from "./WorkSpaceInput";
import WorkSpaceColor from "./WorkSpaceColor";
import WorkSpaceInfo from "./WorkSpaceInfo";

export default function NewWorkSpaceModal() {
  const [step, setStep] = useState(0);
  function backStep() {
    setStep((prev) => prev - 1);
  }
  const stepDetil = [
    { title: "ساخت ورک اسپیس جدید", body: <WorkSpaceInput /> },
    { title: "انتخاب رنگ ورک اسپیس", body: <WorkSpaceColor /> },
    { title: "مرور اطلاعات", body: <WorkSpaceInfo /> },
  ];
  return (
    <ColorInformation
      toggle={backStep}
      isBackIcon={!(step === 0)}
      isOpen={true}
      title={stepDetil[step].title}
      height={"auto"}
    >
      {stepDetil[step].body}
      <Button
        className="w-full mt-3 "
        onclick={
          step === 2
            ? () => console.log("hi")
            : () => setStep((prev) => prev + 1)
        }
      >
        {step === 2 ? "ساخت ورک اسپیس" : "ادامه"}
      </Button>
    </ColorInformation>
  );
}
