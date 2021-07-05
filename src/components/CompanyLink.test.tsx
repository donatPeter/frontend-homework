import { shallow } from "enzyme";
import CompanyLink from "./CompanyLink";

describe("<CompanyLink />", () => {
  const toggleDropdownMenuVisibilityMock = jest.fn();
  const setSelectedCompanyId = jest.fn();

  const render = (props: any) =>
    shallow(
      <CompanyLink
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        setSelectedCompanyId={setSelectedCompanyId}
        {...props}
      />
    );

  it("renders link", () => {
    expect(render({ selectedCompanyId: 1 })).toMatchSnapshot();
  });
});
