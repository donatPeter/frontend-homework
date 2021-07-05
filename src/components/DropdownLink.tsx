import React, { useCallback } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Company, ReduxState } from "../types/types";
import {
  getCompanies,
  getIsDropdownMenuVisible,
  getSelectedCompanyId,
} from "../store/selectors";
import { openDropdown, closeDropdown } from "../store/actions";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useRef } from "react";

type ReduxProps = {
  isDropdownMenuVisible: boolean;
  companies: Array<Company>;
  selectedCompanyId: number | null;
};

type DispatchProps = {
  openDropdown: () => void;
  closeDropdown: () => void;
};

export type Props = ReduxProps & DispatchProps;

export const DropdownLink = ({
  isDropdownMenuVisible,
  openDropdown,
  closeDropdown,
  companies,
  selectedCompanyId,
}: Props) => {
  const selectedCompanyName =
    companies && companies.find((i) => i.id === selectedCompanyId)?.name;
  const refObject = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    ({ target }: any) => {
      if (!refObject?.current?.contains(target) && isDropdownMenuVisible) {
        closeDropdown();
      }
    },
    [isDropdownMenuVisible, closeDropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div
        ref={refObject}
        className="nav__link"
        onClick={isDropdownMenuVisible ? closeDropdown : openDropdown}
        data-test-nav-link
      >
        <div className="nav__link-text-wrapper">
          <div className="nav__link-text">Elon Musk</div>
          <div className="nav__link-subtext">{selectedCompanyName}</div>
        </div>
        <i className="material-icons-outlined nav__link-icon">settings</i>
      </div>

      {isDropdownMenuVisible && <DropdownMenu />}
    </>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    companies: getCompanies,
    selectedCompanyId: getSelectedCompanyId,
  }),
  { openDropdown, closeDropdown }
)(DropdownLink);
