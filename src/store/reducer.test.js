import { setSelectedCompanyId, closeDropdown, openDropdown } from "./actions";
import { isDropdownMenuVisible, selectedCompanyId } from "./reducer";

const doesNotUpdateState = (reducer, initialState) => {
  it("does not update state on a random action", () => {
    expect(reducer(initialState, { type: "random" })).toEqual(initialState);
  });
};

describe("isDropdownMenuVisible()", () => {
  it("set isDropdownMenuVisible state to false on closeDropdown", () => {
    expect(isDropdownMenuVisible(true, closeDropdown())).toBe(false);
  });

  it("set isDropdownMenuVisible state to true on openDropdown", () => {
    expect(isDropdownMenuVisible(true, openDropdown())).toBe(true);
  });

  doesNotUpdateState(isDropdownMenuVisible, false);
});

describe("selectedCompanyId()", () => {
  it("sets given value to state on actions.setSelectedCompanyId", () => {
    expect(selectedCompanyId(null, setSelectedCompanyId(123))).toBe(123);
  });

  doesNotUpdateState(selectedCompanyId, null);
});
