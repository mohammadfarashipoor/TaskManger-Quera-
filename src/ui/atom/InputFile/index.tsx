import { Button } from "../Button";

interface InputFileProps {
  labelText: string;
  iconName?: string;
}
const InputFile: React.FC<InputFileProps> = (props) => {
  const { labelText, iconName } = props;
  return (
    <div className="w-full">
      <input
        type="file"
        className="hidden"
        id="hidden-file-input"
        name="thumbnail"
      />
      <div
        className={`flex items-center justify-center gap-2 rounded border border-brand-primary`}
      >
        <Button
          isprimary={false}
          isBold
          type="button"
          iconName={iconName ?? ""}
        >
          <label htmlFor="hidden-file-input" className="cursor-pointer">
            {labelText}
          </label>
        </Button>
      </div>
    </div>
  );
};

export default InputFile;
