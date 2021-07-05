import { shallow } from "enzyme";
import { CompanyLink } from "./CompanyLink";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<CompanyLink />", () => {
  const toggleDropdownMenuVisibilityMock = jest.fn();
  const setSelectedCompanyIdMock = jest.fn();
  const company = { id: 1, name: "Dummy Company" };

  const wrapper = (props: any) =>
    shallow(
      <CompanyLink
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        setSelectedCompanyId={setSelectedCompanyIdMock}
        company={company}
        {...props}
      />
    );

  it("renders link", () => {
    expect(wrapper({})).toMatchSnapshot();
  });

  it("invokes onClick callback on click", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <CompanyLink company={company} onClick={onClick} isSelected={true} />
    );
    expect(onClick).not.toHaveBeenCalled();
    userEvent.click(getByRole("menuitem"));
    expect(onClick).toHaveBeenCalled();
  });
});
