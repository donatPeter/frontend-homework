import { shallow } from "enzyme";
import { Companies, Title } from "./Companies";

describe("<Companies />", () => {
  const companies = [
    { id: 1, name: "Dummy company" },
    { id: 2, name: "Smarty company" },
  ];

  it("renders list of company links", () => {
    expect(shallow(<Companies companies={companies} />)).toMatchSnapshot();
  });

  it("renders the title of the company list", () => {
    const wrapper = shallow(<Companies companies={companies} />);

    expect(wrapper.find(Title).text()).toBe("Your companies");
  });
});
