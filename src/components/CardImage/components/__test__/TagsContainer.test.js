import React from "react";
import reactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import TagContainer from "../TagsContainer";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render without crashing", () => {
  const div = document.createElement("div");
  reactDOM.render(<TagContainer tagArray={["super", "good", "cool"]} />, div);
  reactDOM.unmountComponentAtNode(div);
});

it("render component correctly", () => {
  const { getByTestId } = render(<TagContainer tagArray={["super", "cool"]} />);
  expect(getByTestId("tags-container")).toHaveTextContent(
    'super', 'cool'
  );
});


it("to matches snapshot 1", () => {
  const tree = renderer.create(<TagContainer tagArray={["super", "cool", "okay"]}/>);
  expect(tree).toMatchSnapshot();
})