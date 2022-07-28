import { Member } from "../../../common/types/api/member";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import AbsenceStatus from "../absenceStatus";
import { AbsenceStatusType } from "../absenceStatus/AbsenceStatus";
import AbsenceType from "../absenceType";

export interface AbsenceCodeProps {
  admitterId: number;
  admitterNote: string;
  confirmedAt: Date;
  createdAt: Date;
  crewId: number;
  endDate: Date;
  id: number;
  memberNote: string;
  rejectedAt: Date;
  startDate: Date;
  type: "sickness" | "vacation";
  userId: number;
  member: Member;
}

export const AbsenceCard: React.FC<AbsenceCodeProps> = ({
  admitterId,
  admitterNote,
  confirmedAt,
  createdAt,
  crewId,
  endDate,
  id,
  memberNote,
  rejectedAt,
  startDate,
  type,
  userId,
  member,
}) => {
  let status: AbsenceStatusType = "requested";

  if (confirmedAt) {
    status = "confirmed";
  }
  if (rejectedAt) {
    status = "rejected";
  }

  return (
    <div className="mt-5 p-3 shadow-lg  rounded h-[275px]  bg-white border flex flex-col">
      <div className="basis-2/6  grow-0 flex flex-row content-start">
        <div className="basis-1/6 flex">
          <Image url={member.image} alt="" />
        </div>
        <div className="basis-5/6 flex flex-col">
          <div className="basis-1/6  flex justify-end">
            <AbsenceType type={type}></AbsenceType>
          </div>
          <div className="basis-4/6 px-2 flex flex-col justify-center">
            <Heading tag="h5">{member.name}</Heading>
          </div>
          <div className="basis-1/6  flex flex-col"></div>
        </div>
      </div>
      <div className="basis-5/6 p-2">
        <AbsenceStatus status={status} />
        <Text tag="p" className="">
          {" "}
          From : {startDate.toDateString()}
        </Text>
        <Text tag="p"> To : {endDate.toDateString()}</Text>

        <Text tag="p"> Note : {memberNote}</Text>
      </div>
    </div>
  );
};
