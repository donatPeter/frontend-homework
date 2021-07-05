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

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  companies,
  selectedCompanyId,
}: ReduxProps & DispatchProps) => {
  const selectedCompanyName =
    companies && companies.find((i) => i.id === selectedCompanyId)?.name;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside({ target }: any) {
      if (!ref?.current?.contains(target) && isDropdownMenuVisible) {
        toggleDropdownMenuVisibility();
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, toggleDropdownMenuVisibility, isDropdownMenuVisible]);

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
