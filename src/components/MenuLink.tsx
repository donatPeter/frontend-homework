import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  icon: string;
  href: string;
  color?: string;
};

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.color};
  align-items: center;
  padding: 6px 16px;
`;

export const MenuText = styled.span`
  margin-left: 8px;
`;

const MenuLink = ({ icon, text, href, color }: Props) => (
  <StyledLink to={href} color={color || "inherit"}>
    <Icon icon={icon} size="20px" />
    <MenuText>{text}</MenuText>
  </StyledLink>
);

export default MenuLink;
