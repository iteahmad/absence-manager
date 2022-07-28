import Text from "../../atoms/text";

export type AbsenceStatusType = "confirmed" | "rejected" | "requested";

export interface AbsenceStatusProps {
  status: AbsenceStatusType;
}

const AbsenceStatus: React.FC<AbsenceStatusProps> = ({ status }) => {
  let text = "";

  switch (status as string) {
    case "confirmed":
      text = "Confirmed";
      break;
    case "rejected":
      text = "Rejected";
      break;
    case "requested":
      text = "Requested";
      break;
  }

  return <Text tag="p">Status: {text}</Text>;
};

export default AbsenceStatus;
