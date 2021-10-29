import React from "react";
import ReactDOM from "react-dom";
import HideOnScroll from "../index";
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';


afterEach(cleanup);
it("render without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<HideOnScroll><p>Some Text</p></HideOnScroll>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render HideOnScroll component correctly", () => {
  const {getByTestId} = render(<HideOnScroll><p>Some Text</p></HideOnScroll>);
  expect(getByTestId('hide-on-scroll')).toContainHTML('<p data-testid="hide-on-scroll">Some Text</p>');
})

it("render HideOnScroll component correctly with text", () => {
  const {getByTestId} = render(<HideOnScroll><p></p></HideOnScroll>);
  expect(getByTestId('hide-on-scroll')).not.toHaveAttribute();
})

it("Matches snapshot 1", () => {
  const tree = renderer.create(<HideOnScroll><p></p></HideOnScroll>).toJSON();
  expect(tree).toMatchSnapshot();
})

it("Matches snapshot 2", () => {
  const tree = renderer.create(<HideOnScroll><div></div></HideOnScroll>).toJSON();
  expect(tree).toMatchSnapshot();
})


