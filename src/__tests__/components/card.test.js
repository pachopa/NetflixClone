import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Card, Player } from "../../components";

const category = "series";
const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        description:
          "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
        docId: "4EJIJnqkMnTj0Tgw0x7N",
        genre: "documentaries",
        id: "43635abd-0c4a-4eca-b16d-e0fbf4438f7f",
        maturity: "18",
        slug: "tiger-king",
        title: "Tiger King",
      },
    ],
  },
  {
    title: "Feel Good",
    data: [
      {
        description:
          "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
        docId: "IcwoMop5isJBgP6BLGtp",
        genre: "feel-good",
        id: "52083097-811a-4183-a4d3-4043b7a19b0a",
        maturity: "0",
        title: "Juno",
        slug: "juno",
      },
    ],
  },
];

describe("<Card />", () => {
  it("renders the <Card /> with populated data", () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText("Documentaries")).toBeTruthy();
    expect(getByText("Tiger King")).toBeTruthy();
    expect(
      getByText(
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters."
      )
    ).toBeTruthy();
    expect(getByText("Feel Good")).toBeTruthy();
    expect(getByText("Juno")).toBeTruthy();
    expect(
      getByText(
        "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected."
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Card /> and toggles the card Feature", () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText("18")).toBeFalsy();
    fireEvent.click(getByTestId("tiger-king-item-feature"));
    expect(queryByText("18")).toBeTruthy();

    fireEvent.click(getByAltText("Close"));
    expect(queryByText("18")).toBeFalsy();

    expect(queryByText("PG")).toBeFalsy();
    fireEvent.click(getByTestId("juno-item-feature"));
    expect(queryByText("PG")).toBeTruthy();

    fireEvent.click(getByAltText("Close"));
    expect(queryByText("PG")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
