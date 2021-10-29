import React from "react";
import reactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchSection from "../index";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";

afterEach(cleanup);

const NewSearchInput = () => (
  <Provider store={store}>
    <SearchSection/>
  </Provider>
)

it("render component without crashes", () => {
  const div = document.createElement("div");
  reactDOM.render(<NewSearchInput />, div);
  reactDOM.unmountComponentAtNode(div);
});


//mock test input

// const setup = () => {
//   const utils = render(<NewSearchInput/>);
//   const input = utils.getByPlaceholderText('Search by tag name');
//   return { input, utils };
// };

it("test input text value", () => {
  const { getByPlaceholderText } = render(<NewSearchInput/>);
  const inputElement = getByPlaceholderText('Search by tag name');
  fireEvent.change(inputElement, { target: { value: "abcd" } });
  expect(inputElement.value).toBe("abcd");
});


it("Matches Snapshoot 1", () => {
  const tree = renderer.create(<NewSearchInput/>).toJSON();
  expect(tree).toMatchSnapshot();
})