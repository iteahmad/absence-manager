import { pagination } from "./pagination";

const data = [0, 1, 3, 4, 5, 6, 7, 8, 9];

describe("pagination", () => {
  it("with default parameters", async () => {
    const { page, totalPageCount } = pagination(data, 0, 5);
    expect(page.length).toEqual(5);
    expect(totalPageCount).toEqual(2);
  });
  it("should throw an error : pageSize cannot be 0", async () => {
    const t = () => {
      pagination(data, 0, 0);
    };
    expect(t).toThrow("pageSize cannot be 0");
  });

  it("should throw a range error : pageNumber is out of range", async () => {
    const t = () => {
      pagination(data, 9, 5);
    };
    expect(t).toThrow(RangeError);
  });
});
