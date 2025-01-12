import { FC } from "react";

interface CustomSelectProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
}

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div>
      <div>{label}</div>
      {options.map((item) => {
        return (
          <div key={item.value} onClick={() => onChange(item.value)}>
            {item.label}
            {item.value === value && <> - Выбрано</>}
          </div>
        );
      })}
    </div>
  );
};

export default CustomSelect;
