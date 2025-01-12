import React, { FC } from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label}
      <input {...props} />
    </div>
  );
};

export default CustomInput;
