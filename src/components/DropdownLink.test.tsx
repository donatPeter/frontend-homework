import { shallow } from "enzyme";
import { DropdownLink } from "./DropdownLink";

describe("<DropdownLink />", () => {
  const toggleDropdownMenuVisibilityMock = jest.fn();

  const render = (props: any) =>
    shallow(
      <DropdownLink
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        {...props}
      />
    );

  it("renders without dropdown menu", () => {
    expect(render({ isDropdownMenuVisible: false })).toMatchSnapshot();
  });

  it("renders with dropdown menu", () => {
    expect(render({ isDropdownMenuVisible: true })).toMatchSnapshot();
  });

  it("calls toggleDropdownMenuVisibility when nav link is clicked", () => {
    const component = render({ isDropdownMenuVisible: false });
    component.find("[data-test-nav-link]").simulate("click");

    expect(toggleDropdownMenuVisibilityMock).toHaveBeenCalled();
  });

  it("display selected company name", () => {
    const companies = [
      { id: 1, name: "Dummy company" },
      { id: 2, name: "Smarty company" },
    ];
    const selectedCompanyId = 2;
    const component = render({
      isDropdownMenuVisible: false,
      companies,
      selectedCompanyId,
    });

    expect(component.find(".nav__link-subtext").text()).toBe("Smarty company");
  });
});
