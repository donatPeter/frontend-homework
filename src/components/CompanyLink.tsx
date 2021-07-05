import React from "react";
import { Company } from "../types/types";
import styled from "styled-components";
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
  isSelected: boolean;
  onClick: (companyId: number) => void;
}

export const CompanyLink = ({
  company: { name, id },
  isSelected,
  onClick,
}: Props) => {
  const handleCompanySelect = () => {
    onClick(id);
  };

  return (
    <StyledCompanyLinkName
      role="menuitem"
      $isSelected={isSelected}
      onClick={handleCompanySelect}
    >
      {name}
      {isSelected && <Icon icon="done" size="20px" />}
    </StyledCompanyLinkName>
  );
};
