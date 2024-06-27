import { Button } from "../Button";

interface InputFileProps {
  name: string;
  labelText: string;
  iconName?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent) => void;
}
const InputFile: React.FC<InputFileProps> = (props) => {
  const { labelText, iconName, name, onChange, accept = "*" } = props;

  return (
    <div className="w-full">
      <input
        type="file"
        className="hidden"
        id="hidden-file-input"
        accept={accept}
        name={name}
        onChange={(e) => onChange(e)}
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
