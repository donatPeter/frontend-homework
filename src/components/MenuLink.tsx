import styled from "styled-components";
import { Icon } from "./Icon";

type Props = {
  text: string;
  icon: string;
  href: string;
  color?: string;
};

export const StyledLink = styled.a<{ $color: string }>`
  display: flex;
  text-decoration: none;
  color: ${({ $color }) => $color};
  align-items: center;
  padding: 6px 16px;
`;

export const MenuText = styled.span`
  margin-left: 8px;
`;

const MenuLink = ({ icon, text, href, color }: Props) => (
  <StyledLink href={href} $color={color || "inherit"}>
    <Icon icon={icon} size="20px" />
    <MenuText>{text}</MenuText>
  </StyledLink>
);

export default MenuLink;
