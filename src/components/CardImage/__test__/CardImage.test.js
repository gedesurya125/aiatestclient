import React from "react";
import reactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import CardImage from "../index";

const mockImageDetails = {
  title: "Mmm",
  link: "https://www.flickr.com/photos/193445720@N03/51634513532/",
  media: {
    m: "https://live.staticflickr.com/65535/51634513532_a11d09dfa7_m.jpg",
    date_taken: "2021-10-28T15:42:46-08:00",
  },
  description: ` <p><a href="https://www.flickr.com/people/193445720@N03/">oitilkte61</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/193445720@N03/51634513532/" title="Mmm"><img src="https://live.staticflickr.com/65535/51634513532_a11d09dfa7_m.jpg" width="180" height="240" alt="Mmm" /></a></p> `,
  published: "2021-10-28T14:44:27Z",
  author: 'nobody@flickr.com ("oitilkte61")',
  author_id: "193445720@N03",
  tags: "",
};

afterEach(cleanup)

it("render component without crashing", () => {
  const div = document.createElement("div");
  reactDOM.render(<CardImage imageDetails={mockImageDetails}/>, div);
  reactDOM.unmountComponentAtNode(div);
});

it("render component properly with action button show more clicked", () => {
  const {getByTestId } = render(<CardImage imageDetails={mockImageDetails}/>);
  fireEvent.click(getByTestId('show-more-button'));
  expect(getByTestId("card-description")).not.toBeEmptyDOMElement();
});

it("Matches snapshot 1", () => {
  const tree = renderer.create(<CardImage imageDetails={mockImageDetails}/>).toJSON();
  expect(tree).toMatchSnapshot();
})
