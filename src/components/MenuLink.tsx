import styled from "styled-components";

type Props = {
  text: string;
  icon: string;
  href: string;
};

const Icon = styled.i`
  font-size: 15px;
`;

const StyledLink = styled.a`
  display: flex;
`;

const MenuLink = ({ icon, text, href }: Props) => (
  <StyledLink href={href}>
    <Icon className="material-icons">{icon}</Icon>
    {text}
  </StyledLink>
);

export default MenuLink;
