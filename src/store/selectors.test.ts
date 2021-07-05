import {
  getIsDropdownMenuVisible,
  isCompanySelected,
  getCompanies,
  getSelectedCompanyId,
} from "./selectors";
import { initialState } from "./store";

describe("getIsDropdownMenuVisible()", () => {
  const state = { ...initialState, isDropdownMenuVisible: true };

  it("returns value from state", () => {
    expect(getIsDropdownMenuVisible(state)).toBe(true);
  });
});

describe("isCompanySelected()", () => {
  const state = { ...initialState, selectedCompanyId: 1 };

  it("returns true when given company id matches selectedCompanyId", () => {
    expect(isCompanySelected(state, { company: { id: 1, name: "" } })).toBe(
      true
    );
  });

  it("returns false when given company id differs from selectedCompanyId", () => {
    expect(isCompanySelected(state, { company: { id: 2, name: "" } })).toBe(
      false
    );
  });
});

describe("getCompanies()", () => {
  const state = {
    ...initialState,
    companies: [{ id: 1, name: "Dummy company" }],
  };

  it("returns value from state", () => {
    expect(getCompanies(state)).toEqual([{ id: 1, name: "Dummy company" }]);
  });
});

describe("getSelectedCompanyId()", () => {
  const state = {
    ...initialState,
    selectedCompanyId: 1,
  };

  it("returns value from state", () => {
    expect(getSelectedCompanyId(state)).toEqual(1);
  });
});
