import React from "react";

export interface DatePickerProps {
  onChange?: React.EventHandler<any>;
  disabled?: boolean;
  value?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  className,
  disabled = false,
}) => {
  return (
    <input
      type="date"
      value={value}
      className={`w-full rounded px=4 border border-gray-300 p-1
      ${className}`}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
