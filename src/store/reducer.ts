import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { Action, Company } from "../types/types";
import * as actions from "./actions";

export const isDropdownMenuVisible = createReducer<boolean, Action>(false)
  .handleAction(actions.closeDropdown, () => false)
  .handleAction(actions.openDropdown, () => true);

export const selectedCompanyId = createReducer<number | null, Action>(
  null
).handleAction(actions.setSelectedCompanyId, (_, action) => action.payload);

export const companies = createReducer<Array<Company>, Action>([]);

export default combineReducers({
  isDropdownMenuVisible,
  selectedCompanyId,
  companies,
});
