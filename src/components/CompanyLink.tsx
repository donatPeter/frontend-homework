import { Company, ReduxState } from "../types/types";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSelectedCompanyId } from "../store/selectors";
import { createStructuredSelector } from "reselect";
import {
  setSelectedCompanyId,
  toggleDropdownMenuVisibility,
} from "../store/actions";
import { Icon } from "./Icon";

const StyledCompanyLinkName = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 17px;
  font-weight: bold;
  color: ${({ $isSelected }) => ($isSelected ? "#157123" : "unset")};
  background: ${({ $isSelected }) =>
    $isSelected ? "rgba(55, 164, 71, 0.1)" : "unset"};
  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? "rgba(55, 164, 71, 0.2)" : "#f7f7f9"};
  }
  &:focus {
    background: ${({ $isSelected }) =>
      $isSelected ? "rgba(55, 164, 71, 0.2)" : "#f7f7f9"};
  }
  &:active {
    background: #eeeef2;
  }
  cursor: pointer;
`;

interface Props {
  company: Company;
}

type ReduxProps = {
  selectedCompanyId: number | null;
};

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
  toggleDropdownMenuVisibility: () => void;
};

const CompanyLink = ({
  company: { name, id },
  selectedCompanyId,
  setSelectedCompanyId,
  toggleDropdownMenuVisibility,
}: Props & ReduxProps & DispatchProps) => {
  const handleCompanySelect = () => {
    setSelectedCompanyId(id);
    if (selectedCompanyId !== id) toggleDropdownMenuVisibility();
  };

  return (
    <StyledCompanyLinkName
      $isSelected={selectedCompanyId === id}
      onClick={handleCompanySelect}
    >
      {name}
      {selectedCompanyId === id && <Icon icon="done" size="20px" />}
    </StyledCompanyLinkName>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId, toggleDropdownMenuVisibility }
)(CompanyLink);
