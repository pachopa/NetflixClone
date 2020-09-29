import React from "react";
import { render } from "@testing-library/react";
import { Feature, feature } from "../../components";

describe("<Feature />", () => {
  it("renders the <Feature /> with populated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with just a title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes.</Feature.Title>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes.")).toBeTruthy();
    expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with just a subtitle", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText("Unlimited films, TV programmes.")).toBeFalsy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
