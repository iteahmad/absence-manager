import assert from "assert";
import { absences } from "./api";

const everyItemContainsKey = (key: string) => (collection: any) =>
  collection.forEach((item: any) => assert(Object.keys(item).includes(key)));

describe("absences", () => {
  describe("every absence has key", () => {
    [
      "admitterNote",
      "confirmedAt",
      "createdAt",
      "crewId",
      "endDate",
      "id",
      "memberNote",
      "rejectedAt",
      "startDate",
      "type",
      "userId",
    ].forEach((key) => {
      it(key, async () => {
        const response = await absences();
        everyItemContainsKey(key)(response.data);
      });
    });
  });
});
