import Text from "../../atoms/text";

export type AbsenceTypeType = "sickness" | "vacation";

export interface AbsenceTypeProps {
  type: AbsenceTypeType;
  className: string;
}

const AbsenceType: React.FC<AbsenceTypeProps> = ({ type, className }) => {
  let text = "";
  let classNameByType = "";
  switch (type as string) {
    case "sickness":
      text = "Sickness";
      classNameByType = " bg-red-200";
      break;
    case "vacation":
      text = "Vacation";
      classNameByType = " bg-green-200";
      break;
  }

  return (
    <Text
      tag="p"
      className={
        "text-sm rounded px-2 w-fit h-fit" + classNameByType + " " + className
      }
    >
      {text}
    </Text>
  );
};

export default AbsenceType;
