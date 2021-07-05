import React from "react";
import MenuLink from "./MenuLink";
import Companies from "./Companies";
import styled from "styled-components";

const DropdownMenuContainer = styled.div`
  width: 304px;
  background: #ffffff;
  border: 1px solid #dcdce0;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(51, 51, 51, 0.24);
  border-radius: 8px;

  position: absolute;
  top: 65px;
`;

const DropdownMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LinksContainer = styled.div`
  padding: 8px 0;
  width: 100%;
  border-bottom: 1px solid #dcdce0;
`;

const DropdownMenu = () => (
  <DropdownMenuContainer>
    <DropdownMenuList>
      <Companies />

      <LinksContainer>
        <MenuLink
          text="Get the mobile app"
          icon="phone_iphone"
          href="/get-app"
        />
        <MenuLink text="Community" icon="people" href="/community" />
        <MenuLink text="Knowledge base" icon="book" href="/help" />
      </LinksContainer>

      <LinksContainer>
        <MenuLink text="Settings" icon="settings" href="/settings" />
        <MenuLink
          text="Log out"
          icon="exit_to_app"
          href="/logout"
          color="#D33649"
        />
      </LinksContainer>
    </DropdownMenuList>
  </DropdownMenuContainer>
);

export default DropdownMenu;
