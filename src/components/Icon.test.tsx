import { shallow } from "enzyme";
import { Icon } from "./Icon";

describe("<Icon />", () => {
  it("renders icon", () => {
    expect(shallow(<Icon icon="done" size="20px" />)).toMatchSnapshot();
  });
});
