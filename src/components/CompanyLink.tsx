import { Company, ReduxState } from "../types/types";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSelectedCompanyId } from "../store/selectors";
import { createStructuredSelector } from "reselect";
import { setSelectedCompanyId } from "../store/actions";

const StyledCompanyLinkName = styled.div<{ $isSelected: boolean }>`
  padding: 12px 17px;
  font-weight: bold;
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
`;

interface Props {
  company: Company;
}

type ReduxProps = {
  selectedCompanyId: number | null;
};

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
};

const CompanyLink = ({
  company: { name, id },
  selectedCompanyId,
  setSelectedCompanyId,
}: Props & ReduxProps & DispatchProps) => {
  const handleCompanySelect = () => setSelectedCompanyId(id);

  return (
    <StyledCompanyLinkName
      $isSelected={selectedCompanyId === id}
      onClick={handleCompanySelect}
    >
      {name}
      <i />
    </StyledCompanyLinkName>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId }
)(CompanyLink);
