import React from 'react';
import reactDOM from 'react-dom';
import {render, cleanup, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import LogoSection from '../index';

afterEach(cleanup);

it('render without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(<LogoSection/>, div);
  reactDOM.unmountComponentAtNode(div);
})

it('render component properly', () => {
  const {getByTestId} = render(<LogoSection/>);
  const container = getByTestId('logo-section');
  const imageTag = getByTestId('image');
  expect(container).toContainElement(imageTag);
  expect(imageTag).toHaveAttribute('src', expect.stringContaining('logo'))
})

it('Matcher snapshot 1', () => {
  const tree = renderer.create(<LogoSection/>).toJSON();
  expect(tree).toMatchSnapshot();
})

