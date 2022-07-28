import React from "react";
import Select from "react-select";

export interface SelectListOption {
  value: string | number;
  label: string;
}

export interface SelectListProps {
  name: string;
  onChange?: React.EventHandler<any>;
  active?: boolean | undefined;
  value?: SelectListOption;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  options: SelectListOption[];
}

export const SelectList: React.FC<SelectListProps> = ({
  name,
  value,
  active,
  isLoading,
  isClearable,
  isDisabled,
  onChange,
  className,
  options,
  placeholder = "Select",
}) => {
  isDisabled = isDisabled || isLoading;

  return (
    <Select
      placeholder={placeholder}
      value={value}
      className={` ${className}`}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isClearable={isClearable}
      name={name}
      options={options}
      onChange={onChange}
    />
  );
};
