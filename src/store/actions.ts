import { createAction } from "typesafe-actions";

export const closeDropdown = createAction("CLOSE_DROPDOWN")();

export const openDropdown = createAction("OPEN_DROPDOWN")();

export const setSelectedCompanyId = createAction(
  "SET_SELECTED_COMPANY_ID"
)<number>();
