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
`;

const DropdownMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Separator = styled.div`
  position: absolute;
  height: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  /* Grey/Grey 3 */

  border: 1px solid #dcdce0;
`;

const DropdownMenu = () => (
  <DropdownMenuContainer>
    <DropdownMenuList>
      <Companies />

      <div>
        <MenuLink
          text="Get the mobile app"
          icon="phone_iphone"
          href="/get-app"
        />
        <MenuLink text="Community" icon="people" href="/community" />
        <MenuLink text="Knowledge base" icon="book" href="/help" />
      </div>

      <div>
        <MenuLink text="Settings" icon="settings" href="/settings" />
        <MenuLink text="Log out" icon="exit_to_app" href="/logout" />
      </div>
    </DropdownMenuList>
  </DropdownMenuContainer>
);

export default DropdownMenu;
