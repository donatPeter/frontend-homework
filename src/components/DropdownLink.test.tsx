import React from "react";
import { shallow } from "enzyme";
import { DropdownLink, Props } from "./DropdownLink";

describe("<DropdownLink />", () => {
  const openDropdownMock = jest.fn();
  const closeDropdownMock = jest.fn();

  const initialProps: Props = {
    openDropdown: openDropdownMock,
    closeDropdown: closeDropdownMock,
    isDropdownMenuVisible: true,
    selectedCompanyId: 1,
    companies: [],
  };

  const render = (props: Props) => shallow(<DropdownLink {...props} />);

  it("renders without dropdown menu", () => {
    expect(
      render({ ...initialProps, isDropdownMenuVisible: false })
    ).toMatchSnapshot();
  });

  it("renders with dropdown menu", () => {
    expect(
      render({ ...initialProps, isDropdownMenuVisible: true })
    ).toMatchSnapshot();
  });

  it("calls openDropdown when nav link is clicked", () => {
    const component = render({ ...initialProps, isDropdownMenuVisible: false });
    component.find("[data-test-nav-link]").simulate("click");

    expect(openDropdownMock).toHaveBeenCalled();
  });

  it("display selected company name", () => {
    const companies = [
      { id: 1, name: "Dummy company" },
      { id: 2, name: "Smarty company" },
    ];
    const selectedCompanyId = 2;
    const component = render({
      ...initialProps,
      isDropdownMenuVisible: false,
      companies,
      selectedCompanyId,
    });

    expect(component.find(".nav__link-subtext").text()).toBe("Smarty company");
  });
});
