import React from "react";
import { getByTestId, render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the <Loading /> component", () => {
    const { container, getByTestId } = render(
      <Loading src="/images/chris.png" data-testid="loading" />
    );

    expect(getByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("redners the <Loading.ReleaseBody />", () => {
    const { container, getByTestId } = render(<Loading.ReleaseBody />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
