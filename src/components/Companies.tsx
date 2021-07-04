import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReduxState, Company } from "../types/types";
import { getCompanies } from "../store/selectors";

import CompanyLink from "./CompanyLink";
import styled from "styled-components";

const Title = styled.p`
  text-transform: uppercase;
  color: #717175;
  margin: 12px 16px 4px 16px;
`;

const CompaniesContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #dcdce0;
`;

type ReduxProps = {
  companies: Array<Company>;
};

export const Companies = ({ companies }: ReduxProps) => (
  <CompaniesContainer>
    <Title>Your companies</Title>

    {companies.map((company) => (
      <CompanyLink key={company.id} company={company} />
    ))}
  </CompaniesContainer>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies);
