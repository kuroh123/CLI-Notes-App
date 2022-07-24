const { dayOfTheWeek } = require("./app-2");

describe("getDay returns the long-format day of the week", () => {
  it("some test", () => {
    const day = dayOfTheWeek(new Date("3/11/2020"));
    expect(day).toBe("Wednesday");
  });
});
