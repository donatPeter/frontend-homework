import React from "react";
import { shallow } from "enzyme";
import { Companies, Title } from "./Companies";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Companies />", () => {
  const closeDropdownMock = jest.fn();
  const setSelectedCompanyIdMock = jest.fn();
  const companies = [
    { id: 1, name: "Dummy company" },
    { id: 2, name: "Smarty company" },
  ];

  it("renders list of company links", () => {
    expect(
      shallow(
        <Companies
          setSelectedCompanyId={setSelectedCompanyIdMock}
          closeDropdown={closeDropdownMock}
          selectedCompanyId={1}
          companies={companies}
        />
      )
    ).toMatchSnapshot();
  });

  it("renders the title of the company list", () => {
    const wrapper = shallow(
      <Companies
        setSelectedCompanyId={setSelectedCompanyIdMock}
        closeDropdown={closeDropdownMock}
        selectedCompanyId={1}
        companies={companies}
      />
    );

    expect(wrapper.find(Title).text()).toBe("Your companies");
  });

  it("invoke setSelectedCompanyId and closeDropdown on click", () => {
    const { getByText } = render(
      <Companies
        setSelectedCompanyId={setSelectedCompanyIdMock}
        closeDropdown={closeDropdownMock}
        selectedCompanyId={1}
        companies={companies}
      />
    );

    expect(setSelectedCompanyIdMock).not.toHaveBeenCalled();
    expect(closeDropdownMock).not.toHaveBeenCalled();
    userEvent.click(getByText("Smarty company"));
    expect(setSelectedCompanyIdMock).toHaveBeenCalledWith(2);
    expect(closeDropdownMock).toHaveBeenCalledTimes(1);
  });
});
