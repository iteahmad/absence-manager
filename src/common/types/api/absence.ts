import { Member } from "./member";

export interface Absence {
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
