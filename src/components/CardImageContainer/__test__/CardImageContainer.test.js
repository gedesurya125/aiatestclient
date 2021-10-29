import React from "react";
import reactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CardImageContainer from "../index";

const props = {
  imageData: [
    {
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
    },
  ],
  page: 1,
  pageSize: 5,
  loading: false,
};

afterEach(cleanup);
it("render without crashing", () => {
  const div = document.createElement("div");
  reactDOM.render(<CardImageContainer {...props}></CardImageContainer>, div);
  reactDOM.unmountComponentAtNode(div);
});

it("render component correctly", ()=> {
  const {getByTestId} = render(<CardImageContainer/>)
  expect(getByTestId('card-image-container')).toContainHTML('<div class="MuiBox-root css-lxny94" data-testid="card-image-container"><p class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root">Data not found</p></div>')
})

it("render component correctly with loading", ()=> {
  const {getByTestId} = render(<CardImageContainer loading={true}/>)
  expect(getByTestId('card-image-container')).toContainHTML('<div class="MuiBox-root css-lxny94" data-testid="card-image-container"><p class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root">Loading...</p></div>')
})


it("ensure component not with emptyDOMElement", ()=> {
  const {getByTestId} = render(<CardImageContainer {...props}/>)
  expect(getByTestId('card-image-container')).not.toBeEmptyDOMElement();
})

it("Matches snapshot 1", () => {
  const tree =renderer.create(<CardImageContainer {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
})