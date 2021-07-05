import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReduxState, Company } from "../types/types";
import { getCompanies, getSelectedCompanyId } from "../store/selectors";
import { CompanyLink } from "./CompanyLink";
import styled from "styled-components";
import {
  setSelectedCompanyId,
  toggleDropdownMenuVisibility,
} from "../store/actions";

export const Title = styled.p`
  text-transform: uppercase;
  color: #717175;
  margin: 12px 16px 4px 16px;
  font-weight: bold;
`;

const CompaniesContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #dcdce0;
`;

type ReduxProps = {
  companies: Array<Company>;
  selectedCompanyId: number | null;
};

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
  toggleDropdownMenuVisibility: () => void;
};

export const Companies = ({
  companies,
  selectedCompanyId,
  setSelectedCompanyId,
  toggleDropdownMenuVisibility,
}: ReduxProps & DispatchProps) => {
  const handleOnClick = (companyId: number) => {
    setSelectedCompanyId(companyId);
    if (selectedCompanyId !== companyId) {
      toggleDropdownMenuVisibility();
    }
  };
  return (
    <CompaniesContainer>
      <Title>Your companies</Title>

      {companies.map((company) => (
        <CompanyLink
          key={company.id}
          company={company}
          isSelected={selectedCompanyId === company.id}
          onClick={handleOnClick}
        />
      ))}
    </CompaniesContainer>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId, toggleDropdownMenuVisibility }
)(Companies);
