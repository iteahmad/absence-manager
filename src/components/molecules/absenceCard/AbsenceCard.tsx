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
    // <div className="mt-5 p-3 shadow-lg  rounded h-[295px]  min-h-fit bg-white border flex flex-col">
    //   <div className="basis-2/6  grow-0 flex flex-row content-start">
    //     <div className="basis-1/6 flex">
    //       <Image url={member.image} alt="" />
    //     </div>
    //     <div className="basis-5/6 flex flex-col">
    //       <div className="basis-1/6  flex justify-end">
    //         <AbsenceType type={type}></AbsenceType>
    //       </div>
    //       <div className="basis-4/6 px-2 flex flex-col justify-center">
    //         <Heading tag="h5">{member.name}</Heading>
    //       </div>
    //       <div className="basis-1/6  flex flex-col"></div>
    //     </div>
    //   </div>
    //   <div className="basis-5/6 p-2">
    //     <AbsenceStatus status={status} />
    //     <Text tag="p">From : {startDate.toDateString()}</Text>
    //     <Text tag="p"> To : {endDate.toDateString()}</Text>

    //     {confirmedAt && (
    //       <Text tag="p"> Confirmed at : {confirmedAt.toDateString()}</Text>
    //     )}

    //     {rejectedAt && (
    //       <Text tag="p"> Rejected at : {rejectedAt.toDateString()}</Text>
    //     )}
    //     {memberNote && <Text tag="p"> Member Note : {memberNote}</Text>}
    //     {admitterNote && <Text tag="p"> Admitter Note : {admitterNote}</Text>}
    //   </div>
    // </div>
    //
    <div className="max-w-md w-[450px] h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-300 mb-6 py-5 px-4">
      <div>
        <div className="flex flex-row  w-full">
          <Heading className="grow" tag="h3">
            {member.name}
          </Heading>
          <AbsenceType className="justify-self-end" type={type}></AbsenceType>
        </div>
        {createdAt && (
          <Text tag="p" className="focus:outline-none text-sm">
            <strong>Created at:</strong> {createdAt.toDateString()}
          </Text>
        )}
        {rejectedAt && (
          <Text tag="p" className="focus:outline-none text-sm">
            <strong>Rejected at:</strong> {rejectedAt.toDateString()}
          </Text>
        )}
        {confirmedAt && (
          <Text tag="p" className="focus:outline-none text-sm">
            <strong>Confirmed at:</strong> {confirmedAt.toDateString()}
          </Text>
        )}
        {memberNote && (
          <Text tag="p" className="focus:outline-none text-sm">
            <strong>Member Note:</strong> {memberNote}
          </Text>
        )}
        {admitterNote && (
          <Text tag="p" className="focus:outline-none text-sm">
            <strong>Admitter Note:</strong> {admitterNote}
          </Text>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800">
          <div className="flex flex-col items-start justify-between text-gray-800">
            <Text
              tag="p"
              className="focus:outline-none text-sm dark:text-gray-100"
            >
              From : {startDate.toDateString()}
            </Text>

            <Text
              tag="p"
              className="focus:outline-none text-sm dark:text-gray-100"
            >
              To : {endDate.toDateString()}
            </Text>
          </div>
          <div className="w-16 h-16 text-white flex items-center justify-center">
            <img
              src={member.image}
              className="rounded-xl object-scale-down"
              alt="member"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
