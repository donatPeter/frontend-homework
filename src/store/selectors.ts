import { ReduxState, Company } from "../types/types";

export const getIsDropdownMenuVisible = (state: ReduxState): boolean =>
  state.isDropdownMenuVisible;

export const isCompanySelected = (
  state: ReduxState,
  props: { company: Company }
): boolean => state.selectedCompanyId === props.company.id;

export const getCompanies = (state: ReduxState): Company[] => state.companies;

export const getSelectedCompanyId = (state: ReduxState): number | null =>
  state.selectedCompanyId;
