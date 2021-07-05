import { shallow } from "enzyme";
import MenuLink from "./MenuLink";

describe("<MenuLink />", () => {
  it("renders link", () => {
    expect(
      shallow(<MenuLink href="" icon="phone" text="Call me" />)
    ).toMatchSnapshot();
  });
});
