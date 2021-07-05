import React, { useCallback } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Company, ReduxState } from "../types/types";
import {
  getCompanies,
  getIsDropdownMenuVisible,
  getSelectedCompanyId,
} from "../store/selectors";
import { toggleDropdownMenuVisibility } from "../store/actions";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useRef } from "react";

type ReduxProps = {
  isDropdownMenuVisible: boolean;
  companies: Array<Company>;
  selectedCompanyId: number | null;
};

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void;
};

export type Props = ReduxProps & DispatchProps;

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  companies,
  selectedCompanyId,
}: Props) => {
  const selectedCompanyName =
    companies && companies.find((i) => i.id === selectedCompanyId)?.name;
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    ({ target }: Event) => {
      // @ts-ignore
      if (!ref?.current?.contains(target) && isDropdownMenuVisible) {
        toggleDropdownMenuVisibility();
      }
    },
    [isDropdownMenuVisible, toggleDropdownMenuVisibility]
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div
        ref={ref}
        className="nav__link"
        onClick={toggleDropdownMenuVisibility}
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
  { toggleDropdownMenuVisibility }
)(DropdownLink);
