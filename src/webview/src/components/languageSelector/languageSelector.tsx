import { CustomCombobox } from '../customComboBox/customCombobox';

interface ILanguageSelectorProps {
  selectedLanguage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedLanguage: (value: any) => void;
}

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
}: ILanguageSelectorProps) {
  return (
    <div className="text-xs">
      <CustomCombobox
        options={[]}
        selectedValue={selectedLanguage}
        setSelectedValue={setSelectedLanguage}
        placeholder="Select Language"
      />
    </div>
  );
}

export default LanguageSelector;
