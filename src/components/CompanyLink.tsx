import { Company, ReduxState } from "../types/types";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import { getSelectedCompanyId, isCompanySelected } from "../store/selectors";
import { createStructuredSelector } from "reselect";

const StyledCompanyLinkName = styled.div<{ $isSelected: boolean }>`
  padding: 12px 17px;
  font-weight: bold;
  background: ${({ $isSelected }) =>
    $isSelected ? "rgba(55, 164, 71, 0.1)" : "unset"};
`;

interface Props {
  company: Company;
}

type ReduxProps = {
  selectedCompanyId: number | null;
};

const CompanyLink = ({
  company: { name, id },
  selectedCompanyId,
}: Props & ReduxProps) => {
  return (
    <StyledCompanyLinkName $isSelected={selectedCompanyId === id}>
      {name}
      <i />
    </StyledCompanyLinkName>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    selectedCompanyId: getSelectedCompanyId,
  })
)(CompanyLink);

// export default CompanyLink;
